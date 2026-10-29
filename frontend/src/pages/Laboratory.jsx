import { useState } from "react";
import { ArrowRight, Beaker, Search } from "lucide-react";
import { Link } from "react-router-dom";

import EmptyState from "../components/EmptyState.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { laboratoryItems, practicalItems } from "./laboratoryData.js";

function LaboratoryCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
          <Icon size={22} />
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item.topic}</span>
      </div>
      <h3 className="line-clamp-2 text-lg font-black tracking-tight text-slate-950">{item.title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{item.description}</p>
      <Link
        to={`/laboratoriya/html/${item.id}`}
        className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition group-hover:bg-blue-700"
      >
        Ko‘rish
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}

function LaboratoryGroup({ title, description, items }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-xl font-black tracking-tight text-slate-950">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => <LaboratoryCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}

export default function Laboratory() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filterItems = (items) => items.filter((item) =>
    `${item.title} ${item.topic} ${item.description}`.toLocaleLowerCase().includes(normalizedQuery),
  );
  const filteredLaboratories = filterItems(laboratoryItems);
  const filteredPracticals = filterItems(practicalItems);

  return (
    <div className="space-y-7">
      <SectionHeader
        eyebrow="Fizika · 9-sinf"
        title="Laboratoriya ishlari"
        description="Laboratoriya va amaliy mashg‘ulotlarni tanlang, tajriba vizualizatsiyasini shu yerda bajaring."
        action={
          <div className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/20">
            <Beaker size={17} />
            {laboratoryItems.length + practicalItems.length} ta mashg‘ulot
          </div>
        }
      />

      <label className="flex min-h-14 items-center gap-3 rounded-3xl border border-blue-100 bg-white px-4 text-slate-500 shadow-sm shadow-blue-950/5">
        <Search size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Laboratoriya yoki amaliy mashg‘ulotni qidirish"
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </label>

      {filteredLaboratories.length === 0 && filteredPracticals.length === 0 ? (
        <EmptyState title="Mashg‘ulot topilmadi" description="Boshqa so‘z bilan qidirib ko‘ring." />
      ) : (
        <>
          <LaboratoryGroup
            title="Laboratoriya ishlari va vizualizatsiyalar"
            description="Tajriba va interaktiv mavzu materiallari"
            items={filteredLaboratories}
          />
          <LaboratoryGroup
            title="Amaliy mashg‘ulotlar"
            description="Amaliy papkasidagi qo‘shimcha topshiriqlar"
            items={filteredPracticals}
          />
        </>
      )}
    </div>
  );
}
