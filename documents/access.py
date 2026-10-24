from django.db import models

from subjects.models import Enrollment

from documents.models import Document


def can_access_document(user, document):
    if document.access_level == Document.AccessLevel.PUBLIC:
        return True
    if not user or not user.is_authenticated:
        return False
    if user.is_staff or getattr(user, "role", "") == "admin":
        return True
    if document.access_level == Document.AccessLevel.TEACHERS:
        return getattr(user, "role", "") == "teacher" or document.uploaded_by_id == user.id
    if document.access_level != Document.AccessLevel.ENROLLED:
        return False
    if getattr(user, "role", "") == "student":
        return Enrollment.objects.filter(
            user=user,
            course_id=document.course_id,
            status=Enrollment.Status.ACTIVE,
        ).exists()
    if getattr(user, "role", "") == "teacher":
        return document.uploaded_by_id == user.id or (
            document.course_id is not None and document.course.teacher_id == user.id
        )
    return False


def visible_documents(queryset, user):
    if user and user.is_authenticated and (user.is_staff or getattr(user, "role", "") == "admin"):
        return queryset
    if not user or not user.is_authenticated:
        return queryset.filter(access_level=Document.AccessLevel.PUBLIC)
    if getattr(user, "role", "") == "student":
        course_ids = Enrollment.objects.filter(
            user=user,
            status=Enrollment.Status.ACTIVE,
        ).values_list("course_id", flat=True)
        return queryset.filter(
            models.Q(access_level=Document.AccessLevel.PUBLIC)
            | models.Q(access_level=Document.AccessLevel.ENROLLED, course_id__in=course_ids)
        ).distinct()
    if getattr(user, "role", "") == "teacher":
        return queryset.filter(
            models.Q(access_level=Document.AccessLevel.PUBLIC)
            | models.Q(access_level=Document.AccessLevel.TEACHERS)
            | models.Q(access_level=Document.AccessLevel.ENROLLED, course__teacher=user)
            | models.Q(uploaded_by=user)
        ).distinct()
    return queryset.filter(access_level=Document.AccessLevel.PUBLIC)
