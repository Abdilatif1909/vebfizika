import { UploadCloud, Wrench } from "lucide-react";

import ContentPage from "./ContentPage.jsx";
import { getFileTypeLabel } from "../services/api.js";

export default function Practical() {
  return (
    <ContentPage
      eyebrow="Amaliy"
      title="Amaliy"
      description="Amaliy topshiriqlar, topshirilgan ishlar, tekshiruv holati va o'qituvchi fikrlari uchun bo'lim."
      resource="practical-assignments"
      icon={Wrench}
      tone="emerald"
      card={{
        title: (row) => row.title,
        subtitle: (row) => row.instructions || "Topshiriq bo'yicha ko'rsatmalar va materiallar.",
        meta: (row) => `Maksimal ball ${row.max_score || 100}${row.due_at ? ` • Muddat ${new Date(row.due_at).toLocaleDateString()}` : ""}`,
        badge: (row) => getFileTypeLabel(row),
        actionLabel: "Materialni ochish",
      }}
      columns={[
        { key: "title", label: "Topshiriq" },
        { key: "max_score", label: "Maksimal ball" },
        { key: "due_at", label: "Muddat", render: (row) => (row.due_at ? new Date(row.due_at).toLocaleDateString() : "Ochiq") },
      ]}
      action={
        <button className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20">
          <UploadCloud size={17} />
          Topshiriq yuklash
        </button>
      }
    />
  );
}
