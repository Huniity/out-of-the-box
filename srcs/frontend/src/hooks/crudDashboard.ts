

import { useEffect, useState, useCallback } from "react";


const crudDashboard = (apiBase: string) => {
    const [rows, setRows] = useState<Record<string, unknown>[]>([]);
    const [loading, setLoading] = useState(true);

    const load = useCallback(() => {
        setLoading(true);
        fetch(`${apiBase}/`)
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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        load();
    }

    async function deleteEvent(id: unknown) {
        await fetch(`${apiBase}/${id}/`, { method: "DELETE" });
        load();
    }

    return { rows, loading, saveEvent, deleteEvent, load };
}

export default crudDashboard;