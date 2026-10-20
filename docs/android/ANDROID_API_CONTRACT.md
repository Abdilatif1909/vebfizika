# API contract

Production URL unknown; emulator local only http://10.0.2.2:8000/. Prefix /api/. JWT Bearer. Router pagination {count,next,previous,results}, 20/page; custom lists plain arrays. Default anonymous GET/authenticated write except overrides. Authenticated write does not prove role authorization.

## Auth
| Route | Request в†’ response |
|---|---|
| POST /auth/register/ | username,email,password,first_name,last_name,role в†’ 201 access,refresh,user{id,username,names,full_name,email,role,avatar,phone,bio},role |
| POST /auth/token/ | username/email,password в†’ access,refresh,user,role |
| GET /auth/me/ | current user |
| PATCH/PUT /auth/me/ | avatar,phone,bio,names,email |
| POST /auth/token/refresh/ | refresh в†’ rotated pair |
| Logout | Р±Р°Р№С…РіТЇР№; local token clear |

## JSON examples

Login request: { "username": "student or email", "password": "<user input>" }. Login response: { "access": "<token>", "refresh": "<token>", "user": { "id": 7, "username": "student", "role": "student" }, "role": "student" }. Refresh request: { "refresh": "<token>" }. Tracking request: { "resource_id": "12", "resource_title": "Mechanics", "metadata": {} }; response: { "status": "ok", "id": 31 }. Model tables define fields; validate required versus optional values against serializers.

## Router CRUD
Each listed collection is a ModelViewSet: GET list, POST create, GET/PUT/PATCH/DELETE /{id}/. Search/order only as source declares. Serializer generally all model fields; CRUD errors need runtime confirmation.

| Collection | Model payload fields |
|---|---|
| users/ | username,email,names,role,avatar,phone,bio,is_active,is_staff,password(write-only) |
| groups/, profiles/ | group id/name; profile user,institution,grade_level,specialization,city,country |
| subjects/, courses/, course-modules/ | subject owner/title/slug/description/icon/order; course subject/teacher/title/slug/description/level/cover/published; module course/title/description/order |
| enrollments/, certificates/ | user/course/progress/status/times; student/course/enrollment/status/completion/issued_at/file |
| document-categories/, documents/, document-downloads/ | name/slug/description; document title/slug/category/subject/course/module/uploader/file/access_level/version/downloads; log document/user/ip |
| theory-topics/, theory-lessons/, theory-progress/ | subject/course/title/slug/summary/order; lesson topic/content/attachment/published/course/module; progress student/lesson/completed |
| practical-assignments/, practical-submissions/ | course/title/instructions/attachment/due/max_score/published; assignment/student/file/answer/status/score/feedback |
| lab-experiments/, lab-reports/ | course/title/objective/equipment/safety/procedure/result; experiment/student/observations/files/status/score/grade/feedback |
| simulations/, simulation-progress/ | subject/course/title/embed/launch/config/file/thumbnail; simulation/user/attempts/score/completed/state |
| videos/, video-playlists/, video-progress/ | video title/course/file/external_url/thumbnail/duration/published; playlist title/videos; progress user/video/watched/completed |
| mobile-apps/, mobile-app-releases/ | app name/platform/store/package/published; release app/version/build/binary/notes |
| tests/, questions/, choices/ | test course/title/resource/duration/pass/published; question test/text/type/points; choice question/text/is_correct |
| test-attempts/, answers/ | attempt test/student/status/score/percentage/passed; answer attempt/question/choices/text/awarded |
| announcements/, dashboard-metrics/, activity-logs/ | title/body/audience/attachment; key/label/value/metadata; actor/action/target/metadata |

## Custom API
- GET /documents/bulk-download/: ZIP, AllowAny, all files.
- GET /videos/: [{name,url}] from media/vedio/*.mp4; missing dir []; AllowAny; URL collision with router.
- GET /mobile-app/: newest media/mobili/apk APK {name,url,size,version,platform,platformLabel}; missing 404.
- GET /my/{enrollments,theory-progress,practical-submissions,lab-reports,video-progress,test-attempts,certificates}/: plain arrays; student JWT.
- GET /student/dashboard-stats/: subjects_count,documents_count,videos_count,tests_count,activity_count; student JWT.
- GET /student/profile-stats/: enrolled_subjects,completed_lessons,average_test_score,certificates,watched_videos,test_attempts,practical_submissions,lab_reports.
- POST /student/track-{video,test,simulation,theory,document}/: optional resource_id,title,score_percentage,xp_points,metadata в†’ 201 status/id; student JWT. Theory completes; simulation increments attempts; document increments counter/log; video/test analytics only.
- Teacher GET/POST /teacher/my-theory-lessons/, my-practical-assignments/, my-laboratories/, video-lessons/, tests/. POST fields by resource: topic/title/content; course/title/instructions; course/title/objective/procedure; title/video metadata/file; course/title/test config. Teacher JWT.
- GET /teacher/student-submissions/, /teacher/test-results/: teacher JWT arrays.
- GET /dashboard/summary/: JWT, role/announcements/activity/counts/metrics.
- GET /admin/{users,subjects,documents,videos}/: staff/admin JWT compact lists.

Multipart upload fields include avatar, document file, theory attachment, practical attachment/submission file, lab report files, simulation resource/thumbnail, video file/thumbnail, announcement attachment. Upload size limits and prod media URL must be checked. Handle 400/401/403/404/offline/5xx; retry GET only.




