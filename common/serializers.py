from pathlib import PurePosixPath
from urllib.parse import urlencode

from django.urls import reverse
from rest_framework import serializers


def protected_file_url(instance, field_name, route_name):
    stored_file = getattr(instance, field_name)
    if not stored_file or not stored_file.name:
        return None
    file_url = reverse(route_name, kwargs={"pk": instance.pk})
    filename = PurePosixPath(stored_file.name).name
    return f"{file_url}?{urlencode({'filename': filename})}"


class FileAvailabilityField(serializers.Field):
    def to_representation(self, value):
        if not value or not value.name:
            return False
        try:
            return value.storage.exists(value.name)
        except Exception:
            return False
