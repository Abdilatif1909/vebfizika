import { useMemo, useState } from "react";

import ContentGridCard from "../components/ContentGridCard.jsx";
import ContentTable from "../components/ContentTable.jsx";
import EmptyState from "../components/EmptyState.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import SearchFilterBar from "../components/SearchFilterBar.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import useResource from "../hooks/useResource.js";
import { getFileTypeLabel, getResourceLink, isPreviewableResource } from "../services/api.js";

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
  const { rows, loading, error } = useResource(resource);

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
      {!loading && !error && filteredRows.length === 0 && <EmptyState />}

      {!loading && !error && filteredRows.length > 0 && (
        <>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredRows.map((row) => {
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
                  secondaryAction={
                    shouldShowPreview
                      ? {
                          href: card.previewHref?.(row) || getResourceLink(row),
                          label: card.previewLabel || "Ko'rish",
                          target: typeof card.previewTarget === "function" ? card.previewTarget(row) : card.previewTarget,
                          download: typeof card.previewDownload === "function" ? card.previewDownload(row) : card.previewDownload,
                          onClick: () => onPreview?.(row),
                        }
                      : undefined
                  }
                  primaryAction={
                    getResourceLink(row)
                      ? {
                          href: card.actionHref?.(row) || getResourceLink(row),
                          label: card.actionLabel || "Open",
                          target: typeof card.actionTarget === "function" ? card.actionTarget(row) : card.actionTarget,
                          download: typeof card.actionDownload === "function" ? card.actionDownload(row) : card.actionDownload,
                          onClick: () => onPrimaryAction?.(row),
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
