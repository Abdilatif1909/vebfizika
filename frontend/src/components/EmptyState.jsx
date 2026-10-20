import { Inbox } from "lucide-react";

export default function EmptyState({ title = "Ma'lumot topilmadi", description = "Yangi yozuvlar qo'shilgach, ular shu yerda ko'rinadi." }) {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-white/70 p-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <Inbox size={26} />
      </div>
      <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
