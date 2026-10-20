from rest_framework import serializers

from theory.models import TheoryLesson, TheoryLessonProgress, TheoryTopic


class TheoryTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = TheoryTopic
        fields = "__all__"


class TheoryLessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = TheoryLesson
        fields = "__all__"


class TheoryLessonProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = TheoryLessonProgress
        fields = "__all__"
