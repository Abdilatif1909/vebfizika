from django.db.models import Q
from rest_framework import viewsets

from simulations.models import Simulation, SimulationProgress
from simulations.serializers import SimulationProgressSerializer, SimulationSerializer
from subjects.models import Enrollment


class SimulationViewSet(viewsets.ModelViewSet):
    queryset = Simulation.objects.select_related("subject", "course", "module").all()
    serializer_class = SimulationSerializer
    search_fields = ["title", "description", "subject__title", "course__title"]
    ordering_fields = ["title", "created_at"]

    def get_queryset(self):
        queryset = Simulation.objects.select_related("subject", "course", "module").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(Q(course__teacher=user) | Q(course__isnull=True)).distinct()
        if getattr(user, "role", "") == "student":
            course_ids = Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE).values_list("course_id", flat=True)
            return queryset.filter(Q(course_id__in=course_ids) | Q(course__isnull=True), published=True).distinct()
        return queryset.none()


class SimulationProgressViewSet(viewsets.ModelViewSet):
    queryset = SimulationProgress.objects.select_related("simulation", "user").all()
    serializer_class = SimulationProgressSerializer
    search_fields = ["simulation__title", "user__username"]
    ordering_fields = ["updated_at", "attempts", "best_score"]
