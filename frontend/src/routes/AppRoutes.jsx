import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import AppLayout from "../layout/AppLayout.jsx";
import Accounts from "../pages/Accounts.jsx";
import AdminControlPage from "../pages/AdminControlPage.jsx";
import Analytics from "../pages/Analytics.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Documents from "../pages/Documents.jsx";
import Laboratory from "../pages/Laboratory.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import MobileApps from "../pages/MobileApps.jsx";
import Practical from "../pages/Practical.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import Simulations from "../pages/Simulations.jsx";
import SimulationViewer from "../pages/SimulationViewer.jsx";
import StudentDashboardPage from "../pages/StudentDashboardPage.jsx";
import Subjects from "../pages/Subjects.jsx";
import TeacherDashboardPage from "../pages/TeacherDashboardPage.jsx";
import TestSystem from "../pages/TestSystem.jsx";
import Theory from "../pages/Theory.jsx";
import Videos from "../pages/Videos.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import { resolveRoleHome, useAuth } from "../context/AuthContext.jsx";

function AuthenticatedLayout() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </ProtectedRoute>
  );
}

function RoleHomeRedirect() {
  const { user } = useAuth();
  return <Navigate to={resolveRoleHome(user?.role)} replace />;
}

function ProfileRedirect() {
  const { user } = useAuth();
  return <Navigate to={resolveRoleHome(user?.role)} replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/" element={<ProtectedRoute><RoleHomeRedirect /></ProtectedRoute>} />

      <Route element={<AuthenticatedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/dars-hujjatlari" element={<Documents />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/nazariy-bilimlar" element={<Theory />} />
        <Route path="/practical" element={<Navigate to="/theory" replace />} />
        <Route path="/laboratory" element={<Laboratory />} />
        <Route path="/laboratoriya" element={<Laboratory />} />
        <Route path="/laboratory/:simulationId/view" element={<SimulationViewer />} />
        <Route path="/laboratoriya/:simulationId/view" element={<SimulationViewer />} />
        <Route path="/simulations" element={<Simulations />} />
        <Route path="/simulations/:simulationId/view" element={<SimulationViewer />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/mobileapps" element={<MobileApps />} />
        <Route path="/testsystem" element={<TestSystem />} />
        <Route path="/notifications" element={<Analytics />} />
        <Route path="/profile" element={<ProfileRedirect />} />

        <Route path="/student-profile" element={<ProtectedRoute allowedRoles={["student"]}><StudentDashboardPage /></ProtectedRoute>} />
        <Route path="/teacher-profile" element={<ProtectedRoute allowedRoles={["teacher"]}><TeacherDashboardPage /></ProtectedRoute>} />
        <Route path="/admin-profile" element={<ProtectedRoute allowedRoles={["admin"]}><AdminControlPage /></ProtectedRoute>} />

        <Route path="/accounts" element={<ProtectedRoute allowedRoles={["admin"]}><Accounts /></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute allowedRoles={["teacher", "admin"]}><Analytics /></ProtectedRoute>} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
