from pathlib import Path

from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models import Avg, Count, F, Q
from django.utils import timezone
from django.utils.text import slugify
from rest_framework import permissions, status
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

from dashboard.models import ActivityLog, Announcement, DashboardMetric, StudentActivityAnalytics
from dashboard.serializers import (
	ActivityLogSerializer,
	AdminDocumentSerializer,
	AdminSubjectSerializer,
	AdminUserSerializer,
	AdminVideoSerializer,
	AnnouncementSerializer,
	DashboardMetricSerializer,
	StudentCertificateSerializer,
	StudentDashboardStatsSerializer,
	StudentEnrollmentSerializer,
	StudentProfileStatsSerializer,
	StudentActivityTrackSerializer,
	StudentLabReportSerializer,
	StudentPracticalSubmissionSerializer,
	StudentTestAttemptSerializer,
	StudentTheoryProgressSerializer,
	StudentVideoProgressSerializer,
	TeacherLabExperimentSerializer,
	TeacherPracticalAssignmentSerializer,
	TeacherStudentSubmissionSerializer,
	TeacherTestResultSerializer,
	TeacherTestSerializer,
	TeacherTheoryLessonSerializer,
	TeacherVideoSerializer,
)
from documents.models import Document
from laboratory.models import LabExperiment, LabReport
from practical.models import PracticalAssignment, PracticalSubmission
from simulations.models import Simulation, SimulationProgress
from subjects.models import Certificate, Enrollment, Subject
from testsystem.models import Test, TestAttempt
from theory.models import TheoryLesson, TheoryLessonProgress, TheoryTopic
from videos.models import Video, VideoProgress

User = get_user_model()


class StudentOnlyPermission(permissions.BasePermission):
	def has_permission(self, request, view):
		return bool(request.user and request.user.is_authenticated and getattr(request.user, "role", "") == "student")


class TeacherOnlyPermission(permissions.BasePermission):
	def has_permission(self, request, view):
		return bool(request.user and request.user.is_authenticated and getattr(request.user, "role", "") == "teacher")


class AdminOnlyPermission(permissions.BasePermission):
	def has_permission(self, request, view):
		user = request.user
		return bool(user and user.is_authenticated and (user.is_staff or getattr(user, "role", "") == "admin"))


def unique_slug_for_model(model, title):
	base_slug = slugify(title)[:50] or "item"
	slug = base_slug
	counter = 2
	while model.objects.filter(slug=slug).exists():
		suffix = f"-{counter}"
		slug = f"{base_slug[: max(1, 50 - len(suffix))]}{suffix}"
		counter += 1
	return slug


def get_student_course_ids(user):
	return list(
		Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE)
		.values_list("course_id", flat=True)
	)


def get_student_subject_ids(user):
	return list(
		Enrollment.objects.filter(user=user, status=Enrollment.Status.ACTIVE)
		.values_list("course__subject_id", flat=True)
		.distinct()
	)


def get_video_library_count():
	video_dir = Path(settings.MEDIA_ROOT) / "vedio"
	if not video_dir.exists():
		return 0
	return sum(1 for item in video_dir.iterdir() if item.is_file() and item.suffix.lower() == ".mp4")


def create_student_activity(user, activity_type, payload):
	activity = StudentActivityAnalytics.objects.create(
		user=user,
		activity_type=activity_type,
		resource_id=payload.get("resource_id", ""),
		resource_title=payload.get("resource_title", ""),
		score_percentage=payload.get("score_percentage"),
		xp_points=payload.get("xp_points") or 0,
		metadata=payload.get("metadata") or {},
	)

	action_labels = {
		StudentActivityAnalytics.ActivityType.VIDEO: "Video ko'rildi",
		StudentActivityAnalytics.ActivityType.TEST: "Test yakunlandi",
		StudentActivityAnalytics.ActivityType.SIMULATION: "Simulatsiya ochildi",
		StudentActivityAnalytics.ActivityType.THEORY: "Nazariy dars ochildi",
		StudentActivityAnalytics.ActivityType.DOCUMENT: "Hujjat ochildi yoki yuklab olindi",
	}

	ActivityLog.objects.create(
		actor=user,
		action=action_labels.get(activity_type, "Talaba faolligi qayd etildi"),
		target_type=activity_type,
		target_id=payload.get("resource_id", ""),
		metadata={
			"title": payload.get("resource_title", ""),
			"score_percentage": payload.get("score_percentage"),
			"xp_points": payload.get("xp_points") or 0,
			**(payload.get("metadata") or {}),
		},
	)
	return activity


class StudentEnrollmentListView(APIView):
	permission_classes = [StudentOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = Enrollment.objects.select_related("course", "course__subject", "course__teacher").filter(user=request.user)
		return Response(StudentEnrollmentSerializer(queryset, many=True).data)


class StudentTheoryProgressListView(APIView):
	permission_classes = [StudentOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = TheoryLessonProgress.objects.select_related("lesson", "lesson__topic", "lesson__course").filter(student=request.user)
		return Response(StudentTheoryProgressSerializer(queryset, many=True).data)


class StudentPracticalSubmissionListView(APIView):
	permission_classes = [StudentOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = PracticalSubmission.objects.select_related("assignment", "assignment__course").filter(student=request.user)
		return Response(StudentPracticalSubmissionSerializer(queryset, many=True).data)


class StudentLabReportListView(APIView):
	permission_classes = [StudentOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = LabReport.objects.select_related("experiment", "experiment__course").filter(student=request.user)
		return Response(StudentLabReportSerializer(queryset, many=True).data)


class StudentVideoProgressListView(APIView):
	permission_classes = [StudentOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = VideoProgress.objects.select_related("video", "video__course").filter(user=request.user)
		return Response(StudentVideoProgressSerializer(queryset, many=True).data)


class StudentTestAttemptListView(APIView):
	permission_classes = [StudentOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = TestAttempt.objects.select_related("test", "test__course").filter(student=request.user)
		return Response(StudentTestAttemptSerializer(queryset, many=True).data)


class StudentCertificateListView(APIView):
	permission_classes = [StudentOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = Certificate.objects.select_related("course").filter(student=request.user)
		return Response(StudentCertificateSerializer(queryset, many=True).data)


class StudentDashboardStatsView(APIView):
	permission_classes = [StudentOnlyPermission]

	def get(self, request, *args, **kwargs):
		course_ids = get_student_course_ids(request.user)
		subject_ids = get_student_subject_ids(request.user)

		documents_count = Document.objects.filter(
			Q(access_level=Document.AccessLevel.PUBLIC)
			| Q(course_id__in=course_ids)
			| Q(subject_id__in=subject_ids)
		).distinct().count()

		tests_count = Test.objects.filter(Q(published=True) | Q(course_id__in=course_ids) | Q(subject_id__in=subject_ids)).distinct().count()

		payload = {
			"subjects_count": len(subject_ids),
			"documents_count": documents_count,
			"videos_count": get_video_library_count(),
			"tests_count": tests_count,
			"activity_count": StudentActivityAnalytics.objects.filter(user=request.user).count(),
		}
		return Response(StudentDashboardStatsSerializer(payload).data)


class StudentProfileStatsView(APIView):
	permission_classes = [StudentOnlyPermission]

	def get(self, request, *args, **kwargs):
		student = request.user
		enrollments = Enrollment.objects.filter(user=student, status=Enrollment.Status.ACTIVE)
		certificates_count = Certificate.objects.filter(student=student).count()
		practical_submissions = PracticalSubmission.objects.filter(student=student).count()
		lab_reports = LabReport.objects.filter(student=student).count()
		analytics = StudentActivityAnalytics.objects.filter(user=student)

		tracked_theory_count = analytics.filter(activity_type=StudentActivityAnalytics.ActivityType.THEORY).exclude(resource_id="").values("resource_id").distinct().count()
		completed_lessons = max(
			TheoryLessonProgress.objects.filter(student=student, completed=True).count(),
			tracked_theory_count,
		)

		tracked_video_count = analytics.filter(activity_type=StudentActivityAnalytics.ActivityType.VIDEO).exclude(resource_id="").values("resource_id").distinct().count()
		tracked_video_title_count = analytics.filter(activity_type=StudentActivityAnalytics.ActivityType.VIDEO, resource_id="").exclude(resource_title="").values("resource_title").distinct().count()
		watched_videos = VideoProgress.objects.filter(user=student, completed=True).count() + tracked_video_count + tracked_video_title_count

		backend_attempts = list(TestAttempt.objects.filter(student=student).values_list("percentage", flat=True))
		tracked_attempts_qs = analytics.filter(activity_type=StudentActivityAnalytics.ActivityType.TEST)
		tracked_attempts = list(tracked_attempts_qs.exclude(score_percentage__isnull=True).values_list("score_percentage", flat=True))
		all_scores = [float(value) for value in backend_attempts + tracked_attempts if value is not None]
		average_test_score = round(sum(all_scores) / len(all_scores)) if all_scores else 0

		payload = {
			"enrolled_subjects": enrollments.values("course__subject_id").distinct().count(),
			"completed_lessons": completed_lessons,
			"average_test_score": average_test_score,
			"certificates": certificates_count,
			"watched_videos": watched_videos,
			"test_attempts": TestAttempt.objects.filter(student=student).count() + tracked_attempts_qs.count(),
			"practical_submissions": practical_submissions,
			"lab_reports": lab_reports,
		}
		return Response(StudentProfileStatsSerializer(payload).data)


class BaseStudentTrackView(APIView):
	permission_classes = [StudentOnlyPermission]
	activity_type = None

	def post(self, request, *args, **kwargs):
		serializer = StudentActivityTrackSerializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		payload = serializer.validated_data
		activity = create_student_activity(request.user, self.activity_type, payload)
		self.perform_side_effects(request.user, payload)
		return Response({"status": "ok", "id": activity.id}, status=status.HTTP_201_CREATED)

	def perform_side_effects(self, user, payload):
		return None


class StudentTrackVideoView(BaseStudentTrackView):
	activity_type = StudentActivityAnalytics.ActivityType.VIDEO


class StudentTrackTestView(BaseStudentTrackView):
	activity_type = StudentActivityAnalytics.ActivityType.TEST


class StudentTrackSimulationView(BaseStudentTrackView):
	activity_type = StudentActivityAnalytics.ActivityType.SIMULATION

	def perform_side_effects(self, user, payload):
		resource_id = str(payload.get("resource_id") or "").strip()
		if not resource_id.isdigit():
			return
		try:
			simulation = Simulation.objects.get(pk=int(resource_id))
		except Simulation.DoesNotExist:
			return
		progress, _ = SimulationProgress.objects.get_or_create(user=user, simulation=simulation)
		progress.attempts += 1
		progress.save(update_fields=["attempts", "updated_at"])


class StudentTrackTheoryView(BaseStudentTrackView):
	activity_type = StudentActivityAnalytics.ActivityType.THEORY

	def perform_side_effects(self, user, payload):
		resource_id = str(payload.get("resource_id") or "").strip()
		if not resource_id.isdigit():
			return
		try:
			lesson = TheoryLesson.objects.get(pk=int(resource_id))
		except TheoryLesson.DoesNotExist:
			return
		progress, created = TheoryLessonProgress.objects.get_or_create(student=user, lesson=lesson)
		if created or not progress.completed:
			progress.completed = True
			progress.completed_at = timezone.now()
			progress.save(update_fields=["completed", "completed_at", "updated_at"])


class StudentTrackDocumentView(BaseStudentTrackView):
	activity_type = StudentActivityAnalytics.ActivityType.DOCUMENT

	def perform_side_effects(self, user, payload):
		resource_id = str(payload.get("resource_id") or "").strip()
		if not resource_id.isdigit():
			return
		try:
			document = Document.objects.get(pk=int(resource_id))
		except Document.DoesNotExist:
			return
		Document.objects.filter(pk=document.pk).update(downloads_count=F("downloads_count") + 1)
		document.refresh_from_db(fields=["downloads_count"])
		from documents.models import DocumentDownload

		DocumentDownload.objects.create(document=document, user=user)


class TeacherTheoryLessonListCreateView(APIView):
	permission_classes = [TeacherOnlyPermission]
	parser_classes = [JSONParser, FormParser, MultiPartParser]

	def get(self, request, *args, **kwargs):
		queryset = TheoryLesson.objects.select_related("subject", "course", "topic", "module").filter(author=request.user)
		return Response(TeacherTheoryLessonSerializer(queryset, many=True).data)

	def post(self, request, *args, **kwargs):
		topic = TheoryTopic.objects.select_related("course", "subject").get(pk=request.data.get("topic"))
		lesson = TheoryLesson.objects.create(
			subject=topic.subject,
			course=topic.course,
			topic=topic,
			module_id=request.data.get("module") or None,
			author=request.user,
			title=request.data.get("title", "").strip(),
			slug=unique_slug_for_model(TheoryLesson, request.data.get("title", "lesson")),
			content=request.data.get("content", "").strip(),
			estimated_minutes=request.data.get("estimated_minutes") or 10,
			order=request.data.get("order") or 0,
			published=str(request.data.get("published", "false")).lower() == "true",
		)
		return Response(TeacherTheoryLessonSerializer(lesson).data, status=status.HTTP_201_CREATED)


class TeacherPracticalAssignmentListCreateView(APIView):
	permission_classes = [TeacherOnlyPermission]
	parser_classes = [JSONParser, FormParser, MultiPartParser]

	def get(self, request, *args, **kwargs):
		queryset = PracticalAssignment.objects.select_related("course", "module").filter(teacher=request.user)
		return Response(TeacherPracticalAssignmentSerializer(queryset, many=True).data)

	def post(self, request, *args, **kwargs):
		course_id = request.data.get("course")
		assignment = PracticalAssignment.objects.create(
			subject_id=request.data.get("subject") or None,
			course_id=course_id,
			module_id=request.data.get("module") or None,
			teacher=request.user,
			title=request.data.get("title", "").strip(),
			slug=unique_slug_for_model(PracticalAssignment, request.data.get("title", "assignment")),
			instructions=request.data.get("instructions", "").strip(),
			attachment=request.data.get("attachment"),
			due_at=request.data.get("due_at") or None,
			max_score=request.data.get("max_score") or 100,
			published=str(request.data.get("published", "false")).lower() == "true",
		)
		return Response(TeacherPracticalAssignmentSerializer(assignment).data, status=status.HTTP_201_CREATED)


class TeacherLaboratoryListCreateView(APIView):
	permission_classes = [TeacherOnlyPermission]
	parser_classes = [JSONParser, FormParser, MultiPartParser]

	def get(self, request, *args, **kwargs):
		queryset = LabExperiment.objects.select_related("course", "module").filter(course__teacher=request.user)
		return Response(TeacherLabExperimentSerializer(queryset, many=True).data)

	def post(self, request, *args, **kwargs):
		experiment = LabExperiment.objects.create(
			subject_id=request.data.get("subject") or None,
			course_id=request.data.get("course"),
			module_id=request.data.get("module") or None,
			title=request.data.get("title", "").strip(),
			slug=unique_slug_for_model(LabExperiment, request.data.get("title", "laboratory")),
			objective=request.data.get("objective", "").strip(),
			equipment=request.data.get("equipment", "").strip(),
			safety_notes=request.data.get("safety_notes", "").strip(),
			procedure=request.data.get("procedure", "").strip(),
			expected_result=request.data.get("expected_result", "").strip(),
			max_score=request.data.get("max_score") or 100,
			published=str(request.data.get("published", "false")).lower() == "true",
		)
		return Response(TeacherLabExperimentSerializer(experiment).data, status=status.HTTP_201_CREATED)


class TeacherVideoLessonListCreateView(APIView):
	permission_classes = [TeacherOnlyPermission]
	parser_classes = [JSONParser, FormParser, MultiPartParser]

	def get(self, request, *args, **kwargs):
		queryset = Video.objects.select_related("course", "subject").filter(Q(author=request.user) | Q(course__teacher=request.user)).distinct()
		return Response(TeacherVideoSerializer(queryset, many=True).data)

	def post(self, request, *args, **kwargs):
		video = Video.objects.create(
			subject_id=request.data.get("subject") or None,
			course_id=request.data.get("course") or None,
			module_id=request.data.get("module") or None,
			author=request.user,
			title=request.data.get("title", "").strip(),
			slug=unique_slug_for_model(Video, request.data.get("title", "video")),
			description=request.data.get("description", "").strip(),
			video_file=request.data.get("video_file"),
			external_url=request.data.get("external_url", "").strip(),
			thumbnail=request.data.get("thumbnail"),
			duration_seconds=request.data.get("duration_seconds") or 0,
			published=str(request.data.get("published", "false")).lower() == "true",
		)
		return Response(TeacherVideoSerializer(video).data, status=status.HTTP_201_CREATED)


class TeacherTestListCreateView(APIView):
	permission_classes = [TeacherOnlyPermission]
	parser_classes = [JSONParser, FormParser, MultiPartParser]

	def get(self, request, *args, **kwargs):
		queryset = Test.objects.select_related("course", "subject").filter(course__teacher=request.user)
		return Response(TeacherTestSerializer(queryset, many=True).data)

	def post(self, request, *args, **kwargs):
		test = Test.objects.create(
			subject_id=request.data.get("subject") or None,
			course_id=request.data.get("course"),
			module_id=request.data.get("module") or None,
			title=request.data.get("title", "").strip(),
			slug=unique_slug_for_model(Test, request.data.get("title", "test")),
			description=request.data.get("description", "").strip(),
			duration_minutes=request.data.get("duration_minutes") or 30,
			passing_score=request.data.get("passing_score") or 60,
			published=str(request.data.get("published", "false")).lower() == "true",
		)
		return Response(TeacherTestSerializer(test).data, status=status.HTTP_201_CREATED)


class TeacherStudentSubmissionListView(APIView):
	permission_classes = [TeacherOnlyPermission]

	def get(self, request, *args, **kwargs):
		practicals = [
			{
				"id": f"practical-{item.id}",
				"submission_type": "practical",
				"title": item.assignment.title,
				"course_title": item.assignment.course.title,
				"learner_name": item.student.get_full_name() or item.student.username,
				"status": item.status,
				"submitted_at": item.submitted_at,
				"score": item.score,
			}
			for item in PracticalSubmission.objects.select_related("assignment", "assignment__course", "student").filter(assignment__teacher=request.user)
		]
		labs = [
			{
				"id": f"lab-{item.id}",
				"submission_type": "laboratory",
				"title": item.experiment.title,
				"course_title": item.experiment.course.title,
				"learner_name": item.student.get_full_name() or item.student.username,
				"status": item.status,
				"submitted_at": item.submitted_at,
				"score": item.score,
			}
			for item in LabReport.objects.select_related("experiment", "experiment__course", "student").filter(experiment__course__teacher=request.user)
		]
		rows = sorted(practicals + labs, key=lambda item: item["submitted_at"] or item["id"], reverse=True)
		return Response(TeacherStudentSubmissionSerializer(rows, many=True).data)


class TeacherTestResultsListView(APIView):
	permission_classes = [TeacherOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = TestAttempt.objects.select_related("test", "test__course", "student").filter(test__course__teacher=request.user)
		rows = [
			{
				"id": item.id,
				"test_title": item.test.title,
				"course_title": item.test.course.title,
				"student_name": item.student.get_full_name() or item.student.username,
				"status": item.status,
				"score": item.score,
				"max_score": item.max_score,
				"percentage": item.percentage,
				"passed": item.passed,
				"submitted_at": item.submitted_at,
			}
			for item in queryset
		]
		return Response(TeacherTestResultSerializer(rows, many=True).data)


class DashboardSummaryView(APIView):
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, *args, **kwargs):
		user = request.user
		role = getattr(user, "role", "guest")

		announcements_qs = Announcement.objects.select_related("subject").all()[:5]
		activity_qs = ActivityLog.objects.select_related("actor").all()[:8]
		if role == "student":
			activity_qs = ActivityLog.objects.select_related("actor").filter(actor=user)[:8]

		base_payload = {
			"role": role,
			"announcements": AnnouncementSerializer(announcements_qs, many=True).data,
			"activity": ActivityLogSerializer(activity_qs, many=True).data,
		}

		if role == "student":
			enrollments = Enrollment.objects.filter(user=user)
			theory_progress = TheoryLessonProgress.objects.filter(student=user, completed=True)
			practicals = PracticalSubmission.objects.filter(student=user)
			labs = LabReport.objects.filter(student=user)
			videos = VideoProgress.objects.filter(user=user)
			attempts = TestAttempt.objects.filter(student=user)
			certificates = Certificate.objects.filter(student=user)
			average_test_score = attempts.aggregate(avg=Avg("percentage"))["avg"] or 0

			return Response(
				{
					**base_payload,
					"counts": {
						"enrollments": enrollments.count(),
						"completed_lessons": theory_progress.count(),
						"practical_submissions": practicals.count(),
						"lab_reports": labs.count(),
						"watched_videos": videos.filter(completed=True).count(),
						"test_attempts": attempts.count(),
						"certificates": certificates.count(),
					},
					"metrics": {
						"average_test_score": round(average_test_score, 2),
						"video_completion_rate": round(videos.aggregate(avg=Avg("watched_seconds"))["avg"] or 0, 2),
					},
				}
			)

		if role == "teacher":
			lessons = TheoryLesson.objects.filter(author=user)
			practicals = PracticalAssignment.objects.filter(teacher=user)
			labs = LabExperiment.objects.filter(course__teacher=user)
			videos = Video.objects.filter(Q(author=user) | Q(course__teacher=user)).distinct()
			tests = Test.objects.filter(course__teacher=user)
			submissions = PracticalSubmission.objects.filter(assignment__teacher=user, status__in=["submitted", "returned"]).count()
			lab_reports = LabReport.objects.filter(experiment__course__teacher=user, status__in=["submitted", "revision_required"]).count()
			results = TestAttempt.objects.filter(test__course__teacher=user)
			enrollments = Enrollment.objects.filter(course__teacher=user)

			return Response(
				{
					**base_payload,
					"counts": {
						"uploaded_lessons": lessons.count() + practicals.count() + labs.count() + videos.count(),
						"pending_practical_submissions": submissions,
						"pending_lab_reports": lab_reports,
						"tests": tests.count(),
						"active_students": enrollments.values("user").distinct().count(),
					},
					"metrics": {
						"average_test_score": round(results.aggregate(avg=Avg("percentage"))["avg"] or 0, 2),
						"pass_rate": round(results.filter(passed=True).count() / results.count() * 100, 2) if results.exists() else 0,
					},
				}
			)

		if role == "admin" or user.is_staff:
			DashboardMetric.refresh_metrics()
			return Response(
				{
					**base_payload,
					"counts": {
						"total_users": User.objects.count(),
						"total_students": User.objects.filter(role="student").count(),
						"total_teachers": User.objects.filter(role="teacher").count(),
						"total_subjects": Subject.objects.count(),
						"total_documents": Document.objects.count(),
						"total_videos": Video.objects.count(),
						"total_tests": Test.objects.count(),
					},
					"metrics": DashboardMetricSerializer(DashboardMetric.objects.all()[:8], many=True).data,
				}
			)

		return Response(
			{
				**base_payload,
				"counts": {
					"subjects": Subject.objects.count(),
					"documents": Document.objects.filter(access_level="public").count(),
					"videos": Video.objects.filter(published=True).count(),
					"tests": Test.objects.filter(published=True).count(),
				},
			}
		)


class AdminUsersListView(APIView):
	permission_classes = [AdminOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = User.objects.all().order_by("-date_joined")
		return Response(AdminUserSerializer(queryset, many=True).data)


class AdminSubjectsListView(APIView):
	permission_classes = [AdminOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = Subject.objects.select_related("owner").prefetch_related("courses").all()
		return Response(AdminSubjectSerializer(queryset, many=True).data)


class AdminDocumentsListView(APIView):
	permission_classes = [AdminOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = Document.objects.select_related("category", "course", "uploaded_by").all()
		return Response(AdminDocumentSerializer(queryset, many=True).data)


class AdminVideosListView(APIView):
	permission_classes = [AdminOnlyPermission]

	def get(self, request, *args, **kwargs):
		queryset = Video.objects.select_related("course", "author").all()
		return Response(AdminVideoSerializer(queryset, many=True).data)
