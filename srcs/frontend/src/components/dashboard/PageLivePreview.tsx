import { useState } from "react";
import { Monitor, Smartphone } from "lucide-react";

interface PageLivePreviewProps {
    url: string;
}

export default function PageLivePreview({ url }: PageLivePreviewProps) {
    const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
    const src = url
        ? `${window.location.origin}${url.startsWith("/") ? url : `/${url}`}`
        : window.location.origin;

    return (
        <div className="overflow-hidden rounded-xl border border-white/10">
            {/* Fake browser chrome */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-3 py-2">
                <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="flex-1 rounded bg-black/40 px-3 py-0.5 text-center font-mono text-[11px] text-gray-400">
                    {src}
                </span>
                {/* Viewport toggle */}
                <div className="flex items-center gap-0.5 rounded-md border border-white/10 p-0.5">
                    <button
                        onClick={() => setViewMode("desktop")}
                        title="Desktop"
                        className={`rounded p-1 transition-colors ${
                            viewMode === "desktop"
                                ? "bg-white/10 text-white"
                                : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                        <Monitor size={13} />
                    </button>
                    <button
                        onClick={() => setViewMode("mobile")}
                        title="Mobile"
                        className={`rounded p-1 transition-colors ${
                            viewMode === "mobile"
                                ? "bg-white/10 text-white"
                                : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                        <Smartphone size={13} />
                    </button>
                </div>
            </div>

            {viewMode === "desktop" ? (
                <iframe
                    src={src}
                    title="Page preview"
                    className="h-[450px] w-full"
                    sandbox="allow-scripts allow-same-origin"
                />
            ) : (
                <div
                    className="flex justify-center overflow-y-auto bg-[#0a0a0a] p-6"
                    style={{ maxHeight: 520 }}
                >
                    <iframe
                        src={src}
                        title="Page preview"
                        width={390}
                        height={700}
                        className="rounded-[2rem] border-[6px] border-gray-700 shadow-2xl"
                        sandbox="allow-scripts allow-same-origin"
                    />
                </div>
            )}
        </div>
    );
}
