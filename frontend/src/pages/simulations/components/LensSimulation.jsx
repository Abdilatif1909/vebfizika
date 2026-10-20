import { useMemo, useState } from "react";

import "./LensSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function LensSimulation() {
  const [focalLength, setFocalLength] = useState(20);
  const [objectDistance, setObjectDistance] = useState(45);
  const [objectHeight, setObjectHeight] = useState(8);
  const [running, setRunning] = useState(true);

  const imageDistance = useMemo(() => Number(((focalLength * objectDistance) / (objectDistance - focalLength)).toFixed(1)), [focalLength, objectDistance]);
  const magnification = useMemo(() => Number((imageDistance / objectDistance).toFixed(2)), [imageDistance, objectDistance]);
  const imageHeight = useMemo(() => Number((objectHeight * magnification).toFixed(1)), [magnification, objectHeight]);
  const graph = useMemo(() => Array.from({ length: 8 }, (_, i) => {
    const d = 25 + i * 10;
    return { x: d, y: Number(((focalLength * d) / (d - focalLength)).toFixed(1)) };
  }), [focalLength]);

  const reset = () => {
    setFocalLength(20);
    setObjectDistance(45);
    setObjectHeight(8);
    setRunning(true);
  };

  return (
    <div className="simulation-shell lens-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">Linza</span>
        <h2>Yupqa linza tasvir yasashi</h2>
        <p>Jism masofasi o'zgarsa, tasvir masofasi va kattalashishi ham o'zgaradi.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "1/f = 1/d + 1/f'", label: "Yupqa linza formulasi" }, { formula: `M = ${magnification}`, label: `h' = ${imageHeight} sm` }]} />
        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Optik sxema</p>
            <svg viewBox="0 0 520 280" style={{ width: "100%", borderRadius: "1.5rem", background: "linear-gradient(180deg,#f0fdf4,#dcfce7)" }}>
              <line x1="20" y1="140" x2="500" y2="140" stroke="#0f172a" strokeWidth="2" />
              <ellipse cx="260" cy="140" rx="22" ry="95" fill="rgba(34,197,94,0.18)" stroke="#22c55e" strokeWidth="4" />
              <line x1={260 - objectDistance * 4} y1="140" x2={260 - objectDistance * 4} y2={140 - objectHeight * 10} stroke="#f97316" strokeWidth="5" />
              <line x1={260 + imageDistance * 3} y1="140" x2={260 + imageDistance * 3} y2={140 + imageHeight * 10} stroke="#2563eb" strokeWidth="5" />
              <circle cx={260 - focalLength * 4} cy="140" r="5" fill="#0f172a" />
              <circle cx={260 + focalLength * 4} cy="140" r="5" fill="#0f172a" />
            </svg>
            <ResultGrid items={[{ label: "f", value: `${focalLength} sm` }, { label: "d", value: `${objectDistance} sm` }, { label: "d'", value: `${imageDistance} sm` }, { label: "M", value: magnification }]} />
          </div>
          <div className="simulation-controls">
            <p className="simulation-card-title">Optik parametrlar</p>
            <RangeField label="Fokus masofasi" value={focalLength} min={5} max={30} step={1} suffix=" sm" onChange={setFocalLength} accent="#22c55e" />
            <RangeField label="Jism masofasi" value={objectDistance} min={25} max={80} step={1} suffix=" sm" onChange={setObjectDistance} accent="#f97316" />
            <RangeField label="Jism balandligi" value={objectHeight} min={2} max={15} step={0.5} suffix=" sm" onChange={setObjectHeight} accent="#2563eb" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>
        <SmallGraph points={graph} xLabel="d" yLabel="d'" color="#22c55e" />
        <EducationalNote>Jism fokusdan tashqarida joylashganda haqiqiy tasvir hosil bo'ladi. Tasvir masofasi fokusga va jismning linzadan qancha uzoqligiga bog'liq.</EducationalNote>
      </div>
    </div>
  );
}
