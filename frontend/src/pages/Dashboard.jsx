import { useEffect, useState } from "react";
import { Activity, BookOpen, ClipboardCheck, Eye, FileText, Megaphone, Paperclip, PlaySquare } from "lucide-react";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

import ChartPanel from "../components/ChartPanel.jsx";
import ContentTable from "../components/ContentTable.jsx";
import EmptyState from "../components/EmptyState.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { api, getFileTypeLabel, getResourceLink, isPreviewableResource } from "../services/api.js";
import studentAnalyticsService from "../services/studentAnalyticsService.js";

export default function Dashboard() {
  const { user } = useAuth();
  const [counts, setCounts] = useState({ subjects: 0, documents: 0, videos: 0, tests: 0, activity: 0 });
  const [announcements, setAnnouncements] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadSummary() {
      setLoading(true);
      try {
        const summary = user?.role === "student"
          ? await studentAnalyticsService.getDashboardFeed()
          : await api.fetch("/dashboard/summary/");

        const stats = user?.role === "student" ? await studentAnalyticsService.getDashboardStats() : null;
        if (!mounted) {
          return;
        }
        const roleCounts = stats || summary.counts || {};
        setCounts({
          subjects: roleCounts.subjects_count || roleCounts.subjects || roleCounts.total_subjects || roleCounts.enrollments || 0,
          documents: roleCounts.documents_count || roleCounts.documents || roleCounts.total_documents || roleCounts.practical_submissions || 0,
          videos: roleCounts.videos_count || roleCounts.videos || roleCounts.total_videos || roleCounts.watched_videos || roleCounts.uploaded_lessons || 0,
          tests: roleCounts.tests_count || roleCounts.tests || roleCounts.total_tests || roleCounts.test_attempts || 0,
          activity: roleCounts.activity_count || (summary.activity || []).length,
        });
        setAnnouncements(summary.announcements || []);
        setActivity(summary.activity || []);
      } catch {
        if (mounted) {
          setCounts({ subjects: 0, documents: 0, videos: 0, tests: 0, activity: 0 });
          setAnnouncements([]);
          setActivity([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadSummary();
    return () => {
      mounted = false;
    };
  }, [user?.role]);

  if (loading) {
    return <LoadingSpinner label="Bosh sahifa yuklanmoqda..." />;
  }

  const barData = [
    { name: "Fanlar", value: counts.subjects },
    { name: "Hujjatlar", value: counts.documents },
    { name: "Videolar", value: counts.videos },
    { name: "Testlar", value: counts.tests },
  ];
  const pieData = [
    { name: "Dars hujjatlari", value: counts.documents || 1 },
    { name: "Videolar", value: counts.videos || 1 },
    { name: "Testlar", value: counts.tests || 1 },
  ];
  const colors = ["#2563eb", "#06b6d4", "#8b5cf6"];

  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-6 text-white shadow-2xl shadow-blue-600/20 md:p-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-100">Xush kelibsiz</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Barcha ta'lim jarayonlarini bir joydan boshqaring</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-50">
            Django backend bilan bog'langan jonli statistika orqali fanlar, hujjatlar, videolar va testlar holatini real vaqtda kuzating.
          </p>
        </div>
      </motion.section>

      <SectionHeader eyebrow="Bosh sahifa" title="Platforma statistikasi" description="Django API orqali olinayotgan jonli ko'rsatkichlar va so'nggi faolliklar." />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard title="Fanlar" value={counts.subjects} icon={BookOpen} detail="Faol o'quv yo'nalishlari" />
        <StatCard title="Dars hujjatlari" value={counts.documents} icon={FileText} tone="emerald" detail="Mavjud o'quv fayllari" />
        <StatCard title="Video darslar" value={counts.videos} icon={PlaySquare} tone="violet" detail="Video kutubxonasi" />
        <StatCard title="Testlar" value={counts.tests} icon={ClipboardCheck} tone="amber" detail="Baholash materiallari" />
        <StatCard title="Faollik" value={counts.activity} icon={Activity} tone="rose" detail="So'nggi amallar" />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <ChartPanel title="Kontent hajmi" description="Asosiy ta'lim kontenti turlari bo'yicha umumiy sonlar">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis allowDecimals={false} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </ChartPanel>
        <ChartPanel title="Ta'lim tarkibi" description="Hujjatlar, videolar va testlar nisbati">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" innerRadius={58} outerRadius={96} paddingAngle={4}>
                {pieData.map((entry, index) => (
                  <Cell key={entry.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartPanel>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
          <div className="mb-4 flex items-center gap-3">
            <Megaphone className="text-blue-600" size={22} />
            <h3 className="text-lg font-black text-slate-950">Bosh sahifa resurslari</h3>
          </div>
          {announcements.length ? (
            <div className="space-y-3">
              {announcements.slice(0, 5).map((row) => {
                const resourceLink = getResourceLink(row);
                const previewable = isPreviewableResource(row);
                return (
                  <div key={row.id} className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 md:flex-row md:items-center md:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-black text-slate-950">{row.title}</p>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700">{getFileTypeLabel(row)}</span>
                        {row.pinned && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">Biriktirilgan</span>}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{row.body}</p>
                    </div>
                    {resourceLink && (
                      <div className="flex flex-wrap gap-2">
                        {previewable && (
                          <a
                            href={resourceLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                          >
                            <Eye size={16} />
                            Ko'rish
                          </a>
                        )}
                        <a
                          href={resourceLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
                        >
                          <Paperclip size={16} />
                          Faylni ochish
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (         
            <EmptyState title="Bosh sahifa resurslari yo'q" description="Import qilingan bosh sahifa fayllari va e'lonlar bu yerda ko'rsatiladi." />
          )}
        </section>

        <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
          <div className="mb-4 flex items-center gap-3">
            <Activity className="text-blue-600" size={22} />
            <h3 className="text-lg font-black text-slate-950">So'nggi faolliklar</h3>
          </div>
          {activity.length ? (
            <ContentTable
              rows={activity.slice(0, 5)}
              columns={[
                { key: "action", label: "Harakat" },
                { key: "target_type", label: "Maqsad" },
                { key: "created_at", label: "Sana", render: (row) => new Date(row.created_at).toLocaleDateString() },
              ]}
            />
          ) : (
            <EmptyState title="Faoliyat yo'q" description="Foydalanuvchi va kontent voqealari bu yerda ko'rsatiladi." />
          )}
        </section>
      </div>
    </div>
  );
}
