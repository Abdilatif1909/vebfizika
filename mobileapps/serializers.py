from rest_framework import serializers

from mobileapps.models import MobileApp, MobileAppRelease


class MobileAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = MobileApp
        fields = "__all__"


class MobileAppReleaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = MobileAppRelease
        fields = "__all__"


class AvailableMobileAppSerializer(serializers.Serializer):
    name = serializers.CharField()
    url = serializers.URLField()
    size = serializers.CharField()
    version = serializers.CharField()
    platform = serializers.CharField(required=False, default="android")
    platformLabel = serializers.CharField(required=False, default="Android 8+")
