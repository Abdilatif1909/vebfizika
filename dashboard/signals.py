from django.db.models.signals import post_save
from django.dispatch import receiver

from dashboard.models import ActivityLog


def create_activity(actor, action, instance):
    ActivityLog.objects.create(
        actor=actor,
        action=action,
        target_type=instance.__class__.__name__,
        target_id=str(instance.pk),
        metadata={"app": instance._meta.app_label},
    )


@receiver(post_save, sender="practical.PracticalSubmission")
def log_practical_submission(sender, instance, created, **kwargs):
    create_activity(instance.student, "Practical submission created" if created else "Practical submission updated", instance)


@receiver(post_save, sender="laboratory.LabReport")
def log_lab_report(sender, instance, created, **kwargs):
    create_activity(instance.student, "Lab report created" if created else "Lab report updated", instance)


@receiver(post_save, sender="testsystem.TestAttempt")
def log_test_attempt(sender, instance, created, **kwargs):
    create_activity(instance.student, "Test attempt started" if created else "Test attempt updated", instance)


@receiver(post_save, sender="subjects.Enrollment")
def log_enrollment(sender, instance, created, **kwargs):
    if created:
        create_activity(instance.user, "Student enrolled in course", instance)
