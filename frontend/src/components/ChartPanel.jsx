export default function ChartPanel({ title, description, children }) {
  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
      <div className="mb-4">
        <h3 className="text-lg font-black tracking-tight text-slate-950">{title}</h3>
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
      </div>
      <div className="h-72">{children}</div>
    </section>
  );
}
