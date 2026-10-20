from django.conf import settings
from django.db import models

from accounts.models import BaseModel
from subjects.models import Course, CourseModule, Subject


class DocumentCategory(BaseModel):
    name = models.CharField(max_length=160, unique=True)
    slug = models.SlugField(max_length=180, unique=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Document(BaseModel):
    class AccessLevel(models.TextChoices):
        PUBLIC = "public", "Public"
        ENROLLED = "enrolled", "Enrolled students"
        TEACHERS = "teachers", "Teachers"

    title = models.CharField(max_length=240)
    slug = models.SlugField(max_length=260, unique=True)
    description = models.TextField(blank=True)
    category = models.ForeignKey(DocumentCategory, on_delete=models.SET_NULL, related_name="documents", null=True)
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, related_name="documents", blank=True, null=True)
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, related_name="documents", blank=True, null=True)
    module = models.ForeignKey(CourseModule, on_delete=models.SET_NULL, related_name="documents", blank=True, null=True)
    uploaded_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name="documents", null=True)
    file = models.FileField(upload_to="documents/files/")
    access_level = models.CharField(max_length=20, choices=AccessLevel.choices, default=AccessLevel.PUBLIC)
    version = models.CharField(max_length=50, blank=True)
    downloads_count = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class DocumentDownload(BaseModel):
    document = models.ForeignKey(Document, on_delete=models.CASCADE, related_name="downloads")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name="document_downloads", null=True)
    ip_address = models.GenericIPAddressField(blank=True, null=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.document} download"
