import { useMemo, useState } from "react";

import "./IdealGasSimulation.css";
import { ActionButtons, EducationalNote, FormulaBar, MoleculeScene, RangeField, ResultGrid, SmallGraph, clamp } from "./simulationShared.jsx";

const R = 0.082;

export default function IdealGasSimulation() {
  const [pressure, setPressure] = useState(2.4);
  const [volume, setVolume] = useState(22);
  const [temperature, setTemperature] = useState(320);
  const [moles, setMoles] = useState(1.2);
  const [running, setRunning] = useState(true);

  const calculatedPressure = useMemo(() => Number(((moles * R * temperature) / volume).toFixed(2)), [moles, temperature, volume]);
  const pressureGap = Number((pressure - calculatedPressure).toFixed(2));
  const moleculeCount = clamp(Math.round(moles * 14), 10, 32);
  const graphPoints = useMemo(
    () => Array.from({ length: 12 }, (_, index) => {
      const sampleVolume = 8 + index * 3;
      return { x: sampleVolume, y: Number(((moles * R * temperature) / sampleVolume).toFixed(2)) };
    }),
    [moles, temperature],
  );

  const reset = () => {
    setPressure(2.4);
    setVolume(22);
    setTemperature(320);
    setMoles(1.2);
    setRunning(true);
  };

  return (
    <div className="simulation-shell ideal-gas-theme">
      <div className="simulation-hero">
        <span className="simulation-badge">Ideal Gas Law Simulation</span>
        <h2>Ideal gaz qonuni laboratoriyasi</h2>
        <p>PV = nRT formulasi asosida bosim, hajm, temperatura va modda miqdori o'rtasidagi bog'lanishni virtual tajriba orqali kuzating.</p>
      </div>

      <div className="simulation-body">
        <FormulaBar items={[{ formula: "PV = nRT", label: "Asosiy formula" }, { formula: `P = ${(calculatedPressure).toFixed(2)} atm`, label: "Hisoblangan bosim" }]} />

        <div className="simulation-main-grid">
          <div className="simulation-card">
            <MoleculeScene
              title="Gaz molekulalari"
              note="Temperatura oshsa molekulalar tezroq harakatlanadi"
              widthPercent={clamp(45 + volume * 2, 48, 92)}
              moleculeCount={moleculeCount}
              speed={running ? temperature / 110 : 0}
              pressureLabel={`Bosim ko'rsatkichi: ${pressure.toFixed(1)} atm`}
            />
          </div>

          <div className="simulation-controls ideal-gas-theme">
            <p className="simulation-card-title">Parametrlarni boshqarish</p>
            <div className="simulation-grid-2">
              <RangeField label="Bosim" value={pressure} min={0.5} max={6} step={0.1} suffix=" atm" onChange={setPressure} />
              <RangeField label="Hajm" value={volume} min={8} max={36} step={1} suffix=" L" onChange={setVolume} />
              <RangeField label="Temperatura" value={temperature} min={220} max={600} step={5} suffix=" K" onChange={setTemperature} />
              <RangeField label="Mole miqdori" value={moles} min={0.4} max={2.5} step={0.1} suffix=" mol" onChange={setMoles} />
            </div>

            <ResultGrid
              items={[
                { label: "Hisoblangan P", value: `${calculatedPressure} atm` },
                { label: "Kiritilgan P", value: `${pressure.toFixed(1)} atm` },
                { label: "Farq", value: `${pressureGap > 0 ? "+" : ""}${pressureGap} atm` },
                { label: "Molekulalar", value: moleculeCount },
              ]}
            />

            <ActionButtons onReset={reset} onToggle={() => setRunning((value) => !value)} running={running} startLabel="Animatsiyani boshlash" stopLabel="Animatsiyani to'xtatish" />
          </div>
        </div>

        <div className="simulation-grid-2">
          <SmallGraph points={graphPoints} xLabel="V (L)" yLabel="P (atm)" color="#2563eb" />
          <EducationalNote>
            Temperatura oshishi bilan gaz molekulalari tezroq harakat qiladi. Hajm kichrayganda idish devorlariga urilishlar ko'payib, bosim oshadi.
          </EducationalNote>
        </div>
      </div>
    </div>
  );
}
