from django.conf import settings
from django.db import models

from accounts.models import BaseModel
from subjects.models import Course, CourseModule, Subject


class Simulation(BaseModel):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="simulations")
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, related_name="simulations", blank=True, null=True)
    module = models.ForeignKey(CourseModule, on_delete=models.SET_NULL, related_name="simulations", blank=True, null=True)
    title = models.CharField(max_length=240)
    slug = models.SlugField(max_length=260, unique=True)
    description = models.TextField(blank=True)
    embed_url = models.URLField(blank=True)
    launch_url = models.URLField(blank=True)
    config = models.JSONField(default=dict, blank=True)
    resource_file = models.FileField(upload_to="simulations/files/", blank=True, null=True)
    thumbnail = models.ImageField(upload_to="simulations/thumbnails/", blank=True, null=True)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["subject", "title"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.course_id and not self.subject_id:
            self.subject = self.course.subject
        super().save(*args, **kwargs)


class SimulationProgress(BaseModel):
    simulation = models.ForeignKey(Simulation, on_delete=models.CASCADE, related_name="progress_records")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="simulation_progress")
    attempts = models.PositiveIntegerField(default=0)
    best_score = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    completed = models.BooleanField(default=False)
    last_state = models.JSONField(default=dict, blank=True)

    class Meta:
        unique_together = ("simulation", "user")
        ordering = ["-updated_at"]

    def __str__(self):
        return f"{self.user} - {self.simulation}"
