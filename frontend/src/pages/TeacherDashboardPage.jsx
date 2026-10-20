import { BarChart3, BookOpen, ClipboardCheck, GraduationCap, Presentation, UsersRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import ContentTable from "../components/ContentTable.jsx";
import EmptyState from "../components/EmptyState.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ProfileEditorCard from "../components/ProfileEditorCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import TeacherCreatePanel from "../components/TeacherCreatePanel.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { api, normalizeList } from "../services/api.js";

export default function TeacherDashboardPage() {
  const { user, updateProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState({ counts: {}, metrics: {}, activity: [] });
  const [data, setData] = useState({
    lessons: [],
    assignments: [],
    laboratories: [],
    videos: [],
    tests: [],
    submissions: [],
    results: [],
    courses: [],
    modules: [],
    topics: [],
  });

  async function loadDashboard() {
    setLoading(true);
    setError("");
    try {
      const [dashboardSummary, lessons, assignments, laboratories, videos, tests, submissions, results, courses, modules, topics] = await Promise.all([
        api.fetch("/dashboard/summary/"),
        api.fetch("/teacher/my-theory-lessons/"),
        api.fetch("/teacher/my-practical-assignments/"),
        api.fetch("/teacher/my-laboratories/"),
        api.fetch("/teacher/video-lessons/"),
        api.fetch("/teacher/tests/"),
        api.fetch("/teacher/student-submissions/"),
        api.fetch("/teacher/test-results/"),
        api.list("courses"),
        api.list("course-modules"),
        api.list("theory-topics"),
      ]);

      setSummary(dashboardSummary);
      setData({
        lessons,
        assignments,
        laboratories,
        videos,
        tests,
        submissions,
        results,
        courses: normalizeList(courses),
        modules: normalizeList(modules),
        topics: normalizeList(topics),
      });
    } catch (requestError) {
      setError(requestError.message || "Unable to load teacher dashboard.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  const pendingSubmissions = useMemo(
    () => data.submissions.filter((item) => ["submitted", "returned", "revision_required"].includes(item.status)),
    [data.submissions],
  );

  async function handleProfileSave(payload) {
    setSaving(true);
    try {
      await updateProfile(payload);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <LoadingSpinner label="Loading teacher profile..." />;
  }

  if (error) {
    return <EmptyState title="Unable to load teacher profile" description={error} />;
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Teacher profile"
        title={`Teaching workspace for ${user.full_name || user.username}`}
        description="Manage your educational content, review learners, and create new materials from one place."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Uploaded lessons" value={summary.counts.uploaded_lessons || 0} icon={BookOpen} detail="Theory, practical, lab, and video content" />
        <StatCard title="Pending practical" value={summary.counts.pending_practical_submissions || 0} icon={ClipboardCheck} tone="amber" detail="Assignments waiting for review" />
        <StatCard title="Pending labs" value={summary.counts.pending_lab_reports || 0} icon={Presentation} tone="violet" detail="Laboratory reports to evaluate" />
        <StatCard title="Active students" value={summary.counts.active_students || 0} icon={UsersRound} tone="emerald" detail="Distinct learners across your courses" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.95fr]">
        <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
          <div className="mb-5 flex items-center gap-3">
            <BarChart3 className="text-blue-600" size={22} />
            <h3 className="text-lg font-black text-slate-950">Teaching analytics</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Tests" value={data.tests.length} icon={GraduationCap} tone="blue" detail="Published assessments" />
            <StatCard title="Videos" value={data.videos.length} icon={Presentation} tone="violet" detail="Teaching media library" />
            <StatCard title="Average score" value={`${Math.round(summary.metrics.average_test_score || 0)}%`} icon={ClipboardCheck} tone="amber" detail="Current learner performance" />
            <StatCard title="Pass rate" value={`${Math.round(summary.metrics.pass_rate || 0)}%`} icon={UsersRound} tone="emerald" detail="Students meeting the threshold" />
          </div>
        </section>

        <ProfileEditorCard
          user={user}
          onSave={handleProfileSave}
          saving={saving}
          title="Teacher profile settings"
          description="Update your teaching profile, contact details, and avatar for learners and administrators."
        />
      </div>

      <TeacherCreatePanel resources={{ courses: data.courses, modules: data.modules, topics: data.topics }} onCreated={loadDashboard} />

      <div className="grid gap-5 xl:grid-cols-2">
        <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
          <div className="mb-4 flex items-center gap-3">
            <ClipboardCheck className="text-blue-600" size={20} />
            <h3 className="text-lg font-black text-slate-950">Quick grading table</h3>
          </div>
          {pendingSubmissions.length ? (
            <ContentTable
              rows={pendingSubmissions.slice(0, 8)}
              columns={[
                { key: "submission_type", label: "Type" },
                { key: "title", label: "Item" },
                { key: "learner_name", label: "Learner" },
                { key: "status", label: "Status" },
              ]}
            />
          ) : (
            <EmptyState title="No pending submissions" description="New practical or lab submissions will appear here." />
          )}
        </section>

        <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
          <div className="mb-4 flex items-center gap-3">
            <BookOpen className="text-blue-600" size={20} />
            <h3 className="text-lg font-black text-slate-950">My content overview</h3>
          </div>
          <ContentTable
            rows={[
              { id: "lessons", title: "Theory lessons", total: data.lessons.length, note: "Course theory modules" },
              { id: "assignments", title: "Practical assignments", total: data.assignments.length, note: "Hands-on student work" },
              { id: "laboratories", title: "Laboratory works", total: data.laboratories.length, note: "Experiments and reporting" },
              { id: "videos", title: "Video lessons", total: data.videos.length, note: "Recorded or linked content" },
              { id: "tests", title: "Tests", total: data.tests.length, note: "Published assessments" },
            ]}
            columns={[
              { key: "title", label: "Content type" },
              { key: "total", label: "Total" },
              { key: "note", label: "Description" },
            ]}
          />
        </section>
      </div>

      <ContentTable
        rows={data.results.slice(0, 10).map((row) => ({ ...row, scoreLabel: `${row.score}/${row.max_score}` }))}
        columns={[
          { key: "test_title", label: "Assessment" },
          { key: "student_name", label: "Learner" },
          { key: "course_title", label: "Course" },
          { key: "scoreLabel", label: "Score" },
          { key: "percentage", label: "Percentage", render: (row) => `${row.percentage}%` },
        ]}
      />
    </div>
  );
}
