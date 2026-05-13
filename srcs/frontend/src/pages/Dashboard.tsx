import { useState } from "react";
import {
    ArrowLeft,
    User,
    LogOut,
    Menu,
    X,
} from "lucide-react";

import { Link } from "react-router-dom";

import PageCount from "../components/PageCount";
import VisitorCount from "../components/VisitorCount";
import SpeakerCount from "../components/SpeakerCount";
import DashboardNav from "../components/DashboardNav";
import PageDataTable from "../components/PageDataTable";
import type { ApiPage } from "../types/dashboard";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<string>("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [apiPages, setApiPages] = useState<ApiPage[]>([]);

    const user = {
        firstName: "Adrien",
        lastName: "Dejonc",
        role: "Admin",
    };

    const activePage = apiPages.find((p) => String(p.id) === activeTab);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Desktop top bar */}
            <div className="hidden lg:flex fixed top-0 left-0 right-0 h-14 z-50 items-center px-8 border-b border-white/15 bg-white/5 backdrop-blur-xl">
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Dashboard</span>
                <div className="text-center ml-4">
                    <p className="text-sm font-bold leading-tight">{user.firstName} {user.lastName}</p>
                </div>
                <div className="text-center ml-2">
                    <p className="text-xs text-gray-500">{user.role}</p>
                </div>
            </div>

            <div className="flex h-screen flex-col lg:flex-row lg:pt-14">
                {/* Mobile top bar */}
                <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-white/15 bg-black/80 px-4 backdrop-blur-xl lg:hidden">
                    <Link to="/" className="flex items-center gap-2 text-sm font-bold text-white hover:text-gray-300">
                        <ArrowLeft size={18} />
                        Back
                    </Link>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="rounded-lg p-2 transition hover:bg-white/10">
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile overlay */}
                {sidebarOpen && (
                    <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-30 mt-16 bg-black/50 backdrop-blur-sm lg:hidden" />
                )}

                {/* Sidebar */}
                <aside className={`fixed left-0 top-16 z-40 flex h-[calc(100vh-4rem)] w-64 flex-col justify-between overflow-y-auto border-r border-white/15 bg-black/95 px-4 pb-8 pt-4 backdrop-blur-xl transition-transform duration-300 lg:relative lg:top-0 lg:z-auto lg:h-full lg:w-72 lg:translate-x-0 lg:overflow-y-hidden lg:bg-white/5 lg:px-8 lg:pt-8 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
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
                        onClick={() => console.log("logout")}
                        className="flex w-full cursor-pointer items-center gap-3 rounded-lg border-none bg-transparent px-4 py-3 text-left text-sm font-medium text-gray-500 transition-colors hover:bg-white/5 hover:text-red-400"
                    >
                        <LogOut size={18} />
                        Log out
                    </button>
                </aside>

                {/* Main */}
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