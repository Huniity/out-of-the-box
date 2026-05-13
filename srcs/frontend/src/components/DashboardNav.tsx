import { useEffect, useState } from "react";
import { Target, ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import type { ApiPage,DashboardNavProps } from "../types/dashboard";


export default function DashboardNav({ activeTab, onTabChange, onPagesLoaded, onClose }: DashboardNavProps) {
    const [pages, setPages] = useState<ApiPage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/pages/")
            .then((r) => r.json())
            .then((data: ApiPage[]) => {
                setPages(data);
                onPagesLoaded(data);
            })
            .catch(() => {
                setPages([]);
                onPagesLoaded([]);
            })
            .finally(() => setLoading(false));
    }, []);

    const select = (tab: string) => {
        onTabChange(tab);
        onClose();
    };

    return (
        <>
            <Link
                to="/"
                className="mb-8 hidden items-center gap-2 text-sm font-bold text-white transition hover:text-gray-300 lg:flex"
            >
                <ArrowLeft size={20} />
                Back
            </Link>

            <nav className="flex flex-col gap-1">
                <button
                    onClick={() => select("overview")}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border-none bg-transparent px-4 py-3 text-left text-sm font-medium transition-colors ${
                        activeTab === "overview"
                            ? "bg-white/15 text-white"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                >
                    <Target size={18} className="shrink-0" />
                    <span className="truncate">Overview</span>
                </button>

                {loading ? (
                    <p className="px-4 py-2 text-xs text-gray-600">Loading…</p>
                ) : (
                    pages.map((page) => (
                        <button
                            key={page.id}
                            onClick={() => select(String(page.id))}
                            className={`flex cursor-pointer items-center gap-3 rounded-lg border-none bg-transparent px-4 py-3 text-left text-sm font-medium transition-colors ${
                                activeTab === String(page.id)
                                    ? "bg-white/15 text-white"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`}
                        >
                            <FileText size={18} className="shrink-0" />
                            <span className="truncate">{page.name}</span>
                        </button>
                    ))
                )}
            </nav>
        </>
    );
}
