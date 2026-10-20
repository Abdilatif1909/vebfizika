import { useMemo, useState } from "react";

import "./MeltingFreezingSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function MeltingFreezingSimulation() {
  const [mass, setMass] = useState(2);
  const [heat, setHeat] = useState(280000);
  const [temperature, setTemperature] = useState(0);
  const [running, setRunning] = useState(true);

  const latentHeat = 334000;
  const meltFraction = useMemo(() => Math.max(0, Math.min(1, heat / (mass * latentHeat))), [heat, latentHeat, mass]);
  const stateLabel = meltFraction >= 1 ? "To'liq suyuq" : meltFraction <= 0 ? "To'liq muz" : "Aralash faza";
  const graph = useMemo(() => [{ x: 0, y: -10 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 15 }], []);

  const reset = () => {
    setMass(2);
    setHeat(280000);
    setTemperature(0);
    setRunning(true);
  };

  return (
    <div className="simulation-shell melting-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">Erish va qotish</span>
        <h2>Faza almashinuvi simulyatori</h2>
        <p>Muz erishi vaqtida temperatura o'zgarmasdan qoladi, ammo modda ichki energiya yig'adi.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "Q = λm", label: "Erish issiqligi" }, { formula: `${(meltFraction * 100).toFixed(1)}%`, label: stateLabel }]} />
        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Faza ko'rinishi</p>
            <div style={{ height: "300px", borderRadius: "1.5rem", background: "linear-gradient(180deg,#eff6ff,#bfdbfe)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: "auto 10% 8% 10%", height: "54%", borderRadius: "1.5rem", background: "rgba(255,255,255,0.55)", border: "2px solid rgba(59,130,246,0.25)" }}>
                <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: `${meltFraction * 100}%`, background: "linear-gradient(180deg,#38bdf8,#2563eb)" }} />
                <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: `${(1 - meltFraction) * 100}%`, background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.9) 10px, rgba(191,219,254,0.95) 10px, rgba(191,219,254,0.95) 20px)" }} />
              </div>
            </div>
            <ResultGrid items={[{ label: "Massa", value: `${mass} kg` }, { label: "Berilgan Q", value: `${heat} J` }, { label: "Temperatura", value: `${temperature} °C` }, { label: "Holat", value: stateLabel }]} />
          </div>
          <div className="simulation-controls">
            <p className="simulation-card-title">Parametrlar</p>
            <RangeField label="Massa" value={mass} min={0.5} max={5} step={0.1} suffix=" kg" onChange={setMass} accent="#3b82f6" />
            <RangeField label="Berilgan issiqlik" value={heat} min={0} max={800000} step={10000} suffix=" J" onChange={setHeat} accent="#f97316" />
            <RangeField label="Boshlang'ich temperatura" value={temperature} min={-20} max={20} step={1} suffix=" °C" onChange={setTemperature} accent="#6366f1" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>
        <SmallGraph points={graph} xLabel="Jarayon" yLabel="T (°C)" color="#3b82f6" />
        <EducationalNote>Erish nuqtasida temperatura vaqtincha o'zgarmaydi. Chunki berilgan energiya kristall panjarani buzishga sarflanadi.</EducationalNote>
      </div>
    </div>
  );
}
