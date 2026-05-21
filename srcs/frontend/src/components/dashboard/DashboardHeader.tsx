

import React from "react";

import logo_etic from "../../assets/Asset5.svg";

interface User {
  firstName: string;
  lastName: string;
  role: string;
}

export default function DashboardHeader({ user }: { user: User }) {
    return (
        <header className="hidden lg:flex fixed top-0 left-0 right-0 h-16 z-50 items-center justify-between px-6 border-b border-white/10 bg-[#0A0A0A] text-white overflow-hidden">
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-30">
                    <img src={logo_etic} alt="Logo" width={100} height={100} />
                </div>
                <div className="h-8 w-[1px] bg-white/15" />
                <div className="flex flex-col justify-center">
                    <span className="text-xs font-black tracking-tighter leading-none uppercase">Out Of</span>
                    <span className="text-xs font-black tracking-tighter leading-none uppercase">The Box</span>
                </div>
                <div className="h-8 w-[1px] bg-white/15" />
                <div className="flex flex-col justify-center">
                    <span className="text-[11px] font-bold tracking-wide text-[#CCFF00] uppercase leading-tight">Backoffice</span>
                    <span className="text-[9px] font-medium tracking-widest text-white/40 uppercase leading-none">Administração</span>
                </div>
            </div>

            <div className="flex items-center gap-2 cursor-pointer group select-none">
                <div className="flex flex-col text-right">
                    <span className="text-xs font-bold text-white/90 group-hover:text-white transition-colors leading-tight">
                        {user.firstName} {user.lastName}
                    </span>
                    <span className="text-[10px] font-medium text-white/40 leading-none">
                        {user.role}
                    </span>
                </div>
            </div>
        </header>
    );
}
