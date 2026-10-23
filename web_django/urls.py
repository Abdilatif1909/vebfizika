from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from accounts.views import CurrentUserView, CustomTokenObtainPairView, RegisterView
from dashboard.views import (
    AdminDocumentsListView,
    AdminSubjectsListView,
    AdminUsersListView,
    AdminVideosListView,
    DashboardSummaryView,
    StudentDashboardStatsView,
    StudentCertificateListView,
    StudentEnrollmentListView,
    StudentLabReportListView,
    StudentProfileStatsView,
    StudentPracticalSubmissionListView,
    StudentTrackDocumentView,
    StudentTrackSimulationView,
    StudentTrackTestView,
    StudentTrackTheoryView,
    StudentTrackVideoView,
    StudentTestAttemptListView,
    StudentTheoryProgressListView,
    StudentVideoProgressListView,
    TeacherLaboratoryListCreateView,
    TeacherPracticalAssignmentListCreateView,
    TeacherStudentSubmissionListView,
    TeacherTestListCreateView,
    TeacherTestResultsListView,
    TeacherTheoryLessonListCreateView,
    TeacherVideoLessonListCreateView,
)
from accounts.viewsets import GroupViewSet, ProfileViewSet, UserViewSet
from dashboard.viewsets import ActivityLogViewSet, AnnouncementViewSet, DashboardMetricViewSet
from documents.views import DocumentBulkDownloadView
from documents.viewsets import DocumentCategoryViewSet, DocumentDownloadViewSet, DocumentViewSet
from laboratory.viewsets import LabExperimentViewSet, LabReportViewSet
from mobileapps.viewsets import MobileAppReleaseViewSet, MobileAppViewSet
from mobileapps.views import AvailableMobileAppView
from practical.viewsets import PracticalAssignmentViewSet, PracticalSubmissionViewSet
from simulations.viewsets import SimulationProgressViewSet, SimulationViewSet
from subjects.viewsets import CertificateViewSet, CourseModuleViewSet, CourseViewSet, EnrollmentViewSet, SubjectViewSet
from testsystem.viewsets import AnswerViewSet, ChoiceViewSet, QuestionViewSet, TestAttemptViewSet, TestViewSet
from theory.viewsets import TheoryLessonProgressViewSet, TheoryLessonViewSet, TheoryTopicViewSet
from videos.views import AvailableVideoFilesView
from videos.viewsets import VideoPlaylistViewSet, VideoProgressViewSet, VideoViewSet

router = DefaultRouter()
router.register("users", UserViewSet)
router.register("groups", GroupViewSet)
router.register("profiles", ProfileViewSet)
router.register("subjects", SubjectViewSet)
router.register("courses", CourseViewSet)
router.register("course-modules", CourseModuleViewSet)
router.register("enrollments", EnrollmentViewSet)
router.register("certificates", CertificateViewSet)
router.register("document-categories", DocumentCategoryViewSet)
router.register("documents", DocumentViewSet)
router.register("document-downloads", DocumentDownloadViewSet)
router.register("theory-topics", TheoryTopicViewSet)
router.register("theory-lessons", TheoryLessonViewSet)
router.register("theory-progress", TheoryLessonProgressViewSet)
router.register("practical-assignments", PracticalAssignmentViewSet)
router.register("practical-submissions", PracticalSubmissionViewSet)
router.register("lab-experiments", LabExperimentViewSet)
router.register("lab-reports", LabReportViewSet)
router.register("simulations", SimulationViewSet)
router.register("simulation-progress", SimulationProgressViewSet)
router.register("videos", VideoViewSet)
router.register("video-playlists", VideoPlaylistViewSet)
router.register("video-progress", VideoProgressViewSet)
router.register("mobile-apps", MobileAppViewSet)
router.register("mobile-app-releases", MobileAppReleaseViewSet)
router.register("tests", TestViewSet)
router.register("questions", QuestionViewSet)
router.register("choices", ChoiceViewSet)
router.register("test-attempts", TestAttemptViewSet)
router.register("answers", AnswerViewSet)
router.register("announcements", AnnouncementViewSet)
router.register("dashboard-metrics", DashboardMetricViewSet)
router.register("activity-logs", ActivityLogViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/documents/bulk-download/", DocumentBulkDownloadView.as_view(), name="documents_bulk_download"),
    path("api/videos/", AvailableVideoFilesView.as_view(), name="available_video_files"),
    path("api/mobile-app/", AvailableMobileAppView.as_view(), name="available_mobile_app"),
    path("api/", include(router.urls)),
    path("api/my/enrollments/", StudentEnrollmentListView.as_view(), name="my_enrollments"),
    path("api/my/theory-progress/", StudentTheoryProgressListView.as_view(), name="my_theory_progress"),
    path("api/my/practical-submissions/", StudentPracticalSubmissionListView.as_view(), name="my_practical_submissions"),
    path("api/my/lab-reports/", StudentLabReportListView.as_view(), name="my_lab_reports"),
    path("api/my/video-progress/", StudentVideoProgressListView.as_view(), name="my_video_progress"),
    path("api/my/test-attempts/", StudentTestAttemptListView.as_view(), name="my_test_attempts"),
    path("api/my/certificates/", StudentCertificateListView.as_view(), name="my_certificates"),
    path("api/student/dashboard-stats/", StudentDashboardStatsView.as_view(), name="student_dashboard_stats"),
    path("api/student/profile-stats/", StudentProfileStatsView.as_view(), name="student_profile_stats"),
    path("api/student/track-video/", StudentTrackVideoView.as_view(), name="student_track_video"),
    path("api/student/track-test/", StudentTrackTestView.as_view(), name="student_track_test"),
    path("api/student/track-simulation/", StudentTrackSimulationView.as_view(), name="student_track_simulation"),
    path("api/student/track-theory/", StudentTrackTheoryView.as_view(), name="student_track_theory"),
    path("api/student/track-document/", StudentTrackDocumentView.as_view(), name="student_track_document"),
    path("api/teacher/my-theory-lessons/", TeacherTheoryLessonListCreateView.as_view(), name="teacher_theory_lessons"),
    path("api/teacher/my-practical-assignments/", TeacherPracticalAssignmentListCreateView.as_view(), name="teacher_practical_assignments"),
    path("api/teacher/my-laboratories/", TeacherLaboratoryListCreateView.as_view(), name="teacher_laboratories"),
    path("api/teacher/video-lessons/", TeacherVideoLessonListCreateView.as_view(), name="teacher_video_lessons"),
    path("api/teacher/tests/", TeacherTestListCreateView.as_view(), name="teacher_tests"),
    path("api/teacher/student-submissions/", TeacherStudentSubmissionListView.as_view(), name="teacher_student_submissions"),
    path("api/teacher/test-results/", TeacherTestResultsListView.as_view(), name="teacher_test_results"),
    path("api/admin/users/", AdminUsersListView.as_view(), name="admin_users"),
    path("api/admin/subjects/", AdminSubjectsListView.as_view(), name="admin_subjects"),
    path("api/admin/documents/", AdminDocumentsListView.as_view(), name="admin_documents"),
    path("api/admin/videos/", AdminVideosListView.as_view(), name="admin_videos"),
    path("api/dashboard/summary/", DashboardSummaryView.as_view(), name="dashboard_summary"),
    path("api/auth/register/", RegisterView.as_view(), name="auth_register"),
    path("api/auth/me/", CurrentUserView.as_view(), name="auth_me"),
    path("api/auth/token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    re_path(
        r"^(?!api(?:/|$)|admin(?:/|$)|static(?:/|$)|media(?:/|$)).*$",
        TemplateView.as_view(template_name="index.html"),
        name="frontend",
    ),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
