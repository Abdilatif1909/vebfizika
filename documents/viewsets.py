from django.db.models import Q
from rest_framework import viewsets

from documents.models import Document, DocumentCategory, DocumentDownload
from documents.serializers import DocumentCategorySerializer, DocumentDownloadSerializer, DocumentSerializer
from subjects.models import Enrollment


class DocumentCategoryViewSet(viewsets.ModelViewSet):
    queryset = DocumentCategory.objects.all()
    serializer_class = DocumentCategorySerializer
    search_fields = ["name", "description"]
    ordering_fields = ["name", "created_at"]


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.select_related("category", "subject", "course", "module", "uploaded_by").all()
    serializer_class = DocumentSerializer
    search_fields = ["title", "description", "category__name", "subject__title", "course__title"]
    ordering_fields = ["created_at", "title", "downloads_count"]

    def get_queryset(self):
        queryset = self.queryset
        user = self.request.user
        if not user.is_authenticated or user.is_staff or getattr(user, "role", "") == "admin":
            return queryset
        if getattr(user, "role", "") == "teacher":
            return queryset.filter(
                Q(course__teacher=user)
                | Q(uploaded_by=user)
                | Q(access_level=Document.AccessLevel.PUBLIC, course__isnull=True, uploaded_by__isnull=True)
            ).distinct()
        if getattr(user, "role", "") == "student":
            course_ids = Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE).values_list("course_id", flat=True)
            return queryset.filter(Q(course_id__in=course_ids) | Q(access_level=Document.AccessLevel.PUBLIC)).distinct()
        return queryset.filter(access_level=Document.AccessLevel.PUBLIC)


class DocumentDownloadViewSet(viewsets.ModelViewSet):
    queryset = DocumentDownload.objects.select_related("document", "user").all()
    serializer_class = DocumentDownloadSerializer
    search_fields = ["document__title", "user__username", "ip_address"]
    ordering_fields = ["created_at"]
