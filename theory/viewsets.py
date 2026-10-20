from django.db.models import Q
from rest_framework import viewsets

from subjects.models import Enrollment
from theory.models import TheoryLesson, TheoryLessonProgress, TheoryTopic
from theory.serializers import TheoryLessonProgressSerializer, TheoryLessonSerializer, TheoryTopicSerializer


class TheoryTopicViewSet(viewsets.ModelViewSet):
    queryset = TheoryTopic.objects.select_related("subject", "course").all()
    serializer_class = TheoryTopicSerializer
    search_fields = ["title", "summary", "subject__title", "course__title"]
    ordering_fields = ["order", "title", "created_at"]

    def get_queryset(self):
        queryset = TheoryTopic.objects.select_related("subject", "course").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(Q(course__teacher=user) | Q(course__isnull=True)).distinct()
        if getattr(user, "role", "") == "student":
            courses = Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE).values_list("course_id", flat=True)
            return queryset.filter(Q(course_id__in=courses) | Q(course__isnull=True)).distinct()
        return queryset.none()


class TheoryLessonViewSet(viewsets.ModelViewSet):
    queryset = TheoryLesson.objects.select_related("topic", "module", "author").all()
    serializer_class = TheoryLessonSerializer
    search_fields = ["title", "content", "topic__title", "author__username"]
    ordering_fields = ["order", "title", "created_at", "estimated_minutes"]

    def get_queryset(self):
        queryset = TheoryLesson.objects.select_related("subject", "course", "topic", "module", "author").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(Q(course__teacher=user) | Q(author=user) | Q(course__isnull=True, author__isnull=True)).distinct()
        if getattr(user, "role", "") == "student":
            courses = Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE).values_list("course_id", flat=True)
            return queryset.filter(Q(course_id__in=courses) | Q(course__isnull=True), published=True).distinct()
        return queryset.none()


class TheoryLessonProgressViewSet(viewsets.ModelViewSet):
    queryset = TheoryLessonProgress.objects.select_related("student", "lesson").all()
    serializer_class = TheoryLessonProgressSerializer
    search_fields = ["student__username", "lesson__title"]
    ordering_fields = ["updated_at", "completed_at"]
