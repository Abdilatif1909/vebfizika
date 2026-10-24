import { useEffect, useState } from "react";
import { Bell, ChevronDown, GraduationCap, LogOut, Menu, Search, X } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext.jsx";
import { filterNavigationByRole, navigation, secondaryNavigation } from "../routes/navigation.js";

function NavItem({ item, onNavigate }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition",
          isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
            : "text-slate-600 hover:bg-blue-50 hover:text-blue-700",
        ].join(" ")
      }
    >
      <Icon size={18} />
      <span>{item.label}</span>
    </NavLink>
  );
}

export default function AppLayout({ children }) {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const role = user?.role;
  const primaryItems = filterNavigationByRole(navigation, role);
  const managementItems = filterNavigationByRole(secondaryNavigation, role);
  const initials = (user?.full_name || user?.username || "U")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const roleLabels = {
    student: "talaba",
    teacher: "o'qituvchi",
    admin: "admin",
    guest: "mehmon",
  };

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-blue-100 bg-white/95 px-4 py-5 shadow-xl shadow-blue-950/5 backdrop-blur lg:block">
        <Link to="/dashboard" className="mb-7 flex items-center gap-3 rounded-3xl px-2 py-1 transition hover:bg-blue-50">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
            <GraduationCap size={24} />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-slate-950">EduPlatform</p>
            <p className="text-xs font-medium text-slate-500">Ta'lim platformasi</p>
          </div>
        </Link>

        <div className="space-y-6 overflow-y-auto pr-1">
          <nav className="space-y-1.5">
            {primaryItems.map((item) => (
              <NavItem item={item} key={item.path} />
            ))}
          </nav>

          <div>
            <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wide text-slate-400">Boshqaruv</p>
            <nav className="space-y-1.5">
              {managementItems.map((item) => (
                <NavItem item={item} key={item.path} />
              ))}
            </nav>
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className={`sticky top-0 ${mobileMenuOpen ? "z-50" : "z-30"} border-b border-blue-100 bg-white/85 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8`}>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-600 lg:hidden"
              aria-label={mobileMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Ta'lim platformasi</p>
              <h1 className="truncate text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                Ta'lim boshqaruv paneli
              </h1>
            </div>

            <label className="hidden min-h-11 w-full max-w-md items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 text-slate-500 md:flex">
              <Search size={18} />
              <input
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                placeholder="Fanlar, darslar va testlarni qidirish..."
              />
            </label>

            <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-600 shadow-sm">
              <Bell size={19} />
              <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </button>

            <button className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-2.5 py-2 shadow-sm">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.full_name || user.username} className="h-8 w-8 rounded-xl object-cover" />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-black text-white">
                  {initials}
                </div>
              )}
              <div className="hidden text-left sm:block">
                <p className="text-sm font-bold leading-4 text-slate-900">{user?.full_name || user?.username || "Foydalanuvchi"}</p>
                <p className="text-xs capitalize text-slate-500">{roleLabels[role] || "a'zo"}</p>
              </div>
              <ChevronDown className="hidden text-slate-400 sm:block" size={16} />
            </button>

            <button
              type="button"
              onClick={logout}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-600 shadow-sm transition hover:bg-rose-50 hover:text-rose-600"
              aria-label="Chiqish"
            >
              <LogOut size={18} />
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <>
            <button
              type="button"
              className="fixed inset-x-0 bottom-0 top-[76px] z-40 bg-slate-950/35 lg:hidden"
              onClick={closeMobileMenu}
              aria-label="Menyuni yopish"
            />
            <aside
              id="mobile-navigation"
              className="fixed bottom-0 left-0 top-[76px] z-40 w-[min(20rem,85vw)] overflow-y-auto border-t border-blue-100 bg-white px-4 py-5 shadow-xl lg:hidden"
              aria-label="Mobil navigatsiya"
            >
              <nav className="space-y-1.5">
                {primaryItems.map((item) => (
                  <NavItem item={item} key={item.path} onNavigate={closeMobileMenu} />
                ))}
              </nav>
              {managementItems.length > 0 && (
                <div className="mt-6">
                  <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wide text-slate-400">Boshqaruv</p>
                  <nav className="space-y-1.5">
                    {managementItems.map((item) => (
                      <NavItem item={item} key={item.path} onNavigate={closeMobileMenu} />
                    ))}
                  </nav>
                </div>
              )}
            </aside>
          </>
        )}

        <main className="px-4 py-6 sm:px-6 lg:px-8">{children || <Outlet />}</main>
      </div>
    </div>
  );
}
