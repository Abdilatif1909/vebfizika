from django.conf import settings
from django.db import models

from accounts.models import BaseModel
from subjects.models import Course, CourseModule, Subject


class TheoryTopic(BaseModel):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="theory_topics")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="theory_topics", blank=True, null=True)
    title = models.CharField(max_length=220)
    slug = models.SlugField(max_length=240, unique=True)
    summary = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["subject", "order", "title"]

    def __str__(self):
        return self.title


class TheoryLesson(BaseModel):
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, related_name="theory_lessons", blank=True, null=True)
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, related_name="theory_lessons", blank=True, null=True)
    topic = models.ForeignKey(TheoryTopic, on_delete=models.CASCADE, related_name="lessons")
    module = models.ForeignKey(CourseModule, on_delete=models.SET_NULL, related_name="theory_lessons", blank=True, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name="theory_lessons", null=True)
    title = models.CharField(max_length=240)
    slug = models.SlugField(max_length=260, unique=True)
    content = models.TextField()
    attachment = models.FileField(upload_to="theory/attachments/", blank=True, null=True)
    estimated_minutes = models.PositiveIntegerField(default=10)
    order = models.PositiveIntegerField(default=0)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["topic", "order", "title"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.topic_id:
            self.subject = self.subject or self.topic.subject
            self.course = self.course or self.topic.course
        super().save(*args, **kwargs)


class TheoryLessonProgress(BaseModel):
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="theory_progress")
    lesson = models.ForeignKey(TheoryLesson, on_delete=models.CASCADE, related_name="progress_records")
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        unique_together = ("student", "lesson")
        ordering = ["-updated_at"]

    def __str__(self):
        return f"{self.student} - {self.lesson}"
