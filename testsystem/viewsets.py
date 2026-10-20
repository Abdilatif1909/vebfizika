from django.db.models import Q
from rest_framework import viewsets

from testsystem.models import Answer, Choice, Question, Test, TestAttempt
from testsystem.serializers import AnswerSerializer, ChoiceSerializer, QuestionSerializer, TestAttemptSerializer, TestSerializer
from subjects.models import Enrollment


class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.select_related("course", "module").all()
    serializer_class = TestSerializer
    search_fields = ["title", "description", "course__title"]
    ordering_fields = ["title", "created_at", "duration_minutes", "passing_score"]

    def get_queryset(self):
        queryset = Test.objects.select_related("subject", "course", "module").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(Q(course__teacher=user) | Q(course__teacher__isnull=True, published=True)).distinct()
        if getattr(user, "role", "") == "student":
            course_ids = Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE).values_list("course_id", flat=True)
            return queryset.filter(Q(course_id__in=course_ids) | Q(course__teacher__isnull=True), published=True).distinct()
        return queryset.none()


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.select_related("test").all()
    serializer_class = QuestionSerializer
    search_fields = ["text", "test__title"]
    ordering_fields = ["order", "points", "created_at"]


class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.select_related("question").all()
    serializer_class = ChoiceSerializer
    search_fields = ["text", "question__text"]
    ordering_fields = ["order", "created_at"]


class TestAttemptViewSet(viewsets.ModelViewSet):
    queryset = TestAttempt.objects.select_related("test", "student").all()
    serializer_class = TestAttemptSerializer
    search_fields = ["test__title", "student__username", "status"]
    ordering_fields = ["started_at", "submitted_at", "score", "status"]

    def get_queryset(self):
        queryset = TestAttempt.objects.select_related("test", "test__course", "student").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(test__course__teacher=user)
        if getattr(user, "role", "") == "student":
            return queryset.filter(student=user)
        return queryset.none()

    def perform_update(self, serializer):
        instance = serializer.save()
        if instance.status == TestAttempt.Status.SUBMITTED:
            instance.calculate_score(save=True)


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.select_related("attempt", "question").prefetch_related("selected_choices").all()
    serializer_class = AnswerSerializer
    search_fields = ["attempt__student__username", "question__text", "text_answer"]
    ordering_fields = ["created_at", "awarded_points"]
