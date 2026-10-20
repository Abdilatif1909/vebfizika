from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from accounts.models import Profile, User


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        ("Education Platform", {"fields": ("role", "avatar", "phone", "bio")}),
    )
    list_display = ("username", "email", "first_name", "last_name", "role", "is_staff", "is_active")
    list_filter = ("role", "is_staff", "is_superuser", "is_active")
    search_fields = ("username", "email", "first_name", "last_name")


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "institution", "grade_level", "specialization", "city", "country", "is_active")
    search_fields = ("user__username", "institution", "specialization", "city", "country")
    list_filter = ("is_active", "country")
