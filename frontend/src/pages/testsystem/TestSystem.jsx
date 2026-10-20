import { History, Search, Sparkles, Trophy, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import "./TestSystem.css";
import PhysicsQuizEngine from "./components/PhysicsQuizEngine.jsx";
import PhysicsTestCard from "./components/PhysicsTestCard.jsx";
import physicsTopics from "./testData.js";
import { useAuth } from "../../context/AuthContext.jsx";
import studentAnalyticsService from "../../services/studentAnalyticsService.js";

const HISTORY_KEY = "physicsQuizHistory";

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function formatDate(value) {
  if (!value) {
    return "Hozirgina";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Hozirgina";
  }
  return date.toLocaleDateString("uz-UZ", { day: "2-digit", month: "short", year: "numeric" });
}

export default function TestSystem() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const filteredTopics = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) {
      return physicsTopics;
    }
    return physicsTopics.filter((topic) => [topic.title, topic.difficulty, topic.branch].some((value) => value.toLowerCase().includes(query)));
  }, [search]);

  const totalXp = useMemo(() => history.reduce((sum, item) => sum + (item.xp || 0), 0), [history]);
  const bestResult = useMemo(() => history.reduce((best, item) => Math.max(best, item.percentage || 0), 0), [history]);

  const handleComplete = async (result) => {
    const nextHistory = [result, ...loadHistory()].slice(0, 8);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory));
    setHistory(nextHistory);

    if (user?.role !== "student") {
      return;
    }

    try {
      await studentAnalyticsService.trackTest({
        resource_id: result.topicId,
        resource_title: result.topicTitle,
        score_percentage: result.percentage,
        xp_points: result.xp,
        metadata: {
          correct_answers: result.correctAnswers,
          incorrect_answers: result.incorrectAnswers,
          stars: result.stars,
          badge: result.badge,
        },
      });
    } catch {
      // Ignore tracking failures so the quiz UI stays responsive.
    }
  };

  if (activeTopic) {
    return <PhysicsQuizEngine topic={activeTopic} questions={activeTopic.questions} onBack={() => setActiveTopic(null)} onComplete={handleComplete} />;
  }

  return (
    <div className="test-system-page">
      <section className="test-system-hero">
        <span className="test-system-badge"><Sparkles size={16} /> Gamifikatsiyalangan fizika testlari</span>
        <h1>9-sinf o'quvchilari uchun Fizika fanidan interaktiv test tizimi</h1>
        <p>Har bir mavzu 20 ta savoldan iborat. Testlarni bosqichma-bosqich ishlab, XP to'plang, yulduzlarga ega bo'ling va eng yuqori natijada “Fizika Ustasi” darajasiga chiqing.</p>

        <div className="test-system-stats">
          <div className="test-system-stat"><span>Mavzular</span><strong>{physicsTopics.length} ta</strong></div>
          <div className="test-system-stat"><span>Jami XP</span><strong>{totalXp} XP</strong></div>
          <div className="test-system-stat"><span>Eng yaxshi natija</span><strong>{bestResult}%</strong></div>
          <div className="test-system-stat"><span>Rejim</span><strong>Quiz Game</strong></div>
        </div>
      </section>

      <section className="test-system-toolbar">
        <label className="test-system-search-wrap" aria-label="Test mavzularini qidirish">
          <Search size={18} />
          <input className="test-system-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Masalan: optika, gaz qonunlari, linzalar..." />
        </label>
        <div className="test-system-counter"><Zap size={18} /> {filteredTopics.length} ta mavzu mos keldi</div>
      </section>

      <section className="test-system-layout">
        <div className="test-system-main">
          <div className="test-system-section-head">
            <div>
              <h2>Test mavzulari</h2>
              <p>Mavzuni tanlang va darhol testni boshlang.</p>
            </div>
          </div>

          {filteredTopics.length === 0 ? (
            <div className="test-system-empty">
              <strong>Mos mavzu topilmadi</strong>
              <span>Qidiruv so'zini o'zgartirib qayta urinib ko'ring.</span>
            </div>
          ) : (
            <div className="test-system-grid">
              {filteredTopics.map((topic) => (
                <PhysicsTestCard key={topic.id} topic={topic} onStart={setActiveTopic} />
              ))}
            </div>
          )}
        </div>

        <aside className="test-system-history">
          <div className="test-system-history-head">
            <span className="test-system-side-badge"><History size={15} /> Natijalar tarixi</span>
            <h3>Talaba natijalari</h3>
            <p>So'nggi urinishlaringiz, ballaringiz va XP yutuqlaringiz shu yerda ko'rinadi.</p>
          </div>

          {history.length === 0 ? (
            <div className="test-system-history-empty">
              <Trophy size={22} />
              <strong>Hozircha tarix mavjud emas</strong>
              <span>Birinchi testni ishlang va natija shu yerda paydo bo'ladi.</span>
            </div>
          ) : (
            <div className="test-system-history-list">
              {history.map((item, index) => (
                <article key={`${item.topicId}-${item.completedAt}-${index}`} className="test-history-card">
                  <div className="test-history-card-head">
                    <strong>{item.topicTitle}</strong>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="test-history-meta">
                    <span>{formatDate(item.completedAt)}</span>
                    <span>+{item.xp} XP</span>
                  </div>
                  <div className="test-history-badges">
                    <span>{item.correctAnswers} ta to'g'ri</span>
                    <span>{item.stars} ⭐</span>
                    {item.badge ? <span className="is-master">{item.badge}</span> : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}
