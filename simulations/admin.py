from django.contrib import admin

from simulations.models import Simulation, SimulationProgress


@admin.register(Simulation)
class SimulationAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "course", "published", "is_active")
    list_filter = ("published", "subject", "course", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "description")


@admin.register(SimulationProgress)
class SimulationProgressAdmin(admin.ModelAdmin):
    list_display = ("simulation", "user", "attempts", "best_score", "completed", "updated_at")
    list_filter = ("completed", "updated_at")
    search_fields = ("simulation__title", "user__username")
