import { useMemo, useState } from "react";

import "./CapillarySimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function CapillarySimulation() {
  const [radius, setRadius] = useState(0.6);
  const [surfaceTension, setSurfaceTension] = useState(0.072);
  const [density, setDensity] = useState(1000);
  const [running, setRunning] = useState(true);

  const h = useMemo(() => Number(((2 * surfaceTension) / ((radius / 1000) * density * 9.8)).toFixed(3)), [density, radius, surfaceTension]);
  const level = Math.min(85, 15 + h * 150);
  const points = useMemo(() => Array.from({ length: 10 }, (_, i) => {
    const sampleR = 0.2 + i * 0.2;
    return { x: sampleR, y: Number(((2 * surfaceTension) / ((sampleR / 1000) * density * 9.8)).toFixed(3)) };
  }), [density, surfaceTension]);

  const reset = () => {
    setRadius(0.6);
    setSurfaceTension(0.072);
    setDensity(1000);
    setRunning(true);
  };

  return (
    <div className="simulation-shell capillary-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">Kapillyarlik</span>
        <h2>Kapillyar naychadagi suyuqlik ko'tarilishi</h2>
        <p>Kapillyar radiusi kichiklashgan sari suyuqlik balandroq ko'tariladi.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "h = 2σ / ρgr", label: "Jurin formulasi" }, { formula: `h = ${h} m`, label: "Ko'tarilish balandligi" }]} />
        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Kapillyar tasviri</p>
            <div style={{ height: "320px", display: "grid", placeItems: "end center", background: "linear-gradient(180deg,#eff6ff,#dbeafe)", borderRadius: "1.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "36%", background: "linear-gradient(180deg,#67e8f9,#0ea5e9)" }} />
              <div style={{ position: "relative", width: `${20 + radius * 14}px`, height: "260px", border: "4px solid #0f172a", borderRadius: "999px", background: "rgba(255,255,255,0.6)" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${level}%`, background: "linear-gradient(180deg,#38bdf8,#0ea5e9)", borderRadius: "999px 999px 28px 28px" }} />
              </div>
            </div>
            <ResultGrid items={[{ label: "Radius", value: `${radius} mm` }, { label: "σ", value: `${surfaceTension} N/m` }, { label: "ρ", value: `${density} kg/m³` }, { label: "h", value: `${h} m` }]} />
          </div>
          <div className="simulation-controls">
            <p className="simulation-card-title">O'zgaruvchilar</p>
            <RangeField label="Kapillyar radiusi" value={radius} min={0.2} max={2} step={0.1} suffix=" mm" onChange={setRadius} accent="#14b8a6" />
            <RangeField label="Sirt tarangligi" value={surfaceTension} min={0.02} max={0.1} step={0.001} suffix=" N/m" onChange={setSurfaceTension} accent="#0ea5e9" />
            <RangeField label="Zichlik" value={density} min={600} max={1400} step={10} suffix=" kg/m³" onChange={setDensity} accent="#0f766e" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>
        <SmallGraph points={points} xLabel="r (mm)" yLabel="h (m)" color="#14b8a6" />
        <EducationalNote>Kapillyarda ko'tarilish sirt tarangligi va adgeziya kuchlari bilan bog'liq. Radius kichik bo'lgani sari meniskning egriligi ortadi va suyuqlik yuqoriga ko'tariladi.</EducationalNote>
      </div>
    </div>
  );
}
