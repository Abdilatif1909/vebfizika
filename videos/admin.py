from django.contrib import admin

from videos.models import Video, VideoPlaylist, VideoProgress


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "course", "author", "duration_seconds", "published", "is_active")
    list_filter = ("published", "subject", "course", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "description")


@admin.register(VideoPlaylist)
class VideoPlaylistAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "order", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "description")
    filter_horizontal = ("videos",)


@admin.register(VideoProgress)
class VideoProgressAdmin(admin.ModelAdmin):
    list_display = ("user", "video", "watched_seconds", "completed", "updated_at")
    list_filter = ("completed", "updated_at")
    search_fields = ("user__username", "video__title")
