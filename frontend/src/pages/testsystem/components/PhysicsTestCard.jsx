import { ArrowRight, BarChart3, BrainCircuit, Layers3 } from "lucide-react";

import "./PhysicsTestCard.css";

const difficultyTone = {
  "Boshlang'ich": "is-easy",
  "O'rta": "is-medium",
  "Qiyin": "is-hard",
};

export default function PhysicsTestCard({ topic, onStart }) {
  return (
    <article className="physics-test-card">
      <div className="physics-test-card-orb" />
      <div className="physics-test-card-head">
        <div className="physics-test-card-icon" aria-hidden="true">{topic.icon}</div>
        <span className={`physics-test-card-difficulty ${difficultyTone[topic.difficulty] || ""}`}>{topic.difficulty}</span>
      </div>

      <div className="physics-test-card-body">
        <h3>{topic.title}</h3>
        <p>9-sinf o'quvchilari uchun gamifikatsiyalangan fizika savollari to'plami.</p>

        <div className="physics-test-card-meta">
          <span><Layers3 size={15} /> 20 ta savol</span>
          <span><BarChart3 size={15} /> {topic.branch}</span>
          <span><BrainCircuit size={15} /> Premium test</span>
        </div>
      </div>

      <button type="button" className="physics-test-card-button" onClick={() => onStart(topic)}>
        Testni ishlash <ArrowRight size={17} />
      </button>
    </article>
  );
}
