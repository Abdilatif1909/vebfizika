from rest_framework import viewsets

from laboratory.models import LabExperiment, LabReport
from laboratory.serializers import LabExperimentSerializer, LabReportSerializer
from subjects.models import Enrollment


class LabExperimentViewSet(viewsets.ModelViewSet):
    queryset = LabExperiment.objects.select_related("course", "module").all()
    serializer_class = LabExperimentSerializer
    search_fields = ["title", "objective", "equipment", "procedure", "course__title"]
    ordering_fields = ["title", "created_at", "max_score"]

    def get_queryset(self):
        queryset = LabExperiment.objects.select_related("subject", "course", "module").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(course__teacher=user)
        if getattr(user, "role", "") == "student":
            course_ids = Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE).values_list("course_id", flat=True)
            return queryset.filter(course_id__in=course_ids, published=True)
        return queryset.none()


class LabReportViewSet(viewsets.ModelViewSet):
    queryset = LabReport.objects.select_related("experiment", "student").all()
    serializer_class = LabReportSerializer
    search_fields = ["experiment__title", "student__username", "observations", "conclusion", "feedback"]
    ordering_fields = ["created_at", "score", "status"]

    def get_queryset(self):
        queryset = LabReport.objects.select_related("experiment", "experiment__course", "student", "reviewed_by").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(experiment__course__teacher=user)
        if getattr(user, "role", "") == "student":
            return queryset.filter(student=user)
        return queryset.none()
