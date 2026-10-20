import { useMemo, useState } from "react";

import "./TotalInternalReflectionSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function TotalInternalReflectionSimulation() {
  const [nDense, setNDense] = useState(1.5);
  const [nRare, setNRare] = useState(1);
  const [angle, setAngle] = useState(35);
  const [running, setRunning] = useState(true);

  const critical = useMemo(() => Number(((Math.asin(Math.min(0.999, nRare / nDense)) * 180) / Math.PI).toFixed(1)), [nDense, nRare]);
  const isTotal = angle >= critical;
  const graph = useMemo(() => Array.from({ length: 10 }, (_, i) => ({ x: 10 + i * 6, y: critical })), [critical]);

  const reset = () => {
    setNDense(1.5);
    setNRare(1);
    setAngle(35);
    setRunning(true);
  };

  return (
    <div className="simulation-shell tir-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">To'la ichki qaytish</span>
        <h2>Kritik burchak hodisasi</h2>
        <p>Zich muhitdan siyrak muhitga o'tayotganda tushish burchagi kritik qiymatdan katta bo'lsa, nur to'liq qaytadi.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "sin αₖ = n₂ / n₁", label: "Kritik burchak" }, { formula: `αₖ = ${critical}°`, label: isTotal ? "To'la ichki qaytish" : "Oddiy sinish" }]} />
        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Optik tolaga o'xshash model</p>
            <svg viewBox="0 0 420 300" style={{ width: "100%", borderRadius: "1.5rem", background: "linear-gradient(180deg,#eef2ff,#dbeafe)" }}>
              <rect x="40" y="70" width="340" height="160" rx="24" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.5)" strokeWidth="4" />
              <line x1="210" y1="150" x2={100 + Math.cos((angle * Math.PI) / 180) * 100} y2={150 - Math.sin((angle * Math.PI) / 180) * 100} stroke="#f97316" strokeWidth="5" />
              <line x1="210" y1="150" x2={320 - Math.cos((angle * Math.PI) / 180) * 100} y2={150 - Math.sin((angle * Math.PI) / 180) * 100} stroke={isTotal ? "#22c55e" : "#2563eb"} strokeWidth="5" />
            </svg>
            <ResultGrid items={[{ label: "n₁", value: nDense }, { label: "n₂", value: nRare }, { label: "α", value: `${angle}°` }, { label: "Holat", value: isTotal ? "Qaytdi" : "SindI" }]} />
          </div>
          <div className="simulation-controls">
            <p className="simulation-card-title">Parametrlar</p>
            <RangeField label="Zich muhit n₁" value={nDense} min={1.2} max={2} step={0.01} onChange={setNDense} accent="#6366f1" />
            <RangeField label="Siyrak muhit n₂" value={nRare} min={1} max={1.5} step={0.01} onChange={setNRare} accent="#06b6d4" />
            <RangeField label="Tushish burchagi" value={angle} min={5} max={85} step={1} suffix=" °" onChange={setAngle} accent="#f97316" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>
        <SmallGraph points={graph} xLabel="Tajriba" yLabel="αₖ" color="#6366f1" />
        <EducationalNote>Bu hodisa optik tolalarda, prizmali asboblarda va turli sensorlarda qo'llanadi. Nur energiyasi tashqariga chiqmay, ichkarida yo'naltiriladi.</EducationalNote>
      </div>
    </div>
  );
}
