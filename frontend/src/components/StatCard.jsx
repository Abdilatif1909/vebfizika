import { motion } from "framer-motion";

export default function StatCard({ title, value, icon: Icon, tone = "blue", detail }) {
  const tones = {
    blue: "from-blue-600 to-cyan-500 shadow-blue-600/20",
    emerald: "from-emerald-500 to-teal-500 shadow-emerald-600/20",
    violet: "from-violet-500 to-indigo-500 shadow-violet-600/20",
    amber: "from-amber-500 to-orange-500 shadow-amber-600/20",
    rose: "from-rose-500 to-pink-500 shadow-rose-600/20",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500">{title}</p>
          <strong className="mt-2 block text-3xl font-black tracking-tight text-slate-950">{value}</strong>
          {detail && <span className="mt-1 block text-xs font-semibold text-emerald-600">{detail}</span>}
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${tones[tone]}`}>
          <Icon size={22} />
        </div>
      </div>
    </motion.article>
  );
}
