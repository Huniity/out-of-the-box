import { useState, useEffect } from "react";
import {
    ArrowLeft,
    User,
    LogOut,
    Menu,
    X,
} from "lucide-react";

import { Link } from "react-router-dom";

import PageCount from "../components/dashboard/MetricsPageCount";
import VisitorCount from "../components/dashboard/MetricsVisitorCount";
import SpeakerCount from "../components/dashboard/MetricsSpeakerCount";
import DashboardNav from "../components/dashboard/DashboardNav";
import PageDataTable from "../components/dashboard/DashboardPagesData";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MobileTopbar from "../components/dashboard/mobile/MobileTopbar";
import MobileOverlay from "../components/dashboard/mobile/MobileOverlay";
import type { ApiPage } from "../types/dashboard";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<string>("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [apiPages, setApiPages] = useState<ApiPage[]>([]);
    const [user, setUser] = useState<{ firstName: string; lastName: string; role: string } | null>(null);

    useEffect(() => {
        fetch('/api/auth/me/', { credentials: 'include' })
            .then(res => {
                if (res.status === 401) {
                    window.location.href = '/admin/login/?next=/dashboard';
                    return null;
                }
                return res.json();
            })
            .then(data => {
                if (data) {
                    setUser({
                        firstName: data.first_name || data.username,
                        lastName: data.last_name || '',
                        role: data.role,
                    });
                }
            });
    }, []);

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
        window.location.href = '/admin/login/';
    };

    if (!user) return <div className="min-h-screen bg-black" />;

    const activePage = apiPages.find((p) => String(p.id) === activeTab);

    return (
        <div className="min-h-screen bg-black text-white">
            <DashboardHeader user={user} />

            <div className="flex h-screen flex-col lg:flex-row lg:pt-16">
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
                        {activeTab === "overview" && <Overview setActiveTab={setActiveTab} />}
                        {activePage && <PageDataTable page={activePage} />}
                    </div>
                </main>
            </div>
        </div>
    );
}

function Overview({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
    return (
        <div>
            <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <StatCard label="PAGES" value={<PageCount />} />
                <StatCard label="SPEAKERS" value={<SpeakerCount />} />
                <StatCard label="VISITORS" value={<VisitorCount />} />
                <StatCard label="METRICS" value="METRICS" />
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
                <section className="rounded-xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl" />
            </div>
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