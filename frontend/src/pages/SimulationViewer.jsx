import "@ruffle-rs/ruffle";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Download, MonitorPlay } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

import EmptyState from "../components/EmptyState.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { api, getResourceLink } from "../services/api.js";
import studentAnalyticsService from "../services/studentAnalyticsService.js";

export default function SimulationViewer() {
  const { simulationId } = useParams();
  const location = useLocation();
  const { user } = useAuth();
  const playerRef = useRef(null);
  const [simulation, setSimulation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    api
      .get("simulations", simulationId)
      .then((payload) => {
        if (!mounted) {
          return;
        }
        setSimulation(payload);
      })
      .catch((requestError) => {
        if (mounted) {
          setError(requestError.message || "Simulatsiyani yuklab bo'lmadi.");
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [simulationId]);

  useEffect(() => {
    if (!simulation || !playerRef.current) {
      return;
    }
    const resourceLink = getResourceLink(simulation);
    if (!resourceLink) {
      return;
    }

    playerRef.current.setAttribute("src", resourceLink);
    playerRef.current.setAttribute("background", "#ffffff");
    playerRef.current.setAttribute("wmode", "direct");
    playerRef.current.setAttribute("quality", "high");
    playerRef.current.style.width = "100%";
    playerRef.current.style.height = "100%";
  }, [simulation]);

  useEffect(() => {
    if (!simulation || user?.role !== "student") {
      return;
    }
    studentAnalyticsService.trackSimulation({
      resource_id: String(simulation.id),
      resource_title: simulation.title,
      metadata: {
        source: location.pathname.startsWith("/laboratory/") || location.pathname.startsWith("/laboratoriya/") ? "laboratory-viewer" : "simulation-viewer",
      },
    }).catch(() => {
      // Tracking errors should not block the viewer.
    });
  }, [location.pathname, simulation, user?.role]);

  if (loading) {
    return <LoadingSpinner label="Simulatsiya yuklanmoqda..." />;
  }

  if (error || !simulation) {
    return <EmptyState title="Simulatsiyani ochib bo'lmadi" description={error || "Simulatsiya topilmadi."} />;
  }

  const resourceLink = getResourceLink(simulation);
  const fromLaboratory = location.pathname.startsWith("/laboratory/") || location.pathname.startsWith("/laboratoriya/");
  const backLink = location.pathname.startsWith("/laboratoriya/") ? "/laboratoriya" : fromLaboratory ? "/laboratory" : "/simulations";
  const sectionTitle = fromLaboratory ? "Laboratoriya" : "Simulatsiyalar";

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={sectionTitle}
        title={simulation.title}
        description={simulation.description || "Flesh simulatsiyani shu oynaning o'zida ko'rish mumkin."}
        action={
          <div className="flex flex-wrap gap-3">
            <Link
              to={backLink}
              className="inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
            >
              <ArrowLeft size={16} />
              Orqaga
            </Link>
            <a
              href={resourceLink}
              download
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
            >
              <Download size={16} />
              Yuklab olish
            </a>
          </div>
        }
      />

      <section className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm shadow-blue-950/5">
        <div className="flex items-center gap-3 border-b border-blue-50 bg-blue-50/60 px-5 py-4">
          <MonitorPlay className="text-blue-600" size={20} />
          <p className="font-black text-slate-950">Onlayn ko'rish</p>
        </div>
        <div className="h-[75vh] min-h-[560px] bg-slate-100 p-3">
          <ruffle-player ref={playerRef} class="block h-full w-full overflow-hidden rounded-3xl bg-white" />
        </div>
      </section>
    </div>
  );
}
