import { useEffect, useState } from "react";
import { Target, LayoutGrid } from "lucide-react";
import type { ApiPage,DashboardNavProps } from "../../types/dashboard";


export default function DashboardNav({ activeTab, onTabChange, onPagesLoaded, onClose }: DashboardNavProps) {
    const [pages, setPages] = useState<ApiPage[]>([]);
    useEffect(() => {
        const ctrl = new AbortController()
        fetch("/api/pages/", { signal: ctrl.signal })
            .then((r) => r.json())
            .then((data: ApiPage[]) => {
                setPages(data);
                onPagesLoaded(data);
            })
            .catch((err) => {
                if (err.name === 'AbortError') return;
                setPages([]);
                onPagesLoaded([]);
            });
        return () => ctrl.abort()
    }, []);

    const select = (tab: string) => {
        onTabChange(tab);
        onClose();
    };

    return (
        <>
            <nav className="flex flex-col gap-1">
                <button
                    onClick={() => select("overview")}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        activeTab === "overview"
                            ? "border-[#c8ff00] bg-transparent text-[#c8ff00]"
                            : "border-transparent bg-transparent text-gray-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    }`}
                >
                    <Target size={18} className="shrink-0" />
                    <span className="truncate">Overview</span>
                </button>

                {pages.length > 0 && (
                    <>
                        {pages.filter((page) => page.name !== "Home" && page.name !== "Programação" && page.name !== "Semana Lábia").map((page) => (
                            <button
                                key={page.id}
                                onClick={() => select(String(page.id))}
                                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                                    activeTab === String(page.id)
                                        ? "border-[#c8ff00] bg-transparent text-[#c8ff00]"
                                        : "border-transparent bg-transparent text-gray-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                                }`}
                            >
                                <LayoutGrid size={18} className="shrink-0" />
                                <span className="truncate">{page.name}</span>
                            </button>
                        ))}
                    </>
                )}
            </nav>
        </>
    );
}
