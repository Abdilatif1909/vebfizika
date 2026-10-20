import { GraduationCap } from "lucide-react";

import ContentPage from "./ContentPage.jsx";

export default function Subjects() {
  return (
    <ContentPage
      eyebrow="Subjects"
      title="Subject catalog"
      description="Academic subjects and course families available across the platform."
      resource="subjects"
      icon={GraduationCap}
      tone="blue"
      card={{
        title: (row) => row.title,
        subtitle: (row) => row.description || "Subject area for courses, theory, labs, and assessment content.",
        meta: (row) => `Order ${row.order || 0}`,
        badge: () => "subject",
        actionLabel: "View courses",
      }}
      columns={[
        { key: "title", label: "Subject" },
        { key: "slug", label: "Slug" },
        { key: "order", label: "Order" },
      ]}
    />
  );
}
