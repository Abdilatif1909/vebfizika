from rest_framework import viewsets

from dashboard.models import ActivityLog, Announcement, DashboardMetric
from dashboard.serializers import ActivityLogSerializer, AnnouncementSerializer, DashboardMetricSerializer


class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    search_fields = ["title", "body", "audience"]
    ordering_fields = ["created_at", "starts_at", "ends_at", "pinned"]


class DashboardMetricViewSet(viewsets.ModelViewSet):
    queryset = DashboardMetric.objects.all()
    serializer_class = DashboardMetricSerializer
    search_fields = ["key", "label", "unit"]
    ordering_fields = ["label", "value", "created_at"]

    def get_queryset(self):
        DashboardMetric.refresh_metrics()
        return DashboardMetric.objects.all()


class ActivityLogViewSet(viewsets.ModelViewSet):
    queryset = ActivityLog.objects.select_related("actor").all()
    serializer_class = ActivityLogSerializer
    search_fields = ["actor__username", "action", "target_type", "target_id"]
    ordering_fields = ["created_at", "action"]
