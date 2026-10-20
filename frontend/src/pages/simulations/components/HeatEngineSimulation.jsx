import { useMemo, useState } from "react";

import "./HeatEngineSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function HeatEngineSimulation() {
  const [hotTemp, setHotTemp] = useState(600);
  const [coldTemp, setColdTemp] = useState(300);
  const [heatInput, setHeatInput] = useState(1200);
  const [running, setRunning] = useState(true);

  const efficiency = useMemo(() => Number((1 - coldTemp / hotTemp).toFixed(3)), [coldTemp, hotTemp]);
  const work = useMemo(() => Number((heatInput * efficiency).toFixed(1)), [efficiency, heatInput]);
  const rejected = useMemo(() => Number((heatInput - work).toFixed(1)), [heatInput, work]);
  const cycle = useMemo(() => [{ x: 1, y: hotTemp }, { x: 2, y: hotTemp * 0.85 }, { x: 3, y: coldTemp * 1.1 }, { x: 4, y: coldTemp }], [coldTemp, hotTemp]);

  const reset = () => {
    setHotTemp(600);
    setColdTemp(300);
    setHeatInput(1200);
    setRunning(true);
  };

  return (
    <div className="simulation-shell heat-engine-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">Issiqlik mashinasi</span>
        <h2>Karnot dvigateli samaradorligi</h2>
        <p>Issiq manbadan olingan energiyaning qanchasi foydali ishga aylanishini kuzating.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "η = 1 - T₂/T₁", label: "Karnot formulasi" }, { formula: `η = ${(efficiency * 100).toFixed(1)}%`, label: `A = ${work} J` }]} />
        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Energiya oqimi</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              <div style={{ padding: "1rem", borderRadius: "1rem", background: "linear-gradient(90deg,#f97316,#f59e0b)", color: "white" }}>Issiq manba: {heatInput} J</div>
              <div style={{ padding: "1rem", borderRadius: "1rem", background: "linear-gradient(90deg,#22c55e,#16a34a)", color: "white", width: `${Math.max(25, efficiency * 100)}%` }}>Foydali ish: {work} J</div>
              <div style={{ padding: "1rem", borderRadius: "1rem", background: "linear-gradient(90deg,#60a5fa,#2563eb)", color: "white", width: `${Math.max(25, (rejected / heatInput) * 100)}%` }}>Sovuq manbaga ketgan: {rejected} J</div>
            </div>
            <ResultGrid items={[{ label: "T₁", value: `${hotTemp} K` }, { label: "T₂", value: `${coldTemp} K` }, { label: "Samaradorlik", value: `${(efficiency * 100).toFixed(1)} %` }, { label: "Ish", value: `${work} J` }]} />
          </div>
          <div className="simulation-controls">
            <p className="simulation-card-title">Dvigatel parametrlari</p>
            <RangeField label="Issiq manba temperaturasi" value={hotTemp} min={350} max={900} step={10} suffix=" K" onChange={setHotTemp} accent="#f97316" />
            <RangeField label="Sovuq manba temperaturasi" value={coldTemp} min={120} max={500} step={10} suffix=" K" onChange={setColdTemp} accent="#2563eb" />
            <RangeField label="Berilgan issiqlik" value={heatInput} min={400} max={2200} step={20} suffix=" J" onChange={setHeatInput} accent="#16a34a" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>
        <SmallGraph points={cycle} xLabel="Sikl bosqichi" yLabel="T (K)" color="#f59e0b" />
        <EducationalNote>Issiqlik mashinasining nazariy maksimal samaradorligi issiq va sovuq manba temperaturalari farqiga bog'liq. Sovuq manba qancha past bo'lsa, samaradorlik shuncha yuqori bo'ladi.</EducationalNote>
      </div>
    </div>
  );
}
