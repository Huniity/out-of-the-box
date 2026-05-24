

import { useEffect, useState, useCallback } from "react";

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
        await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCsrf(),
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        load();
    }

    async function deleteEvent(id: unknown) {
        await fetch(`${apiBase}/${id}/`, {
            method: "DELETE",
            headers: { "X-CSRFToken": getCsrf() },
            credentials: "include",
        });
        load();
    }

    return { rows, loading, saveEvent, deleteEvent, load };
}

export default crudDashboard;