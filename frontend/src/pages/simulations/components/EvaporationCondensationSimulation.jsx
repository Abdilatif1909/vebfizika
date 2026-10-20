import { useMemo, useState } from "react";

import "./EvaporationCondensationSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function EvaporationCondensationSimulation() {
  const [temperature, setTemperature] = useState(35);
  const [surfaceArea, setSurfaceArea] = useState(1.2);
  const [humidity, setHumidity] = useState(45);
  const [running, setRunning] = useState(true);

  const evaporationRate = useMemo(() => Number((((temperature / 50) * surfaceArea * (1 - humidity / 100)) * 10).toFixed(2)), [humidity, surfaceArea, temperature]);
  const condensationRate = useMemo(() => Number((((humidity / 100) * Math.max(0, 30 - temperature)) / 30).toFixed(2)), [humidity, temperature]);
  const graph = useMemo(() => Array.from({ length: 10 }, (_, i) => ({ x: i, y: Number((((10 + i * 4) / 50) * surfaceArea * (1 - humidity / 100) * 10).toFixed(2)) })), [humidity, surfaceArea]);

  const reset = () => {
    setTemperature(35);
    setSurfaceArea(1.2);
    setHumidity(45);
    setRunning(true);
  };

  return (
    <div className="simulation-shell evaporation-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">Bug'lanish</span>
        <h2>Bug'lanish va kondensatsiya</h2>
        <p>Temperatura va namlik o'zgargan sari suyuqlikdan bug'ga va bug'dan suyuqlikka o'tish tezligi almashinadi.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "v ~ T·S·(1-H)", label: "Bug'lanish tendensiyasi" }, { formula: `v = ${evaporationRate}`, label: `k = ${condensationRate}` }]} />
        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Faza almashinuvi muhiti</p>
            <div style={{ height: "310px", position: "relative", overflow: "hidden", borderRadius: "1.5rem", background: "linear-gradient(180deg,#ddd6fe,#bfdbfe 45%,#93c5fd 45%,#60a5fa)" }}>
              <div style={{ position: "absolute", left: "10%", right: "10%", bottom: "8%", height: "20%", borderRadius: "1.25rem", background: "linear-gradient(180deg,#38bdf8,#2563eb)" }} />
              {Array.from({ length: 12 }, (_, index) => (
                <span key={index} style={{ position: "absolute", bottom: `${30 + (index % 3) * 8}%`, left: `${12 + index * 6}%`, width: "14px", height: "14px", borderRadius: "999px", background: "rgba(255,255,255,0.75)", filter: "blur(1px)", transform: `translateY(${running ? -(index % 4) * 14 : 0}px)` }} />
              ))}
            </div>
            <ResultGrid items={[{ label: "Bug'lanish", value: evaporationRate }, { label: "Kondensatsiya", value: condensationRate }, { label: "Namlik", value: `${humidity} %` }, { label: "Yuza", value: `${surfaceArea} m²` }]} />
          </div>
          <div className="simulation-controls">
            <p className="simulation-card-title">Muhit parametrlari</p>
            <RangeField label="Temperatura" value={temperature} min={0} max={60} step={1} suffix=" °C" onChange={setTemperature} accent="#8b5cf6" />
            <RangeField label="Sirt maydoni" value={surfaceArea} min={0.2} max={3} step={0.1} suffix=" m²" onChange={setSurfaceArea} accent="#2563eb" />
            <RangeField label="Nisbiy namlik" value={humidity} min={5} max={100} step={1} suffix=" %" onChange={setHumidity} accent="#0ea5e9" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>
        <SmallGraph points={graph} xLabel="T bosqich" yLabel="Bug'lanish" color="#8b5cf6" />
        <EducationalNote>Quruq va issiq havoda bug'lanish kuchayadi. Nam va sovuq muhitda esa kondensatsiya kuchayib, bug' tomchilarga aylanadi.</EducationalNote>
      </div>
    </div>
  );
}
