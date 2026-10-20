import { UsersRound } from "lucide-react";

import ContentPage from "./ContentPage.jsx";

export default function Accounts() {
  return (
    <ContentPage
      eyebrow="Accounts"
      title="User directory"
      description="Role-based account overview for admins, teachers, students, and guests."
      resource="users"
      icon={UsersRound}
      tone="violet"
      card={{
        title: (row) => row.first_name || row.last_name ? `${row.first_name} ${row.last_name}` : row.username,
        subtitle: (row) => row.email || row.bio || "Platform user account.",
        meta: (row) => `Joined ${new Date(row.date_joined).toLocaleDateString()}`,
        badge: (row) => row.role,
        actionLabel: "Open profile",
      }}
      columns={[
        { key: "username", label: "Username" },
        { key: "email", label: "Email" },
        { key: "role", label: "Role" },
        { key: "is_active", label: "Active", render: (row) => (row.is_active ? "Yes" : "No") },
      ]}
    />
  );
}
