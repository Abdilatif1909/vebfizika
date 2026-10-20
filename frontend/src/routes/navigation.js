import {
  AppWindow,
  Beaker,
  Bell,
  BookOpen,
  ClipboardCheck,
  FileText,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  PlaySquare,
  Settings,
  Shapes,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

export const navigation = [
  { path: "/dashboard", label: "Bosh sahifa", icon: LayoutDashboard, roles: ["guest", "student", "teacher", "admin"] },
  { path: "/dars-hujjatlari", label: "Dars hujjatlari", icon: FileText, roles: ["guest", "student", "teacher", "admin"] },
  { path: "/nazariy-bilimlar", label: "Nazariy bilimlar", icon: BookOpen, roles: ["student", "teacher", "admin"] },
  { path: "/laboratoriya", label: "Laboratoriya", icon: Beaker, roles: ["student", "teacher", "admin"] },
  { path: "/simulations", label: "Simulatsiyalar", icon: Shapes, roles: ["student", "teacher", "admin"] },
  { path: "/videos", label: "Videolar", icon: PlaySquare, roles: ["guest", "student", "teacher", "admin"] },
  { path: "/mobileapps", label: "Mobil ilovalar", icon: AppWindow, roles: ["student", "teacher", "admin"] },
  { path: "/testsystem", label: "Testlar", icon: ClipboardCheck, roles: ["student", "teacher", "admin"] },
  { path: "/profile", label: "Talaba profili", icon: UserRound, roles: ["student"] },
];

export const secondaryNavigation = [
  { path: "/subjects", label: "Fanlar", icon: GraduationCap, roles: ["guest", "student", "teacher", "admin"] },
  { path: "/accounts", label: "Foydalanuvchilar", icon: UsersRound, roles: ["admin"] },
  { path: "/analytics", label: "Analitika", icon: Gauge, roles: ["teacher", "admin"] },
  { path: "/notifications", label: "Bildirishnomalar", icon: Bell, roles: ["student", "teacher", "admin"] },
  { path: "/teacher-profile", label: "O'qituvchi profili", icon: GraduationCap, roles: ["teacher"] },
  { path: "/admin-profile", label: "Admin profili", icon: Settings, roles: ["admin"] },
];

export function filterNavigationByRole(items, role) {
  if (!role) {
    return [];
  }
  return items.filter((item) => !item.roles || item.roles.includes(role));
}
