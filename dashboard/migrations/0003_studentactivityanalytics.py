from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("dashboard", "0002_announcement_attachment_announcement_slug_and_more"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="StudentActivityAnalytics",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("is_active", models.BooleanField(default=True)),
                ("activity_type", models.CharField(choices=[("video", "Video"), ("test", "Test"), ("simulation", "Simulation"), ("theory", "Theory"), ("document", "Document")], max_length=20)),
                ("resource_id", models.CharField(blank=True, max_length=120)),
                ("resource_title", models.CharField(blank=True, max_length=255)),
                ("score_percentage", models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ("xp_points", models.PositiveIntegerField(default=0)),
                ("metadata", models.JSONField(blank=True, default=dict)),
                ("user", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="student_analytics", to=settings.AUTH_USER_MODEL)),
            ],
            options={
                "ordering": ["-created_at"],
            },
        ),
        migrations.AddIndex(
            model_name="studentactivityanalytics",
            index=models.Index(fields=["user", "activity_type"], name="dashboard_st_user_id_9dff77_idx"),
        ),
        migrations.AddIndex(
            model_name="studentactivityanalytics",
            index=models.Index(fields=["user", "created_at"], name="dashboard_st_user_id_ca3d4b_idx"),
        ),
    ]
