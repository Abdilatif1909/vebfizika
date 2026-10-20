from django.contrib import admin

from practical.models import PracticalAssignment, PracticalSubmission


@admin.register(PracticalAssignment)
class PracticalAssignmentAdmin(admin.ModelAdmin):
    list_display = ("title", "course", "teacher", "due_at", "max_score", "published", "is_active")
    list_filter = ("published", "course", "due_at", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "instructions")


@admin.register(PracticalSubmission)
class PracticalSubmissionAdmin(admin.ModelAdmin):
    list_display = ("assignment", "student", "status", "score", "reviewed_by", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("assignment__title", "student__username", "feedback")
