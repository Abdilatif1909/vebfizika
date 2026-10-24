import csv
import os
import secrets
import tempfile
from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction

from accounts.models import User


DEMO_MARKER = "[demo-student]"
USERNAME_PREFIX = "demo_student_"


class Command(BaseCommand):
    help = "Create idempotent synthetic student accounts and save credentials locally."

    def add_arguments(self, parser):
        parser.add_argument("--count", type=int, default=400, help="Number of deterministic demo accounts (default: 400).")
        parser.add_argument("--credentials-file", help="Private CSV output path; defaults to BASE_DIR/.local/demo-students.csv.")
        parser.add_argument("--confirm", action="store_true", help="Confirm that this is an isolated local/test database.")

    def handle(self, *args, **options):
        count = options["count"]
        if count < 1:
            raise CommandError("--count must be at least 1.")
        if not options["confirm"]:
            raise CommandError("Pass --confirm only when intentionally using an isolated local/test database.")
        if not settings.DEBUG:
            raise CommandError("Refusing to create demo accounts while DEBUG=False; this command is local/test only.")

        credentials_path = Path(options["credentials_file"] or (Path(settings.BASE_DIR) / ".local" / "demo-students.csv")).expanduser().resolve()
        existing_credentials = self.read_credentials(credentials_path)
        targets = [
            (f"{USERNAME_PREFIX}{number:04d}", f"demo-student-{number:04d}@example.invalid", number)
            for number in range(1, count + 1)
        ]

        usernames = [username for username, _, _ in targets]
        emails = [email for _, email, _ in targets]
        existing_by_username = {
            user.username: user
            for user in User.objects.filter(username__in=usernames)
        }
        occupied_emails = set(User.objects.filter(email__in=emails).values_list("email", flat=True))

        conflicts = []
        for username, email, _ in targets:
            user = existing_by_username.get(username)
            if user and (DEMO_MARKER not in user.bio or user.role != User.Role.STUDENT):
                conflicts.append(username)
            elif not user and email in occupied_emails:
                conflicts.append(f"{username} (email already used)")
        if conflicts:
            raise CommandError("Existing non-demo account conflicts: " + ", ".join(conflicts[:20]))

        created_count = 0
        credential_rows = dict(existing_credentials)
        with transaction.atomic():
            for username, email, number in targets:
                if username in existing_by_username:
                    continue
                password = secrets.token_urlsafe(32)
                user = User(
                    username=username,
                    email=email,
                    first_name="Demo",
                    last_name=f"Student {number:04d}",
                    role=User.Role.STUDENT,
                    is_active=True,
                    bio=f"{DEMO_MARKER} Synthetic test account {number:04d}.",
                )
                user.set_password(password)
                user.save(force_insert=True)
                credential_rows[username] = password
                created_count += 1

            self.write_credentials(credentials_path, credential_rows)

        self.stdout.write(self.style.SUCCESS(f"Demo students present: {len(targets)}; newly created: {created_count}."))
        self.stdout.write(f"Private credentials file: {credentials_path}")
        self.stdout.write("Passwords are not printed. Protect and do not commit the credentials file.")

    def read_credentials(self, path):
        if not path.exists():
            return {}
        try:
            with path.open("r", encoding="utf-8", newline="") as stream:
                reader = csv.DictReader(stream)
                if reader.fieldnames != ["username", "password"]:
                    raise CommandError(f"Unexpected credentials CSV format: {path}")
                return {row["username"]: row["password"] for row in reader if row.get("username") and row.get("password")}
        except OSError as exc:
            raise CommandError(f"Cannot read credentials file {path}: {exc}") from exc

    def write_credentials(self, path, credentials):
        try:
            path.parent.mkdir(parents=True, exist_ok=True)
            descriptor, temporary_name = tempfile.mkstemp(prefix=f"{path.name}.", suffix=".tmp", dir=path.parent)
            try:
                with os.fdopen(descriptor, "w", encoding="utf-8", newline="") as stream:
                    writer = csv.writer(stream)
                    writer.writerow(["username", "password"])
                    for username in sorted(credentials):
                        writer.writerow([username, credentials[username]])
                try:
                    os.chmod(temporary_name, 0o600)
                except OSError:
                    pass
                os.replace(temporary_name, path)
                try:
                    os.chmod(path, 0o600)
                except OSError:
                    pass
            finally:
                if os.path.exists(temporary_name):
                    os.unlink(temporary_name)
        except OSError as exc:
            raise CommandError(f"Cannot write credentials file {path}: {exc}") from exc
