import { Download, FileText } from "lucide-react";

import ContentPage from "./ContentPage.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { getFileTypeLabel, getResourceActionLink, resolveMediaUrl } from "../services/api.js";
import studentAnalyticsService from "../services/studentAnalyticsService.js";

export default function Documents() {
  const { user } = useAuth();
  const sortByTitle = (left, right) =>
    (left.title || "").localeCompare(right.title || "", undefined, { numeric: true, sensitivity: "base" });

  const trackDocument = (row, source) => {
    if (user?.role !== "student") {
      return;
    }
    studentAnalyticsService.trackDocument({
      resource_id: String(row.id),
      resource_title: row.title,
      metadata: {
        source,
      },
    }).catch(() => {
      // Tracking failures should not block file access.
    });
  };

  return (
    <ContentPage
      eyebrow="Dars hujjatlari"
      title="Dars hujjatlari"
      description="Kursga oid dars hujjatlari ro'yxati. Bu yerda siz barcha dars hujjatlarini ko'rishingiz, qidirishingiz va boshqarishingiz mumkin."
      resource="documents"
      icon={FileText}
      tone="blue"
      card={{
        authenticatedFileActions: true,
        title: (row) => row.title,
        subtitle: (row) => row.description || "Kursga oid dars hujjati ko'rib chiqishga va yuklab olishga tayyor.",
        meta: (row) => `${row.access_level || "public"} • ${row.downloads_count || 0} yuklab olish`,
        badge: (row) => getFileTypeLabel(row),
        previewLabel: "Ko'rish",
        actionLabel: "Yuklab olish",
        actionHref: (row) => getResourceActionLink(row, "download"),
        previewTarget: "_self",
      }}
      sortRows={sortByTitle}
      columns={[
        { key: "title", label: "Hujjat" },
        { key: "access_level", label: "Ruxsat" },
        { key: "downloads_count", label: "Yuklab olish" },
      ]}
      action={
        <a
          href={resolveMediaUrl("/api/documents/bulk-download/")}
          onClick={() => {
            if (user?.role === "student") {
              studentAnalyticsService.trackDocument({
                resource_id: "bulk-download",
                resource_title: "Dars hujjatlari to'plami",
                metadata: { source: "bulk-download" },
              }).catch(() => {});
            }
          }}
          className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
          download
        >
          <Download size={17} />
          Ommaviy yuklab olish
        </a>
      }
      onPreview={(row) => trackDocument(row, "preview")}
      onPrimaryAction={(row) => trackDocument(row, "download")}
    />
  );
}
