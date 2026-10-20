from pathlib import Path
from urllib.parse import quote

from django.conf import settings
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class AvailableVideoFilesView(APIView):
	permission_classes = [AllowAny]

	def get(self, request):
		video_dir = Path(settings.MEDIA_ROOT) / "vedio"
		if not video_dir.exists():
			return Response([])

		items = []
		for file_path in sorted(video_dir.iterdir(), key=lambda item: item.name.lower()):
			if not file_path.is_file() or file_path.suffix.lower() != ".mp4":
				continue
			encoded_name = quote(file_path.name)
			items.append(
				{
					"name": file_path.name,
					"url": request.build_absolute_uri(f"{settings.MEDIA_URL}vedio/{encoded_name}"),
				}
			)

		return Response(items)
