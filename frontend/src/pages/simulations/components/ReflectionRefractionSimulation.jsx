import { useMemo, useState } from "react";

import "./ReflectionRefractionSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function ReflectionRefractionSimulation() {
  const [angle, setAngle] = useState(40);
  const [n1, setN1] = useState(1);
  const [n2, setN2] = useState(1.5);
  const [running, setRunning] = useState(true);

  const reflected = angle;
  const refracted = useMemo(() => {
    const ratio = (n1 / n2) * Math.sin((angle * Math.PI) / 180);
    const safe = Math.max(-1, Math.min(1, ratio));
    return Number(((Math.asin(safe) * 180) / Math.PI).toFixed(1));
  }, [angle, n1, n2]);
  const graph = useMemo(() => Array.from({ length: 10 }, (_, i) => {
    const sample = 5 + i * 8;
    const ratio = (n1 / n2) * Math.sin((sample * Math.PI) / 180);
    const safe = Math.max(-1, Math.min(1, ratio));
    return { x: sample, y: Number(((Math.asin(safe) * 180) / Math.PI).toFixed(1)) };
  }), [n1, n2]);

  const reset = () => {
    setAngle(40);
    setN1(1);
    setN2(1.5);
    setRunning(true);
  };

  return (
    <div className="simulation-shell reflection-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">Optika</span>
        <h2>Qaytish va sinish</h2>
        <p>Nur ikki muhit chegarasiga tushganda bir qismi qaytadi, bir qismi esa Snell qonuniga ko'ra sinadi.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "n₁sinα = n₂sinβ", label: "Snell qonuni" }, { formula: `β = ${refracted}°`, label: `α' = ${reflected}°` }]} />
        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Nur diagrammasi</p>
            <svg viewBox="0 0 420 300" style={{ width: "100%", borderRadius: "1.5rem", background: "linear-gradient(180deg,#ecfeff 0%,#cffafe 50%,#dbeafe 50%,#bfdbfe 100%)" }}>
              <line x1="210" y1="0" x2="210" y2="300" stroke="#0f172a" strokeDasharray="8 6" strokeWidth="2" />
              <line x1="0" y1="150" x2="420" y2="150" stroke="#94a3b8" strokeWidth="2" />
              <line x1="210" y1="150" x2={210 - Math.sin((angle * Math.PI) / 180) * 120} y2={150 - Math.cos((angle * Math.PI) / 180) * 120} stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
              <line x1="210" y1="150" x2={210 + Math.sin((reflected * Math.PI) / 180) * 120} y2={150 - Math.cos((reflected * Math.PI) / 180) * 120} stroke="#22c55e" strokeWidth="5" strokeLinecap="round" />
              <line x1="210" y1="150" x2={210 + Math.sin((refracted * Math.PI) / 180) * 120} y2={150 + Math.cos((refracted * Math.PI) / 180) * 120} stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <ResultGrid items={[{ label: "Tushish burchagi", value: `${angle}°` }, { label: "Qaytish burchagi", value: `${reflected}°` }, { label: "Sinish burchagi", value: `${refracted}°` }]} />
          </div>
          <div className="simulation-controls">
            <p className="simulation-card-title">Optik muhitlar</p>
            <RangeField label="Tushish burchagi" value={angle} min={5} max={80} step={1} suffix=" °" onChange={setAngle} accent="#f97316" />
            <RangeField label="1-muhit sindirish ko'rsatkichi" value={n1} min={1} max={2} step={0.01} onChange={setN1} accent="#06b6d4" />
            <RangeField label="2-muhit sindirish ko'rsatkichi" value={n2} min={1} max={2.5} step={0.01} onChange={setN2} accent="#2563eb" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>
        <SmallGraph points={graph} xLabel="α" yLabel="β" color="#06b6d4" />
        <EducationalNote>Zichroq muhitga kirgan nur normalga yaqinlashadi, siyrak muhitga o'tganda esa normaldan uzoqlashadi.</EducationalNote>
      </div>
    </div>
  );
}
