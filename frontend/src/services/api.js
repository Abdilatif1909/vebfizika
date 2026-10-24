import axios from "axios";

const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL || "/api";
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
    row?.file_url ||
    row?.attachment_url ||
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
  let filename = "";
  try {
    const parsed = new URL(resourceLink, "https://resource.invalid");
    filename = parsed.searchParams.get("filename") || parsed.pathname.split("/").pop() || "";
  } catch {
    filename = resourceLink.split("?")[0].split("#")[0].split("/").pop() || "";
  }
  const extension = filename.includes(".") ? filename.slice(filename.lastIndexOf(".") + 1).toUpperCase() : "LINK";
  return extension || "ITEM";
}

export function isPreviewableResource(row) {
  const previewable = new Set(["PDF", "JPG", "JPEG", "PNG", "TXT", "HTML", "HTM", "MP4", "MOV", "AVI"]);
  return previewable.has(getFileTypeLabel(row));
}

export function getResourceActionLink(row, action) {
  const resourceLink = getResourceLink(row);
  if (!resourceLink) return "";
  const isAbsolute = /^https?:\/\//i.test(resourceLink);
  const parsed = new URL(resourceLink, "https://resource.invalid");
  if (action === "download") parsed.searchParams.set("download", "1");
  else parsed.searchParams.delete("download");
  return isAbsolute ? parsed.toString() : `${parsed.pathname}${parsed.search}${parsed.hash}`;
}

export async function fetchResourceFile(row, action) {
  const resourceUrl = getResourceActionLink(row, action);
  const resolvedUrl = resolveMediaUrl(resourceUrl);
  const requestUrl = /^https?:\/\//i.test(resolvedUrl)
    ? resolvedUrl
    : new URL(resolvedUrl, window.location.origin).toString();
  try {
    const response = await client.get(requestUrl, { responseType: "blob" });
    const url = new URL(resourceUrl, window.location.origin);
    return {
      blob: new Blob([response.data], { type: response.headers["content-type"] || response.data.type }),
      filename: url.searchParams.get("filename") || "download",
    };
  } catch (error) {
    let message = error.response?.data?.detail || error.response?.data?.message || error.message;
    if (error.response?.data instanceof Blob) {
      try {
        const payload = JSON.parse(await error.response.data.text());
        message = payload.detail || payload.message || message;
      } catch {
        // Keep the request error when the response is not a JSON error payload.
      }
    }
    throw new Error(message || "Faylni yuklab bo'lmadi.");
  }
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
