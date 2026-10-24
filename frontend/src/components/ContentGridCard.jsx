import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function ContentGridCard({
  title,
  subtitle,
  meta,
  badge,
  icon: Icon,
  actionLabel = "Open",
  tone = "blue",
  primaryAction,
  secondaryAction,
  fileUnavailable = false,
}) {
  const tones = {
    blue: "bg-blue-50 text-blue-700",
    emerald: "bg-emerald-50 text-emerald-700",
    violet: "bg-violet-50 text-violet-700",
    amber: "bg-amber-50 text-amber-700",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tones[tone]}`}>
          {Icon && <Icon size={22} />}
        </div>
        {badge && <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{badge}</span>}
      </div>
      <h3 className="line-clamp-2 text-lg font-black tracking-tight text-slate-950">{title}</h3>
      {subtitle && <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{subtitle}</p>}
      {meta && <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">{meta}</p>}
      {fileUnavailable && (
        <p role="status" className="mt-4 text-sm font-semibold text-rose-700">
          Fayl hozir serverda mavjud emas. Administratorga murojaat qiling.
        </p>
      )}
      <div className="mt-5 flex flex-wrap gap-3">
        {secondaryAction?.href && (
          <a
            href={secondaryAction.href}
            target={secondaryAction.target || "_blank"}
            rel={secondaryAction.target === "_self" ? undefined : "noreferrer"}
            download={secondaryAction.download || undefined}
            onClick={secondaryAction.onClick}
            className="inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            <Eye size={16} />
            {secondaryAction.label || "Ko'rish"}
          </a>
        )}
        {primaryAction?.href ? (
          <a
            href={primaryAction.href}
            target={primaryAction.target || "_blank"}
            rel={primaryAction.target === "_self" ? undefined : "noreferrer"}
            download={primaryAction.download || undefined}
            onClick={primaryAction.onClick}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition group-hover:bg-blue-700"
          >
            {primaryAction.label || actionLabel}
            <ArrowRight size={16} />
          </a>
        ) : (
          <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition group-hover:bg-blue-700">
            {actionLabel}
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </motion.article>
  );
}
