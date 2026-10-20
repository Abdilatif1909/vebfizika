import { Activity, BellRing, Database, FileText, ShieldCheck, UsersRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import ContentTable from "../components/ContentTable.jsx";
import EmptyState from "../components/EmptyState.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ProfileEditorCard from "../components/ProfileEditorCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { api, normalizeList } from "../services/api.js";

export default function AdminProfilePage() {
  const { user, updateProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    users: [],
    subjects: [],
    documents: [],
    videos: [],
    tests: [],
    activity: [],
    announcements: [],
    metrics: [],
  });

  useEffect(() => {
    let mounted = true;

    async function loadDashboard() {
      setLoading(true);
      setError("");
      try {
        const [users, subjects, documents, videos, tests, activity, announcements, metrics] = await Promise.all([
          api.list("users"),
          api.list("subjects"),
          api.list("documents"),
          api.list("videos"),
          api.list("tests"),
          api.list("activity-logs"),
          api.list("announcements"),
          api.list("dashboard-metrics"),
        ]);

        if (!mounted) {
          return;
        }

        setData({
          users: normalizeList(users),
          subjects: normalizeList(subjects),
          documents: normalizeList(documents),
          videos: normalizeList(videos),
          tests: normalizeList(tests),
          activity: normalizeList(activity),
          announcements: normalizeList(announcements),
          metrics: normalizeList(metrics),
        });
      } catch (requestError) {
        if (mounted) {
          setError(requestError.message || "Unable to load admin dashboard.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadDashboard();
    return () => {
      mounted = false;
    };
  }, []);

  const usersByRole = useMemo(
    () =>
      data.users.reduce((accumulator, item) => {
        accumulator[item.role] = (accumulator[item.role] || 0) + 1;
        return accumulator;
      }, {}),
    [data.users],
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
    return <LoadingSpinner label="Loading admin profile..." />;
  }

  if (error) {
    return <EmptyState title="Unable to load admin profile" description={error} />;
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Admin profile"
        title={`Platform command center for ${user.full_name || user.username}`}
        description="Monitor account growth, platform activity, announcements, and content health across the education system."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="All users" value={data.users.length} icon={UsersRound} detail="Students, teachers, admins, guests" />
        <StatCard title="Content items" value={data.subjects.length + data.documents.length + data.videos.length + data.tests.length} icon={FileText} tone="violet" detail="Core academic resources" />
        <StatCard title="Announcements" value={data.announcements.length} icon={BellRing} tone="amber" detail="Broadcasts and updates" />
        <StatCard title="Activity logs" value={data.activity.length} icon={Activity} tone="emerald" detail="Recent platform events" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.95fr]">
        <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="text-blue-600" size={22} />
            <h3 className="text-lg font-black text-slate-950">User distribution</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {["admin", "teacher", "student", "guest"].map((role) => (
              <StatCard
                key={role}
                title={role[0].toUpperCase() + role.slice(1)}
                value={usersByRole[role] || 0}
                icon={UsersRound}
                tone={role === "admin" ? "violet" : role === "teacher" ? "amber" : role === "student" ? "blue" : "emerald"}
                detail="Active accounts"
              />
            ))}
          </div>
        </section>

        <ProfileEditorCard
          user={user}
          onSave={handleProfileSave}
          saving={saving}
          title="Administrator settings"
          description="Keep your admin profile updated for communication, moderation, and platform leadership."
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {data.metrics.length ? (
          <ContentTable
            rows={data.metrics.slice(0, 8).map((row) => ({
              ...row,
              id: `metric-${row.id}`,
              valueLabel: `${row.value}${row.unit ? ` ${row.unit}` : ""}`,
            }))}
            columns={[
              { key: "label", label: "Metric" },
              { key: "valueLabel", label: "Value" },
              { key: "key", label: "Key" },
            ]}
          />
        ) : (
          <EmptyState title="No metrics yet" description="Dashboard metrics will appear after the first refresh cycle." />
        )}

        {data.announcements.length ? (
          <ContentTable
            rows={data.announcements.slice(0, 6)}
            columns={[
              { key: "title", label: "Announcement" },
              { key: "audience", label: "Audience" },
              { key: "pinned", label: "Pinned", render: (row) => (row.pinned ? "Yes" : "No") },
            ]}
          />
        ) : (
          <EmptyState title="No announcements available" description="Create announcements to communicate with the platform audience." />
        )}
      </div>

      {data.activity.length ? (
        <ContentTable
          rows={data.activity.slice(0, 10).map((row) => ({
            ...row,
            id: `activity-${row.id}`,
            actorLabel: row.actor ? `User #${row.actor}` : "System",
            dateLabel: new Date(row.created_at).toLocaleString(),
          }))}
          columns={[
            { key: "actorLabel", label: "Actor" },
            { key: "action", label: "Action" },
            { key: "target_type", label: "Target" },
            { key: "dateLabel", label: "Date" },
          ]}
        />
      ) : (
        <EmptyState title="No recent activity" description="Activity logs will appear here once the platform starts recording events." />
      )}

      <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
        <div className="mb-4 flex items-center gap-3">
          <Database className="text-blue-600" size={22} />
          <h3 className="text-lg font-black text-slate-950">Platform health snapshot</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-blue-50 px-4 py-4 text-sm text-slate-700">Subjects: <strong className="text-slate-950">{data.subjects.length}</strong></div>
          <div className="rounded-2xl bg-emerald-50 px-4 py-4 text-sm text-slate-700">Documents: <strong className="text-slate-950">{data.documents.length}</strong></div>
          <div className="rounded-2xl bg-violet-50 px-4 py-4 text-sm text-slate-700">Videos: <strong className="text-slate-950">{data.videos.length}</strong></div>
          <div className="rounded-2xl bg-amber-50 px-4 py-4 text-sm text-slate-700">Tests: <strong className="text-slate-950">{data.tests.length}</strong></div>
        </div>
      </section>
    </div>
  );
}
