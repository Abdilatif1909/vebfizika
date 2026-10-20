# Android texnik topshiriq

Loyiha fizika/oвЂquv platformasi: fan, kurs, nazariya, amaliyot, laboratoriya, simulyatsiya, video, test, hujjat, progress. Nom: **Tekshirish kerak**. Source va migration tekshirildi; backend oвЂzgartirilmadi, production runtime tekshirilmagan.

Django web_django, DRF + SimpleJWT; apps accounts, subjects, documents, theory, practical, laboratory, simulations, videos, testsystem, dashboard, mobileapps. Custom User, SQLite default, PageNumberPagination 20. requirements.txt/pyproject.toml version pin qilmagan.

## Rollar / modellar
student: active enrollment va own progress/dashboard. teacher: ayrim create/list va natijalarni koвЂrish. admin/staff: admin list/dashboard. guest: cheklangan public read. Register student/teacher/guest qabul qiladi; teacher self-registration mumkin, policy tekshir.

Userв†’Profile one-to-one. Subjectв†’Courseв†’Module; Enrollment user/course unique; Certificate; Document/category/course/file/download; TheoryTopic/Lesson/Progress; PracticalAssignment/Submission; LabExperiment/Report; Simulation/Progress; Video/Playlist/Progress; Test/Question/Choice/Attempt/Answer; Announcement, ActivityLog, DashboardMetric, StudentActivityAnalytics, MobileApp/Release.

## Auth / Android
POST /api/auth/token/: username yoki email/password в†’ access,refresh,user,role. POST /api/auth/register/: username,email,password,first_name,last_name,role в†’ 201 tokens/user; password min 8. GET/PATCH /api/auth/me/; edit avatar,phone,bio,names,email. POST /api/auth/token/refresh/; access 30 min, refresh 7 days, rotation true, blacklist false. Logout endpoint yoвЂq; local token clear. Parallel 401вЂ™da single-flight refresh, atomic token swap, bir retry; fail -> clear/login. JWT Bearer.

Emulator debug http://10.0.2.2:8000/; production URL unknown, BuildConfig orqali almashtir, HTTPS. Kotlin, Compose, Material3, MVVM/Clean, Navigation, Retrofit/OkHttp, Coroutines/StateFlow, Hilt, Repository; Room faqat offline zarur boвЂlsa. Secure Keystore storage, compatibility asosida dependency version pin. OвЂzbek UI, loading/empty/offline/validation/401/403/404/5xx, pagination, file picker/multipart.

## Xavf / tekshirish
- Default DRF IsAuthenticatedOrReadOnly: anon GET, auth write. KoвЂp ModelViewSetвЂ™da owner/role yozish tekshiruvi yoвЂq, serializer all fields.
- Choice API is_correct chiqaradi (javob kaliti leak); Answer/Attempt secure workflow emas. Progress/submission ownership bir xil emas.
- track-video/test analytics-only; theory completed, simulation attempts++, document count/log.
- URL /api/videos/ is mapped to the custom MP4 APIView before router include: GET returns media/vedio/*.mp4 catalog and blocks the router video list on that URL; POST may return 405. Confirm at runtime.
- Bulk ZIP AllowAny, barcha hujjat fayllari.
- Media faqat DEBUGвЂ™da Django serve; prod hosting unknown. DEBUG default True, dev SECRET_KEY fallback. CORS web origins, CSRF middleware. SQLite prod suitability unknown.
- Migration counts: accounts1 dashboard3 documents1 hello1 laboratory2 mobileapps1 practical2 simulations2 subjects2 testsystem3 theory2 videos1. permissions.py yoвЂq. accounts auth tests; hello legacy tests; boshqa coverage tekshir.


