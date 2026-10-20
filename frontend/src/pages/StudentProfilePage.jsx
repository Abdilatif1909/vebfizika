import { Award, BookOpen, CheckCircle2, PlayCircle, Save, ScrollText } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import ContentTable from "../components/ContentTable.jsx";
import EmptyState from "../components/EmptyState.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ProfileEditorCard from "../components/ProfileEditorCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { api, normalizeList } from "../services/api.js";

function asMap(items, keyField = "id", labelField = "title") {
  return items.reduce((accumulator, item) => {
    accumulator[item[keyField]] = item[labelField] || `#${item[keyField]}`;
    return accumulator;
  }, {});
}

function formatDate(value) {
  return value ? new Date(value).toLocaleDateString() : "—";
}

function percentage(done, total) {
  if (!total) {
    return 0;
  }
  return Math.round((done / total) * 100);
}

export default function StudentProfilePage() {
  const { user, updateProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    enrollments: [],
    theoryProgress: [],
    theoryLessons: [],
    practicalAssignments: [],
    practicalSubmissions: [],
    labExperiments: [],
    labReports: [],
    videos: [],
    videoProgress: [],
    tests: [],
    testAttempts: [],
    certificates: [],
    courses: [],
  export { default } from "./StudentDashboardPage.jsx";

