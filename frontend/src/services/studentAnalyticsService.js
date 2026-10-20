import { api } from "./api.js";

export const studentAnalyticsService = {
  getDashboardStats() {
    return api.fetch("/student/dashboard-stats/");
  },

  getProfileStats() {
    return api.fetch("/student/profile-stats/");
  },

  getDashboardFeed() {
    return api.fetch("/dashboard/summary/");
  },

  getEnrollments() {
    return api.fetch("/my/enrollments/");
  },

  getTheoryProgress() {
    return api.fetch("/my/theory-progress/");
  },

  getPracticalSubmissions() {
    return api.fetch("/my/practical-submissions/");
  },

  getLabReports() {
    return api.fetch("/my/lab-reports/");
  },

  getVideoProgress() {
    return api.fetch("/my/video-progress/");
  },

  getTestAttempts() {
    return api.fetch("/my/test-attempts/");
  },

  getCertificates() {
    return api.fetch("/my/certificates/");
  },

  trackVideo(payload) {
    return api.fetch("/student/track-video/", { method: "POST", data: payload });
  },

  trackTest(payload) {
    return api.fetch("/student/track-test/", { method: "POST", data: payload });
  },

  trackSimulation(payload) {
    return api.fetch("/student/track-simulation/", { method: "POST", data: payload });
  },

  trackTheory(payload) {
    return api.fetch("/student/track-theory/", { method: "POST", data: payload });
  },

  trackDocument(payload) {
    return api.fetch("/student/track-document/", { method: "POST", data: payload });
  },
};

export default studentAnalyticsService;
