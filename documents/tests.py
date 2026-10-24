from io import StringIO
from pathlib import Path
from tempfile import TemporaryDirectory

from django.core.files.uploadedfile import SimpleUploadedFile
from django.core.management import call_command
from django.test import TestCase, override_settings
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from accounts.models import User
from documents.models import Document, DocumentCategory
from common.management.commands.import_materials import Command as ImportMaterialsCommand
from subjects.models import Course, Enrollment, Subject


class DocumentFileTests(TestCase):
    def setUp(self):
        self.media_dir = TemporaryDirectory()
        self.addCleanup(self.media_dir.cleanup)
        self.settings_override = override_settings(MEDIA_ROOT=self.media_dir.name, DEBUG=False)
        self.settings_override.enable()
        self.addCleanup(self.settings_override.disable)
        self.client = APIClient()

    def create_document(self, name, access_level=Document.AccessLevel.PUBLIC, course=None):
        document = Document.objects.create(
            title=name,
            slug=f"document-{Document.objects.count() + 1}",
            access_level=access_level,
            course=course,
        )
        document.file.save(name, SimpleUploadedFile(name, b"sample document"), save=True)
        return document

    def test_api_returns_encoded_protected_url_and_missing_file_state(self):
        document = self.create_document("Darslik o'zbek.ppt")
        response = self.client.get(reverse("document-list"))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response["Cache-Control"], "private, no-store")
        self.assertIn("Authorization", response["Vary"])
        item = response.data["results"][0]
        self.assertIn(f"/api/documents/{document.pk}/file/", item["file"])
        self.assertIn("filename=", item["file"])
        self.assertNotIn("/media/", item["file"])
        self.assertTrue(item["file_available"])

        document.file.storage.delete(document.file.name)
        response = self.client.get(reverse("document-list"))
        self.assertFalse(response.data["results"][0]["file_available"])
        missing = self.client.get(reverse("document_file", kwargs={"pk": document.pk}))
        self.assertEqual(missing.status_code, status.HTTP_404_NOT_FOUND)
        self.assertIn("Fayl serverda mavjud emas", missing.data["detail"])

    def test_ppt_is_delivered_as_attachment_with_safe_filename(self):
        document = self.create_document("Darslik o'zbek.ppt")
        response = self.client.get(reverse("document_file", kwargs={"pk": document.pk}))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.addCleanup(response.close)
        self.assertTrue(response["Content-Disposition"].startswith("attachment;"))
        self.assertEqual(response["X-Content-Type-Options"], "nosniff")
        self.assertEqual(response["Cache-Control"], "private, no-store")
        self.assertEqual(b"".join(response.streaming_content), b"sample document")

    def test_document_visibility_and_file_download_require_access(self):
        subject = Subject.objects.create(title="Physics", slug="physics")
        course = Course.objects.create(subject=subject, title="Course", slug="course", published=True)
        document = self.create_document("Restricted.pdf", Document.AccessLevel.ENROLLED, course)

        self.assertEqual(self.client.get(reverse("document-list")).data["count"], 0)
        self.assertEqual(
            self.client.get(reverse("document_file", kwargs={"pk": document.pk})).status_code,
            status.HTTP_404_NOT_FOUND,
        )
        student = User.objects.create_user(username="student", password="secret", role=User.Role.STUDENT)
        self.client.force_authenticate(student)
        self.assertEqual(self.client.get(reverse("document-list")).data["count"], 0)
        self.assertEqual(
            self.client.get(reverse("document_file", kwargs={"pk": document.pk})).status_code,
            status.HTTP_404_NOT_FOUND,
        )

        Enrollment.objects.create(user=student, course=course, status=Enrollment.Status.ACTIVE)
        allowed = self.client.get(reverse("document_file", kwargs={"pk": document.pk}))
        self.addCleanup(allowed.close)
        self.assertEqual(allowed.status_code, status.HTTP_200_OK)

    def test_anonymous_bulk_download_contains_only_public_documents(self):
        self.create_document("Public.pdf")
        subject = Subject.objects.create(title="Science", slug="science")
        course = Course.objects.create(subject=subject, title="Private course", slug="private-course")
        self.create_document("Private.pdf", Document.AccessLevel.ENROLLED, course)

        response = self.client.get(reverse("documents_bulk_download"))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("Public.pdf", response.content.decode("latin1"))
        self.assertNotIn("Private.pdf", response.content.decode("latin1"))

    def test_read_only_audit_reports_missing_database_file_reference(self):
        document = Document.objects.create(title="Missing", slug="missing", file="documents/missing.ppt")
        output = StringIO()

        call_command("audit_material_files", "--no-source", stdout=output)

        self.assertIn(f"Document pk={document.pk} field=file name=documents/missing.ppt [missing]", output.getvalue())

    def test_import_helper_repairs_missing_file_without_changing_its_database_path(self):
        stored_name = "documents/files/documents/imported/repair-file.ppt"
        source_dir = Path(self.media_dir.name) / "source"
        source_dir.mkdir()
        source = source_dir / "Repair File.ppt"
        source.write_bytes(b"restored presentation")
        importer = ImportMaterialsCommand()
        relative_path = Path("Darslik") / source.name
        subject = Subject.objects.create(title="Physics", slug="physics")
        category = DocumentCategory.objects.create(name="Darslik", slug="darslik")
        slug = importer.build_slug("document", relative_path)
        document = Document.objects.create(
            title="Keep this title",
            slug=slug,
            description="Keep this description",
            access_level=Document.AccessLevel.ENROLLED,
            file=stored_name,
        )

        created = importer.import_document_with_category(
            source,
            relative_path,
            {"subject": subject, "categories": {"Darslik": category}},
            "Darslik",
        )

        self.assertFalse(created)
        document.refresh_from_db()
        self.assertEqual(document.title, "Keep this title")
        self.assertEqual(document.description, "Keep this description")
        self.assertEqual(document.access_level, Document.AccessLevel.ENROLLED)
        self.assertEqual(document.file.name, stored_name)
        self.assertTrue(document.file.storage.exists(document.file.name))

    def test_material_import_is_idempotent_and_preserves_existing_access_metadata(self):
        source_root = Path(self.media_dir.name) / "source-tree"
        source_dir = source_root / "Darslik"
        source_dir.mkdir(parents=True)
        source_file = source_dir / "O'zbek fizika.pdf"
        source_file.write_bytes(b"sample imported PDF")
        output = StringIO()

        call_command("import_materials", "--source", str(source_root), stdout=output, verbosity=0)
        document = Document.objects.get()
        self.assertTrue(document.file.storage.exists(document.file.name))
        document.title = "Protected custom title"
        document.access_level = Document.AccessLevel.ENROLLED
        document.save()

        repeated_output = StringIO()
        call_command("import_materials", "--source", str(source_root), stdout=repeated_output, verbosity=0)

        document.refresh_from_db()
        self.assertEqual(Document.objects.count(), 1)
        self.assertEqual(document.title, "Protected custom title")
        self.assertEqual(document.access_level, Document.AccessLevel.ENROLLED)
        self.assertIn("Existing checked: 1", repeated_output.getvalue())
