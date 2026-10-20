import { BookOpenCheck, LogIn } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { resolveRoleHome, useAuth } from "../context/AuthContext.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, login, loading } = useAuth();
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigate(resolveRoleHome(user.role), { replace: true });
    }
  }, [loading, navigate, user]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const profile = await login(form);
      navigate(resolveRoleHome(profile.role), { replace: true });
    } catch (requestError) {
      setError(requestError.message || "Login failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-8 shadow-2xl shadow-blue-950/30 md:p-10">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
            <BookOpenCheck size={30} />
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-blue-100">Education Platform</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">UMUMIY O‘RTA TA’LIM MAKTABINING 9-SINF FIZIKA FANIDAN RAQAMLASHTIRILGAN PLATFORMA </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-blue-50/90 md:text-base">
            Tizimda talabalar, o‘qituvchilar, administratorlar va mehmonlar uchun alohida rolga mos boshqaruv panellari mavjud. Foydalanuvchilar tizimga kirish orqali darslar, topshiriqlar, baholash ko‘rsatkichlari hamda umumiy faollikni yagona platformada kuzatishlari mumkin.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "O'quvchi", detail: "Kurslar va sertifikatlarni kuzatish" },
              { label: "O'qituvchi", detail: "Darslarni va topshiriqlarni boshqarish" },
              { label: "Admin", detail: "Foydalanuvchilar, faoliyat va tahlillarni nazorat qilish" },
            ].map((item) => (
              <article key={item.label} className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm font-black text-white">{item.label}</p>
                <p className="mt-2 text-xs leading-6 text-blue-100">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-2xl shadow-black/20 md:p-10">
          <div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Kirish</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Foydalanuvchi nomi yoki elektron pochta manzilingiz va parolingizni kiriting.</p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block space-y-2 text-sm font-semibold text-slate-700">
              <span>Foydalanuvchi nomi yoki elektron pochta</span>
              <input
                value={form.identifier}
                onChange={(event) => setForm((current) => ({ ...current, identifier: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
                placeholder="student01 or student@example.com"
                autoComplete="username"
                required
              />
            </label>

            <label className="block space-y-2 text-sm font-semibold text-slate-700">
              <span>Parol</span>
              <input
                type="password"
                value={form.password}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </label>

            {error && <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <LogIn size={18} />
              {submitting ? "Kirish..." : "Kirish"}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-600">
            Platformada yangimisiz? {" "}
            <Link to="/register" className="font-bold text-blue-600 hover:text-blue-700">
              Hisob yaratish
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
