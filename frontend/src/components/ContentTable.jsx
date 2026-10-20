export default function ContentTable({ columns, rows }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm shadow-blue-950/5">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse">
          <thead className="bg-blue-50/80">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-5 py-4 text-left text-xs font-black uppercase tracking-wide text-slate-500">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-blue-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-5 py-4 text-sm text-slate-700">
                    {column.render ? column.render(row) : row[column.key] || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
