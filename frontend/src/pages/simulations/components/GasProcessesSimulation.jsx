import { useMemo, useState } from "react";

import "./GasProcessesSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, PistonScene, RangeField, ResultGrid, SmallGraph, generateMoleculeNodes } from "./simulationShared.jsx";

const MODES = {
  isotermik: { label: "Izotermik jarayon", formula: "T = const" },
  izobarik: { label: "Izobarik jarayon", formula: "P = const" },
  izoxorik: { label: "Izoxorik jarayon", formula: "V = const" },
};

export default function GasProcessesSimulation() {
  const [mode, setMode] = useState("isotermik");
  const [volume, setVolume] = useState(18);
  const [pressure, setPressure] = useState(2.2);
  const [temperature, setTemperature] = useState(310);
  const [running, setRunning] = useState(true);

  const constantSnapshot = useMemo(() => ({ pressure: 2.2, volume: 18, temperature: 310 }), []);

  const handleVolume = (nextVolume) => {
    if (mode === "izoxorik") return;
    setVolume(nextVolume);
    if (mode === "isotermik") {
      setPressure(Number(((constantSnapshot.pressure * constantSnapshot.volume) / nextVolume).toFixed(2)));
    }
    if (mode === "izobarik") {
      setTemperature(Math.round((nextVolume / constantSnapshot.volume) * constantSnapshot.temperature));
    }
  };

  const handlePressure = (nextPressure) => {
    if (mode === "izobarik") return;
    setPressure(nextPressure);
    if (mode === "isotermik") {
      setVolume(Number(((constantSnapshot.pressure * constantSnapshot.volume) / nextPressure).toFixed(1)));
    }
    if (mode === "izoxorik") {
      setTemperature(Math.round((nextPressure / constantSnapshot.pressure) * constantSnapshot.temperature));
    }
  };

  const handleTemperature = (nextTemperature) => {
    if (mode === "isotermik") return;
    setTemperature(nextTemperature);
    if (mode === "izobarik") {
      setVolume(Number(((nextTemperature / constantSnapshot.temperature) * constantSnapshot.volume).toFixed(1)));
    }
    if (mode === "izoxorik") {
      setPressure(Number(((nextTemperature / constantSnapshot.temperature) * constantSnapshot.pressure).toFixed(2)));
    }
  };

  const pvPoints = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => {
      const sampleV = 8 + index * 2.4;
      const y = mode === "izobarik" ? pressure : (pressure * volume) / sampleV;
      return { x: sampleV, y: Number(y.toFixed(2)) };
    });
  }, [mode, pressure, volume]);

  const tvPoints = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => {
      const sampleV = 8 + index * 2.4;
      const y = mode === "izotermik" ? temperature : (temperature / volume) * sampleV;
      return { x: sampleV, y: Number(y.toFixed(2)) };
    });
  }, [mode, temperature, volume]);

  const pistonTop = Math.max(20, 72 - volume * 1.8);

  const reset = () => {
    setMode("isotermik");
    setVolume(18);
    setPressure(2.2);
    setTemperature(310);
    setRunning(true);
  };

  return (
    <div className="simulation-shell gas-process-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">GasProcessesSimulation</span>
        <h2>Gaz termodinamik jarayonlari simulyatori</h2>
        <p>Izotermik, izobarik va izoxorik jarayonlarni solishtiring. Bir parametr o'zgarmas bo'lib qoladi, qolganlari esa jonli ravishda yangilanadi.</p>
      </div>
      <div className="simulation-body">
        <div className="simulation-mode-row">
          {Object.entries(MODES).map(([key, item]) => (
            <button key={key} type="button" className={`simulation-mode-btn ${mode === key ? "is-active" : ""}`} onClick={() => setMode(key)}>
              {item.label}
            </button>
          ))}
        </div>

        <FormulaBar items={[{ formula: MODES[mode].formula, label: MODES[mode].label }, { formula: `P=${pressure} atm`, label: `V=${volume} L • T=${temperature} K` }]} />

        <div className="simulation-main-grid">
          <div className="simulation-card">
            <PistonScene title="Porshenli silindr" pistonTop={pistonTop} running={running} pressureLabel={`${MODES[mode].label}`} accent="#7c3aed">
              {generateMoleculeNodes(20, running ? temperature / 120 : 0.2, "#7c3aed")}
            </PistonScene>
          </div>

          <div className="simulation-controls gas-process-theme">
            <p className="simulation-card-title">Jarayon boshqaruvi</p>
            <RangeField label="Hajm" value={volume} min={8} max={28} step={0.5} suffix=" L" onChange={handleVolume} />
            <RangeField label="Bosim" value={pressure} min={0.8} max={4.8} step={0.1} suffix=" atm" onChange={handlePressure} />
            <RangeField label="Temperatura" value={temperature} min={220} max={520} step={5} suffix=" K" onChange={handleTemperature} />
            <ResultGrid items={[{ label: "Rejim", value: MODES[mode].label }, { label: "P", value: `${pressure} atm` }, { label: "V", value: `${volume} L` }, { label: "T", value: `${temperature} K` }]} />
            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} />
          </div>
        </div>

        <div className="simulation-grid-2">
          <SmallGraph points={pvPoints} xLabel="V (L)" yLabel="P (atm)" color="#7c3aed" />
          <SmallGraph points={tvPoints} xLabel="V (L)" yLabel="T (K)" color="#f97316" />
        </div>

        <EducationalNote>
          Izotermik jarayonda temperatura o'zgarmaydi. Izobarikda bosim, izoxorikda esa hajm doimiy qoladi. Shu sababli grafiklarning shakli turlicha ko'rinadi.
        </EducationalNote>
      </div>
    </div>
  );
}
