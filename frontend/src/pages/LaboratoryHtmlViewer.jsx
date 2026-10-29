import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import SectionHeader from "../components/SectionHeader.jsx";
import { laboratoryPages } from "./laboratoryData.js";

export default function LaboratoryHtmlViewer() {
  const { labKey } = useParams();
  const item = laboratoryPages.find((page) => page.id === labKey);

  if (!item) {
    return <Navigate to="/laboratoriya" replace />;
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={item.category === "practical" ? "Amaliy mashg‘ulot" : "Laboratoriya"}
        title={item.title}
        description={item.description}
        action={
          <div className="flex flex-wrap gap-3">
            <Link
              to="/laboratoriya"
              className="inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
            >
              <ArrowLeft size={16} />
              Orqaga
            </Link>
            <a
              href={item.file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
            >
              <ExternalLink size={16} />
              Alohida ochish
            </a>
          </div>
        }
      />

      <section className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm shadow-blue-950/5">
        <div className="flex items-center justify-between gap-3 border-b border-blue-50 bg-blue-50/60 px-5 py-4">
          <p className="font-black text-slate-950">{item.topic}</p>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Interaktiv ko‘rinish</p>
        </div>
        <iframe
          key={item.id}
          src={item.file}
          title={item.title}
          sandbox="allow-scripts allow-forms"
          className="block h-[calc(100vh-250px)] min-h-[620px] w-full bg-white"
        />
      </section>
    </div>
  );
}
