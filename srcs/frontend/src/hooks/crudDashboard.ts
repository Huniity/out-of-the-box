import { useEffect, useState, useCallback } from "react";
import { bustCache } from "../services/api";

function getCsrf(): string {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        ?.split('=')[1] ?? '';
}

const crudDashboard = (apiBase: string) => {
    const [rows, setRows] = useState<Record<string, unknown>[]>([]);
    const [loading, setLoading] = useState(true);

    const load = useCallback(() => {
        setLoading(true);
        fetch(`${apiBase}/`, { credentials: "include" })
            .then((r) => r.json())
            .then((data) => setRows(Array.isArray(data) ? data : (data.results ?? [])))
            .catch(() => setRows([]))
            .finally(() => setLoading(false));
    }, [apiBase]);

    useEffect(() => { load(); }, [load]);

    async function saveEvent(data: Record<string, unknown>, id?: unknown) {
        const url = id ? `${apiBase}/${id}/` : `${apiBase}/`;
        const method = id ? "PATCH" : "POST";
        const hasFile = Object.values(data).some(v => v instanceof File);

        let body: BodyInit;
        const headers: Record<string, string> = { "X-CSRFToken": getCsrf() };

        if (hasFile) {
            const form = new FormData();
            for (const [k, v] of Object.entries(data)) {
                if (v instanceof File) {
                    form.append(k, v);
                } else if (v !== null && v !== undefined) {
                    form.append(k, String(v));
                }
            }
            body = form;
        } else {
            headers["Content-Type"] = "application/json";
            body = JSON.stringify(data);
        }

        const res = await fetch(url, { method, headers, credentials: "include", body });
        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw errorData;
        }
        bustCache();
        load();
    }

    async function deleteEvent(id: unknown) {
        await fetch(`${apiBase}/${id}/`, {
            method: "DELETE",
            headers: { "X-CSRFToken": getCsrf() },
            credentials: "include",
        });
        bustCache();
        load();
    }

    return { rows, loading, saveEvent, deleteEvent, load };
}

export default crudDashboard;