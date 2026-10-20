# Android test rejasi

Test muhit: Django 0.0.0.0:8000, emulator http://10.0.2.2:8000/ local only. Production URL болон seed accounts unknown; credential uydirma qilma.

## API acceptance
- username/email login; register valid/duplicate/short password/role.
- me GET/PATCH auth va anon; refresh rotation; parallel 401 single refresh; logout yo‘q.
- pagination count/next/previous/results, 20/page.
- Student/teacher queryset va write ownership audit; anon read/write permissions.
- Tracking theory complete, simulation attempts++, document log/count, video/test analytics.
- Test scoring va Choice.is_correct exposure.
- Multipart avatar/assignment/submission/report, broken/large file.
- Bulk ZIP; /api/videos/ collision; /api/mobile-app/ 404/success.
- Dashboard role payload/privacy.

## Android automated
DTO/login/register/error/pagination; secure storage and atomic refresh; N parallel 401 => one refresh, max one retry; Bearer/multipart/timeouts; ViewModel success/loading/empty/offline/errors; Compose Uzbek labels/navigation/accessibility; file picker cancel/upload/download; GET-only retry.

## Manual
1. Debug install/login.
2. Dashboard→course→theory→track, server effect.
3. Network loss/retry/cache.
4. Expired token concurrency and refresh failure.
5. Upload/download and picker cancel.
6. DEBUG=False media + HTTPS release.
7. Role navigation/API 401/403.

## Build/APK
Run clean test assembleDebug; release signing secrets only CI/environment. Confirm APK absolute path/size and install/launch from actual filesystem/device. Owner confirms release URL/package/version/permissions/signing/SDK. No APK commit.

Repo tests evidence: accounts/tests.py covers register/admin role rejection/email login/me GET-PUT. hello/tests.py legacy web tests. Other tests coverage must be inspected; none of this is Android test evidence.
