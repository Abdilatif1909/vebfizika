import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { api, clearAuthTokens, getAccessToken, setAuthTokens } from "../services/api.js";

const AuthContext = createContext(null);

export function resolveRoleHome(role) {
  switch (role) {
    case "student":
      return "/student-profile";
    case "teacher":
      return "/teacher-profile";
    case "admin":
      return "/admin-profile";
    case "guest":
      return "/dashboard";
    default:
      return "/login";
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function bootstrap() {
      const accessToken = getAccessToken();
      if (!accessToken) {
        if (mounted) {
          setLoading(false);
        }
        return;
      }

      try {
        const me = await api.me();
        if (mounted) {
          setUser(me);
        }
      } catch {
        clearAuthTokens();
        if (mounted) {
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    bootstrap();

    const handleUnauthorized = () => {
      if (mounted) {
        setUser(null);
      }
    };

    window.addEventListener("auth:unauthorized", handleUnauthorized);
    return () => {
      mounted = false;
      window.removeEventListener("auth:unauthorized", handleUnauthorized);
    };
  }, []);

  async function login({ identifier, password }) {
    const payload = await api.login({ username: identifier, password });
    setAuthTokens(payload);
    const profile = payload.user || (await api.me());
    setUser(profile);
    return profile;
  }

  async function register(formValues) {
    const payload = await api.register(formValues);
    setAuthTokens(payload);
    const profile = payload.user || (await api.me());
    setUser(profile);
    return profile;
  }

  async function refreshUser() {
    const profile = await api.me();
    setUser(profile);
    return profile;
  }

  async function updateProfile(payload) {
    const profile = await api.updateMe(payload);
    setUser(profile);
    return profile;
  }

  function logout() {
    clearAuthTokens();
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: Boolean(user),
      login,
      register,
      logout,
      refreshUser,
      updateProfile,
    }),
    [loading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
