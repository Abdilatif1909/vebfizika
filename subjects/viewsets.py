from rest_framework import viewsets

from subjects.models import Certificate, Course, CourseModule, Enrollment, Subject
from subjects.serializers import (
    CertificateSerializer,
    CourseModuleSerializer,
    CourseSerializer,
    EnrollmentSerializer,
    SubjectSerializer,
)


class AcademicVisibilityMixin:
    owner_field = "teacher"
    enrollment_course_field = "course"

    def filter_for_user(self, queryset):
        user = self.request.user
        if not user.is_authenticated:
            return queryset
        if user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(**{self.owner_field: user}) if self.owner_field else queryset
        if getattr(user, "role", "") == "student":
            course_ids = Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE).values_list("course_id", flat=True)
            return queryset.filter(**{f"{self.enrollment_course_field}__in": course_ids})
        return queryset.none()


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    search_fields = ["title", "description"]
    ordering_fields = ["order", "title", "created_at"]

    def get_queryset(self):
        queryset = Subject.objects.select_related("owner").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(owner=user)
        if getattr(user, "role", "") == "student":
            return queryset.filter(courses__enrollments__user=user).distinct()
        return queryset.none()


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.select_related("subject", "teacher").all()
    serializer_class = CourseSerializer
    search_fields = ["title", "description", "subject__title", "teacher__username"]
    ordering_fields = ["title", "created_at", "level"]

    def get_queryset(self):
        queryset = Course.objects.select_related("subject", "teacher").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(teacher=user)
        if getattr(user, "role", "") == "student":
            return queryset.filter(enrollments__user=user, enrollments__status=Enrollment.Status.ACTIVE)
        return queryset.none()


class CourseModuleViewSet(viewsets.ModelViewSet):
    queryset = CourseModule.objects.select_related("course").all()
    serializer_class = CourseModuleSerializer
    search_fields = ["title", "description", "course__title"]
    ordering_fields = ["order", "title", "created_at"]


class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.select_related("user", "course").all()
    serializer_class = EnrollmentSerializer
    search_fields = ["user__username", "course__title"]
    ordering_fields = ["created_at", "progress", "completed_at"]

    def get_queryset(self):
        queryset = Enrollment.objects.select_related("user", "course", "course__subject").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(course__teacher=user)
        if getattr(user, "role", "") == "student":
            return queryset.filter(user=user)
        return queryset.none()


class CertificateViewSet(viewsets.ModelViewSet):
    queryset = Certificate.objects.select_related("student", "course", "enrollment").all()
    serializer_class = CertificateSerializer
    search_fields = ["student__username", "course__title", "status"]
    ordering_fields = ["created_at", "issued_at", "completion_percentage"]

    def get_queryset(self):
        queryset = super().get_queryset()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(course__teacher=user)
        if getattr(user, "role", "") == "student":
            return queryset.filter(student=user)
        return queryset.none()
