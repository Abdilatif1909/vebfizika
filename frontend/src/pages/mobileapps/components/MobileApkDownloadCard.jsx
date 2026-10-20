import { ArrowDownToLine, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

import "./MobileApkDownloadCard.css";

export default function MobileApkDownloadCard({ app, loading, onDownload }) {
  const isDisabled = loading || !app?.url;

  return (
    <article className="mobile-apk-card">
      <div className="mobile-apk-card__header">
        <div className="mobile-apk-card__icon-wrap">
          <div className="mobile-apk-card__icon">
            <span>EP</span>
          </div>
          <div>
            <p className="mobile-apk-card__eyebrow">EduPlatform Android</p>
            <h3 className="mobile-apk-card__title">{app?.displayName || "EduPlatform Mobil Ilovasi"}</h3>
          </div>
        </div>
        <span className="mobile-apk-card__badge">
          <Sparkles size={14} /> Premium APK
        </span>
      </div>

      <div className="mobile-apk-card__stats">
        <div className="mobile-apk-card__stat">
          <span>Versiya</span>
          <strong>{app?.version || "v1.0.0"}</strong>
        </div>
        <div className="mobile-apk-card__stat">
          <span>Hajmi</span>
          <strong>{app?.size || "—"}</strong>
        </div>
        <div className="mobile-apk-card__stat mobile-apk-card__stat--badge">
          <Smartphone size={16} />
          <strong>{app?.platformLabel || "Android 8+"}</strong>
        </div>
      </div>

      <div className="mobile-apk-card__body">
        <p>
          Telefon orqali darslarni ko'rish, test ishlash, simulatsiyalarni ochish va platformaga tezkor kirish uchun rasmiy Android APK.
        </p>
        <div className="mobile-apk-card__trust-row">
          <span>
            <ShieldCheck size={15} /> Xavfsiz yuklab olish
          </span>
          <span>To'g'ridan-to'g'ri serverdan</span>
        </div>
      </div>

      <button type="button" className="mobile-apk-card__button" onClick={onDownload} disabled={isDisabled}>
        <ArrowDownToLine size={18} />
        {loading ? "APK tayyorlanmoqda..." : "APK Yuklab olish"}
      </button>
    </article>
  );
}
