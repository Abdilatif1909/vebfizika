from rest_framework import serializers

from documents.models import Document, DocumentCategory, DocumentDownload


class DocumentCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentCategory
        fields = "__all__"


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = "__all__"


class DocumentDownloadSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentDownload
        fields = "__all__"
