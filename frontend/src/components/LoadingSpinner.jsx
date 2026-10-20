export default function LoadingSpinner({ label = "Ma'lumotlar yuklanmoqda..." }) {
  return (
    <div className="flex min-h-44 flex-col items-center justify-center gap-3 rounded-3xl border border-blue-100 bg-white text-slate-500">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
      <p className="text-sm font-semibold">{label}</p>
    </div>
  );
}
