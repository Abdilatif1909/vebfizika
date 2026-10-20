import { useEffect, useMemo, useState } from "react";
import { RefreshCw, Search } from "lucide-react";

import ResourceTable from "../components/ResourceTable.jsx";
import { api, normalizeList } from "../services/api.js";

export default function ResourcePage({ title, description, resources, columns }) {
  const [activeResource, setActiveResource] = useState(resources[0].key);
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const current = useMemo(
    () => resources.find((resource) => resource.key === activeResource) || resources[0],
    [activeResource, resources],
  );

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return rows;
    }

    return rows.filter((row) =>
      columns.some((column) => {
        const rawValue = column.render ? column.render(row) : row[column.key];
        return String(rawValue || "").toLowerCase().includes(normalizedQuery);
      }),
    );
  }, [columns, query, rows]);

  useEffect(() => {
    let mounted = true;
    setStatus("loading");
    setError("");

    api
      .list(current.endpoint)
      .then((payload) => {
        if (mounted) {
          setRows(normalizeList(payload));
          setStatus("success");
        }
      })
      .catch((requestError) => {
        if (mounted) {
          setError(requestError.message);
          setRows([]);
          setStatus("error");
        }
      });

    return () => {
      mounted = false;
    };
  }, [current]);

  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">{title}</p>
          <h2>{description}</h2>
        </div>
        <button className="icon-button" onClick={() => setActiveResource(current.key)} title="Refresh">
          <RefreshCw size={18} />
        </button>
      </div>

      <div className="tabs">
        {resources.map((resource) => (
          <button
            className={resource.key === activeResource ? "tab active" : "tab"}
            key={resource.key}
            onClick={() => setActiveResource(resource.key)}
          >
            {resource.label}
          </button>
        ))}
      </div>

      <label className="search-field">
        <Search size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Search ${current.label.toLowerCase()}`}
        />
      </label>

      {status === "loading" && <div className="loading-line">Loading {current.label.toLowerCase()}...</div>}
      {status === "error" && <div className="error-box">{error}</div>}
      {status === "success" && (
        <ResourceTable
          columns={columns}
          rows={filteredRows}
          emptyText={`No ${current.label.toLowerCase()} records found.`}
        />
      )}
    </section>
  );
}
