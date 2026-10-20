from django.contrib import admin

from mobileapps.models import MobileApp, MobileAppRelease


@admin.register(MobileApp)
class MobileAppAdmin(admin.ModelAdmin):
    list_display = ("name", "platform", "package_name", "published", "is_active")
    list_filter = ("platform", "published", "is_active")
    prepopulated_fields = {"slug": ("name",)}
    search_fields = ("name", "description", "package_name")


@admin.register(MobileAppRelease)
class MobileAppReleaseAdmin(admin.ModelAdmin):
    list_display = ("app", "version", "build_number", "mandatory_update", "released_at", "is_active")
    list_filter = ("mandatory_update", "released_at")
    search_fields = ("app__name", "version", "release_notes")
