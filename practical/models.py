from django.conf import settings
from django.db import models

from accounts.models import BaseModel
from subjects.models import Course, CourseModule, Subject


class PracticalAssignment(BaseModel):
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, related_name="practical_assignments", blank=True, null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="practical_assignments")
    module = models.ForeignKey(CourseModule, on_delete=models.SET_NULL, related_name="practical_assignments", blank=True, null=True)
    teacher = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name="created_practical_assignments", null=True)
    title = models.CharField(max_length=240)
    slug = models.SlugField(max_length=260, unique=True)
    instructions = models.TextField()
    attachment = models.FileField(upload_to="practical/assignments/", blank=True, null=True)
    due_at = models.DateTimeField(blank=True, null=True)
    max_score = models.PositiveIntegerField(default=100)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.course_id and not self.subject_id:
            self.subject = self.course.subject
        super().save(*args, **kwargs)


class PracticalSubmission(BaseModel):
    class Status(models.TextChoices):
        SUBMITTED = "submitted", "Submitted"
        REVIEWED = "reviewed", "Reviewed"
        RETURNED = "returned", "Returned"

    assignment = models.ForeignKey(PracticalAssignment, on_delete=models.CASCADE, related_name="submissions")
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="practical_submissions")
    file = models.FileField(upload_to="practical/submissions/", blank=True, null=True)
    answer_text = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.SUBMITTED)
    score = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True)
    feedback = models.TextField(blank=True)
    reviewed_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name="reviewed_practical_submissions", blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    reviewed_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        unique_together = ("assignment", "student")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.student} - {self.assignment}"
