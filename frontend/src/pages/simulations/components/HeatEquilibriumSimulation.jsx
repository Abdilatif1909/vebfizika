import { useMemo, useState } from "react";

import "./HeatEquilibriumSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function HeatEquilibriumSimulation() {
  const [massHot, setMassHot] = useState(2.5);
  const [massCold, setMassCold] = useState(1.8);
  const [tempHot, setTempHot] = useState(80);
  const [tempCold, setTempCold] = useState(20);
  const [running, setRunning] = useState(true);

  const equilibrium = useMemo(() => Number(((massHot * tempHot + massCold * tempCold) / (massHot + massCold)).toFixed(1)), [massCold, massHot, tempCold, tempHot]);
  const heatLost = useMemo(() => Number((massHot * (tempHot - equilibrium) * 4200).toFixed(0)), [equilibrium, massHot, tempHot]);
  const heatGained = useMemo(() => Number((massCold * (equilibrium - tempCold) * 4200).toFixed(0)), [equilibrium, massCold, tempCold]);
  const curve = useMemo(() => Array.from({ length: 8 }, (_, i) => ({ x: i, y: Number((tempHot - ((tempHot - equilibrium) / 7) * i).toFixed(1)) })), [equilibrium, tempHot]);
  const coldCurve = useMemo(() => Array.from({ length: 8 }, (_, i) => ({ x: i, y: Number((tempCold + ((equilibrium - tempCold) / 7) * i).toFixed(1)) })), [equilibrium, tempCold]);

  const reset = () => {
    setMassHot(2.5);
    setMassCold(1.8);
    setTempHot(80);
    setTempCold(20);
    setRunning(true);
  };

  return (
    <div className="simulation-shell heat-equilibrium-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">Issiqlik muvozanati</span>
        <h2>Ikki jism orasidagi issiqlik almashinuvi</h2>
        <p>Qizigan va sovuq jismlar o'zaro issiqlik almashib, bitta umumiy muvozanat temperaturasiga keladi.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "Qyo'qotilgan = Qolingan", label: "Muvozanat sharti" }, { formula: `Tₘ = ${equilibrium} °C`, label: "Yakuniy temperatura" }]} />
        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Aralashish sxemasi</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "end", gap: "1rem" }}>
              <div style={{ padding: "1rem", borderRadius: "1.25rem", background: "linear-gradient(180deg,#fb7185,#ef4444)", color: "white", minHeight: `${120 + massHot * 18}px` }}>
                Issiq jism
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#0f172a" }}>⇄</div>
              <div style={{ padding: "1rem", borderRadius: "1.25rem", background: "linear-gradient(180deg,#38bdf8,#0ea5e9)", color: "white", minHeight: `${120 + massCold * 18}px` }}>
                Sovuq jism
              </div>
            </div>
            <ResultGrid items={[{ label: "Issiq jism issiqligi", value: `${heatLost} J` }, { label: "Sovuq jism olgan issiqlik", value: `${heatGained} J` }, { label: "Yakuniy T", value: `${equilibrium} °C` }]} />
          </div>
          <div className="simulation-controls">
            <p className="simulation-card-title">Qiymatlar</p>
            <RangeField label="Issiq jism massasi" value={massHot} min={0.5} max={5} step={0.1} suffix=" kg" onChange={setMassHot} accent="#ef4444" />
            <RangeField label="Sovuq jism massasi" value={massCold} min={0.5} max={5} step={0.1} suffix=" kg" onChange={setMassCold} accent="#0ea5e9" />
            <RangeField label="Issiq temperatura" value={tempHot} min={40} max={100} step={1} suffix=" °C" onChange={setTempHot} accent="#ef4444" />
            <RangeField label="Sovuq temperatura" value={tempCold} min={0} max={40} step={1} suffix=" °C" onChange={setTempCold} accent="#0ea5e9" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>
        <div className="simulation-grid-2">
          <SmallGraph points={curve} xLabel="Vaqt" yLabel="Issiq T" color="#ef4444" />
          <SmallGraph points={coldCurve} xLabel="Vaqt" yLabel="Sovuq T" color="#0ea5e9" />
        </div>
        <EducationalNote>Agar tashqi muhitga issiqlik yo'qotilishi hisobga olinmasa, issiq jism yo'qotgan energiya sovuq jism olgan energiyaga teng bo'ladi.</EducationalNote>
      </div>
    </div>
  );
}
