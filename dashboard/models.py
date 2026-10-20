from django.conf import settings
from django.db import models

from accounts.models import BaseModel


class Announcement(BaseModel):
    class Audience(models.TextChoices):
        ALL = "all", "All"
        TEACHERS = "teachers", "Teachers"
        STUDENTS = "students", "Students"
        GUESTS = "guests", "Guests"

    title = models.CharField(max_length=220)
    slug = models.SlugField(max_length=260, unique=True, blank=True, null=True)
    body = models.TextField()
    subject = models.ForeignKey("subjects.Subject", on_delete=models.SET_NULL, related_name="announcements", blank=True, null=True)
    audience = models.CharField(max_length=20, choices=Audience.choices, default=Audience.ALL)
    starts_at = models.DateTimeField(blank=True, null=True)
    ends_at = models.DateTimeField(blank=True, null=True)
    pinned = models.BooleanField(default=False)
    attachment = models.FileField(upload_to="announcements/files/", blank=True, null=True)

    class Meta:
        ordering = ["-pinned", "-created_at"]

    def __str__(self):
        return self.title


class DashboardMetric(BaseModel):
    key = models.SlugField(max_length=120, unique=True)
    label = models.CharField(max_length=180)
    value = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    unit = models.CharField(max_length=40, blank=True)
    metadata = models.JSONField(default=dict, blank=True)

    class Meta:
        ordering = ["label"]

    def __str__(self):
        return self.label

    @classmethod
    def refresh_metrics(cls):
        from accounts.models import User
        from documents.models import Document
        from practical.models import PracticalSubmission
        from subjects.models import Certificate, Course, Enrollment, Subject
        from testsystem.models import Test, TestAttempt
        from videos.models import Video

        metrics = {
            "subjects": ("Subjects", Subject.objects.filter(is_active=True).count(), "items"),
            "courses": ("Courses", Course.objects.filter(is_active=True).count(), "items"),
            "enrollments": ("Enrollments", Enrollment.objects.filter(is_active=True).count(), "students"),
            "documents": ("Documents", Document.objects.filter(is_active=True).count(), "files"),
            "videos": ("Videos", Video.objects.filter(is_active=True).count(), "lessons"),
            "tests": ("Tests", Test.objects.filter(is_active=True).count(), "assessments"),
            "passed_tests": ("Passed tests", TestAttempt.objects.filter(passed=True).count(), "attempts"),
            "submissions": ("Practical submissions", PracticalSubmission.objects.filter(is_active=True).count(), "works"),
            "certificates": ("Certificates", Certificate.objects.filter(is_active=True).count(), "issued"),
            "users": ("Users", User.objects.filter(is_active=True).count(), "accounts"),
        }

        for key, (label, value, unit) in metrics.items():
            cls.objects.update_or_create(
                key=key,
                defaults={"label": label, "value": value, "unit": unit, "metadata": {"auto_calculated": True}},
            )
        return cls.objects.filter(key__in=metrics.keys())


class ActivityLog(BaseModel):
    actor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name="activity_logs", blank=True, null=True)
    action = models.CharField(max_length=180)
    target_type = models.CharField(max_length=120, blank=True)
    target_id = models.CharField(max_length=120, blank=True)
    metadata = models.JSONField(default=dict, blank=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.action


class StudentActivityAnalytics(BaseModel):
    class ActivityType(models.TextChoices):
        VIDEO = "video", "Video"
        TEST = "test", "Test"
        SIMULATION = "simulation", "Simulation"
        THEORY = "theory", "Theory"
        DOCUMENT = "document", "Document"

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="student_analytics")
    activity_type = models.CharField(max_length=20, choices=ActivityType.choices)
    resource_id = models.CharField(max_length=120, blank=True)
    resource_title = models.CharField(max_length=255, blank=True)
    score_percentage = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    xp_points = models.PositiveIntegerField(default=0)
    metadata = models.JSONField(default=dict, blank=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["user", "activity_type"]),
            models.Index(fields=["user", "created_at"]),
        ]

    def __str__(self):
        return f"{self.user} - {self.activity_type}"
