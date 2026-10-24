from io import BytesIO
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from common.file_responses import file_response
from common.responses import PrivateResponseMixin
from documents.access import can_access_document, visible_documents
from documents.models import Document


class DocumentBulkDownloadView(PrivateResponseMixin, APIView):
	permission_classes = [AllowAny]

	def get(self, request, *args, **kwargs):
		documents = visible_documents(Document.objects.exclude(file=""), request.user).order_by("title")
		buffer = BytesIO()

		with ZipFile(buffer, "w", ZIP_DEFLATED) as archive:
			for index, document in enumerate(documents, start=1):
				if not document.file:
					continue
				file_path = Path(document.file.path)
				if not file_path.exists() or not file_path.is_file():
					continue
				suffix = file_path.suffix or ""
				archive_name = f"{index:02d} - {document.title}{suffix}"
				archive.write(file_path, arcname=archive_name)

		response = HttpResponse(buffer.getvalue(), content_type="application/zip")
		response["Content-Disposition"] = 'attachment; filename="dars-hujjatlari.zip"'
		return response


class DocumentFileView(PrivateResponseMixin, APIView):
	def get(self, request, pk, *args, **kwargs):
		document = get_object_or_404(Document.objects.select_related("course", "course__teacher"), pk=pk)
		if not can_access_document(request.user, document):
			raise Http404
		return file_response(request, document.file)
