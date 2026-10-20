from django.contrib import admin

from dashboard.models import ActivityLog, Announcement, DashboardMetric


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "audience", "pinned", "starts_at", "ends_at", "is_active")
    list_filter = ("subject", "audience", "pinned", "is_active")
    search_fields = ("title", "body")


@admin.register(DashboardMetric)
class DashboardMetricAdmin(admin.ModelAdmin):
    list_display = ("key", "label", "value", "unit", "is_active")
    search_fields = ("key", "label", "unit")


@admin.register(ActivityLog)
class ActivityLogAdmin(admin.ModelAdmin):
    list_display = ("actor", "action", "target_type", "target_id", "created_at")
    list_filter = ("target_type", "created_at")
    search_fields = ("actor__username", "action", "target_type", "target_id")
