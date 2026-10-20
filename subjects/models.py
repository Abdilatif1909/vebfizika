from django.conf import settings
from django.db import models

from accounts.models import BaseModel


class Subject(BaseModel):
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="owned_subjects",
        blank=True,
        null=True,
    )
    title = models.CharField(max_length=180, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    description = models.TextField(blank=True)
    icon = models.ImageField(upload_to="subjects/icons/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "title"]

    def __str__(self):
        return self.title


class Course(BaseModel):
    class Level(models.TextChoices):
        BEGINNER = "beginner", "Beginner"
        INTERMEDIATE = "intermediate", "Intermediate"
        ADVANCED = "advanced", "Advanced"

    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="courses")
    teacher = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="teaching_courses",
        blank=True,
        null=True,
    )
    title = models.CharField(max_length=220)
    slug = models.SlugField(max_length=240, unique=True)
    description = models.TextField(blank=True)
    level = models.CharField(max_length=20, choices=Level.choices, default=Level.BEGINNER)
    cover = models.ImageField(upload_to="courses/covers/", blank=True, null=True)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["subject__title", "title"]

    def __str__(self):
        return self.title


class CourseModule(BaseModel):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="modules")
    title = models.CharField(max_length=220)
    description = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["course", "order", "title"]
        unique_together = ("course", "order")

    def __str__(self):
        return f"{self.course}: {self.title}"


class Enrollment(BaseModel):
    class Status(models.TextChoices):
        ACTIVE = "active", "Active"
        COMPLETED = "completed", "Completed"
        SUSPENDED = "suspended", "Suspended"

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="enrollments")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="enrollments")
    progress = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.ACTIVE)
    last_accessed_at = models.DateTimeField(blank=True, null=True)
    completed_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        unique_together = ("user", "course")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.user} enrolled in {self.course}"

    def recalculate_progress(self, save=True):
        from django.utils import timezone
        from laboratory.models import LabReport
        from practical.models import PracticalSubmission
        from testsystem.models import TestAttempt
        from videos.models import VideoProgress

        total = 0
        completed = 0

        videos = self.course.videos.filter(published=True)
        total += videos.count()
        completed += VideoProgress.objects.filter(user=self.user, video__in=videos, completed=True).count()

        assignments = self.course.practical_assignments.filter(published=True)
        total += assignments.count()
        completed += PracticalSubmission.objects.filter(
            student=self.user,
            assignment__in=assignments,
            status=PracticalSubmission.Status.REVIEWED,
        ).count()

        experiments = self.course.lab_experiments.filter(published=True)
        total += experiments.count()
        completed += LabReport.objects.filter(
            student=self.user,
            experiment__in=experiments,
            status=LabReport.Status.REVIEWED,
        ).count()

        tests = self.course.tests.filter(published=True)
        total += tests.count()
        completed += TestAttempt.objects.filter(
            student=self.user,
            test__in=tests,
            passed=True,
            status=TestAttempt.Status.GRADED,
        ).values("test").distinct().count()

        self.progress = 0 if total == 0 else round((completed / total) * 100, 2)
        if self.progress >= 100:
            self.status = self.Status.COMPLETED
            self.completed_at = self.completed_at or timezone.now()
        elif self.status == self.Status.COMPLETED:
            self.status = self.Status.ACTIVE
            self.completed_at = None

        if save:
            self.save(update_fields=["progress", "status", "completed_at", "updated_at"])
        return self.progress


class Certificate(BaseModel):
    class Status(models.TextChoices):
        ELIGIBLE = "eligible", "Eligible"
        ISSUED = "issued", "Issued"
        REVOKED = "revoked", "Revoked"

    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="certificates")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="certificates")
    enrollment = models.OneToOneField(Enrollment, on_delete=models.CASCADE, related_name="certificate")
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.ELIGIBLE)
    completion_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    issued_at = models.DateTimeField(blank=True, null=True)
    certificate_file = models.FileField(upload_to="certificates/", blank=True, null=True)

    class Meta:
        unique_together = ("student", "course")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.student} - {self.course} certificate"

    @classmethod
    def create_if_eligible(cls, enrollment, threshold=80):
        progress = enrollment.recalculate_progress(save=True)
        if progress < threshold:
            return None
        certificate, _ = cls.objects.get_or_create(
            student=enrollment.user,
            course=enrollment.course,
            enrollment=enrollment,
            defaults={"completion_percentage": progress},
        )
        if certificate.completion_percentage != progress:
            certificate.completion_percentage = progress
            certificate.save(update_fields=["completion_percentage", "updated_at"])
        return certificate
