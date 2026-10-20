# Android Studio AI master prompt

Avval docs/android/ANDROID_TECHNICAL_SPEC.md, ANDROID_API_CONTRACT.md, ANDROID_SCREEN_MAP.md, ANDROID_TEST_PLAN.md oвЂqi.

You are a Kotlin Android engineer. Build the app without changing Django. If no Android module exists, create android/. Use only API confirmed by source; invent no endpoint. Production URL unknown; configure with BuildConfig. Emulator debug URL: http://10.0.2.2:8000/. Backend has no logout; clear local tokens only. Do not assume ModelViewSet writes are permission-safe; account for Choice.is_correct exposure and ownership risks. Uzbek UI.

Stack: Kotlin, Compose, Material3, Navigation Compose, MVVM/Clean Architecture, Retrofit/OkHttp, Coroutines/StateFlow, Hilt, repository; Room faqat zarur cache. DTO/domain ajrat, compatibility asosida Gradle versiyalarni pin, deprecated API ishlatma. Keystore-protected token, secrets log qilma. Paginated envelope/plain array alohida.

Bearer interceptor va parallel 401 uchun mutex/single-flight bitta refresh. Rotated pair atomic save. Refresh endpoint oвЂzi retry loopвЂ™ga kirmasin. Har request bir retry; refresh fail -> clear/login. POST/upload koвЂr-koвЂrona qayta yuborilmasin.

Screen map boвЂyicha auth, dashboard, courses, theory, practical/lab, video, test, simulation, documents, certificate, profile/settings/logout yarating. StateFlow loading/content/empty/error; pagination, Uzbek errors, picker/multipart progress. Missing/unsafe backend flowвЂ™ni uydirmang.

Bosqichlar:
1. Repo/docs/source tahlil, Android bor-yoвЂq va plan.
2. Gradle wrapper, version catalog, app, manifest, build config, Hilt.
3. API DTO/error/network/token storage.
4. Auth va concurrency-safe refresh.
5. Uzbek Material3 UI/navigation.
6. Barcha tasdiqlangan screen/API va states.
7. Unit/instrumentation: rotation, parallel 401, DTO/pagination, ViewModel/UI.
8. ANDROID_TEST_PLAN.md bajar; mavjud boвЂlmagan emulator/testni muvaffaqiyatli demang.
9. Windows gradlew.bat clean test assembleDebug; boshqa OS ./gradlew clean test assembleDebug. Xatolarni tuzatib qayta build.
10. APK haqiqiy filesystem path/size tekshir. Real test/build output va cheklovlar bilan yakuniy hisobot; APK yoвЂq boвЂlsa ayt.

Build qilinadigan Kotlin/Gradle yoz; critical TODO yoвЂq. Base URL configurable, token safe, Uzbek UX. Faqat haqiqiy command natijalarini ayt.


