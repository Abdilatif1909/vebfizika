from django.contrib import admin

from testsystem.models import Answer, Choice, Question, Test, TestAttempt


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 2


@admin.register(Test)
class TestAdmin(admin.ModelAdmin):
    list_display = ("title", "course", "duration_minutes", "passing_score", "published", "is_active")
    list_filter = ("published", "course", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "description")


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("test", "question_type", "order", "points", "is_active")
    list_filter = ("question_type", "test", "is_active")
    search_fields = ("text",)
    inlines = [ChoiceInline]


@admin.register(Choice)
class ChoiceAdmin(admin.ModelAdmin):
    list_display = ("question", "text", "is_correct", "order", "is_active")
    list_filter = ("is_correct", "is_active")
    search_fields = ("text",)


@admin.register(TestAttempt)
class TestAttemptAdmin(admin.ModelAdmin):
    list_display = ("test", "student", "status", "score", "started_at", "submitted_at")
    list_filter = ("status", "started_at", "submitted_at")
    search_fields = ("test__title", "student__username")


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ("attempt", "question", "awarded_points", "created_at")
    search_fields = ("question__text", "attempt__student__username", "text_answer")
    filter_horizontal = ("selected_choices",)
