import { Beaker, MonitorPlay } from "lucide-react";

import ContentPage from "./ContentPage.jsx";
import { getFileTypeLabel } from "../services/api.js";

export default function Laboratory() {
  const sortByTitle = (left, right) =>
    (left.title || "").localeCompare(right.title || "", undefined, { numeric: true, sensitivity: "base" });

  const onlyImportedLaboratoryFiles = (row) => {
    const resourceFile = row.resource_file || "";
    return resourceFile.includes("simulations/files/simulations/imported/");
  };

  return (
    <ContentPage
      eyebrow="Labaratoriya"
      title="Labaratoriya"
      description="Labaratoriya uchun flesh fayllarni ko'rish va yuklab olish mumkin bo'lgan bo'lim."
      resource="simulations"
      icon={Beaker}
      tone="amber"
      filterRows={onlyImportedLaboratoryFiles}
      sortRows={sortByTitle}
      card={{
        title: (row) => row.title,
        subtitle: (row) => row.description || "Labaratoriya flesh fayli.",
        meta: (row) => row.launch_url || row.embed_url || "Flesh laboratoriya fayli",
        badge: (row) => getFileTypeLabel(row),
        showPreview: true,
        previewLabel: "Ko'rish",
        previewTarget: "_self",
        previewHref: (row) => `/laboratory/${row.id}/view`,
        actionLabel: "Yuklab olish",
        actionDownload: true,
      }}
      columns={[
        { key: "title", label: "Fayl" },
        { key: "resource_file", label: "Manba" },
        { key: "published", label: "Tayyor", render: (row) => (row.published ? "Ha" : "Yo'q") },
      ]}
      action={
        <button className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/20">
          <MonitorPlay size={17} />
          Flesh fayllar
        </button>
      }
    />
  );
}
