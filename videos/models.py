from django.conf import settings
from django.db import models

from accounts.models import BaseModel
from subjects.models import Course, CourseModule, Subject


class Video(BaseModel):
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, related_name="videos", blank=True, null=True)
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, related_name="videos", blank=True, null=True)
    module = models.ForeignKey(CourseModule, on_delete=models.SET_NULL, related_name="videos", blank=True, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name="videos", blank=True, null=True)
    title = models.CharField(max_length=240)
    slug = models.SlugField(max_length=260, unique=True)
    description = models.TextField(blank=True)
    video_file = models.FileField(upload_to="videos/files/", blank=True, null=True)
    external_url = models.URLField(blank=True)
    thumbnail = models.ImageField(upload_to="videos/thumbnails/", blank=True, null=True)
    duration_seconds = models.PositiveIntegerField(default=0)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class VideoLesson(Video):
    class Meta:
        proxy = True
        verbose_name = "Video lesson"
        verbose_name_plural = "Video lessons"


class VideoPlaylist(BaseModel):
    title = models.CharField(max_length=220)
    slug = models.SlugField(max_length=240, unique=True)
    description = models.TextField(blank=True)
    videos = models.ManyToManyField(Video, related_name="playlists", blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "title"]

    def __str__(self):
        return self.title


class VideoProgress(BaseModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="video_progress")
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name="progress_records")
    watched_seconds = models.PositiveIntegerField(default=0)
    completed = models.BooleanField(default=False)

    class Meta:
        unique_together = ("user", "video")
        ordering = ["-updated_at"]

    def __str__(self):
        return f"{self.user} - {self.video}"
