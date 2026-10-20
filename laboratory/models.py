from django.conf import settings
from django.db import models

from accounts.models import BaseModel
from subjects.models import Course, CourseModule, Subject


class LabExperiment(BaseModel):
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, related_name="lab_experiments", blank=True, null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="lab_experiments")
    module = models.ForeignKey(CourseModule, on_delete=models.SET_NULL, related_name="lab_experiments", blank=True, null=True)
    title = models.CharField(max_length=240)
    slug = models.SlugField(max_length=260, unique=True)
    objective = models.TextField()
    equipment = models.TextField(blank=True)
    safety_notes = models.TextField(blank=True)
    procedure = models.TextField()
    expected_result = models.TextField(blank=True)
    max_score = models.PositiveIntegerField(default=100)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["course", "title"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.course_id and not self.subject_id:
            self.subject = self.course.subject
        super().save(*args, **kwargs)


class LabReport(BaseModel):
    class Status(models.TextChoices):
        SUBMITTED = "submitted", "Submitted"
        REVIEWED = "reviewed", "Reviewed"
        REVISION_REQUIRED = "revision_required", "Revision required"

    experiment = models.ForeignKey(LabExperiment, on_delete=models.CASCADE, related_name="reports")
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="lab_reports")
    observations = models.TextField()
    conclusion = models.TextField(blank=True)
    attachment = models.FileField(upload_to="laboratory/reports/", blank=True, null=True)
    report_file = models.FileField(upload_to="laboratory/reports/", blank=True, null=True)
    status = models.CharField(max_length=24, choices=Status.choices, default=Status.SUBMITTED)
    score = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True)
    grade = models.CharField(max_length=20, blank=True)
    feedback = models.TextField(blank=True)
    reviewed_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name="reviewed_lab_reports", blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    reviewed_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        unique_together = ("experiment", "student")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.student} - {self.experiment}"
