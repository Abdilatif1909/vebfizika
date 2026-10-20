import hashlib
import re
from pathlib import Path

from django.conf import settings
from django.core.files import File
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from django.utils.text import slugify

from dashboard.models import ActivityLog, Announcement, DashboardMetric
from documents.models import Document, DocumentCategory
from practical.models import PracticalAssignment
from simulations.models import Simulation
from subjects.models import Course, Subject
from testsystem.models import Test
from theory.models import TheoryLesson, TheoryTopic
from videos.models import Video


class Command(BaseCommand):
    help = "Import educational materials from the materiallar folder into Django media storage and database models."

    supported_extensions = {
        ".pdf",
        ".docx",
        ".doc",
        ".ppt",
        ".pptx",
        ".mp4",
        ".avi",
        ".mov",
        ".jpg",
        ".png",
        ".txt",
        ".html",
        ".zip",
        ".swf",
        ".exe",
    }
    video_extensions = {".mp4", ".avi", ".mov"}
    image_extensions = {".jpg", ".png"}
    section_orders = {
        "Bosh sahifa": 1,
        "Dars ishlanma": 2,
        "Darslik": 3,
        "Interfaol o'yin": 4,
        "Ko'rgazmali qurol": 5,
        "Masalalar yechimlari": 6,
        "Qiziqarli fizika": 7,
        "Taqdimotlar": 8,
        "Test": 9,
    }

    def add_arguments(self, parser):
        parser.add_argument(
            "--source",
            default=str(Path(settings.BASE_DIR) / "materiallar"),
            help="Source folder containing educational materials.",
        )

    def handle(self, *args, **options):
        source_root = Path(options["source"]).resolve()
        if not source_root.exists():
            raise CommandError(f"Material source folder not found: {source_root}")
        if not source_root.is_dir():
            raise CommandError(f"Material source path is not a directory: {source_root}")

        self.stdout.write(self.style.NOTICE(f"Scanning materials in {source_root}"))
        context = self.bootstrap_context()
        summary = {"imported": 0, "updated": 0, "skipped": 0, "errors": 0}
        skipped = []

        for file_path in sorted(path for path in source_root.rglob("*") if path.is_file()):
            relative_path = file_path.relative_to(source_root)
            extension = file_path.suffix.lower()
            if extension not in self.supported_extensions:
                summary["skipped"] += 1
                skipped.append(str(relative_path))
                self.stdout.write(self.style.WARNING(f"Skipping unsupported file: {relative_path}"))
                continue

            try:
                created = self.import_file(source_root, file_path, relative_path, context)
                summary["imported" if created else "updated"] += 1
            except Exception as exc:  # noqa: BLE001
                summary["errors"] += 1
                self.stderr.write(self.style.ERROR(f"Failed to import {relative_path}: {exc}"))

        DashboardMetric.refresh_metrics()
        ActivityLog.objects.create(
            action="Bulk material import completed",
            target_type="material_import",
            target_id=str(summary["imported"] + summary["updated"]),
            metadata={"summary": summary, "skipped": skipped[:50], "source": str(source_root)},
        )

        self.stdout.write(self.style.SUCCESS("Material import finished."))
        self.stdout.write(
            self.style.SUCCESS(
                f"Imported: {summary['imported']} | Updated: {summary['updated']} | Skipped: {summary['skipped']} | Errors: {summary['errors']}"
            )
        )

    def bootstrap_context(self):
        subject = Subject.objects.filter(title__iexact="Fizika").first()
        if not subject:
            subject = Subject.objects.create(
                title="Fizika",
                slug=self.ensure_unique_slug(Subject, "fizika"),
                description="Imported educational resources for the physics platform.",
                order=0,
            )

        shared_course, _ = Course.objects.get_or_create(
            slug="imported-materials-course",
            defaults={
                "subject": subject,
                "title": "Imported materials course",
                "description": "Shared course used for imported practical and test resources.",
                "published": True,
            },
        )
        if shared_course.subject_id != subject.id or not shared_course.published:
            shared_course.subject = subject
            shared_course.published = True
            shared_course.description = shared_course.description or "Shared course used for imported practical and test resources."
            shared_course.save(update_fields=["subject", "published", "description", "updated_at"])

        categories = {
            "Darslik": self.get_or_create_category("Darslik", "Imported textbooks and manuals."),
            "Ko'rgazmali qurol": self.get_or_create_category("Ko'rgazmali qurol", "Imported visual learning aids."),
            "Taqdimotlar": self.get_or_create_category("Taqdimotlar", "Imported presentations and slides."),
            "Bosh sahifa": self.get_or_create_category("Bosh sahifa", "Homepage attachments and author materials."),
        }
        return {"subject": subject, "shared_course": shared_course, "categories": categories}

    def get_or_create_category(self, name, description):
        category = DocumentCategory.objects.filter(name__iexact=name).first()
        if category:
            if description and not category.description:
                category.description = description
                category.save(update_fields=["description", "updated_at"])
            return category
        return DocumentCategory.objects.create(
            name=name,
            slug=self.ensure_unique_slug(DocumentCategory, slugify(name) or "category"),
            description=description,
        )

    def import_file(self, source_root, file_path, relative_path, context):
        top_level = relative_path.parts[0] if len(relative_path.parts) > 1 else relative_path.name
        if relative_path.name.lower() == "muallif haqida.docx":
            return self.import_announcement(file_path, relative_path, context, pinned=True)

        handlers = {
            "Bosh sahifa": self.import_announcement,
            "Dars ishlanma": self.import_theory_lesson,
            "Darslik": self.import_document,
            "Interfaol o'yin": self.import_simulation,
            "Ko'rgazmali qurol": self.import_visual_document,
            "Masalalar yechimlari": self.import_practical_assignment,
            "Qiziqarli fizika": self.import_enrichment,
            "Taqdimotlar": self.import_presentation,
            "Test": self.import_test_resource,
        }
        handler = handlers.get(top_level)
        if not handler:
            raise CommandError(f"Unsupported top-level material section: {top_level}")
        return handler(file_path, relative_path, context)

    def import_announcement(self, file_path, relative_path, context, pinned=True):
        title = self.build_title(file_path)
        slug = self.build_slug("announcement", relative_path)
        defaults = {
            "title": title,
            "body": self.build_description(title, "Bosh sahifa", relative_path),
            "subject": context["subject"],
            "audience": Announcement.Audience.ALL,
            "starts_at": None,
            "ends_at": None,
            "pinned": pinned,
        }
        announcement, created = Announcement.objects.get_or_create(slug=slug, defaults={**defaults, "slug": slug})
        self.apply_defaults(announcement, defaults)
        self.attach_file(announcement, "attachment", file_path, relative_path, "announcements/imported")
        announcement.save()
        return created

    def import_theory_lesson(self, file_path, relative_path, context):
        title = self.build_title(file_path)
        topic = self.get_theory_topic(context["subject"], relative_path)
        slug = self.build_slug("theory", relative_path)
        defaults = {
            "subject": context["subject"],
            "course": None,
            "topic": topic,
            "module": None,
            "author": None,
            "title": title,
            "content": self.build_description(title, "Dars ishlanma", relative_path),
            "estimated_minutes": self.estimate_minutes(file_path),
            "order": self.estimate_order(relative_path),
            "published": True,
        }
        lesson, created = TheoryLesson.objects.get_or_create(slug=slug, defaults={**defaults, "slug": slug})
        self.apply_defaults(lesson, defaults)
        self.attach_file(lesson, "attachment", file_path, relative_path, "theory/imported")
        lesson.save()
        return created

    def import_document(self, file_path, relative_path, context):
        return self.import_document_with_category(file_path, relative_path, context, "Darslik")

    def import_visual_document(self, file_path, relative_path, context):
        return self.import_document_with_category(file_path, relative_path, context, "Ko'rgazmali qurol")

    def import_presentation(self, file_path, relative_path, context):
        return self.import_document_with_category(file_path, relative_path, context, "Taqdimotlar")

    def import_document_with_category(self, file_path, relative_path, context, category_name):
        title = self.build_title(file_path)
        slug = self.build_slug("document", relative_path)
        defaults = {
            "title": title,
            "description": self.build_description(title, category_name, relative_path),
            "category": context["categories"][category_name],
            "subject": context["subject"],
            "course": None,
            "module": None,
            "uploaded_by": None,
            "access_level": Document.AccessLevel.PUBLIC,
            "version": "imported",
        }
        document, created = Document.objects.get_or_create(slug=slug, defaults={**defaults, "slug": slug})
        self.apply_defaults(document, defaults)
        self.attach_file(document, "file", file_path, relative_path, "documents/imported")
        document.save()
        return created

    def import_simulation(self, file_path, relative_path, context):
        title = self.build_title(file_path)
        slug = self.build_slug("simulation", relative_path)
        defaults = {
            "subject": context["subject"],
            "course": None,
            "module": None,
            "title": title,
            "description": self.build_description(title, "Interfaol o'yin", relative_path),
            "embed_url": "",
            "launch_url": "",
            "config": {"imported": True, "original_path": str(relative_path).replace('\\', '/')},
            "published": True,
        }
        simulation, created = Simulation.objects.get_or_create(slug=slug, defaults={**defaults, "slug": slug})
        self.apply_defaults(simulation, defaults)
        self.attach_file(simulation, "resource_file", file_path, relative_path, "simulations/imported")
        if file_path.suffix.lower() in self.image_extensions and not simulation.thumbnail:
            self.attach_file(simulation, "thumbnail", file_path, relative_path, "simulations/thumbnails/imported")
        simulation.save()
        return created

    def import_practical_assignment(self, file_path, relative_path, context):
        title = self.build_title(file_path)
        slug = self.build_slug("practical", relative_path)
        defaults = {
            "subject": context["subject"],
            "course": context["shared_course"],
            "module": None,
            "teacher": None,
            "title": title,
            "instructions": self.build_description(title, "Masalalar yechimlari", relative_path),
            "due_at": None,
            "max_score": 100,
            "published": True,
        }
        assignment, created = PracticalAssignment.objects.get_or_create(slug=slug, defaults={**defaults, "slug": slug})
        self.apply_defaults(assignment, defaults)
        self.attach_file(assignment, "attachment", file_path, relative_path, "practical/imported")
        assignment.save()
        return created

    def import_enrichment(self, file_path, relative_path, context):
        if file_path.suffix.lower() in self.video_extensions:
            return self.import_video(file_path, relative_path, context, section_name="Qiziqarli fizika")
        return self.import_theory_enrichment(file_path, relative_path, context)

    def import_theory_enrichment(self, file_path, relative_path, context):
        title = self.build_title(file_path)
        topic = self.get_theory_topic(context["subject"], relative_path, fallback_name="Qiziqarli fizika")
        slug = self.build_slug("enrichment", relative_path)
        defaults = {
            "subject": context["subject"],
            "course": None,
            "topic": topic,
            "module": None,
            "author": None,
            "title": title,
            "content": self.build_description(title, "Qiziqarli fizika", relative_path),
            "estimated_minutes": self.estimate_minutes(file_path),
            "order": self.estimate_order(relative_path),
            "published": True,
        }
        lesson, created = TheoryLesson.objects.get_or_create(slug=slug, defaults={**defaults, "slug": slug})
        self.apply_defaults(lesson, defaults)
        self.attach_file(lesson, "attachment", file_path, relative_path, "theory/enrichment")
        lesson.save()
        return created

    def import_video(self, file_path, relative_path, context, section_name="Qiziqarli fizika"):
        title = self.build_title(file_path)
        slug = self.build_slug("video", relative_path)
        defaults = {
            "subject": context["subject"],
            "course": None,
            "module": None,
            "author": None,
            "title": title,
            "description": self.build_description(title, section_name, relative_path),
            "external_url": "",
            "duration_seconds": 0,
            "published": True,
        }
        video, created = Video.objects.get_or_create(slug=slug, defaults={**defaults, "slug": slug})
        self.apply_defaults(video, defaults)
        self.attach_file(video, "video_file", file_path, relative_path, "videos/imported")
        video.save()
        return created

    def import_test_resource(self, file_path, relative_path, context):
        title = self.build_title(file_path)
        slug = self.build_slug("test", relative_path)
        defaults = {
            "subject": context["subject"],
            "course": context["shared_course"],
            "module": None,
            "title": title,
            "description": self.build_description(title, "Test", relative_path),
            "duration_minutes": 30,
            "passing_score": 60,
            "published": True,
        }
        test, created = Test.objects.get_or_create(slug=slug, defaults={**defaults, "slug": slug})
        self.apply_defaults(test, defaults)
        self.attach_file(test, "resource_file", file_path, relative_path, "tests/imported")
        test.save()
        return created

    def get_theory_topic(self, subject, relative_path, fallback_name=None):
        if len(relative_path.parts) > 2:
            topic_name = self.build_topic_title(relative_path.parts[1])
        elif fallback_name:
            topic_name = fallback_name
        else:
            topic_name = relative_path.parts[0]
        slug = self.build_slug("topic", Path(topic_name))
        topic, created = TheoryTopic.objects.get_or_create(
            slug=slug,
            defaults={
                "subject": subject,
                "course": None,
                "title": topic_name,
                "summary": f"Imported topic for {topic_name} materials.",
                "order": self.section_orders.get(relative_path.parts[0], 99),
            },
        )
        if not created:
            changed = False
            if topic.subject_id != subject.id:
                topic.subject = subject
                changed = True
            if not topic.summary:
                topic.summary = f"Imported topic for {topic_name} materials."
                changed = True
            if changed:
                topic.save(update_fields=["subject", "summary", "updated_at"])
        return topic

    def build_title(self, file_path):
        title = file_path.stem.replace("_", " ").replace("-", " ")
        title = re.sub(r"\s+", " ", title).strip()
        return title[:240] or file_path.stem[:240]

    def build_topic_title(self, value):
        value = value.replace("_", " ").replace("-", " ")
        value = re.sub(r"\s+", " ", value).strip()
        return value[:220] or "Imported topic"

    def build_description(self, title, section, relative_path):
        nested = " / ".join(relative_path.parts[:-1])
        base = f"Imported automatically from the {section} folder."
        if nested:
            base = f"{base} Source location: {nested}."
        return f"{title}. {base} Original file: {relative_path.name}"

    def estimate_minutes(self, file_path):
        if file_path.suffix.lower() in {".ppt", ".pptx"}:
            return 12
        if file_path.suffix.lower() in {".pdf", ".doc", ".docx"}:
            return 18
        return 10

    def estimate_order(self, relative_path):
        return self.section_orders.get(relative_path.parts[0], 99)

    def build_slug(self, prefix, relative_path):
        digest = hashlib.sha1(str(relative_path).encode("utf-8")).hexdigest()[:10]
        if isinstance(relative_path, Path):
            name = relative_path.stem
        else:
            name = Path(relative_path).stem
        base = slugify(name) or prefix
        trimmed = base[: max(20, 240 - len(prefix) - len(digest) - 2)]
        return f"{prefix}-{trimmed}-{digest}"[:260]

    def ensure_unique_slug(self, model, base_slug):
        slug = base_slug[:240] or "item"
        candidate = slug
        counter = 2
        while model.objects.filter(slug=candidate).exists():
            suffix = f"-{counter}"
            candidate = f"{slug[: max(1, 240 - len(suffix))]}{suffix}"
            counter += 1
        return candidate

    def apply_defaults(self, instance, defaults):
        changed_fields = []
        for field_name, value in defaults.items():
            current = getattr(instance, field_name)
            if current != value:
                setattr(instance, field_name, value)
                changed_fields.append(field_name)
        if changed_fields:
            instance.save(update_fields=changed_fields + ["updated_at"])

    def attach_file(self, instance, field_name, file_path, relative_path, prefix):
        field = getattr(instance, field_name)
        if field and field.name:
            return
        storage_name = self.build_storage_name(prefix, file_path, relative_path)
        with file_path.open("rb") as stream:
            field.save(storage_name, File(stream), save=False)

    def build_storage_name(self, prefix, file_path, relative_path):
        digest = hashlib.sha1(str(relative_path).encode("utf-8")).hexdigest()[:10]
        stem = slugify(file_path.stem) or "file"
        return f"{prefix}/{stem[:80]}-{digest}{file_path.suffix.lower()}"
