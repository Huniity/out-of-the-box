import { useState, useMemo } from "react";

import EventModal from "./modal/EventModal";
import CrudDashboard from "./CrudDashboard";
import Pagination from "./Pagination";


import type { DashboardProps } from "../../types/dashboard";
import type { ModalAction } from "../../types/modal";
import crudDashboard from "../../hooks/crudDashboard";
import { formatValue, hiddenFields, dashboardFields, PAGE_SLUG_MAP, PAGE_EVENT_FIELDS } from "../../utils/dashboard";
import SearchFilter from "./filters/SearchFilter";
import SortNameFilter from "./filters/SortNameFilter";
import SortDateFilter from "./filters/SortDateFilter";
import IsActiveFilter from "./filters/IsActiveFilter";
import ClearFiltersButton from "./filters/ClearFiltersButton";


export default function PageDataTable({ page }: DashboardProps) {
    const slug = PAGE_SLUG_MAP[page.name] ?? page.name.toLowerCase();
    const apiBase = `/api/${slug}`;
    const { rows, loading, saveEvent, deleteEvent } = crudDashboard(apiBase);
    const [modal, setModal] = useState<ModalAction>({ mode: "closed" });

    // Filter/sort state
    const [search, setSearch] = useState("");
    const [sortName, setSortName] = useState<"asc" | "desc">("asc");
    const [sortDate, setSortDate] = useState<"asc" | "desc">("asc");
    const [isActive, setIsActive] = useState<"all" | "active" | "inactive">("all");
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 10;

    const close = () => setModal({ mode: "closed" });

    const allCols = rows.length > 0
        ? Object.keys(rows[0]).filter((k) => !hiddenFields.has(k))
        : (PAGE_EVENT_FIELDS[slug] ?? []);
    const columns = dashboardFields.filter((c) => allCols.includes(c));
    const modalFields = slug === 'workshops' ? (PAGE_EVENT_FIELDS[slug] ?? allCols) : allCols;

    async function handleSave(data: Record<string, unknown>) {
        const id = modal.mode === "edit" ? modal.row.id : undefined;
        await saveEvent(data, id);
    }

    async function handleDelete(row: Record<string, unknown>) {
        if (!confirm(`Eliminar "${row.title ?? row.id}"?`)) return;
        await deleteEvent(row.id);
    }


    const filteredData = useMemo(() => {
        let filtered = rows;
        //search
        if (search.trim()) {
            const q = search.trim().toLowerCase();
            filtered = filtered.filter(row =>
                String(row.title ?? "").toLowerCase().includes(q) ||
                String(row.description ?? "").toLowerCase().includes(q)
            );
        }
        //is_active
        if (isActive !== "all") {
            filtered = filtered.filter(row =>
                isActive === "active" ? row.is_active : !row.is_active
            );
        }
        //name
        filtered = [...filtered].sort((a, b) => {
            const cmp = String(a.title ?? "").localeCompare(String(b.title ?? ""));
            return sortName === "asc" ? cmp : -cmp;
        });
        //date
        filtered = [...filtered].sort((a, b) => {
            const cmp = String(a.start_datetime ?? "").localeCompare(String(b.start_datetime ?? ""));
            return sortDate === "asc" ? cmp : -cmp;
        });
        return filtered;
    }, [rows, search, isActive, sortName, sortDate]);

    // Reset to page 1 when filters change
    useMemo(() => {
        setCurrentPage(1);
    }, [search, isActive, sortName, sortDate]);

    // Paginate filtered data
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredData.slice(start, end);
    }, [filteredData, currentPage]);

    const clearFilters = () => {
        setSearch("");
        setSortName("asc");
        setSortDate("asc");
        setIsActive("all");
        setCurrentPage(1);
    };


    return (
        <section>
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between mb-2">
                <h1 className="text-3xl font-black tracking-wide lg:text-4xl">{page.name}</h1>
                <button
                    onClick={() => setModal({ mode: "add" })}
                    className="rounded-sm border-2 border-[#c8ff00] bg-[#c8ff00] px-4 py-2 text-sm font-black uppercase tracking-widest text-black transition-colors duration-200 hover:bg-transparent hover:text-[#c8ff00]"
                >
                    + Adicionar Evento
                </button>
            </div>

            {/* Filters row */}
            <div className="flex flex-wrap gap-2 items-center mb-4 w-full">
                <SearchFilter value={search} onChange={setSearch} />
                <SortNameFilter value={sortName} onChange={setSortName} />
                <SortDateFilter value={sortDate} onChange={setSortDate} />
                <IsActiveFilter value={isActive} onChange={setIsActive} />
                <ClearFiltersButton onClick={clearFilters} />
            </div>

            <div className="mt-6 overflow-x-auto rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-xl">
                {loading ? (
                    <p className="p-6 text-sm text-gray-500">Loading…</p>
                ) : filteredData.length === 0 ? (
                    <p className="p-6 text-sm text-gray-500">No records found.</p>
                ) : (
                    <CrudDashboard
                        rows={paginatedData}
                        columns={columns}
                        fmt={formatValue}
                        onView={(row) => setModal({ mode: "view", row })}
                        onEdit={(row) => setModal({ mode: "edit", row })}
                        onDelete={handleDelete}
                    />
                )}
            </div>

            {/* Pagination Controls */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

            {modal.mode === "view" && (
                <EventModal
                    mode="view"
                    row={modal.row}
                    onClose={close}
                    formatValue={formatValue}
                />
            )}

            <EventModal
                mode={modal.mode === "add" ? "add" : "edit"}
                open={modal.mode === "add" || modal.mode === "edit"}
                onClose={close}
                onSave={handleSave}
                initial={modal.mode === "edit" ? modal.row : null}
                fields={modalFields}
            />
        </section>
    );
}