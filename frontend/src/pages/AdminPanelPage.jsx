import { Database, FileText, Settings, UsersRound } from "lucide-react";

import ContentTable from "../components/ContentTable.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatCard from "../components/StatCard.jsx";

export default function AdminPanelPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Admin Panel"
        title="System administration"
        description="User management, content governance, and platform health overview."
        action={
          <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/20">
            <Settings size={17} />
            System settings
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Managed users" value="All roles" icon={UsersRound} tone="violet" />
        <StatCard title="Content modules" value="11" icon={FileText} tone="blue" />
        <StatCard title="Database" value="Healthy" icon={Database} tone="emerald" />
      </div>

      <ContentTable
        rows={[
          { id: 1, area: "Accounts", status: "Operational", owner: "Admin" },
          { id: 2, area: "Learning content", status: "Operational", owner: "Teachers" },
          { id: 3, area: "Assessments", status: "Operational", owner: "Academic team" },
        ]}
        columns={[
          { key: "area", label: "Area" },
          { key: "status", label: "Status" },
          { key: "owner", label: "Owner" },
        ]}
      />
    </div>
  );
}
