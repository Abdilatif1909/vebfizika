import { BookOpen } from "lucide-react";

import ContentPage from "./ContentPage.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { getFileTypeLabel } from "../services/api.js";
import studentAnalyticsService from "../services/studentAnalyticsService.js";

export default function Theory() {
  const { user } = useAuth();
  const sortByTitle = (left, right) =>
    (left.title || "").localeCompare(right.title || "", undefined, { numeric: true, sensitivity: "base" });

  const onlyImportedPdfTheory = (row) => {
    const attachment = row.attachment || "";
    return attachment.includes("theory/attachments/theory/imported/") && attachment.toLowerCase().endsWith(".pdf");
  };

  const trackTheoryOpen = (row) => {
    if (user?.role !== "student") {
      return;
    }
    studentAnalyticsService.trackTheory({
      resource_id: String(row.id),
      resource_title: row.title,
      metadata: {
        source: "theory-page",
      },
    }).catch(() => {
      // Ignore analytics failures.
    });
  };

  return (
    <ContentPage
      eyebrow="Nazariy bilimlar"
      title="Nazariy bilimlar"
      description="Nazariy bilimlar bo'limidagi PDF materiallarni ko'rish va yuklab olish mumkin."
      resource="theory-lessons"
      icon={BookOpen}
      tone="violet"
      filterRows={onlyImportedPdfTheory}
      sortRows={sortByTitle}
      card={{
        title: (row) => row.title,
        subtitle: (row) => row.content || "Nazariy bilimlar uchun tayyorlangan PDF material.",
        meta: (row) => `${row.published ? "Chop etilgan" : "Qoralama"} • ${row.estimated_minutes || 0} daqiqa`,
        badge: (row) => getFileTypeLabel(row),
        previewLabel: "Ko'rish",
        previewTarget: "_self",
        actionLabel: "Yuklab olish",
        actionDownload: true,
      }}
      columns={[
        { key: "title", label: "Material" },
        { key: "estimated_minutes", label: "Daqiqa" },
        { key: "published", label: "Holat", render: (row) => (row.published ? "Ha" : "Yo'q") },
      ]}
      onPreview={trackTheoryOpen}
    />
  );
}
