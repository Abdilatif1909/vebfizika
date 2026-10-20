import { Activity, BellRing, Database, FileText, ShieldCheck, UsersRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import ContentTable from "../components/ContentTable.jsx";
import EmptyState from "../components/EmptyState.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ProfileEditorCard from "../components/ProfileEditorCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { api } from "../services/api.js";

export default function AdminControlPage() {
  const { user, updateProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState({ counts: {}, metrics: [], announcements: [], activity: [] });
  const [data, setData] = useState({
    users: [],
    subjects: [],
    documents: [],
    videos: [],
  });

  useEffect(() => {
    let mounted = true;

    async function loadAdminData() {
      setLoading(true);
      setError("");
      try {
        const [dashboardSummary, users, subjects, documents, videos] = await Promise.all([
          api.fetch("/dashboard/summary/"),
          api.fetch("/admin/users/"),
          api.fetch("/admin/subjects/"),
          api.fetch("/admin/documents/"),
          api.fetch("/admin/videos/"),
        ]);

        if (!mounted) {
          return;
        }

        setSummary(dashboardSummary);
        setData({ users, subjects, documents, videos });
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

    loadAdminData();
    return () => {
      mounted = false;
    };
  }, []);

  const roleStats = useMemo(
    () => ({
      students: data.users.filter((item) => item.role === "student").length,
      teachers: data.users.filter((item) => item.role === "teacher").length,
    }),
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
        title={`Platform control center for ${user.full_name || user.username}`}
        description="Oversee users, academic resources, announcements, moderation queues, and recent system activity."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total users" value={summary.counts.total_users || 0} icon={UsersRound} detail="All registered accounts" />
        <StatCard title="Students" value={summary.counts.total_students || roleStats.students} icon={ShieldCheck} tone="blue" detail="Active learner accounts" />
        <StatCard title="Teachers" value={summary.counts.total_teachers || roleStats.teachers} icon={ShieldCheck} tone="amber" detail="Active teacher accounts" />
        <StatCard title="Subjects" value={summary.counts.total_subjects || data.subjects.length} icon={Database} tone="emerald" detail="Academic structure" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Documents" value={summary.counts.total_documents || data.documents.length} icon={FileText} detail="Moderation inventory" />
        <StatCard title="Videos" value={summary.counts.total_videos || data.videos.length} icon={Activity} tone="violet" detail="Published and draft media" />
        <StatCard title="Tests" value={summary.counts.total_tests || 0} icon={BellRing} tone="rose" detail="Assessment coverage" />
        <StatCard title="Announcements" value={summary.announcements.length} icon={BellRing} tone="amber" detail="System communications" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.95fr]">
        <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="text-blue-600" size={22} />
            <h3 className="text-lg font-black text-slate-950">System announcements</h3>
          </div>
          {summary.announcements.length ? (
            <ContentTable
              rows={summary.announcements}
              columns={[
                { key: "title", label: "Title" },
                { key: "audience", label: "Audience" },
                { key: "pinned", label: "Pinned", render: (row) => (row.pinned ? "Yes" : "No") },
              ]}
            />
          ) : (
            <EmptyState title="No announcements available" description="Announcements will appear here when published." />
          )}
        </section>

        <ProfileEditorCard
          user={user}
          onSave={handleProfileSave}
          saving={saving}
          title="Administrator settings"
          description="Keep your administrator profile updated for moderation and leadership responsibilities."
        />
      </div>

      {summary.activity.length ? (
        <ContentTable
          rows={summary.activity.map((row) => ({
            ...row,
            actorLabel: row.actor_name || "System",
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
        <EmptyState title="No recent activity" description="Recent activity logs will appear here." />
      )}

      <div className="grid gap-5 xl:grid-cols-2">
        <ContentTable
          rows={data.users.slice(0, 12)}
          columns={[
            { key: "full_name", label: "User" },
            { key: "email", label: "Email" },
            { key: "role", label: "Role" },
            { key: "is_active", label: "Active", render: (row) => (row.is_active ? "Yes" : "No") },
          ]}
        />
        <ContentTable
          rows={data.subjects.slice(0, 12)}
          columns={[
            { key: "title", label: "Subject" },
            { key: "owner_name", label: "Owner" },
            { key: "courses_count", label: "Courses" },
            { key: "created_at", label: "Created", render: (row) => new Date(row.created_at).toLocaleDateString() },
          ]}
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
          <div className="mb-4 flex items-center gap-3">
            <FileText className="text-blue-600" size={20} />
            <h3 className="text-lg font-black text-slate-950">Documents moderation</h3>
          </div>
          <ContentTable
            rows={data.documents.slice(0, 10)}
            columns={[
              { key: "title", label: "Document" },
              { key: "category_name", label: "Category" },
              { key: "uploader_name", label: "Uploader" },
              { key: "access_level", label: "Access" },
            ]}
          />
        </section>

        <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
          <div className="mb-4 flex items-center gap-3">
            <Activity className="text-blue-600" size={20} />
            <h3 className="text-lg font-black text-slate-950">Video moderation</h3>
          </div>
          <ContentTable
            rows={data.videos.slice(0, 10)}
            columns={[
              { key: "title", label: "Video" },
              { key: "course_title", label: "Course" },
              { key: "author_name", label: "Author" },
              { key: "published", label: "Published", render: (row) => (row.published ? "Yes" : "No") },
            ]}
          />
        </section>
      </div>
    </div>
  );
}
