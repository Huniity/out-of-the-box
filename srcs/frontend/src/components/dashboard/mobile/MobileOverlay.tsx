import React from "react";

interface MobileOverlayProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function MobileOverlay({ sidebarOpen, setSidebarOpen }: MobileOverlayProps) {
  if (!sidebarOpen) return null;
  return (
    <div
      onClick={() => setSidebarOpen(false)}
      className="fixed inset-0 z-30 mt-16 bg-black/50 backdrop-blur-sm lg:hidden"
    />
  );
}
