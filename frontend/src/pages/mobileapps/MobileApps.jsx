import {
  ArrowDownToLine,
  BadgeCheck,
  Download,
  LoaderCircle,
  QrCode,
  Smartphone,
  Sparkles,
  WifiOff,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import LoadingSpinner from "../../components/LoadingSpinner.jsx";
import { api } from "../../services/api.js";
import MobileApkDownloadCard from "./components/MobileApkDownloadCard.jsx";
import "./MobileApps.css";

const FEATURES = [
  {
    title: "Offline video darslar",
    description: "Internet bo'lmasa ham dars videolarini telefoningizda ochib ko'rish imkoniyati.",
    accent: "emerald",
  },
  {
    title: "Interaktiv testlar",
    description: "Natijalarni tez ko'ring, ball to'plang va har bir mavzuni o'zingizni sinab mustahkamlang.",
    accent: "blue",
  },
  {
    title: "Fizika simulatsiyalar",
    description: "Murakkab fizik jarayonlarni sensorli interfeys orqali jonli tajriba sifatida boshqaring.",
    accent: "violet",
  },
  {
    title: "Tezkor foydalanish",
    description: "Telefon orqali platformaga tez kirish, bildirishnoma olish va asosiy bo'limlarga bir teginishda o'tish.",
    accent: "amber",
  },
];

const SCREENSHOTS = [
  {
    title: "Bosh sahifa",
    caption: "Kurslar, tavsiyalar va kundalik reja bir ekranda.",
    chips: ["Jonli statistika", "Premium UI", "Tezkor kirish"],
  },
  {
    title: "Video darslar",
    caption: "Google Play uslubidagi video kutubxona va yuklab olish tugmalari.",
    chips: ["Offline rejim", "HD format", "Davomiylik"],
  },
  {
    title: "Testlar bo'limi",
    caption: "Gamifikatsiyalangan testlar, XP va yulduzli natijalar ko'rinishi.",
    chips: ["XP", "Badge", "Progress"],
  },
  {
    title: "Simulatsiyalar",
    caption: "Telefon ekranida ham ishlaydigan laboratoriya va vizual modellar.",
    chips: ["Animatsiya", "Sensorli boshqaruv", "Formula"],
  },
];

const QR_PATTERN = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0],
];

function normalizeApkPayload(payload) {
  if (Array.isArray(payload)) {
    return payload[0] || null;
  }
  if (payload?.results && Array.isArray(payload.results)) {
    return payload.results[0] || null;
  }
  return payload || null;
}

function getBadgeData(app) {
  return [
    { icon: BadgeCheck, label: app?.version || "v1.0.0" },
    { icon: Download, label: app?.size || "APK hajmi noma'lum" },
    { icon: Smartphone, label: app?.platformLabel || "Android 8+ qo'llab-quvvatlanadi" },
  ];
}

export default function MobileApps() {
  const [appInfo, setAppInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => {
    let mounted = true;

    async function loadApk() {
      setLoading(true);
      setError("");

      try {
        const payload = await api.fetch("/mobile-app/");
        if (!mounted) {
          return;
        }
        const normalized = normalizeApkPayload(payload);
        setAppInfo(normalized);
        if (!normalized) {
          setError("APK fayli hozircha topilmadi.");
        }
      } catch (requestError) {
        if (mounted) {
          setAppInfo(null);
          setError(requestError.message || "APK ma'lumotlarini olishda xatolik yuz berdi.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadApk();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveScreenshot((current) => (current + 1) % SCREENSHOTS.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  const badges = useMemo(() => getBadgeData(appInfo), [appInfo]);

  const handleDownload = () => {
    if (!appInfo?.url) {
      return;
    }
    window.open(appInfo.url, "_blank", "noopener,noreferrer");
  };

  if (loading && !appInfo) {
    return <LoadingSpinner label="Mobil ilova ma'lumotlari yuklanmoqda..." />;
  }

  return (
    <div className="mobile-apps-page">
      <div className="mobile-apps-page__backdrop mobile-apps-page__backdrop--one" />
      <div className="mobile-apps-page__backdrop mobile-apps-page__backdrop--two" />

      <section className="mobile-apps-hero">
        <div className="mobile-apps-hero__content">
          <span className="mobile-apps-hero__eyebrow">
            <Sparkles size={16} /> Google Play uslubidagi premium sahifa
          </span>
          <h1>EduPlatform Mobil Ilovasi</h1>
          <p>
            Endi talabalar telefon orqali istalgan joydan video darslarni ko'rishi, testlarni ishlashi, simulatsiyalarni ochishi va o'quv jarayonini qulay boshqarishi mumkin.
          </p>

          <div className="mobile-apps-hero__badges">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <span key={badge.label} className="mobile-apps-hero__badge">
                  <Icon size={16} /> {badge.label}
                </span>
              );
            })}
          </div>

          <div className="mobile-apps-hero__actions">
            <button type="button" className="mobile-apps-primary-button" onClick={handleDownload} disabled={!appInfo?.url}>
              <ArrowDownToLine size={20} /> APK Yuklab olish
            </button>
            <div className="mobile-apps-hero__caption">
              <Smartphone size={18} /> Rasmiy Android APK fayl — to'g'ridan-to'g'ri Django serveridan.
            </div>
          </div>

          {error ? <div className="mobile-apps-error-banner">{error}</div> : null}
        </div>

        <div className="mobile-apps-hero__visual">
          <div className="mobile-apps-phone-float">
            <div className="mobile-apps-phone-float__glow" />
            <div className="mobile-apps-phone">
              <div className="mobile-apps-phone__notch" />
              <div className="mobile-apps-phone__screen">
                <div className="mobile-apps-phone__status">
                  <span>09:41</span>
                  <span>5G • 100%</span>
                </div>
                <div className="mobile-apps-phone__hero-card">
                  <div className="mobile-apps-phone__app-icon">EP</div>
                  <div>
                    <h3>EduPlatform</h3>
                    <p>Mobil ta'lim markazi</p>
                  </div>
                </div>
                <div className="mobile-apps-phone__mini-grid">
                  <div>
                    <strong>24+</strong>
                    <span>Video dars</span>
                  </div>
                  <div>
                    <strong>12</strong>
                    <span>Test blok</span>
                  </div>
                  <div>
                    <strong>8</strong>
                    <span>Simulyatsiya</span>
                  </div>
                </div>
                <div className="mobile-apps-phone__lesson-card">
                  <div>
                    <span>Bugungi dars</span>
                    <strong>Molekulyar fizika</strong>
                  </div>
                  <button type="button">Boshlash</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-apps-grid-section">
        <MobileApkDownloadCard app={appInfo} loading={loading} onDownload={handleDownload} />

        <div className="mobile-apps-quick-panel">
          <div className="mobile-apps-quick-panel__header">
            <span className="mobile-apps-quick-panel__eyebrow">Nega aynan mobil ilova?</span>
            <h2>Talabalar uchun tez, qulay va zamonaviy tajriba</h2>
          </div>
          <div className="mobile-apps-quick-panel__points">
            <article>
              <WifiOff size={18} />
              <div>
                <strong>Offline rejim</strong>
                <p>Yuklab olingan materiallar va darslar bilan internet bo'lmaganda ham ishlash qulayligi.</p>
              </div>
            </article>
            <article>
              <Smartphone size={18} />
              <div>
                <strong>Telefon uchun moslashgan</strong>
                <p>Kichik ekranlar uchun mos navigatsiya, katta tugmalar va zamonaviy animatsiyalar.</p>
              </div>
            </article>
            <article>
              <BadgeCheck size={18} />
              <div>
                <strong>Rasmiy nashr</strong>
                <p>APK fayli bevosita backend orqali tarqatiladi va versiya ma'lumoti avtomatik yangilanadi.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mobile-apps-features">
        <div className="mobile-apps-section-head">
          <span>Asosiy imkoniyatlar</span>
          <h2>Mobil ilova ichida o'quv jarayonining eng muhim qismlari</h2>
        </div>
        <div className="mobile-apps-features__grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className={`mobile-apps-feature-card mobile-apps-feature-card--${feature.accent}`}>
              <div className="mobile-apps-feature-card__orb" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-apps-showcase">
        <div className="mobile-apps-section-head">
          <span>Ilova ekranlari</span>
          <h2>Premium mobil maketlar va sahifa ko'rinishlari</h2>
        </div>

        <div className="mobile-apps-showcase__layout">
          <div className="mobile-apps-showcase__track">
            {SCREENSHOTS.map((screen, index) => (
              <button
                key={screen.title}
                type="button"
                className={`mobile-apps-screen-card ${activeScreenshot === index ? "is-active" : ""}`}
                onClick={() => setActiveScreenshot(index)}
              >
                <div className="mobile-apps-screen-card__mockup">
                  <div className="mobile-apps-screen-card__topbar" />
                  <div className="mobile-apps-screen-card__body">
                    <div className="mobile-apps-screen-card__line mobile-apps-screen-card__line--wide" />
                    <div className="mobile-apps-screen-card__line" />
                    <div className="mobile-apps-screen-card__chips">
                      {screen.chips.map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                    <div className="mobile-apps-screen-card__panel" />
                  </div>
                </div>
                <div>
                  <strong>{screen.title}</strong>
                  <p>{screen.caption}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mobile-apps-showcase__spotlight">
            <div className="mobile-apps-showcase__phone">
              <div className="mobile-apps-showcase__phone-top" />
              <div className="mobile-apps-showcase__phone-body">
                <span className="mobile-apps-showcase__label">Faol ekran</span>
                <h3>{SCREENSHOTS[activeScreenshot].title}</h3>
                <p>{SCREENSHOTS[activeScreenshot].caption}</p>
                <div className="mobile-apps-showcase__chips">
                  {SCREENSHOTS[activeScreenshot].chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-apps-bottom-grid">
        <article className="mobile-apps-qr-card">
          <div className="mobile-apps-qr-card__header">
            <span>
              <QrCode size={16} /> QR orqali o'rnatish
            </span>
            <strong>Telefon bilan skaner qiling</strong>
          </div>
          <div className="mobile-apps-qr-card__body">
            <div className="mobile-apps-qr-grid" aria-hidden="true">
              {QR_PATTERN.flatMap((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <span key={`${rowIndex}-${colIndex}`} className={cell ? "is-filled" : ""} />
                )),
              )}
            </div>
            <div className="mobile-apps-qr-card__info">
              <p>APK havolasini tez ochish uchun QR ko'rinishidagi karta tayyorlandi.</p>
              <button type="button" onClick={handleDownload} className="mobile-apps-secondary-button" disabled={!appInfo?.url}>
                <ArrowDownToLine size={18} /> Yuklab olish oynasini ochish
              </button>
            </div>
          </div>
        </article>

        <article className="mobile-apps-status-card">
          <div className="mobile-apps-status-card__top">
            <span className="mobile-apps-status-card__pill">Jonli backend ma'lumoti</span>
            {loading ? <LoaderCircle className="mobile-apps-spin" size={18} /> : <BadgeCheck size={18} />}
          </div>
          <h3>{appInfo?.name || "APK fayl tekshirilmoqda"}</h3>
          <p>
            Backend avtomatik ravishda <strong>media/mobili/apk/</strong> papkasini skaner qiladi va mavjud Android faylini ushbu sahifaga uzatadi.
          </p>
          <dl>
            <div>
              <dt>Fayl nomi</dt>
              <dd>{appInfo?.name || "Topilmadi"}</dd>
            </div>
            <div>
              <dt>Versiya</dt>
              <dd>{appInfo?.version || "v1.0.0"}</dd>
            </div>
            <div>
              <dt>Hajmi</dt>
              <dd>{appInfo?.size || "—"}</dd>
            </div>
          </dl>
        </article>
      </section>
    </div>
  );
}
