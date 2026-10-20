from django.contrib import admin

from subjects.models import Certificate, Course, CourseModule, Enrollment, Subject


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ("title", "owner", "slug", "order", "is_active")
    list_filter = ("owner", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "description")


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "teacher", "level", "published", "is_active")
    list_filter = ("level", "published", "subject")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "description")


@admin.register(CourseModule)
class CourseModuleAdmin(admin.ModelAdmin):
    list_display = ("title", "course", "order", "is_active")
    list_filter = ("course",)
    search_fields = ("title", "description")


@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ("user", "course", "status", "progress", "completed_at", "is_active")
    list_filter = ("status", "course", "completed_at")
    search_fields = ("user__username", "course__title")


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ("student", "course", "status", "completion_percentage", "issued_at", "is_active")
    list_filter = ("status", "course", "issued_at")
    search_fields = ("student__username", "course__title")
