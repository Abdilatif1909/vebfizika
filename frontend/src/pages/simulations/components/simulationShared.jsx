import { Atom, RotateCcw, Play, Pause } from "lucide-react";

import "./simulationShared.css";

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function RangeField({ label, value, min, max, step = 1, onChange, suffix = "", accent = "#2563eb" }) {
  return (
    <div className="simulation-slider" style={{ "--sim-accent": accent }}>
      <div className="simulation-slider-head">
        <label>{label}</label>
        <span className="simulation-slider-value">
          {value}
          {suffix}
        </span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} />
      <div className="simulation-slider-meta">
        {min}
        {suffix} — {max}
        {suffix}
      </div>
    </div>
  );
}

export function FormulaBar({ items }) {
  return (
    <div className="formula-bar">
      {items.map((item) => (
        <div key={item.label} className="formula-pill">
          <strong>{item.formula}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ActionButtons({ onReset, onToggle, running, startLabel = "Boshlash", stopLabel = "To'xtatish" }) {
  return (
    <div className="simulation-actions">
      {onToggle && (
        <button type="button" className="simulation-btn simulation-btn-primary" onClick={onToggle}>
          {running ? <Pause size={16} /> : <Play size={16} />} {running ? stopLabel : startLabel}
        </button>
      )}
      <button type="button" className="simulation-btn simulation-btn-secondary" onClick={onReset}>
        <RotateCcw size={16} /> Reset
      </button>
    </div>
  );
}

export function SmallGraph({ points, xLabel, yLabel, color = "#2563eb" }) {
  const width = 360;
  const height = 220;
  const padding = 28;
  const safePoints = points.length ? points : [{ x: 0, y: 0 }];
  const maxX = Math.max(...safePoints.map((point) => point.x), 1);
  const minX = Math.min(...safePoints.map((point) => point.x), 0);
  const maxY = Math.max(...safePoints.map((point) => point.y), 1);
  const minY = Math.min(...safePoints.map((point) => point.y), 0);
  const toX = (value) => padding + ((value - minX) / (maxX - minX || 1)) * (width - padding * 2);
  const toY = (value) => height - padding - ((value - minY) / (maxY - minY || 1)) * (height - padding * 2);
  const path = safePoints.map((point, index) => `${index === 0 ? "M" : "L"} ${toX(point.x)} ${toY(point.y)}`).join(" ");

  return (
    <div className="simulation-graph">
      <svg viewBox={`0 0 ${width} ${height}`} className="graph-svg" role="img" aria-label={`${xLabel} va ${yLabel} grafigi`}>
        <rect x="0" y="0" width={width} height={height} rx="24" fill="rgba(248,250,252,0.95)" />
        <line x1={padding} y1={height - padding} x2={width - padding / 2} y2={height - padding} stroke="rgba(148,163,184,0.4)" strokeWidth="2" />
        <line x1={padding} y1={padding / 2} x2={padding} y2={height - padding} stroke="rgba(148,163,184,0.4)" strokeWidth="2" />
        <path d={path} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {safePoints.map((point, index) => (
          <circle key={`${point.x}-${point.y}-${index}`} cx={toX(point.x)} cy={toY(point.y)} r="4.5" fill={color} />
        ))}
      </svg>
      <div className="graph-labels">
        <span>{xLabel}</span>
        <span>{yLabel}</span>
      </div>
    </div>
  );
}

export function MoleculeScene({ title, note, widthPercent = 82, moleculeCount = 18, speed = 1, accent = "#2563eb", pressureLabel }) {
  const molecules = Array.from({ length: moleculeCount }, (_, index) => ({
    id: index,
    left: 8 + ((index * 31) % 78),
    top: 10 + ((index * 23) % 72),
    dx: `${(index % 6) * 6 - 12}px`,
    dy: `${((index + 2) % 5) * 7 - 14}px`,
    duration: `${Math.max(0.45, 2.8 - speed * 0.18 + (index % 5) * 0.08)}s`,
  }));

  return (
    <div className="simulation-visual" style={{ "--sim-accent": accent }}>
      <p className="simulation-card-title">{title}</p>
      <div className="gas-box">
        <div className="pressure-gauge">
          <strong>{pressureLabel}</strong>
          <div className="simulation-note">{note}</div>
        </div>
        <div className="gas-vessel" style={{ "--gas-width": `${widthPercent}%` }}>
          {molecules.map((molecule) => (
            <span
              key={molecule.id}
              className="gas-molecule"
              style={{
                left: `${molecule.left}%`,
                top: `${molecule.top}%`,
                animationDuration: molecule.duration,
                "--dx": molecule.dx,
                "--dy": molecule.dy,
                "--sim-accent": accent,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PistonScene({ title, pistonTop, running, pressureLabel, accent = "#f97316", children, showFlame = false, flameScale = 1 }) {
  return (
    <div className="simulation-visual" style={{ "--sim-accent": accent }}>
      <p className="simulation-card-title">{title}</p>
      <div className="cylinder-box">
        <div className="pressure-gauge">
          <strong>{pressureLabel}</strong>
          <div className="simulation-note">{running ? "Animatsiya faol" : "Animatsiya to'xtagan"}</div>
        </div>
        <div className="piston" style={{ "--piston-top": `${pistonTop}%` }} />
        <div className="gas-vessel" style={{ "--gas-width": "56%", left: "22%", right: "22%" }}>
          {children}
        </div>
        {showFlame && <div className="flame" style={{ "--flame-scale": flameScale }} />}
      </div>
    </div>
  );
}

export function generateMoleculeNodes(count, speed = 1, accent = "#2563eb") {
  return Array.from({ length: count }, (_, index) => (
    <span
      key={index}
      className="gas-molecule"
      style={{
        left: `${8 + ((index * 29) % 78)}%`,
        top: `${14 + ((index * 17) % 68)}%`,
        animationDuration: `${Math.max(0.45, 2.5 - speed * 0.15 + (index % 4) * 0.08)}s`,
        "--dx": `${(index % 7) * 5 - 12}px`,
        "--dy": `${((index + 1) % 6) * 6 - 15}px`,
        "--sim-accent": accent,
      }}
    />
  ));
}

export function ResultGrid({ items }) {
  return (
    <div className="simulation-stats-grid">
      {items.map((item) => (
        <div key={item.label} className="simulation-stat">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}

export function EducationalNote({ children }) {
  return (
    <div className="simulation-card">
      <div className="simulation-badge">
        <Atom size={14} /> Tushuntirish
      </div>
      <p className="simulation-hint" style={{ marginTop: "0.85rem" }}>{children}</p>
    </div>
  );
}
