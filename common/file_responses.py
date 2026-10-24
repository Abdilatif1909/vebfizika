import mimetypes
from pathlib import PurePosixPath

from django.http import FileResponse
from rest_framework.exceptions import NotFound

from common.responses import mark_private


OFFICE_EXTENSIONS = {".doc", ".docx", ".ppt", ".pptx"}


def file_response(request, field_file):
    try:
        file_exists = bool(field_file and field_file.name and field_file.storage.exists(field_file.name))
    except Exception:
        file_exists = False
    if not file_exists:
        raise NotFound("Fayl serverda mavjud emas. Administratorga murojaat qiling.")

    filename = PurePosixPath(field_file.name).name
    suffix = PurePosixPath(filename).suffix.lower()
    as_attachment = request.query_params.get("download") == "1" or suffix in OFFICE_EXTENSIONS
    content_type = mimetypes.guess_type(filename)[0] or "application/octet-stream"
    try:
        stream = field_file.open("rb")
    except OSError as exc:
        raise NotFound("Fayl serverda mavjud emas. Administratorga murojaat qiling.") from exc
    response = FileResponse(stream, as_attachment=as_attachment, filename=filename, content_type=content_type)
    response["X-Content-Type-Options"] = "nosniff"
    return mark_private(response)
