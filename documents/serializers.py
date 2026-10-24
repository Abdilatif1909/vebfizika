from rest_framework import serializers

from common.serializers import FileAvailabilityField, protected_file_url
from documents.models import Document, DocumentCategory, DocumentDownload


class DocumentCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentCategory
        fields = "__all__"


class DocumentSerializer(serializers.ModelSerializer):
    file_available = FileAvailabilityField(source="file", read_only=True)

    class Meta:
        model = Document
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["file"] = protected_file_url(instance, "file", "document_file")
        return representation


class DocumentDownloadSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentDownload
        fields = "__all__"
