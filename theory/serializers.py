from rest_framework import serializers

from common.serializers import FileAvailabilityField, protected_file_url
from theory.models import TheoryLesson, TheoryLessonProgress, TheoryTopic


class TheoryTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = TheoryTopic
        fields = "__all__"


class TheoryLessonSerializer(serializers.ModelSerializer):
    attachment_available = FileAvailabilityField(source="attachment", read_only=True)

    class Meta:
        model = TheoryLesson
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["attachment"] = protected_file_url(instance, "attachment", "theory_lesson_file")
        return representation


class TheoryLessonProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = TheoryLessonProgress
        fields = "__all__"
