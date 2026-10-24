from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView

from common.file_responses import file_response
from theory.access import can_access_theory_lesson
from theory.models import TheoryLesson


class TheoryLessonFileView(APIView):
    def get(self, request, pk, *args, **kwargs):
        lesson = get_object_or_404(
            TheoryLesson.objects.select_related("course", "course__teacher"),
            pk=pk,
        )
        if not can_access_theory_lesson(request.user, lesson):
            raise Http404
        return file_response(request, lesson.attachment)
