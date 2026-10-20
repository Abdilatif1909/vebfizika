# Android ekran xaritasi

| Ekran | API | Holat/cheklov |
|---|---|---|
| Splash/login/register | auth me/token/register | Uzbek UI; teacher signup policy tekshir |
| Dashboard | dashboard summary/student stats | role-specific; audience filter unclear |
| Fan/kurs | subjects,courses,modules,my enrollments | enrollment create yo‘q |
| Nazariya | topics,lessons,my progress,track-theory | tracking darsni completed qiladi |
| Amaliy/lab | assignments/submissions, experiments/reports | multipart; ownership cheklangan |
| Video | videos/playlists/progress/track-video | tracker VideoProgress update qilmaydi; URL collision |
| Test | tests/questions/choices/attempts/answers | is_correct leak; safe submit flow yo‘q |
| Simulyatsiya | simulations/progress/track | attempts increment |
| Hujjat | categories/documents/downloads/bulk ZIP | bulk AllowAny |
| Sertifikat | my certificates | media URL prod tekshirilsin |
| Profil | auth/me GET/PATCH | password/Profile detail edit yo‘q |
| Settings/logout | local settings/token clear | backend endpoint yo‘q |
| Teacher ixtiyoriy | teacher create/list/results | grading workflow to‘liq emas |

Bottom nav: Bosh sahifa, Kurslar, Materiallar, Profil. Course detail: nazariya/video/amaliy/lab/test/simulation. Har ekran loading, empty, offline/retry, validation, 401/403/404/5xx; pagination va plain arrays alohida. File picker/upload progress.
