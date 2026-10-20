import { Gauge } from "lucide-react";

import ContentPage from "./ContentPage.jsx";

export default function Analytics() {
  return (
    <ContentPage
      eyebrow="Analytics"
      title="Dashboard metrics"
      description="System metrics, operational numbers, and activity indicators."
      resource="dashboard-metrics"
      icon={Gauge}
      tone="emerald"
      card={{
        title: (row) => row.label,
        subtitle: (row) => row.key || "Metric key",
        meta: (row) => `${row.value || 0} ${row.unit || ""}`,
        badge: () => "metric",
        actionLabel: "Inspect",
      }}
      columns={[
        { key: "label", label: "Metric" },
        { key: "key", label: "Key" },
        { key: "value", label: "Value" },
        { key: "unit", label: "Unit" },
      ]}
    />
  );
}
