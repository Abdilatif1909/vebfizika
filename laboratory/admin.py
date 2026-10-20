from django.contrib import admin

from laboratory.models import LabExperiment, LabReport


@admin.register(LabExperiment)
class LabExperimentAdmin(admin.ModelAdmin):
    list_display = ("title", "course", "module", "max_score", "published", "is_active")
    list_filter = ("published", "course", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "objective", "procedure")


@admin.register(LabReport)
class LabReportAdmin(admin.ModelAdmin):
    list_display = ("experiment", "student", "status", "score", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("experiment__title", "student__username", "observations")
