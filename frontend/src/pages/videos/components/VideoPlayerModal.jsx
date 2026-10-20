import { useEffect } from "react";
import { Download, X } from "lucide-react";

import "./VideoPlayerModal.css";

export default function VideoPlayerModal({ video, isOpen, onClose, onDownload }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) {
    return null;
  }

  return (
    <div className="video-modal-overlay" onClick={onClose} role="presentation">
      <div className="video-modal-panel" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={video.title}>
        <div className="video-modal-header">
          <div>
            <span className="video-modal-badge">Fizika video darsi</span>
            <h3>{video.title}</h3>
            <p>{video.durationLabel || "Davomiyligi yuklanmoqda..."}</p>
          </div>
          <div className="video-modal-actions">
            <button type="button" className="video-modal-download" onClick={() => onDownload(video)}>
              <Download size={18} /> Yuklab olish
            </button>
            <button type="button" className="video-modal-close" onClick={onClose} aria-label="Modalni yopish">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="video-modal-player-wrap">
          <video key={video.url} className="video-modal-player" src={video.url} controls autoPlay playsInline preload="auto" />
        </div>
      </div>
    </div>
  );
}
