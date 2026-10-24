from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError

from accounts.models import User
from dashboard.models import Announcement
from documents.models import Document
from laboratory.models import LabReport
from mobileapps.models import MobileApp, MobileAppRelease
from practical.models import PracticalAssignment, PracticalSubmission
from simulations.models import Simulation
from subjects.models import Certificate, Course, Subject
from testsystem.models import Test
from theory.models import TheoryLesson
from videos.models import Video


FILE_FIELDS = (
    (User, "avatar"),
    (Announcement, "attachment"),
    (Document, "file"),
    (LabReport, "attachment"),
    (LabReport, "report_file"),
    (MobileApp, "icon"),
    (MobileApp, "screenshot"),
    (MobileAppRelease, "binary"),
    (PracticalAssignment, "attachment"),
    (PracticalSubmission, "file"),
    (Simulation, "resource_file"),
    (Simulation, "thumbnail"),
    (Certificate, "certificate_file"),
    (Subject, "icon"),
    (Course, "cover"),
    (Test, "resource_file"),
    (TheoryLesson, "attachment"),
    (Video, "video_file"),
    (Video, "thumbnail"),
)


class Command(BaseCommand):
    help = "Read-only audit of stored file references against configured media storage."

    def add_arguments(self, parser):
        parser.add_argument(
            "--source",
            default=str(Path(settings.BASE_DIR) / "materiallar"),
            help="Optional materiallar directory to count; never imports or changes it.",
        )
        parser.add_argument("--no-source", action="store_true", help="Skip counting the source directory.")
        parser.add_argument("--fail-on-missing", action="store_true", help="Exit with an error if any stored file is missing.")

    def handle(self, *args, **options):
        checked = 0
        missing = []
        for model, field_name in FILE_FIELDS:
            field = model._meta.get_field(field_name)
            for instance in model.objects.exclude(**{field_name: ""}).iterator():
                stored_file = getattr(instance, field_name)
                if not stored_file or not stored_file.name:
                    continue
                checked += 1
                try:
                    exists = stored_file.storage.exists(stored_file.name)
                except Exception as exc:  # storage backend errors should be reported, not hidden
                    missing.append((model, instance.pk, field_name, stored_file.name, f"storage error: {exc}"))
                    continue
                if not exists:
                    missing.append((model, instance.pk, field_name, stored_file.name, "missing"))

        self.stdout.write(f"MEDIA_ROOT: {settings.MEDIA_ROOT}")
        self.stdout.write(f"Database file references checked: {checked}")
        self.stdout.write(f"Missing/unavailable files: {len(missing)}")
        for model, pk, field_name, name, reason in missing:
            self.stdout.write(f"{model._meta.label} pk={pk} field={field_name} name={name} [{reason}]")

        if not options["no_source"]:
            source_root = Path(options["source"]).expanduser()
            if source_root.exists() and source_root.is_dir():
                source_files = [path for path in source_root.rglob("*") if path.is_file()]
                self.stdout.write(f"Source directory (count only): {source_root}")
                self.stdout.write(f"Source files: {len(source_files)}")
                self.stdout.write(f"Source PDFs: {sum(path.suffix.lower() == '.pdf' for path in source_files)}")
            else:
                self.stdout.write(f"Source directory not present (count skipped): {source_root}")

        if options["fail_on_missing"] and missing:
            raise CommandError(f"Found {len(missing)} missing or unavailable database file reference(s).")
