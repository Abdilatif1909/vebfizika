from tempfile import TemporaryDirectory

from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase, override_settings
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from accounts.models import User
from subjects.models import Course, Enrollment, Subject
from theory.models import TheoryLesson, TheoryTopic


class TheoryLessonFileTests(TestCase):
    def setUp(self):
        self.media_dir = TemporaryDirectory()
        self.addCleanup(self.media_dir.cleanup)
        self.settings_override = override_settings(MEDIA_ROOT=self.media_dir.name, DEBUG=False)
        self.settings_override.enable()
        self.addCleanup(self.settings_override.disable)
        self.client = APIClient()
        self.subject = Subject.objects.create(title="Physics", slug="physics")
        self.topic = TheoryTopic.objects.create(subject=self.subject, title="Theory", slug="theory")

    def create_lesson(self, name, *, published=True, course=None, author=None):
        lesson = TheoryLesson.objects.create(
            subject=self.subject,
            course=course,
            topic=self.topic,
            author=author,
            title=name,
            slug=f"lesson-{TheoryLesson.objects.count() + 1}",
            content="Synthetic test lesson",
            published=published,
        )
        lesson.attachment.save(name, SimpleUploadedFile(name, b"sample pdf"), save=True)
        return lesson

    def test_public_pdf_api_url_and_inline_or_download_headers_work_with_debug_false(self):
        lesson = self.create_lesson("Fizika o'zbek.pdf")
        response = self.client.get(reverse("theorylesson-list"))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response["Cache-Control"], "private, no-store")
        item = response.data["results"][0]
        self.assertIn(f"/api/theory-lessons/{lesson.pk}/file/", item["attachment"])
        self.assertNotIn("/media/", item["attachment"])
        self.assertTrue(item["attachment_available"])

        preview = self.client.get(reverse("theory_lesson_file", kwargs={"pk": lesson.pk}))
        self.addCleanup(preview.close)
        self.assertEqual(preview.status_code, status.HTTP_200_OK)
        self.assertTrue(preview["Content-Disposition"].startswith("inline;"))
        self.assertEqual(b"".join(preview.streaming_content), b"sample pdf")

        download = self.client.get(reverse("theory_lesson_file", kwargs={"pk": lesson.pk}) + "?download=1")
        self.addCleanup(download.close)
        self.assertTrue(download["Content-Disposition"].startswith("attachment;"))

    def test_private_or_unpublished_theory_file_is_not_listed_or_served_to_anonymous_user(self):
        student = User.objects.create_user(username="student", password="secret", role=User.Role.STUDENT)
        course = Course.objects.create(subject=self.subject, title="Private", slug="private")
        lesson = self.create_lesson("Private.pdf", course=course, author=student)
        url = reverse("theory_lesson_file", kwargs={"pk": lesson.pk})

        self.assertEqual(self.client.get(url).status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(self.client.get(reverse("theorylesson-list")).data["count"], 0)

    def test_student_needs_active_enrollment_for_course_theory_file(self):
        teacher = User.objects.create_user(username="teacher", password="secret", role=User.Role.TEACHER)
        student = User.objects.create_user(username="student", password="secret", role=User.Role.STUDENT)
        course = Course.objects.create(subject=self.subject, teacher=teacher, title="Course", slug="course")
        lesson = self.create_lesson("Course.pdf", course=course)
        url = reverse("theory_lesson_file", kwargs={"pk": lesson.pk})

        self.client.force_authenticate(student)
        self.assertEqual(self.client.get(url).status_code, status.HTTP_404_NOT_FOUND)
        Enrollment.objects.create(user=student, course=course, status=Enrollment.Status.ACTIVE)
        allowed = self.client.get(url)
        self.addCleanup(allowed.close)
        self.assertEqual(allowed.status_code, status.HTTP_200_OK)
