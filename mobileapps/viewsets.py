from rest_framework import viewsets

from mobileapps.models import MobileApp, MobileAppRelease
from mobileapps.serializers import MobileAppReleaseSerializer, MobileAppSerializer


class MobileAppViewSet(viewsets.ModelViewSet):
    queryset = MobileApp.objects.all()
    serializer_class = MobileAppSerializer
    search_fields = ["name", "description", "platform", "package_name"]
    ordering_fields = ["name", "created_at", "platform"]


class MobileAppReleaseViewSet(viewsets.ModelViewSet):
    queryset = MobileAppRelease.objects.select_related("app").all()
    serializer_class = MobileAppReleaseSerializer
    search_fields = ["app__name", "version", "release_notes"]
    ordering_fields = ["released_at", "created_at", "build_number"]
