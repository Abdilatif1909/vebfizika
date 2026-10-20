from rest_framework import serializers

from practical.models import PracticalAssignment, PracticalSubmission


class PracticalAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PracticalAssignment
        fields = "__all__"


class PracticalSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PracticalSubmission
        fields = "__all__"
