import { useMemo, useState } from "react";

import "./SurfaceTensionSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, RangeField, ResultGrid, SmallGraph } from "./simulationShared.jsx";

export default function SurfaceTensionSimulation() {
  const [sigma, setSigma] = useState(0.072);
  const [length, setLength] = useState(0.18);
  const [temperature, setTemperature] = useState(25);
  const [running, setRunning] = useState(true);

  const adjustedSigma = useMemo(() => Number((sigma * (1 - (temperature - 25) * 0.003)).toFixed(4)), [sigma, temperature]);
  const force = useMemo(() => Number((2 * adjustedSigma * length).toFixed(4)), [adjustedSigma, length]);
  const points = useMemo(() => Array.from({ length: 10 }, (_, i) => {
    const sampleT = 5 + i * 8;
    return { x: sampleT, y: Number((sigma * (1 - (sampleT - 25) * 0.003)).toFixed(4)) };
  }), [sigma]);

  const reset = () => {
    setSigma(0.072);
    setLength(0.18);
    setTemperature(25);
    setRunning(true);
  };

  return (
    <div className="simulation-shell surface-tension-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">Sirt tarangligi</span>
        <h2>Suyuqlik pardasining taranglik kuchi</h2>
        <p>Sirt molekulalari ichkariga tortiladi va parda cho'zilgan ipga o'xshash kuch hosil qiladi.</p>
      </div>
      <div className="simulation-body">
        <FormulaBar items={[{ formula: "F = 2σl", label: "Parda formulasi" }, { formula: `F = ${force} N`, label: "Taranglik kuchi" }]} />
        <div className="simulation-main-grid">
          <div className="simulation-card">
            <p className="simulation-card-title">Sovun pardasi modeli</p>
            <div style={{ height: "300px", borderRadius: "1.5rem", background: "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.9), rgba(244,114,182,0.18), rgba(59,130,246,0.18))", border: "3px solid rgba(236,72,153,0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "14%", right: "14%", top: "10%", bottom: "10%", borderRadius: "999px", border: "4px solid rgba(15,23,42,0.8)" }} />
              <div style={{ position: "absolute", left: "18%", right: "18%", top: `${46 - force * 2200}%`, height: "10px", borderRadius: "999px", background: "linear-gradient(90deg,#ec4899,#8b5cf6)" }} />
            </div>
            <ResultGrid items={[{ label: "σ" , value: `${adjustedSigma} N/m` }, { label: "l", value: `${length} m` }, { label: "T", value: `${temperature} °C` }, { label: "F", value: `${force} N` }]} />
          </div>
          <div className="simulation-controls">
            <p className="simulation-card-title">Parametrlar</p>
            <RangeField label="Boshlang'ich σ" value={sigma} min={0.02} max={0.1} step={0.001} suffix=" N/m" onChange={setSigma} accent="#ec4899" />
            <RangeField label="Parda uzunligi" value={length} min={0.05} max={0.4} step={0.01} suffix=" m" onChange={setLength} accent="#8b5cf6" />
            <RangeField label="Temperatura" value={temperature} min={0} max={80} step={1} suffix=" °C" onChange={setTemperature} accent="#f97316" />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>
        <SmallGraph points={points} xLabel="T (°C)" yLabel="σ (N/m)" color="#ec4899" />
        <EducationalNote>Temperatura oshgan sari molekulalararo bog'lanish biroz susayadi va sirt tarangligi kamayadi. Shu sababli tomchilar shakli ham o'zgaradi.</EducationalNote>
      </div>
    </div>
  );
}
