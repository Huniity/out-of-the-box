import { Link } from "react-router-dom";
import { Menu, X, ArrowLeft } from "lucide-react";
import React from "react";

interface MobileTopbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function MobileTopbar({ sidebarOpen, setSidebarOpen }: MobileTopbarProps) {
  return (
    <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-white/15 bg-black/80 px-4 backdrop-blur-xl lg:hidden">
      <Link to="/" className="flex items-center gap-2 text-sm font-bold text-white hover:text-gray-300">
        <ArrowLeft size={18} />
        Back
      </Link>
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="rounded-lg p-2 transition hover:bg-white/10">
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
}
