import { Filter, Search } from "lucide-react";

export default function SearchFilterBar({ value, onChange, placeholder = "Yozuvlarni qidirish", children }) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-blue-100 bg-white p-3 shadow-sm shadow-blue-950/5 md:flex-row md:items-center">
      <label className="flex min-h-12 flex-1 items-center gap-3 rounded-2xl bg-blue-50 px-4 text-slate-500">
        <Search size={18} />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </label>
      <div className="flex items-center gap-2">
        {children}
        <button className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 text-sm font-bold text-slate-700">
          <Filter size={17} />
          Filtrlar
        </button>
      </div>
    </div>
  );
}
