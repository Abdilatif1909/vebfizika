import { Download, PlayCircle, Timer } from "lucide-react";
import { useState } from "react";

import "./PhysicsVideoCard.css";

export default function PhysicsVideoCard({ video, onOpen, onDownload }) {
  const [previewFailed, setPreviewFailed] = useState(false);

  return (
    <article className="physics-video-card">
      <div className="physics-video-card-media-wrap">
        {!previewFailed ? (
          <video
            className="physics-video-card-media"
            src={video.url}
            preload="metadata"
            muted
            playsInline
            onError={() => setPreviewFailed(true)}
          />
        ) : (
          <div className="physics-video-card-fallback">
            <span>⚛️</span>
            <strong>Fizika video darsi</strong>
          </div>
        )}
        <div className="physics-video-card-glow" />
        <div className="physics-video-card-overlay">
          <span className="physics-video-card-pill">MP4 dars</span>
          <span className="physics-video-card-duration">
            <Timer size={14} /> {video.durationLabel || "Davomiyligi aniqlanmoqda"}
          </span>
        </div>
      </div>

      <div className="physics-video-card-body">
        <div>
          <h3>{video.title}</h3>
          <p>{video.subtitle}</p>
        </div>

        <div className="physics-video-card-actions">
          <button type="button" className="physics-video-card-primary" onClick={() => onOpen(video)}>
            <PlayCircle size={18} /> Online ko'rish
          </button>
          <button type="button" className="physics-video-card-secondary" onClick={() => onDownload(video)}>
            <Download size={18} /> Yuklab olish
          </button>
        </div>
      </div>
    </article>
  );
}
