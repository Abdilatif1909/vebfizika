import axios from "axios";
import { Search, Sparkles, Video } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import "./Videos.css";
import PhysicsVideoCard from "./components/PhysicsVideoCard.jsx";
import VideoPlayerModal from "./components/VideoPlayerModal.jsx";
import { filterVideoSources, VIDEO_SOURCES } from "./videoSources.js";
import { useAuth } from "../../context/AuthContext.jsx";
import studentAnalyticsService from "../../services/studentAnalyticsService.js";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "/api").replace(/\/+$/, "");
const API_URL = `${API_BASE_URL}/videos/`;

function formatDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "Davomiyligi aniqlanmoqda";
  }
  const total = Math.round(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function titleFromFilename(name) {
  return (name || "")
    .replace(/\.mp4$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function createSubtitle(name) {
  if (!name) {
    return "Fizika bo'yicha interaktiv video dars.";
  }
  return `${titleFromFilename(name)} mavzusiga oid video dars.`;
}

function loadDuration(url) {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    let resolved = false;

    const finish = (value) => {
      if (resolved) {
        return;
      }
      resolved = true;
      video.removeAttribute("src");
      video.load();
      resolve(value);
    };

    const timeoutId = window.setTimeout(() => finish(null), 10000);

    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;
    video.onloadedmetadata = () => {
      window.clearTimeout(timeoutId);
      finish(video.duration);
    };
    video.onerror = () => {
      window.clearTimeout(timeoutId);
      finish(null);
    };
    video.src = url;
  });
}

async function downloadVideoFile(video) {
  const response = await fetch(video.url);
  if (!response.ok) {
    throw new Error("Video yuklab olinmadi");
  }
  const blob = await response.blob();
  const objectUrl = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = video.name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(objectUrl);
}

export default function Videos() {
  const { user } = useAuth();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchVideos() {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(API_URL);
        const rows = Array.isArray(response.data) ? response.data : [];
        const enriched = rows.map((item, index) => ({
          id: `${item.name}-${index}`,
          name: item.name,
          url: item.url,
          title: titleFromFilename(item.name),
          subtitle: createSubtitle(item.name),
          durationLabel: "Davomiyligi aniqlanmoqda",
        }));

        if (!cancelled) {
          setVideos(enriched);
        }

        const durationPairs = await Promise.all(
          enriched.map(async (item) => ({
            name: item.name,
            duration: await loadDuration(item.url),
          })),
        );

        if (!cancelled) {
          setVideos((current) =>
            current.map((item) => {
              const match = durationPairs.find((entry) => entry.name === item.name);
              return {
                ...item,
                durationSeconds: match?.duration ?? null,
                durationLabel: formatDuration(match?.duration),
              };
            }),
          );
        }
      } catch (fetchError) {
        if (!cancelled) {
          setError(fetchError.message || "Videolarni yuklashda xatolik yuz berdi.");
          setVideos([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchVideos();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return videos;
    }
    return videos.filter((item) => [item.title, item.name, item.subtitle].some((value) => value.toLowerCase().includes(normalizedQuery)));
  }, [query, videos]);

  const filteredSources = useMemo(() => filterVideoSources(VIDEO_SOURCES, videos, query), [query, videos]);

  const totalDurationMinutes = useMemo(() => {
    const totalSeconds = videos.reduce((sum, item) => sum + (item.durationSeconds || 0), 0);
    return totalSeconds > 0 ? Math.round(totalSeconds / 60) : null;
  }, [videos]);

  const handleDownload = async (video) => {
    try {
      await downloadVideoFile(video);
    } catch {
      window.open(video.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleOpenVideo = async (video) => {
    setActiveVideo(video);
    if (user?.role !== "student") {
      return;
    }
    try {
      await studentAnalyticsService.trackVideo({
        resource_id: video.name,
        resource_title: video.title,
        metadata: {
          source: "videos-page",
          url: video.url,
          duration_seconds: video.durationSeconds || null,
        },
      });
    } catch {
      // Tracking failures should not block playback.
    }
  };

  return (
    <div className="videos-page">
      <section className="videos-hero">
        <span className="videos-badge">
          <Sparkles size={16} /> Premium fizika video darslari
        </span>
        <h1>Fizika videodarslar kutubxonasi</h1>
        <p>
          Molekulyar fizika, optika, issiqlik hodisalari va laboratoriya mavzulari bo'yicha zamonaviy video darslarni qulay tarzda izlang, online ko'ring va yuklab oling.
        </p>
        <div className="videos-stats">
          <div className="videos-stat">
            <span>Jami videolar</span>
            <strong>{videos.length} ta</strong>
          </div>
          <div className="videos-stat">
            <span>Ko'rsatish holati</span>
            <strong>Netflix uslubi</strong>
          </div>
          <div className="videos-stat">
            <span>Umumiy davomiylik</span>
            <strong>{totalDurationMinutes ? `${totalDurationMinutes} daq` : "Hisoblanmoqda"}</strong>
          </div>
        </div>
      </section>

      <section className="videos-toolbar">
        <label className="videos-search-wrap" aria-label="Videolarni qidirish">
          <Search size={18} />
          <input
            type="search"
            className="videos-search"
            placeholder="Masalan: linza, gaz, optika, issiqlik..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="videos-count">
          <Video size={18} /> {filteredVideos.length} ta video topildi
        </div>
      </section>

      {filteredSources.length > 0 && (
        <section className="videos-sources" aria-labelledby="videos-sources-title">
          <div className="videos-sources-heading">
            <h2 id="videos-sources-title">Tavsiya etilgan YouTube manbalari</h2>
            <p>Playlist va kanal sahifalarini YouTube’da oching.</p>
          </div>
          <div className="videos-grid">
            {filteredSources.map((source) => (
              <article className="videos-source-card" key={source.id}>
                <span className="videos-source-type">{source.type}</span>
                <div>
                  <h3>{source.title}</h3>
                  <p>{source.description}</p>
                </div>
                <a className="videos-source-action" href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.action} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      )}

      {loading ? (
        <section className="videos-loading">
          <div>
            <div className="videos-spinner" />
            <strong>Videolar yuklanmoqda...</strong>
            <div>Backenddan mp4 darslar olinmoqda.</div>
          </div>
        </section>
      ) : error ? (
        <section className="videos-error">
          <div>
            <strong>Videolarni yuklab bo'lmadi</strong>
            <div>{error}</div>
          </div>
        </section>
      ) : filteredVideos.length === 0 ? (
        <section className="videos-empty">
          <div>
            <strong>Hozircha video topilmadi</strong>
            <div>Qidiruv so'zini o'zgartirib ko'ring yoki backend papkasiga yangi mp4 fayllarni qo'shing.</div>
          </div>
        </section>
      ) : (
        <section className="videos-grid">
          {filteredVideos.map((video) => (
            <PhysicsVideoCard key={video.id} video={video} onOpen={handleOpenVideo} onDownload={handleDownload} />
          ))}
        </section>
      )}

      <VideoPlayerModal video={activeVideo} isOpen={Boolean(activeVideo)} onClose={() => setActiveVideo(null)} onDownload={handleDownload} />
    </div>
  );
}
