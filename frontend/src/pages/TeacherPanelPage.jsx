import { ClipboardCheck, UploadCloud, UsersRound } from "lucide-react";

import ContentTable from "../components/ContentTable.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatCard from "../components/StatCard.jsx";

export default function TeacherPanelPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Teacher Panel"
        title="Teaching management"
        description="Upload learning assets, monitor submissions, and grade active assignments."
        action={
          <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
            <UploadCloud size={17} />
            Upload content
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Pending grading" value="18" icon={ClipboardCheck} tone="amber" />
        <StatCard title="Active learners" value="132" icon={UsersRound} tone="blue" />
        <StatCard title="Uploads this week" value="9" icon={UploadCloud} tone="emerald" />
      </div>

      <ContentTable
        rows={[
          { id: 1, title: "Lab report review", type: "Laboratory", status: "Pending" },
          { id: 2, title: "Practical assignment 4", type: "Practical", status: "In review" },
          { id: 3, title: "Theory module update", type: "Theory", status: "Draft" },
        ]}
        columns={[
          { key: "title", label: "Item" },
          { key: "type", label: "Type" },
          { key: "status", label: "Status" },
        ]}
      />
    </div>
  );
}
