import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";
const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, "");
const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

const client = axios.create({
  baseURL: API_BASE_URL,
});

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function setAuthTokens({ access, refresh }) {
  if (access) {
    localStorage.setItem(ACCESS_TOKEN_KEY, access);
  }
  if (refresh) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
  }
}

export function clearAuthTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function resolveMediaUrl(value) {
  if (!value) {
    return "";
  }
  if (/^https?:\/\//i.test(value)) {
    return value;
  }
  if (value.startsWith("/")) {
    return `${API_ORIGIN}${value}`;
  }
  return `${API_ORIGIN}/${value}`;
}

export function getResourceLink(row) {
  const candidate =
    row?.file ||
    row?.attachment ||
    row?.resource_file ||
    row?.video_file ||
    row?.external_url ||
    row?.launch_url ||
    row?.embed_url ||
    "";
  return resolveMediaUrl(candidate);
}

export function getFileTypeLabel(row) {
  const resourceLink = getResourceLink(row);
  if (!resourceLink) {
    return "ITEM";
  }
  const sanitized = resourceLink.split("?")[0].split("#")[0];
  const extension = sanitized.includes(".") ? sanitized.slice(sanitized.lastIndexOf(".") + 1).toUpperCase() : "LINK";
  return extension || "ITEM";
}

export function isPreviewableResource(row) {
  const previewable = new Set(["PDF", "JPG", "JPEG", "PNG", "TXT", "HTML", "HTM", "MP4", "MOV", "AVI"]);
  return previewable.has(getFileTypeLabel(row));
}

client.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (!(config.data instanceof FormData) && !config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearAuthTokens();
      window.dispatchEvent(new CustomEvent("auth:unauthorized"));
    }
    return Promise.reject(error);
  },
);

async function request(config) {
  try {
    const response = await client(config);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      error.message ||
      "Request failed";
    throw new Error(message);
  }
}

export const api = {
  list: (resource, params) => request({ url: `/${resource}/`, method: "GET", params }),
  get: (resource, id) => request({ url: `/${resource}/${id}/`, method: "GET" }),
  create: (resource, data) => request({ url: `/${resource}/`, method: "POST", data }),
  update: (resource, id, data) => request({ url: `/${resource}/${id}/`, method: "PATCH", data }),
  remove: (resource, id) => request({ url: `/${resource}/${id}/`, method: "DELETE" }),
  fetch: (url, config = {}) => request({ url, method: config.method || "GET", ...config }),
  login: (credentials) => request({ url: "/auth/token/", method: "POST", data: credentials }),
  register: (payload) => request({ url: "/auth/register/", method: "POST", data: payload }),
  me: () => request({ url: "/auth/me/", method: "GET" }),
  updateMe: (payload) => request({ url: "/auth/me/", method: "PUT", data: payload }),
  refresh: (refresh = getRefreshToken()) => request({ url: "/auth/token/refresh/", method: "POST", data: { refresh } }),
};

export function normalizeList(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }
  return payload?.results || [];
}
