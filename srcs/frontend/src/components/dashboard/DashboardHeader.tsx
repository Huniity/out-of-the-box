

import React from "react";

import logo_etic from "../../assets/logo_etic_white.png";

interface User {
  firstName: string;
  lastName: string;
  role: string;
}

export default function DashboardHeader({ user }: { user: User }) {
    return (
        <header className="hidden lg:flex fixed top-0 left-0 right-0 h-16 z-50 items-center justify-between px-6 border-b border-white/10 bg-[#0A0A0A] text-white">
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-9 w-9">
                    <img src={logo_etic} alt="Logo" width={50} height={50} />
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

            <div className="flex-1 max-w-xl mx-8 relative">
                <div className="relative flex items-center">
                    <svg className="absolute left-3 w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Pesquisar Conteúdos..." 
                        className="w-full h-9 bg-white/[0.03] border border-white/10 rounded-lg pl-10 pr-12 text-xs text-white/80 placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                    />
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
