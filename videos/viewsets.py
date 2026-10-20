from django.db.models import Q
from rest_framework import viewsets

from videos.models import Video, VideoPlaylist, VideoProgress
from videos.serializers import VideoPlaylistSerializer, VideoProgressSerializer, VideoSerializer
from subjects.models import Enrollment


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.select_related("subject", "course", "module", "author").all()
    serializer_class = VideoSerializer
    search_fields = ["title", "description", "subject__title", "course__title", "author__username"]
    ordering_fields = ["created_at", "title", "duration_seconds"]

    def get_queryset(self):
        queryset = Video.objects.select_related("subject", "course", "module", "author").all()
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(Q(author=user) | Q(course__teacher=user) | Q(author__isnull=True, course__isnull=True)).distinct()
        if getattr(user, "role", "") == "student":
            course_ids = Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE).values_list("course_id", flat=True)
            return queryset.filter(Q(course_id__in=course_ids) | Q(course__isnull=True), published=True).distinct()
        return queryset.none()


class VideoPlaylistViewSet(viewsets.ModelViewSet):
    queryset = VideoPlaylist.objects.prefetch_related("videos").all()
    serializer_class = VideoPlaylistSerializer
    search_fields = ["title", "description", "videos__title"]
    ordering_fields = ["order", "title", "created_at"]


class VideoProgressViewSet(viewsets.ModelViewSet):
    queryset = VideoProgress.objects.select_related("user", "video").all()
    serializer_class = VideoProgressSerializer
    search_fields = ["user__username", "video__title"]
    ordering_fields = ["updated_at", "watched_seconds"]
