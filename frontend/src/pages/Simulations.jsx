import { useEffect, useMemo, useState } from "react";
import { Beaker, PlayCircle, Sparkles } from "lucide-react";

import "./Simulations.css";
import CapillarySimulation from "./simulations/components/CapillarySimulation.jsx";
import EvaporationCondensationSimulation from "./simulations/components/EvaporationCondensationSimulation.jsx";
import GasProcessesSimulation from "./simulations/components/GasProcessesSimulation.jsx";
import HeatEngineSimulation from "./simulations/components/HeatEngineSimulation.jsx";
import HeatEquilibriumSimulation from "./simulations/components/HeatEquilibriumSimulation.jsx";
import IdealGasSimulation from "./simulations/components/IdealGasSimulation.jsx";
import LensSimulation from "./simulations/components/LensSimulation.jsx";
import MeltingFreezingSimulation from "./simulations/components/MeltingFreezingSimulation.jsx";
import ReflectionRefractionSimulation from "./simulations/components/ReflectionRefractionSimulation.jsx";
import SurfaceTensionSimulation from "./simulations/components/SurfaceTensionSimulation.jsx";
import ThermodynamicsLawSimulation from "./simulations/components/ThermodynamicsLawSimulation.jsx";
import TotalInternalReflectionSimulation from "./simulations/components/TotalInternalReflectionSimulation.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import studentAnalyticsService from "../services/studentAnalyticsService.js";

const SIMULATIONS = [
  {
    id: "ideal-gas",
    title: "Ideal gaz qonuni",
    category: "Molekulyar fizika",
    icon: "⚛️",
    summary: "PV = nRT qonunini molekulalar animatsiyasi va bosim-grafik bilan o'rganing.",
    tags: ["Bosim", "Temperatura", "Grafik"],
    component: IdealGasSimulation,
  },
  {
    id: "gas-processes",
    title: "Gaz jarayonlari",
    category: "Molekulyar fizika",
    icon: "🧪",
    summary: "Izotermik, izobarik va izoxorik jarayonlarni bir joyda solishtiring.",
    tags: ["Izotermik", "Izobarik", "Izoxorik"],
    component: GasProcessesSimulation,
  },
  {
    id: "first-law",
    title: "Termodinamikaning I qonuni",
    category: "Termodinamika",
    icon: "🔥",
    summary: "Issiqlik, ichki energiya va ish orasidagi energiya balansini ko'ring.",
    tags: ["Q", "ΔU", "A"],
    component: ThermodynamicsLawSimulation,
  },
  {
    id: "heat-equilibrium",
    title: "Issiqlik muvozanati",
    category: "Termodinamika",
    icon: "🌡️",
    summary: "Ikki jism aralashganda qanday umumiy temperatura hosil bo'lishini kuzating.",
    tags: ["Muvozanat", "Kalorimetriya"],
    component: HeatEquilibriumSimulation,
  },
  {
    id: "heat-engine",
    title: "Issiqlik mashinasi",
    category: "Termodinamika",
    icon: "⚙️",
    summary: "Karnot samaradorligi va foydali ish ulushini o'rganing.",
    tags: ["Karnot", "η", "Ish"],
    component: HeatEngineSimulation,
  },
  {
    id: "capillary",
    title: "Kapillyarlik hodisasi",
    category: "Suyuqliklar fizikasi",
    icon: "🧫",
    summary: "Kapillyar naycha radiusi suyuqlik balandligiga qanday ta'sir qilishini ko'ring.",
    tags: ["Menisk", "Jurin"],
    component: CapillarySimulation,
  },
  {
    id: "surface-tension",
    title: "Sirt tarangligi",
    category: "Suyuqliklar fizikasi",
    icon: "💧",
    summary: "Suyuq parda kuchi va temperaturaning σ ga ta'siri bilan ishlang.",
    tags: ["σ", "Parda"],
    component: SurfaceTensionSimulation,
  },
  {
    id: "melting",
    title: "Erish va qotish",
    category: "Faza o'tishlari",
    icon: "🧊",
    summary: "Yashirin issiqlik hisobiga temperatura nega o'zgarmay turishini o'rganing.",
    tags: ["Faza", "λ", "Muz"],
    component: MeltingFreezingSimulation,
  },
  {
    id: "evaporation",
    title: "Bug'lanish va kondensatsiya",
    category: "Faza o'tishlari",
    icon: "☁️",
    summary: "Namlik, temperatura va sirt maydoni bug'lanish tezligini qanday o'zgartirishini ko'ring.",
    tags: ["Namlik", "Bug'"],
    component: EvaporationCondensationSimulation,
  },
  {
    id: "reflection",
    title: "Qaytish va sinish",
    category: "Optika",
    icon: "🔦",
    summary: "Snell qonunini nur diagrammasi bilan tajriba ko'rinishida o'rganing.",
    tags: ["Snell", "Nur"],
    component: ReflectionRefractionSimulation,
  },
  {
    id: "tir",
    title: "To'la ichki qaytish",
    category: "Optika",
    icon: "✨",
    summary: "Kritik burchakdan katta holatda nur qanday to'liq qaytishini ko'ring.",
    tags: ["Kritik burchak", "Optik tola"],
    component: TotalInternalReflectionSimulation,
  },
  {
    id: "lens",
    title: "Linza simulyatori",
    category: "Optika",
    icon: "🔍",
    summary: "Linza yordamida hosil bo'ladigan tasvir masofasi va kattalashishini o'lchang.",
    tags: ["Linza", "Tasvir"],
    component: LensSimulation,
  },
];

const CATEGORY_ORDER = ["Barchasi", ...new Set(SIMULATIONS.map((item) => item.category))];

export default function Simulations() {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [selectedId, setSelectedId] = useState(SIMULATIONS[0].id);

  const filtered = useMemo(() => {
    if (activeCategory === "Barchasi") {
      return SIMULATIONS;
    }
    return SIMULATIONS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selected = useMemo(() => {
    return filtered.find((item) => item.id === selectedId) || filtered[0] || SIMULATIONS[0];
  }, [filtered, selectedId]);

  useEffect(() => {
    if (!selected || user?.role !== "student") {
      return;
    }

    studentAnalyticsService.trackSimulation({
      resource_id: selected.id,
      resource_title: selected.title,
      metadata: {
        category: selected.category,
        source: "interactive-simulations",
      },
    }).catch(() => {
      // Tracking failures should not interrupt simulations.
    });
  }, [selected, user?.role]);

  const SelectedComponent = selected.component;

  return (
    <div className="simulations-page">
      <section className="simulations-hero">
        <span className="simulations-badge">
          <Sparkles size={16} /> Virtual fizika laboratoriyasi
        </span>
        <h1>Interaktiv simulatsiyalar markazi</h1>
        <p>Bu bo'limda molekulyar fizika, termodinamika, suyuqliklar fizikasi va optika mavzulari uchun zamonaviy, jonli va formulalar bilan boyitilgan virtual tajribalar jamlandi.</p>
        <div className="simulations-summary">
          <div className="simulations-summary-card">
            <span>Umumiy tajribalar</span>
            <strong>{SIMULATIONS.length} ta</strong>
          </div>
          <div className="simulations-summary-card">
            <span>Yo'nalishlar</span>
            <strong>{CATEGORY_ORDER.length - 1} ta bo'lim</strong>
          </div>
          <div className="simulations-summary-card">
            <span>Format</span>
            <strong>Grafik + formula + animatsiya</strong>
          </div>
          <div className="simulations-summary-card">
            <span>Til</span>
            <strong>To'liq o'zbekcha</strong>
          </div>
        </div>
      </section>

      <section>
        <div className="simulations-toolbar">
          <div>
            <h2 className="simulations-section-title">Simulyatsiyani tanlang</h2>
            <p className="simulations-muted">Kartani bosing va tanlangan tajriba pastda to'liq interaktiv rejimda ochiladi.</p>
          </div>
          <div className="simulations-chip-row">
            {CATEGORY_ORDER.map((category) => (
              <button
                key={category}
                type="button"
                className={`simulations-chip ${activeCategory === category ? "is-active" : ""}`}
                onClick={() => {
                  setActiveCategory(category);
                  const nextList = category === "Barchasi" ? SIMULATIONS : SIMULATIONS.filter((item) => item.category === category);
                  if (!nextList.some((item) => item.id === selectedId)) {
                    setSelectedId(nextList[0]?.id || SIMULATIONS[0].id);
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="simulations-grid">
        {filtered.map((item) => (
          <article key={item.id} className={`simulation-card-item ${selected.id === item.id ? "is-active" : ""}`}>
            <div className="simulation-card-top">
              <div>
                <div className="simulation-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <span className="simulations-badge" style={{ background: "#eff6ff", color: "#1d4ed8" }}>{item.category}</span>
            </div>
            <div className="simulation-card-meta">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <button type="button" className="simulation-card-action" onClick={() => setSelectedId(item.id)}>
              <PlayCircle size={18} style={{ display: "inline", marginRight: "0.45rem", verticalAlign: "text-bottom" }} />
              Simulyatsiyani ochish
            </button>
          </article>
        ))}
      </section>

      <section className="simulations-viewer">
        <div className="simulations-viewer-head">
          <div>
            <span className="simulations-badge" style={{ background: "#dbeafe", color: "#1d4ed8" }}>
              <Beaker size={16} /> Faol tajriba
            </span>
            <h2>{selected.title}</h2>
            <p>{selected.summary}</p>
          </div>
          <div className="simulations-viewer-note">Kategoriya: {selected.category}</div>
        </div>
        <SelectedComponent />
      </section>
    </div>
  );
}
