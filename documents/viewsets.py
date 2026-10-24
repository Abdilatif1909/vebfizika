from rest_framework import viewsets

from documents.access import visible_documents
from common.responses import PrivateResponseMixin
from documents.models import Document, DocumentCategory, DocumentDownload
from documents.serializers import DocumentCategorySerializer, DocumentDownloadSerializer, DocumentSerializer


class DocumentCategoryViewSet(viewsets.ModelViewSet):
    queryset = DocumentCategory.objects.all()
    serializer_class = DocumentCategorySerializer
    search_fields = ["name", "description"]
    ordering_fields = ["name", "created_at"]


class DocumentViewSet(PrivateResponseMixin, viewsets.ModelViewSet):
    queryset = Document.objects.select_related("category", "subject", "course", "module", "uploaded_by").all()
    serializer_class = DocumentSerializer
    search_fields = ["title", "description", "category__name", "subject__title", "course__title"]
    ordering_fields = ["created_at", "title", "downloads_count"]

    def get_queryset(self):
        return visible_documents(self.queryset, self.request.user)


class DocumentDownloadViewSet(viewsets.ModelViewSet):
    queryset = DocumentDownload.objects.select_related("document", "user").all()
    serializer_class = DocumentDownloadSerializer
    search_fields = ["document__title", "user__username", "ip_address"]
    ordering_fields = ["created_at"]
