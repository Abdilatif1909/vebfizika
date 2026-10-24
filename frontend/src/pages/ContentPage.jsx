import { useMemo, useState } from "react";

import ContentGridCard from "../components/ContentGridCard.jsx";
import ContentTable from "../components/ContentTable.jsx";
import EmptyState from "../components/EmptyState.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import SearchFilterBar from "../components/SearchFilterBar.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import useResource from "../hooks/useResource.js";
import { fetchResourceFile, getFileTypeLabel, getResourceLink, isPreviewableResource } from "../services/api.js";

export default function ContentPage({
  eyebrow,
  title,
  description,
  resource,
  icon,
  tone,
  card,
  columns,
  action,
  secondary,
  sortRows,
  filterRows,
  onPreview,
  onPrimaryAction,
}) {
  const [query, setQuery] = useState("");
  const [fileActionError, setFileActionError] = useState("");
  const { rows, loading, error } = useResource(resource);

  const handleFileAction = async (row, action) => {
    setFileActionError("");
    const previewWindow = action === "preview" ? window.open("about:blank", "_blank") : null;
    if (action === "preview" && !previewWindow) {
      setFileActionError("Brauzer yangi oynani blokladi. PDF ko'rish uchun pop-up oynaga ruxsat bering.");
      return;
    }
    if (previewWindow) previewWindow.opener = null;

    try {
      const { blob, filename } = await fetchResourceFile(row, action);
      const objectUrl = URL.createObjectURL(blob);
      if (previewWindow) {
        previewWindow.addEventListener("pagehide", () => URL.revokeObjectURL(objectUrl), { once: true });
        previewWindow.location.replace(objectUrl);
      } else {
        const anchor = document.createElement("a");
        anchor.href = objectUrl;
        anchor.download = filename;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
      }
    } catch (actionError) {
      previewWindow?.close();
      setFileActionError(actionError.message || "Faylni ochib yoki yuklab bo'lmadi.");
    }
  };

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const preparedRows = filterRows ? rows.filter(filterRows) : rows;
    const baseRows = sortRows ? [...preparedRows].sort(sortRows) : preparedRows;
    if (!normalizedQuery) {
      return baseRows;
    }
    return baseRows.filter((row) => JSON.stringify(row).toLowerCase().includes(normalizedQuery));
  }, [filterRows, query, rows, sortRows]);

  return (
    <div className="space-y-6">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} action={action} />
      <SearchFilterBar value={query} onChange={setQuery} placeholder={`${title.toLowerCase()} bo'yicha qidirish`} />

      {loading && <LoadingSpinner label={`${title.toLowerCase()} yuklanmoqda...`} />}
      {error && <EmptyState title="Ma'lumotlarni yuklab bo'lmadi" description={error} />}
      {fileActionError && <p role="alert" className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-800">{fileActionError}</p>}
      {!loading && !error && filteredRows.length === 0 && <EmptyState />}

      {!loading && !error && filteredRows.length > 0 && (
        <>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredRows.map((row) => {
              const fileAvailable = row.file_available !== false && row.attachment_available !== false;
              const shouldShowPreview =
                typeof card.showPreview === "function"
                  ? card.showPreview(row)
                  : card.showPreview ?? isPreviewableResource(row);

              return (
                <ContentGridCard
                  key={row.id}
                  icon={icon}
                  tone={tone}
                  title={card.title(row)}
                  subtitle={card.subtitle?.(row)}
                  meta={card.meta?.(row)}
                  badge={card.badge?.(row) || getFileTypeLabel(row)}
                  actionLabel={card.actionLabel}
                  fileUnavailable={!fileAvailable}
                  secondaryAction={
                    fileAvailable && shouldShowPreview
                      ? {
                          href: card.previewHref?.(row) || getResourceLink(row),
                          label: card.previewLabel || "Ko'rish",
                          target: typeof card.previewTarget === "function" ? card.previewTarget(row) : card.previewTarget,
                          download: typeof card.previewDownload === "function" ? card.previewDownload(row) : card.previewDownload,
                          onClick: (event) => {
                            onPreview?.(row);
                            if (card.authenticatedFileActions) {
                              event.preventDefault();
                              handleFileAction(row, "preview");
                            }
                          },
                        }
                      : undefined
                  }
                  primaryAction={
                    fileAvailable && getResourceLink(row)
                      ? {
                          href: card.actionHref?.(row) || getResourceLink(row),
                          label: card.actionLabel || "Open",
                          target: typeof card.actionTarget === "function" ? card.actionTarget(row) : card.actionTarget,
                          download: typeof card.actionDownload === "function" ? card.actionDownload(row) : card.actionDownload,
                          onClick: (event) => {
                            onPrimaryAction?.(row);
                            if (card.authenticatedFileActions) {
                              event.preventDefault();
                              handleFileAction(row, "download");
                            }
                          },
                        }
                      : undefined
                  }
                />
              );
            })}
          </div>
          {columns && <ContentTable columns={columns} rows={filteredRows.slice(0, 8)} />}
        </>
      )}

      {secondary}
    </div>
  );
}
