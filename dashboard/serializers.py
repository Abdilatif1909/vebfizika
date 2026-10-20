from django.contrib.auth import get_user_model
from rest_framework import serializers

from dashboard.models import ActivityLog, Announcement, DashboardMetric, StudentActivityAnalytics
from documents.models import Document
from laboratory.models import LabExperiment, LabReport
from practical.models import PracticalAssignment, PracticalSubmission
from subjects.models import Certificate, Enrollment, Subject
from testsystem.models import Test, TestAttempt
from theory.models import TheoryLesson, TheoryLessonProgress
from videos.models import Video, VideoProgress

User = get_user_model()


class AnnouncementSerializer(serializers.ModelSerializer):
    subject_title = serializers.CharField(source="subject.title", read_only=True)

    class Meta:
        model = Announcement
        fields = "__all__"


class DashboardMetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = DashboardMetric
        fields = "__all__"


class ActivityLogSerializer(serializers.ModelSerializer):
    actor_name = serializers.SerializerMethodField()

    class Meta:
        model = ActivityLog
        fields = "__all__"

    def get_actor_name(self, obj):
        if not obj.actor:
            return "System"
        return obj.actor.get_full_name() or obj.actor.username


class StudentActivityAnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentActivityAnalytics
        fields = "__all__"
        read_only_fields = ["user"]


class StudentDashboardStatsSerializer(serializers.Serializer):
    subjects_count = serializers.IntegerField()
    documents_count = serializers.IntegerField()
    videos_count = serializers.IntegerField()
    tests_count = serializers.IntegerField()
    activity_count = serializers.IntegerField()


class StudentProfileStatsSerializer(serializers.Serializer):
    enrolled_subjects = serializers.IntegerField()
    completed_lessons = serializers.IntegerField()
    average_test_score = serializers.IntegerField()
    certificates = serializers.IntegerField()
    watched_videos = serializers.IntegerField()
    test_attempts = serializers.IntegerField()
    practical_submissions = serializers.IntegerField()
    lab_reports = serializers.IntegerField()


class StudentActivityTrackSerializer(serializers.Serializer):
    resource_id = serializers.CharField(required=False, allow_blank=True, max_length=120)
    resource_title = serializers.CharField(required=False, allow_blank=True, max_length=255)
    score_percentage = serializers.DecimalField(required=False, allow_null=True, max_digits=5, decimal_places=2, min_value=0, max_value=100)
    xp_points = serializers.IntegerField(required=False, min_value=0)
    metadata = serializers.JSONField(required=False)


class StudentEnrollmentSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)
    subject_title = serializers.CharField(source="course.subject.title", read_only=True)
    teacher_name = serializers.SerializerMethodField()

    class Meta:
        model = Enrollment
        fields = [
            "id",
            "course",
            "course_title",
            "subject_title",
            "teacher_name",
            "progress",
            "status",
            "last_accessed_at",
            "completed_at",
            "created_at",
        ]

    def get_teacher_name(self, obj):
        teacher = getattr(obj.course, "teacher", None)
        if not teacher:
            return "—"
        return teacher.get_full_name() or teacher.username


class StudentTheoryProgressSerializer(serializers.ModelSerializer):
    lesson_title = serializers.CharField(source="lesson.title", read_only=True)
    topic_title = serializers.CharField(source="lesson.topic.title", read_only=True)
    course_title = serializers.CharField(source="lesson.course.title", read_only=True)

    class Meta:
        model = TheoryLessonProgress
        fields = ["id", "lesson", "lesson_title", "topic_title", "course_title", "completed", "completed_at", "updated_at"]


class StudentPracticalSubmissionSerializer(serializers.ModelSerializer):
    assignment_title = serializers.CharField(source="assignment.title", read_only=True)
    course_title = serializers.CharField(source="assignment.course.title", read_only=True)

    class Meta:
        model = PracticalSubmission
        fields = [
            "id",
            "assignment",
            "assignment_title",
            "course_title",
            "status",
            "score",
            "feedback",
            "submitted_at",
            "reviewed_at",
        ]


class StudentLabReportSerializer(serializers.ModelSerializer):
    experiment_title = serializers.CharField(source="experiment.title", read_only=True)
    course_title = serializers.CharField(source="experiment.course.title", read_only=True)

    class Meta:
        model = LabReport
        fields = [
            "id",
            "experiment",
            "experiment_title",
            "course_title",
            "status",
            "score",
            "grade",
            "feedback",
            "submitted_at",
            "reviewed_at",
        ]


class StudentVideoProgressSerializer(serializers.ModelSerializer):
    video_title = serializers.CharField(source="video.title", read_only=True)
    course_title = serializers.CharField(source="video.course.title", read_only=True)
    duration_seconds = serializers.IntegerField(source="video.duration_seconds", read_only=True)
    watched_percentage = serializers.SerializerMethodField()

    class Meta:
        model = VideoProgress
        fields = [
            "id",
            "video",
            "video_title",
            "course_title",
            "watched_seconds",
            "duration_seconds",
            "watched_percentage",
            "completed",
            "updated_at",
        ]

    def get_watched_percentage(self, obj):
        duration = getattr(obj.video, "duration_seconds", 0) or 0
        if duration <= 0:
            return 0
        return round((obj.watched_seconds / duration) * 100, 2)


class StudentTestAttemptSerializer(serializers.ModelSerializer):
    test_title = serializers.CharField(source="test.title", read_only=True)
    course_title = serializers.CharField(source="test.course.title", read_only=True)

    class Meta:
        model = TestAttempt
        fields = [
            "id",
            "test",
            "test_title",
            "course_title",
            "status",
            "score",
            "max_score",
            "percentage",
            "passed",
            "started_at",
            "submitted_at",
        ]


class StudentCertificateSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)

    class Meta:
        model = Certificate
        fields = ["id", "course", "course_title", "status", "completion_percentage", "issued_at", "certificate_file"]


class TeacherTheoryLessonSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)
    subject_title = serializers.CharField(source="subject.title", read_only=True)

    class Meta:
        model = TheoryLesson
        fields = [
            "id",
            "title",
            "slug",
            "subject",
            "subject_title",
            "course",
            "course_title",
            "topic",
            "module",
            "estimated_minutes",
            "published",
            "created_at",
            "updated_at",
        ]


class TeacherPracticalAssignmentSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)

    class Meta:
        model = PracticalAssignment
        fields = [
            "id",
            "title",
            "slug",
            "course",
            "course_title",
            "module",
            "due_at",
            "max_score",
            "published",
            "created_at",
        ]


class TeacherLabExperimentSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)

    class Meta:
        model = LabExperiment
        fields = ["id", "title", "slug", "course", "course_title", "module", "max_score", "published", "created_at"]


class TeacherVideoSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)

    class Meta:
        model = Video
        fields = ["id", "title", "slug", "course", "course_title", "duration_seconds", "published", "created_at"]


class TeacherTestSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)

    class Meta:
        model = Test
        fields = ["id", "title", "slug", "course", "course_title", "duration_minutes", "passing_score", "published", "created_at"]


class TeacherStudentSubmissionSerializer(serializers.Serializer):
    id = serializers.CharField()
    submission_type = serializers.CharField()
    title = serializers.CharField()
    course_title = serializers.CharField()
    learner_name = serializers.CharField()
    status = serializers.CharField()
    submitted_at = serializers.DateTimeField(allow_null=True)
    score = serializers.DecimalField(max_digits=6, decimal_places=2, allow_null=True)


class TeacherTestResultSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    test_title = serializers.CharField()
    course_title = serializers.CharField()
    student_name = serializers.CharField()
    status = serializers.CharField()
    score = serializers.DecimalField(max_digits=6, decimal_places=2)
    max_score = serializers.DecimalField(max_digits=6, decimal_places=2)
    percentage = serializers.DecimalField(max_digits=5, decimal_places=2)
    passed = serializers.BooleanField()
    submitted_at = serializers.DateTimeField(allow_null=True)


class AdminUserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["id", "username", "full_name", "email", "role", "is_active", "date_joined"]

    def get_full_name(self, obj):
        return obj.get_full_name() or obj.username


class AdminSubjectSerializer(serializers.ModelSerializer):
    owner_name = serializers.SerializerMethodField()
    courses_count = serializers.IntegerField(source="courses.count", read_only=True)

    class Meta:
        model = Subject
        fields = ["id", "title", "slug", "owner_name", "courses_count", "created_at"]

    def get_owner_name(self, obj):
        owner = obj.owner
        if not owner:
            return "—"
        return owner.get_full_name() or owner.username


class AdminDocumentSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source="category.name", read_only=True)
    course_title = serializers.CharField(source="course.title", read_only=True)
    uploader_name = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ["id", "title", "slug", "category_name", "course_title", "uploader_name", "access_level", "downloads_count", "created_at"]

    def get_uploader_name(self, obj):
        uploader = obj.uploaded_by
        if not uploader:
            return "—"
        return uploader.get_full_name() or uploader.username


class AdminVideoSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)
    author_name = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = ["id", "title", "slug", "course_title", "author_name", "published", "duration_seconds", "created_at"]

    def get_author_name(self, obj):
        author = obj.author
        if not author:
            return "—"
        return author.get_full_name() or author.username
