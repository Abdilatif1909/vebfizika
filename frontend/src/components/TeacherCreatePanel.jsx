import { FilePlus2 } from "lucide-react";
import { useMemo, useState } from "react";

import { api } from "../services/api.js";

const formDefinitions = {
  theory: {
    label: "Add Theory Lesson",
    endpoint: "/teacher/my-theory-lessons/",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "topic", label: "Topic", type: "select", optionSource: "topics", required: true },
      { name: "module", label: "Module", type: "select", optionSource: "modules" },
      { name: "estimated_minutes", label: "Minutes", type: "number" },
      { name: "content", label: "Content", type: "textarea", required: true, full: true },
    ],
  },
  practical: {
    label: "Add Practical Assignment",
    endpoint: "/teacher/my-practical-assignments/",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "course", label: "Course", type: "select", optionSource: "courses", required: true },
      { name: "module", label: "Module", type: "select", optionSource: "modules" },
      { name: "max_score", label: "Max score", type: "number" },
      { name: "due_at", label: "Due date", type: "datetime-local" },
      { name: "instructions", label: "Instructions", type: "textarea", required: true, full: true },
    ],
  },
  laboratory: {
    label: "Add Laboratory Work",
    endpoint: "/teacher/my-laboratories/",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "course", label: "Course", type: "select", optionSource: "courses", required: true },
      { name: "module", label: "Module", type: "select", optionSource: "modules" },
      { name: "max_score", label: "Max score", type: "number" },
      { name: "objective", label: "Objective", type: "textarea", required: true, full: true },
      { name: "procedure", label: "Procedure", type: "textarea", required: true, full: true },
      { name: "equipment", label: "Equipment", type: "textarea", full: true },
      { name: "expected_result", label: "Expected result", type: "textarea", full: true },
    ],
  },
  video: {
    label: "Add Video Lesson",
    endpoint: "/teacher/video-lessons/",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "course", label: "Course", type: "select", optionSource: "courses" },
      { name: "module", label: "Module", type: "select", optionSource: "modules" },
      { name: "duration_seconds", label: "Duration (sec)", type: "number" },
      { name: "external_url", label: "External URL", type: "url" },
      { name: "video_file", label: "Video file", type: "file", accept: "video/*", full: true },
      { name: "description", label: "Description", type: "textarea", full: true },
    ],
  },
  test: {
    label: "Add Test",
    endpoint: "/teacher/tests/",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "course", label: "Course", type: "select", optionSource: "courses", required: true },
      { name: "module", label: "Module", type: "select", optionSource: "modules" },
      { name: "duration_minutes", label: "Duration (min)", type: "number" },
      { name: "passing_score", label: "Passing score", type: "number" },
      { name: "description", label: "Description", type: "textarea", full: true },
    ],
  },
};

const defaults = {
  title: "",
  topic: "",
  course: "",
  module: "",
  estimated_minutes: 10,
  max_score: 100,
  duration_seconds: 0,
  duration_minutes: 30,
  passing_score: 60,
  due_at: "",
  content: "",
  instructions: "",
  objective: "",
  procedure: "",
  equipment: "",
  expected_result: "",
  description: "",
  external_url: "",
  video_file: null,
};

function Field({ field, value, onChange, options }) {
  if (field.type === "textarea") {
    return (
      <label className={`space-y-2 text-sm font-semibold text-slate-700 ${field.full ? "md:col-span-2" : ""}`}>
        <span>{field.label}</span>
        <textarea
          name={field.name}
          rows="4"
          value={value || ""}
          onChange={onChange}
          required={field.required}
          className="w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
        />
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label className="space-y-2 text-sm font-semibold text-slate-700">
        <span>{field.label}</span>
        <select
          name={field.name}
          value={value || ""}
          onChange={onChange}
          required={field.required}
          className="w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
        >
          <option value="">Select {field.label}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title || option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

  if (field.type === "file") {
    return (
      <label className={`space-y-2 text-sm font-semibold text-slate-700 ${field.full ? "md:col-span-2" : ""}`}>
        <span>{field.label}</span>
        <input
          type="file"
          name={field.name}
          accept={field.accept}
          onChange={onChange}
          className="w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:font-bold file:text-white"
        />
      </label>
    );
  }

  return (
    <label className={`space-y-2 text-sm font-semibold text-slate-700 ${field.full ? "md:col-span-2" : ""}`}>
      <span>{field.label}</span>
      <input
        type={field.type}
        name={field.name}
        value={value ?? ""}
        onChange={onChange}
        required={field.required}
        className="w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
      />
    </label>
  );
}

export default function TeacherCreatePanel({ resources, onCreated }) {
  const [active, setActive] = useState("theory");
  const [formState, setFormState] = useState(defaults);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const current = formDefinitions[active];
  const options = useMemo(
    () => ({
      courses: resources.courses || [],
      modules: resources.modules || [],
      topics: resources.topics || [],
    }),
    [resources.courses, resources.modules, resources.topics],
  );

  function resetForm() {
    setFormState(defaults);
  }

  function handleChange(event) {
    const { name, value, files, type } = event.target;
    setFormState((currentState) => ({
      ...currentState,
      [name]: type === "file" ? files?.[0] || null : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const payload = new FormData();
      current.fields.forEach((field) => {
        const value = formState[field.name];
        if (value === null || value === undefined || value === "") {
          return;
        }
        payload.append(field.name, value);
      });
      payload.append("published", "true");
      await api.fetch(current.endpoint, { method: "POST", data: payload });
      setSuccess(`${current.label} created successfully.`);
      resetForm();
      await onCreated?.();
    } catch (requestError) {
      setError(requestError.message || "Unable to create content.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
      <div className="flex flex-wrap gap-2">
        {Object.entries(formDefinitions).map(([key, definition]) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setActive(key);
              setError("");
              setSuccess("");
              resetForm();
            }}
            className={`rounded-2xl px-4 py-2 text-sm font-bold transition ${active === key ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}
          >
            {definition.label}
          </button>
        ))}
      </div>

      <form className="mt-5 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        {current.fields.map((field) => (
          <Field
            key={field.name}
            field={field}
            value={formState[field.name]}
            onChange={handleChange}
            options={options[field.optionSource] || []}
          />
        ))}

        {error && <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600 md:col-span-2">{error}</p>}
        {success && <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 md:col-span-2">{success}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
        >
          <FilePlus2 size={18} />
          {submitting ? "Creating..." : current.label}
        </button>
      </form>
    </section>
  );
}
