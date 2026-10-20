import { useEffect, useState } from "react";
import { Camera, Save } from "lucide-react";

export default function ProfileEditorCard({ user, title = "Profil sozlamalari", description, onSave, saving = false }) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    bio: "",
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setForm({
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      bio: user?.bio || "",
    });
    setAvatarFile(null);
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => payload.append(key, value));
      if (avatarFile) {
        payload.append("avatar", avatarFile);
      }
      await onSave(payload);
      setSuccess("ok");
      setAvatarFile(null);
    } catch (requestError) {
      setError(requestError.message || "Profilni yangilab bo'lmadi.");
    }
  }

  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-black text-slate-950">{title}</h3>
        {description && <p className="text-sm leading-6 text-slate-600">{description}</p>}
      </div>

      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-slate-700">
            <span>Ism</span>
            <input
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-slate-700">
            <span>Familiya</span>
            <input
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-slate-700">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-slate-700">
            <span>Telefon</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
            />
          </label>
        </div>

        <label className="space-y-2 text-sm font-semibold text-slate-700">
          <span>Bio</span>
          <textarea
            name="bio"
            rows="4"
            value={form.bio}
            onChange={handleChange}
            className="w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
          />
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 px-4 py-4 text-sm font-semibold text-blue-700 transition hover:border-blue-400 hover:bg-blue-50">
          <Camera size={18} />
          <span>{avatarFile ? avatarFile.name : "Avatar yuklash"}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => setAvatarFile(event.target.files?.[0] || null)}
          />
        </label>

        {error && <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600">{error}</p>}
        {success && <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Profil muvaffaqiyatli yangilandi.</p>}

        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save size={16} />
          {saving ? "Saqlanmoqda..." : "Profilni saqlash"}
        </button>
      </form>
    </section>
  );
}
