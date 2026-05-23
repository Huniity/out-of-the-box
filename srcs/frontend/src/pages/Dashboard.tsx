import { useState, useEffect } from "react";
import { LogOut, Pencil, Eye } from "lucide-react";

import { Link } from "react-router-dom";

import DashboardNav from "../components/dashboard/DashboardNav";
import PageDataTable from "../components/dashboard/DashboardPagesData";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MobileTopbar from "../components/dashboard/mobile/MobileTopbar";
import MobileOverlay from "../components/dashboard/mobile/MobileOverlay";
import EventForm from "../components/dashboard/modal/EventForm";
import PageLivePreview from "../components/dashboard/PageLivePreview";
import type { ApiPage } from "../types/dashboard";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<string>("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [apiPages, setApiPages] = useState<ApiPage[]>([]);
    const [user, setUser] = useState<{ firstName: string; lastName: string; role: string } | null>(null);

    useEffect(() => {
        const ctrl = new AbortController();
        fetch("/api/auth/me/", { credentials: "include", signal: ctrl.signal })
            .then((r) => {
                if (r.status === 401) {
                    window.location.href = "/admin/login/?next=/dashboard";
                    return null;
                }
                return r.json();
            })
            .then((data) => {
                if (data) setUser({ firstName: data.first_name || data.username, lastName: data.last_name ?? "", role: data.role ?? "" });
            })
            .catch((err) => {
                if (err.name === "AbortError") return;
                window.location.href = "/admin/login/?next=/dashboard";
            });
        return () => ctrl.abort();
    }, []);

    if (!user) return <div className="min-h-screen bg-black" />;

    const handleLogout = async () => {
        const csrfToken = document.cookie
            .split('; ')
            .find(row => row.startsWith('csrftoken='))
            ?.split('=')[1] ?? '';
        await fetch('/api/auth/logout/', {
            method: 'POST',
            headers: { 'X-CSRFToken': csrfToken },
            credentials: 'include',
        });
        window.location.href = '/';
    };

    const activePage = apiPages.find((p) => String(p.id) === activeTab);

    function updatePage(page: ApiPage): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="max-h-screen bg-black text-white">
            <DashboardHeader user={user} />

            <div className="flex h-screen flex-col lg:flex-row lg:mt-16 lg:h-[calc(100vh-4rem)]">
                <MobileTopbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <MobileOverlay sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


                <aside className={`fixed left-0 top-16 z-40 flex h-[calc(100vh-4rem)] w-64 flex-col justify-between overflow-y-auto border-r border-white/15 bg-black/95 px-4 pb-8 pt-4 backdrop-blur-xl transition-transform duration-300 lg:relative lg:top-0 lg:z-auto lg:h-full lg:w-64 lg:translate-x-0 lg:overflow-y-hidden lg:bg-white/5 lg:px-8 lg:pt-8 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div>
                        <DashboardNav
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                            onPagesLoaded={setApiPages}
                            onClose={() => setSidebarOpen(false)}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full cursor-pointer items-center gap-3 rounded-lg border-none bg-transparent px-4 py-3 text-left text-sm font-medium text-gray-500 transition-colors hover:bg-white/5 hover:text-red-400"
                    >
                        <LogOut size={18} />
                        Log out
                    </button>
                </aside>

         
                <main className="mt-16 h-[calc(100vh-4rem)] w-full flex-1 overflow-y-auto lg:mt-0 lg:h-full">
                    <div className="min-h-full px-4 py-6 pb-12 lg:px-16 lg:py-8">
                        {activeTab === "overview" && (
                            <Overview
                                apiPages={apiPages}
                                onPageUpdated={updatePage}
                                setActiveTab={setActiveTab}
                            />
                        )}
                        {activePage && <PageDataTable page={activePage} />}
                    </div>
                </main>
            </div>
        </div>
    );
}

// ── Page fields shown/editable in the overview modal ───────────────────────
const PAGE_EDITABLE_FIELDS = [
    "name", "url", "main_title", "main_description",
    "cta_button_text", "cta_button_link", "event_date", "is_live",
];

function Overview({
    apiPages,
    onPageUpdated,
    setActiveTab,
}: {
    apiPages: ApiPage[];
    onPageUpdated: (page: ApiPage) => void;
    setActiveTab: (tab: string) => void;
}) {
    const [editingPage, setEditingPage] = useState<ApiPage | null>(null);

    const handleSave = async (data: Record<string, unknown>) => {
        if (!editingPage) return;
        const res = await fetch(`/api/pages/${editingPage.id}/`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed to save page");
        const updated: ApiPage = await res.json();
        onPageUpdated(updated);
        setEditingPage(null);
    };

    return (
        <div>
            {apiPages.length === 0 ? (
                <p className="text-sm text-gray-600">No pages loaded yet.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {apiPages.map((page) => (
                        <PageCard
                            key={page.id}
                            page={page}
                            onEdit={() => setEditingPage(page)}
                            onNavigate={() => setActiveTab(String(page.id))}
                        />
                    ))}
                </div>
            )}

            {/* Edit modal */}
            {editingPage && (
                <EventForm
                    open
                    title={`Editar — ${editingPage.name}`}
                    onClose={() => setEditingPage(null)}
                    onSave={handleSave}
                    initial={editingPage as unknown as Record<string, unknown>}
                    fields={PAGE_EDITABLE_FIELDS}
                    renderPreview={(data) => (
                        <PageLivePreview url={String(data.url ?? "")} />
                    )}
                />
            )}
        </div>
    );
}

function PageCard({ page, onEdit, onNavigate }: { page: ApiPage; onEdit: () => void; onNavigate: () => void }) {
    return (
        <div className="flex flex-col rounded-xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-xl">
            {/* Header */}
            <div className="mb-4 flex items-start justify-between gap-2">
                <div className="min-w-0">
                    <h3 className="truncate font-bold text-white">Página: {page.name}</h3>
                    <p className="truncate text-xs text-gray-500">URL: {page.url}</p>
                </div>
                <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        !page.is_live
                            ? "bg-red-500/20 text-red-400"
                            : "bg-emerald-500/20 text-emerald-400"
                    }`}
                >
                    {!page.is_live ? "Hidden" : "Live"}
                </span>
            </div>

            {/* Fields */}
            <div className="flex-1 space-y-2">
                {page.main_white_title && <InfoRow label="Título" value={page.main_white_title} />}
                {page.main_green_title && <InfoRow label="Título Verde" value={page.main_green_title} />}
                {page.main_description && (
                    <InfoRow
                        label="Descrição"
                        value={
                            page.main_description.length > 80
                                ? page.main_description.slice(0, 80) + "…"
                                : page.main_description
                        }
                    />
                )}
                {page.start_event_date && <InfoRow label="Data de Início" value={page.start_event_date} />}
                {page.end_event_date && <InfoRow label="Data de Fim" value={page.end_event_date} />}
                {page.cta_button_text && (
                    <InfoRow
                        label="Botão"
                        value={`${page.cta_button_text}${page.cta_button_link ? ` → ${page.cta_button_link}` : ""}`}
                    />
                )}
            </div>
            <div className="flex items-center gap-3 mt-4">
            {/* Edit button */}
                <button
                    onClick={onNavigate}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-xs font-medium text-gray-400 transition-colors hover:border-[#c8ff00]/40 hover:text-[#c8ff00]"
                >
                    <Eye size={12} />
                    Ver Conteúdo
                </button>
                <button
                    onClick={onEdit}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-xs font-medium text-gray-400 transition-colors hover:border-[#c8ff00]/40 hover:text-[#c8ff00]"
                >
                    <Pencil size={12} />
                    Editar página
                </button>
            </div>
        </div>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-start gap-2 text-xs">
            <span className="w-20 shrink-0 text-gray-600">{label}</span>
            <span className="text-gray-300">{value}</span>
        </div>
    );
}

function StatCard({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div className="rounded-xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="text-xs font-bold text-gray-500">{label}</p>
            <p className="mt-2 text-3xl font-black">{value}</p>
        </div>
    );
}