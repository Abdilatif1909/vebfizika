from django.db.models import Q

from subjects.models import Enrollment


def is_public_theory_lesson(lesson):
    return lesson.published and lesson.course_id is None and lesson.author_id is None


def can_access_theory_lesson(user, lesson):
    if is_public_theory_lesson(lesson):
        return True
    if not user or not user.is_authenticated:
        return False
    if user.is_staff or getattr(user, "role", "") == "admin":
        return True
    if getattr(user, "role", "") == "teacher":
        return lesson.author_id == user.id or (lesson.course_id is not None and lesson.course.teacher_id == user.id)
    if getattr(user, "role", "") == "student" and lesson.published:
        if lesson.course_id is None:
            return lesson.author_id is None
        return Enrollment.objects.filter(
            user=user,
            course_id=lesson.course_id,
            status=Enrollment.Status.ACTIVE,
        ).exists()
    return False


def visible_theory_lessons(queryset, user):
    if user and user.is_authenticated and (user.is_staff or getattr(user, "role", "") == "admin"):
        return queryset
    public = Q(course__isnull=True, author__isnull=True, published=True)
    if not user or not user.is_authenticated:
        return queryset.filter(public)
    if getattr(user, "role", "") == "teacher":
        return queryset.filter(public | Q(author=user) | Q(course__teacher=user)).distinct()
    if getattr(user, "role", "") == "student":
        course_ids = Enrollment.objects.filter(
            user=user,
            status=Enrollment.Status.ACTIVE,
        ).values_list("course_id", flat=True)
        return queryset.filter(public | Q(course_id__in=course_ids, published=True)).distinct()
    return queryset.filter(public)
