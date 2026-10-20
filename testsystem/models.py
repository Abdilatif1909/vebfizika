from django.conf import settings
from django.db import models
from django.utils import timezone

from accounts.models import BaseModel
from subjects.models import Course, CourseModule, Subject


class Test(BaseModel):
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, related_name="tests", blank=True, null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="tests")
    module = models.ForeignKey(CourseModule, on_delete=models.SET_NULL, related_name="tests", blank=True, null=True)
    title = models.CharField(max_length=240)
    slug = models.SlugField(max_length=260, unique=True)
    description = models.TextField(blank=True)
    resource_file = models.FileField(upload_to="tests/resources/", blank=True, null=True)
    duration_minutes = models.PositiveIntegerField(default=30)
    passing_score = models.PositiveIntegerField(default=60)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["course", "title"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.course_id and not self.subject_id:
            self.subject = self.course.subject
        super().save(*args, **kwargs)


class Question(BaseModel):
    class QuestionType(models.TextChoices):
        SINGLE = "single", "Single choice"
        MULTIPLE = "multiple", "Multiple choice"
        TEXT = "text", "Text answer"

    test = models.ForeignKey(Test, on_delete=models.CASCADE, related_name="questions")
    text = models.TextField()
    question_type = models.CharField(max_length=20, choices=QuestionType.choices, default=QuestionType.SINGLE)
    order = models.PositiveIntegerField(default=0)
    points = models.DecimalField(max_digits=6, decimal_places=2, default=1)

    class Meta:
        ordering = ["test", "order"]

    def __str__(self):
        return self.text[:80]


class Choice(BaseModel):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="choices")
    text = models.CharField(max_length=500)
    is_correct = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["question", "order"]

    def __str__(self):
        return self.text


class TestAttempt(BaseModel):
    class Status(models.TextChoices):
        IN_PROGRESS = "in_progress", "In progress"
        SUBMITTED = "submitted", "Submitted"
        GRADED = "graded", "Graded"

    test = models.ForeignKey(Test, on_delete=models.CASCADE, related_name="attempts")
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="test_attempts")
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.IN_PROGRESS)
    score = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    max_score = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    passed = models.BooleanField(default=False)
    started_at = models.DateTimeField(auto_now_add=True)
    submitted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ["-started_at"]

    def __str__(self):
        return f"{self.student} - {self.test}"

    def calculate_score(self, save=True):
        total = sum(answer.question.points for answer in self.answers.select_related("question"))
        score = sum(answer.awarded_points for answer in self.answers.all())
        self.max_score = total
        self.score = score
        self.percentage = 0 if total == 0 else round((score / total) * 100, 2)
        self.passed = self.percentage >= self.test.passing_score
        self.status = self.Status.GRADED
        self.submitted_at = self.submitted_at or timezone.now()
        if save:
            self.save(update_fields=["score", "max_score", "percentage", "passed", "status", "submitted_at", "updated_at"])
        return self.score


class Answer(BaseModel):
    attempt = models.ForeignKey(TestAttempt, on_delete=models.CASCADE, related_name="answers")
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="answers")
    selected_choices = models.ManyToManyField(Choice, related_name="answers", blank=True)
    text_answer = models.TextField(blank=True)
    awarded_points = models.DecimalField(max_digits=6, decimal_places=2, default=0)

    class Meta:
        unique_together = ("attempt", "question")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.attempt} - {self.question_id}"
