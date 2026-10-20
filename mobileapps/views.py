import re
from pathlib import Path

from django.conf import settings
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from mobileapps.serializers import AvailableMobileAppSerializer


def format_file_size(size_in_bytes):
	size = float(size_in_bytes)
	units = ["B", "KB", "MB", "GB"]
	unit_index = 0
	while size >= 1024 and unit_index < len(units) - 1:
		size /= 1024
		unit_index += 1
	if unit_index == 0:
		return f"{int(size)} {units[unit_index]}"
	return f"{size:.1f} {units[unit_index]}"


def extract_version(filename):
	match = re.search(r"(?:v)?(\d+(?:\.\d+){1,3})", filename, re.IGNORECASE)
	return f"v{match.group(1)}" if match else "v1.0.0"


class AvailableMobileAppView(APIView):
	permission_classes = [permissions.AllowAny]

	def get(self, request, *args, **kwargs):
		apk_dir = Path(settings.MEDIA_ROOT) / "mobili" / "apk"
		if not apk_dir.exists():
			return Response({"detail": "APK papkasi topilmadi."}, status=status.HTTP_404_NOT_FOUND)

		apk_files = sorted(
			[item for item in apk_dir.iterdir() if item.is_file() and item.suffix.lower() == ".apk"],
			key=lambda item: item.stat().st_mtime,
			reverse=True,
		)

		if not apk_files:
			return Response({"detail": "APK fayli topilmadi."}, status=status.HTTP_404_NOT_FOUND)

		apk_file = apk_files[0]
		relative_path = f"{settings.MEDIA_URL.rstrip('/')}/mobili/apk/{apk_file.name}"
		payload = {
			"name": apk_file.name,
			"url": request.build_absolute_uri(relative_path),
			"size": format_file_size(apk_file.stat().st_size),
			"version": extract_version(apk_file.name),
			"platform": "android",
			"platformLabel": "Android 8+",
		}
		serializer = AvailableMobileAppSerializer(payload)
		return Response(serializer.data)
