from io import BytesIO
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from documents.models import Document


class DocumentBulkDownloadView(APIView):
	permission_classes = [AllowAny]

	def get(self, request, *args, **kwargs):
		documents = Document.objects.exclude(file="").order_by("title")
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
