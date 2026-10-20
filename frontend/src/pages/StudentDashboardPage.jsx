import { Award, BookOpen, CheckCircle2, PlayCircle, Save, ScrollText } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import ContentTable from "../components/ContentTable.jsx";
import EmptyState from "../components/EmptyState.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ProfileEditorCard from "../components/ProfileEditorCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import studentAnalyticsService from "../services/studentAnalyticsService.js";

function formatDate(value) {
  return value ? new Date(value).toLocaleDateString() : "—";
}

export default function StudentDashboardPage() {
  const { user, updateProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [profileStats, setProfileStats] = useState({});
  const [data, setData] = useState({
    enrollments: [],
    theoryProgress: [],
    practicalSubmissions: [],
    labReports: [],
    videoProgress: [],
    testAttempts: [],
    certificates: [],
  });

  useEffect(() => {
    let mounted = true;

    async function loadDashboard() {
      setLoading(true);
      setError("");

      try {
        const [dashboardSummary, enrollments, theoryProgress, practicalSubmissions, labReports, videoProgress, testAttempts, certificates] = await Promise.all([
          studentAnalyticsService.getProfileStats(),
          studentAnalyticsService.getEnrollments(),
          studentAnalyticsService.getTheoryProgress(),
          studentAnalyticsService.getPracticalSubmissions(),
          studentAnalyticsService.getLabReports(),
          studentAnalyticsService.getVideoProgress(),
          studentAnalyticsService.getTestAttempts(),
          studentAnalyticsService.getCertificates(),
        ]);

        if (!mounted) {
          return;
        }

        setProfileStats(dashboardSummary);
        setData({
          enrollments,
          theoryProgress,
          practicalSubmissions,
          labReports,
          videoProgress,
          testAttempts,
          certificates,
        });
      } catch (requestError) {
        if (mounted) {
          setError(requestError.message || "Talaba profili ma'lumotlarini yuklab bo'lmadi.");
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

  const watchedVideoAverage = useMemo(() => {
    if (!data.videoProgress.length) {
      return 0;
    }
    const total = data.videoProgress.reduce((accumulator, item) => accumulator + Number(item.watched_percentage || 0), 0);
    return Math.round(total / data.videoProgress.length);
  }, [data.videoProgress]);

  async function handleProfileSave(payload) {
    setSaving(true);
    try {
      await updateProfile(payload);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <LoadingSpinner label="Talaba profili yuklanmoqda..." />;
  }

  if (error) {
    return <EmptyState title="Talaba profilini yuklab bo'lmadi" description={error} />;
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Talaba profili"
        title={`Xush kelibsiz, ${user.full_name || user.username}`}
        description="Shaxsiy o'quv statistikangiz, topshiriqlaringiz, test natijalaringiz va sertifikatlaringizni ko'rib chiqing."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Fanlar" value={profileStats.enrolled_subjects || 0} icon={BookOpen} detail="Ro'yxatdan o'tilgan fanlar" />
        <StatCard title="Tugallangan darslar" value={profileStats.completed_lessons || 0} icon={CheckCircle2} tone="emerald" detail="Yakunlangan nazariy darslar" />
        <StatCard title="O'rtacha test natijasi" value={`${Math.round(profileStats.average_test_score || 0)}%`} icon={ScrollText} tone="violet" detail="Barcha urinishlar bo'yicha" />
        <StatCard title="Sertifikatlar" value={profileStats.certificates || 0} icon={Award} tone="amber" detail="Qo'lga kiritilgan yutuqlar" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
          <h3 className="text-lg font-black text-slate-950">Ko'rilgan videolar statistikasi</h3>
          <div className="mt-4 rounded-3xl bg-blue-50 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700">Umumiy ko'rish darajasi</span>
              <span className="text-sm font-black text-blue-700">{watchedVideoAverage}%</span>
            </div>
            <div className="mt-3 h-4 rounded-full bg-white">
              <div className="h-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: `${watchedVideoAverage}%` }} />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white px-4 py-4 text-sm text-slate-700">
                Ko'rilgan videolar: <strong className="text-slate-950">{profileStats.watched_videos || 0}</strong>
              </div>
              <div className="rounded-2xl bg-white px-4 py-4 text-sm text-slate-700">
                Test urinishlari: <strong className="text-slate-950">{profileStats.test_attempts || 0}</strong>
              </div>
              <div className="rounded-2xl bg-white px-4 py-4 text-sm text-slate-700">
                Amaliy topshiriqlar: <strong className="text-slate-950">{profileStats.practical_submissions || 0}</strong>
              </div>
              <div className="rounded-2xl bg-white px-4 py-4 text-sm text-slate-700">
                Laboratoriya hisobotlari: <strong className="text-slate-950">{profileStats.lab_reports || 0}</strong>
              </div>
            </div>
          </div>
        </section>

        <ProfileEditorCard
          user={user}
          onSave={handleProfileSave}
          saving={saving}
          title="Shaxsiy sozlamalar"
          description="Akkount ma'lumotlari, avatar, telefon raqami va bio qismini yangilang."
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <ContentTable
          rows={data.enrollments.map((row) => ({ ...row, progressLabel: `${row.progress}%` }))}
          columns={[
            { key: "course_title", label: "Kurs" },
            { key: "subject_title", label: "Fan" },
            { key: "status", label: "Holat" },
            { key: "progressLabel", label: "Jarayon" },
          ]}
        />

        {data.certificates.length ? (
          <ContentTable
            rows={data.certificates.map((row) => ({ ...row, completionLabel: `${row.completion_percentage}%` }))}
            columns={[
              { key: "course_title", label: "Sertifikat" },
              { key: "status", label: "Holat" },
              { key: "completionLabel", label: "Tugallanish" },
              { key: "issued_at", label: "Berilgan sana", render: (row) => formatDate(row.issued_at) },
            ]}
          />
        ) : (
          <EmptyState title="Hozircha sertifikat yo'q" description="Kurs bo'yicha yetarli progress to'planganda sertifikatlar shu yerda paydo bo'ladi." />
        )}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 xl:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <Save className="text-blue-600" size={20} />
            <h3 className="text-lg font-black text-slate-950">Mening topshiriqlarim</h3>
          </div>
          <ContentTable
            rows={[
              ...data.practicalSubmissions.slice(0, 5).map((row) => ({ id: `practical-${row.id}`, title: row.assignment_title, course: row.course_title, status: row.status, score: row.score || "Kutilmoqda" })),
              ...data.labReports.slice(0, 5).map((row) => ({ id: `lab-${row.id}`, title: row.experiment_title, course: row.course_title, status: row.status, score: row.score || "Kutilmoqda" })),
            ]}
            columns={[
              { key: "title", label: "Topshiriq" },
              { key: "course", label: "Kurs" },
              { key: "status", label: "Holat" },
              { key: "score", label: "Ball" },
            ]}
          />
        </section>

        <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
          <div className="mb-4 flex items-center gap-3">
            <PlayCircle className="text-blue-600" size={20} />
            <h3 className="text-lg font-black text-slate-950">Video faolligi</h3>
          </div>
          <div className="space-y-3">
            {data.videoProgress.slice(0, 4).map((item) => (
              <div key={item.id} className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="flex items-center justify-between gap-3 text-sm font-bold text-slate-800">
                  <span className="truncate">{item.video_title}</span>
                  <span>{Math.round(item.watched_percentage)}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: `${item.watched_percentage}%` }} />
                </div>
              </div>
            ))}
            {!data.videoProgress.length && <EmptyState title="Hozircha ko'rilgan video yo'q" description="Video ko'rish tarixi shu yerda ko'rinadi." />}
          </div>
        </section>
      </div>

      {data.testAttempts.length ? (
        <ContentTable
          rows={data.testAttempts.slice(0, 8).map((row) => ({ ...row, scoreLabel: `${row.score}/${row.max_score}`, dateLabel: formatDate(row.submitted_at || row.started_at) }))}
          columns={[
            { key: "test_title", label: "Test" },
            { key: "course_title", label: "Kurs" },
            { key: "scoreLabel", label: "Ball" },
            { key: "percentage", label: "Foiz", render: (row) => `${row.percentage}%` },
            { key: "dateLabel", label: "Sana" },
          ]}
        />
      ) : (
        <EmptyState title="Hozircha test natijalari yo'q" description="So'nggi urinishlaringiz va natijalaringiz shu yerda ko'rinadi." />
      )}
    </div>
  );
}
