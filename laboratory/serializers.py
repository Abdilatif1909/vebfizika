from rest_framework import serializers

from laboratory.models import LabExperiment, LabReport


class LabExperimentSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabExperiment
        fields = "__all__"


class LabReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabReport
        fields = "__all__"
