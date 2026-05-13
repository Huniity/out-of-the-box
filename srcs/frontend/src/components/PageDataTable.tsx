import { useEffect, useState } from "react";
import type { ApiPage } from "../types/dashboard";

type Props = {
    page: ApiPage;
};

const HiddenInfo = new Set(["id", "image", "created_at", "updated_at"]);

function fmt(val: unknown): string {
    if (val === null || val === undefined) return "—";
    if (typeof val === "boolean") return val ? "Yes" : "No";
    if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}T/.test(val)) {
        return new Date(val).toLocaleString();
    }
    return String(val);
}

export default function PageDataTable({ page }: Props) {
    const [rows, setRows] = useState<Record<string, unknown>[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/${page.url}/`)
            .then((r) => r.json())
            .then((data) => setRows(Array.isArray(data) ? data : (data.results ?? [])))
            .catch(() => setRows([]))
            .finally(() => setLoading(false));
    }, [page.url]);

    const columns = rows.length > 0 ? Object.keys(rows[0]).filter((k) => !HiddenInfo.has(k)) : [];

    return (
        <section>
            <h1 className="text-3xl font-black tracking-wide lg:text-4xl">{page.name}</h1>

            <div className="mt-6 overflow-x-auto rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-xl">
                {loading ? (
                    <p className="p-6 text-sm text-gray-500">Loading…</p>
                ) : rows.length === 0 ? (
                    <p className="p-6 text-sm text-gray-500">No records found.</p>
                ) : (
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="border-b border-white/10">
                                {columns.map((col) => (
                                    <th
                                        key={col}
                                        className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500"
                                    >
                                        {col.replace(/_/g, " ")}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-white/5 last:border-0 transition-colors hover:bg-white/5"
                                >
                                    {columns.map((col) => (
                                        <td
                                            key={col}
                                            className="max-w-[180px] truncate whitespace-nowrap px-3 py-1.5 text-gray-300"
                                        >
                                            {fmt(row[col])}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
}
