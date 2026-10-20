import { useMemo, useState } from "react";

import "./ThermodynamicsLawSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function ThermodynamicsLawSimulation() {
  const [heat, setHeat] = useState(480);
  const [work, setWork] = useState(180);
  const [internalEnergy, setInternalEnergy] = useState(300);
  const [running, setRunning] = useState(true);

  const deltaU = useMemo(() => Number((heat - work).toFixed(1)), [heat, work]);
  const energyBars = useMemo(
    () => [
      { x: 1, y: heat },
      { x: 2, y: work },
      { x: 3, y: deltaU },
      { x: 4, y: internalEnergy + deltaU },
    ],
    [deltaU, heat, internalEnergy, work],
  );

  const reset = () => {
    setHeat(480);
    setWork(180);
    setInternalEnergy(300);
    setRunning(true);
  };

  return (
    <div className="simulation-shell thermo-law-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">1-qonun</span>
        <h2>Termodinamikaning birinchi qonuni</h2>
        <p>Issiqlik, ish va ichki energiya o'rtasidagi bog'lanishni kuzating: $Q = \Delta U + A$.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "Q = ΔU + A", label: "Asosiy tenglama" }, { formula: `ΔU = ${deltaU}`, label: "Hisoblangan ichki energiya o'zgarishi" }]} />

        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Energiya almashinuvi</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              <div style={{ height: "18px", width: `${Math.min(100, heat / 6)}%`, borderRadius: "999px", background: "linear-gradient(90deg, #fb7185, #ef4444)" }} />
              <div style={{ height: "18px", width: `${Math.min(100, work / 6)}%`, borderRadius: "999px", background: "linear-gradient(90deg, #f59e0b, #f97316)" }} />
              <div style={{ height: "18px", width: `${Math.min(100, Math.abs(deltaU) / 6)}%`, borderRadius: "999px", background: "linear-gradient(90deg, #60a5fa, #2563eb)" }} />
            </div>
            <ResultGrid items={[{ label: "Issiqlik Q", value: `${heat} J` }, { label: "Ish A", value: `${work} J` }, { label: "ΔU", value: `${deltaU} J` }, { label: "Yakuniy U", value: `${internalEnergy + deltaU} J` }]} />
          </div>

          <div className="simulation-controls">
            <p className="simulation-card-title">Parametrlar</p>
            <RangeField label="Berilgan issiqlik" value={heat} min={100} max={900} step={10} suffix=" J" onChange={setHeat} accent="#ef4444" />
            <RangeField label="Bajarilgan ish" value={work} min={0} max={700} step={10} suffix=" J" onChange={setWork} accent="#f59e0b" />
            <RangeField label="Boshlang'ich ichki energiya" value={internalEnergy} min={100} max={700} step={10} suffix=" J" onChange={setInternalEnergy} accent="#2563eb" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>

        <SmallGraph points={energyBars} xLabel="Bosqich" yLabel="Energiya (J)" color="#ef4444" />
        <EducationalNote>Yopiq tizimga issiqlik berilsa, uning bir qismi ichki energiyani oshiradi, qolgan qismi esa tashqi kuchlarga qarshi ish bajarishga sarflanadi.</EducationalNote>
      </div>
    </div>
  );
}
