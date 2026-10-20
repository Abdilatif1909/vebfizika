from django.contrib import admin

from documents.models import Document, DocumentCategory, DocumentDownload


@admin.register(DocumentCategory)
class DocumentCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active")
    prepopulated_fields = {"slug": ("name",)}
    search_fields = ("name", "description")


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "subject", "course", "access_level", "downloads_count", "is_active")
    list_filter = ("category", "subject", "course", "access_level", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "description")


@admin.register(DocumentDownload)
class DocumentDownloadAdmin(admin.ModelAdmin):
    list_display = ("document", "user", "ip_address", "created_at")
    list_filter = ("created_at",)
    search_fields = ("document__title", "user__username", "ip_address")
