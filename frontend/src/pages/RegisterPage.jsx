import { GraduationCap, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { resolveRoleHome, useAuth } from "../context/AuthContext.jsx";

const roleOptions = [
  { value: "student", label: "Talaba" },
  { value: "teacher", label: "O'qituvchi" },
  { value: "guest", label: "Mehmon" },
];

export default function RegisterPage() {
  const navigate = useNavigate();
  const { user, register, loading } = useAuth();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "student",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigate(resolveRoleHome(user.role), { replace: true });
    }
  }, [loading, navigate, user]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const profile = await register(form);
      navigate(resolveRoleHome(profile.role), { replace: true });
    } catch (requestError) {
      setError(requestError.message || "Ro'yxatdan o'tishda xatolik yuz berdi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-xl shadow-blue-950/5 md:p-10">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
            <GraduationCap size={30} />
          </div>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.24em] text-blue-600">Hisob yaratish</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight">Ta'lim platformasiga bir necha daqiqada qo'shiling.</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
            Talaba, o'qituvchi yoki mehmon sifatida ro'yxatdan o'ting. Ro'yxatdan o'tgandan so'ng, tizim sizni avtomatik ravishda mos shaxsiy sahifaga yo'naltiradi.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Talabalar o'z kurslari, sertifikatlari, videolari va test natijalarini kuzatadi.",
              "O'qituvchilar kontent joylaydi, topshiriqlarni tekshiradi va statistika bilan ishlaydi.",
              "Mehmonlar tizimga to'liq kirmasdan oldin umumiy imkoniyatlarni ko'rib chiqishi mumkin.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-blue-100 bg-blue-50/70 px-4 py-4 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-cyan-300">Ro'yxatdan o'tish</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">O'quv profilingizni yarating</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Quyidagi shaklni to'ldirib, platformadan foydalanishni boshlang.</p>
          </div>

          <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <label className="space-y-2 text-sm font-semibold text-slate-100">
              <span>Ism</span>
              <input name="first_name" value={form.first_name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10" required />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-100">
              <span>Familiya</span>
              <input name="last_name" value={form.last_name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10" required />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-100">
              <span>Foydalanuvchi nomi</span>
              <input name="username" value={form.username} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10" required />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-100">
              <span>Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10" required />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-100 md:col-span-2">
              <span>Parol</span>
              <input type="password" name="password" value={form.password} onChange={handleChange} minLength={8} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10" required />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-100 md:col-span-2">
              <span>Rol</span>
              <select name="role" value={form.role} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10">
                {roleOptions.map((role) => (
                  <option key={role.value} value={role.value} className="text-slate-900">
                    {role.label}
                  </option>
                ))}
              </select>
            </label>

            {error && <p className="rounded-2xl bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-200 md:col-span-2">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
            >
              <UserPlus size={18} />
              {submitting ? "Hisob yaratilmoqda..." : "Ro'yxatdan o'tish"}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-300">
            Akkauntingiz bormi? {" "}
            <Link to="/login" className="font-bold text-cyan-300 hover:text-cyan-200">
              Kirish sahifasiga o'ting
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
