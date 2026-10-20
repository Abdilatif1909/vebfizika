from django.db.models import Q
from rest_framework import viewsets

from practical.models import PracticalAssignment, PracticalSubmission
from practical.serializers import PracticalAssignmentSerializer, PracticalSubmissionSerializer
from subjects.models import Enrollment


class PracticalAssignmentViewSet(viewsets.ModelViewSet):
    queryset = PracticalAssignment.objects.select_related("course", "module", "teacher").all()
    serializer_class = PracticalAssignmentSerializer
    search_fields = ["title", "instructions", "course__title", "teacher__username"]
    ordering_fields = ["created_at", "due_at", "title", "max_score"]

    def get_queryset(self):
        queryset = PracticalAssignment.objects.select_related("subject", "course", "module", "teacher").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(Q(teacher=user) | Q(teacher__isnull=True, published=True)).distinct()
        if getattr(user, "role", "") == "student":
            course_ids = Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE).values_list("course_id", flat=True)
            return queryset.filter(Q(course_id__in=course_ids) | Q(course__teacher__isnull=True), published=True).distinct()
        return queryset.none()


class PracticalSubmissionViewSet(viewsets.ModelViewSet):
    queryset = PracticalSubmission.objects.select_related("assignment", "student", "reviewed_by").all()
    serializer_class = PracticalSubmissionSerializer
    search_fields = ["assignment__title", "student__username", "answer_text", "feedback"]
    ordering_fields = ["created_at", "score", "status"]

    def get_queryset(self):
        queryset = PracticalSubmission.objects.select_related("assignment", "assignment__course", "student", "reviewed_by").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(assignment__teacher=user)
        if getattr(user, "role", "") == "student":
            return queryset.filter(student=user)
        return queryset.none()
