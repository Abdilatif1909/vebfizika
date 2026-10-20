from django.db import models

from accounts.models import BaseModel


class MobileApp(BaseModel):
    class Platform(models.TextChoices):
        ANDROID = "android", "Android"
        IOS = "ios", "iOS"
        CROSS_PLATFORM = "cross_platform", "Cross platform"

    name = models.CharField(max_length=220)
    slug = models.SlugField(max_length=240, unique=True)
    platform = models.CharField(max_length=24, choices=Platform.choices)
    description = models.TextField(blank=True)
    icon = models.ImageField(upload_to="mobileapps/icons/", blank=True, null=True)
    screenshot = models.ImageField(upload_to="mobileapps/screenshots/", blank=True, null=True)
    store_url = models.URLField(blank=True)
    package_name = models.CharField(max_length=220, blank=True)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class MobileAppRelease(BaseModel):
    app = models.ForeignKey(MobileApp, on_delete=models.CASCADE, related_name="releases")
    version = models.CharField(max_length=60)
    build_number = models.PositiveIntegerField(default=1)
    release_notes = models.TextField(blank=True)
    binary = models.FileField(upload_to="mobileapps/releases/", blank=True, null=True)
    mandatory_update = models.BooleanField(default=False)
    released_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ["-released_at", "-created_at"]
        unique_together = ("app", "version", "build_number")

    def __str__(self):
        return f"{self.app} {self.version}"
