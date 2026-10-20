import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth, resolveRoleHome } from "../context/AuthContext.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner label="Preparing your workspace..." />;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (allowedRoles?.length && !allowedRoles.includes(user.role)) {
    return <Navigate to={resolveRoleHome(user.role)} replace />;
  }

  return children || <Outlet />;
}
