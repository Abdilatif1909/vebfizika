from django.contrib import admin

from theory.models import TheoryLesson, TheoryLessonProgress, TheoryTopic


@admin.register(TheoryTopic)
class TheoryTopicAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "course", "order", "is_active")
    list_filter = ("subject", "course", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "summary")


@admin.register(TheoryLesson)
class TheoryLessonAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "course", "topic", "author", "estimated_minutes", "published", "is_active")
    list_filter = ("published", "topic", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "content")


@admin.register(TheoryLessonProgress)
class TheoryLessonProgressAdmin(admin.ModelAdmin):
    list_display = ("student", "lesson", "completed", "completed_at", "updated_at")
    list_filter = ("completed", "completed_at")
    search_fields = ("student__username", "lesson__title")
