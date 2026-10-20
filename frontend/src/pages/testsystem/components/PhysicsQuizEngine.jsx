import { ChevronLeft, ChevronRight, Medal, RotateCcw, Sparkles, Star, Timer, Trophy, Zap } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import "./PhysicsQuizEngine.css";

const QUESTION_TIME = 30;

function getMessage(percentage) {
  if (percentage >= 90) {
    return "A'lo natija! Siz fizikani juda yaxshi o'zlashtiryapsiz.";
  }
  if (percentage >= 70) {
    return "Yaxshi! Yana biroz mashq qilsangiz yanada zo'r bo'ladi.";
  }
  return "Qoniqarli. Davom eting, har bir test sizni kuchaytiradi.";
}

function getPhrase(percentage) {
  if (percentage >= 90) {
    return "Siz bugun haqiqiy Fizika Ustasisiz!";
  }
  if (percentage >= 80) {
    return "Ajoyib! Energiya va bilim bir nuqtada jamlandi.";
  }
  if (percentage >= 60) {
    return "Zo'r urinish! Keyingi safar yanada balandroq natija kutamiz.";
  }
  return "Taslim bo'lmang, fizika sirlarini birgalikda ochamiz.";
}

function getGradeLabel(percentage) {
  if (percentage >= 90) return "A'lo";
  if (percentage >= 70) return "Yaxshi";
  return "Qoniqarli";
}

function createConfettiPieces() {
  return Array.from({ length: 28 }, (_, index) => ({
    id: index,
    left: `${(index * 13) % 100}%`,
    delay: `${(index % 7) * 0.08}s`,
    duration: `${2.8 + (index % 5) * 0.2}s`,
    color: ["#f59e0b", "#22c55e", "#38bdf8", "#a855f7", "#ef4444"][index % 5],
    rotate: `${(index % 9) * 24}deg`,
  }));
}

export default function PhysicsQuizEngine({ topic, questions, onBack, onComplete }) {
  const hasReportedResult = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    hasReportedResult.current = false;
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setTimeLeft(QUESTION_TIME);
    setIsFinished(false);
  }, [topic.id]);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (isFinished) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((value) => {
        if (value <= 1) {
          window.clearInterval(timer);
          handleNext(true);
          return QUESTION_TIME;
        }
        return value - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [currentIndex, isFinished, answers, selectedAnswer]);

  const progress = ((currentIndex + 1) / questions.length) * 100;

  const result = useMemo(() => {
    const correctAnswers = questions.reduce((sum, item, index) => sum + (answers[index] === item.correctAnswer ? 1 : 0), 0);
    const incorrectAnswers = questions.length - correctAnswers;
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    const xp = correctAnswers * 12 + (percentage >= 80 ? 80 : 20);
    const stars = Math.max(1, Math.min(5, Math.round(percentage / 20)));
    return {
      correctAnswers,
      incorrectAnswers,
      percentage,
      xp,
      stars,
      gradeLabel: getGradeLabel(percentage),
      message: getMessage(percentage),
      phrase: getPhrase(percentage),
      showBadge: percentage >= 90,
      showConfetti: percentage > 80,
    };
  }, [answers, questions]);

  const confettiPieces = useMemo(() => createConfettiPieces(), []);

  useEffect(() => {
    if (isFinished && !hasReportedResult.current) {
      hasReportedResult.current = true;
      onComplete?.({
        topicId: topic.id,
        topicTitle: topic.title,
        percentage: result.percentage,
        correctAnswers: result.correctAnswers,
        incorrectAnswers: result.incorrectAnswers,
        xp: result.xp,
        stars: result.stars,
        badge: result.showBadge ? "Fizika Ustasi" : null,
        completedAt: new Date().toISOString(),
      });
    }
  }, [isFinished, onComplete, result, topic.id, topic.title]);

  function recordCurrentAnswer() {
    const next = [...answers];
    next[currentIndex] = selectedAnswer;
    setAnswers(next);
    return next;
  }

  function handleNext(isAuto = false) {
    const nextAnswers = answers[currentIndex] !== undefined ? answers : recordCurrentAnswer();

    if (currentIndex === questions.length - 1) {
      setAnswers(nextAnswers);
      setIsFinished(true);
      return;
    }

    setAnswers(nextAnswers);
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setSelectedAnswer(nextAnswers[nextIndex] ?? null);
    setTimeLeft(QUESTION_TIME);

    if (isAuto) {
      // no-op, but keeps UX explicit for timed advance
    }
  }

  function handlePrevious() {
    if (currentIndex === 0) {
      return;
    }
    const nextAnswers = recordCurrentAnswer();
    const previousIndex = currentIndex - 1;
    setAnswers(nextAnswers);
    setCurrentIndex(previousIndex);
    setSelectedAnswer(nextAnswers[previousIndex] ?? null);
    setTimeLeft(QUESTION_TIME);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setTimeLeft(QUESTION_TIME);
    setIsFinished(false);
  }

  useEffect(() => {
    setSelectedAnswer(answers[currentIndex] ?? null);
  }, [currentIndex]);

  if (isFinished) {
    return (
      <section className="physics-quiz-engine result-mode">
        {result.showConfetti && (
          <div className="physics-confetti" aria-hidden="true">
            {confettiPieces.map((piece) => (
              <span
                key={piece.id}
                className="physics-confetti-piece"
                style={{ left: piece.left, animationDelay: piece.delay, animationDuration: piece.duration, background: piece.color, transform: `rotate(${piece.rotate})` }}
              />
            ))}
          </div>
        )}

        <div className="physics-result-card">
          <span className="physics-result-badge"><Trophy size={16} /> Test yakunlandi</span>
          <h2>{topic.title}</h2>
          <p>{result.phrase}</p>

          <div className="physics-stars" aria-label={`Baholash: ${result.stars} yulduz`}>
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} size={28} className={index < result.stars ? "is-filled" : ""} />
            ))}
          </div>

          <div className="physics-result-grid">
            <div><span>To'g'ri javoblar</span><strong>{result.correctAnswers}</strong></div>
            <div><span>Noto'g'ri javoblar</span><strong>{result.incorrectAnswers}</strong></div>
            <div><span>Foiz</span><strong>{result.percentage}%</strong></div>
            <div><span>Daraja</span><strong>{result.gradeLabel}</strong></div>
            <div><span>XP ochkolari</span><strong>+{result.xp} XP</strong></div>
            <div><span>Status</span><strong>{result.showBadge ? "Fizika Ustasi" : "Faol o'quvchi"}</strong></div>
          </div>

          {result.showBadge && <div className="physics-master-badge"><Medal size={18} /> Fizika Ustasi</div>}

          <div className="physics-result-message">{result.message}</div>

          <div className="physics-result-actions">
            <button type="button" className="physics-quiz-secondary" onClick={onBack}><ChevronLeft size={18} /> Mavzularga qaytish</button>
            <button type="button" className="physics-quiz-primary" onClick={handleRestart}><RotateCcw size={18} /> Restart Test</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="physics-quiz-engine">
      <div className="physics-quiz-topbar">
        <button type="button" className="physics-quiz-secondary" onClick={onBack}><ChevronLeft size={18} /> Ortga</button>
        <div className="physics-quiz-pill"><Timer size={16} /> {timeLeft} s</div>
      </div>

      <div className="physics-quiz-header">
        <div>
          <span className="physics-quiz-badge"><Sparkles size={15} /> {topic.title}</span>
          <h2>{currentIndex + 1}-savol</h2>
          <p>20 ta savoldan {currentIndex + 1}-savol. Har bir savol uchun 30 soniya vaqt beriladi.</p>
        </div>
        <div className="physics-quiz-pill"><Zap size={16} /> {Math.round(progress)}%</div>
      </div>

      <div className="physics-quiz-progress-track">
        <div className="physics-quiz-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="physics-quiz-card">
        <h3>{currentQuestion.question}</h3>

        <div className="physics-quiz-options">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              type="button"
              className={`physics-quiz-option ${selectedAnswer === option ? "is-selected" : ""}`}
              onClick={() => setSelectedAnswer(option)}
            >
              <span className="physics-quiz-option-letter">{String.fromCharCode(65 + currentQuestion.options.indexOf(option))}</span>
              <span>{option}</span>
            </button>
          ))}
        </div>

        <div className="physics-quiz-actions">
          <button type="button" className="physics-quiz-secondary" onClick={handlePrevious} disabled={currentIndex === 0}>
            <ChevronLeft size={18} /> Oldingi
          </button>
          <button type="button" className="physics-quiz-primary" onClick={() => handleNext(false)}>
            {currentIndex === questions.length - 1 ? "Yakunlash" : "Keyingi savol"} <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
