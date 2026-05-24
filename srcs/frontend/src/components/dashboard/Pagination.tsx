

import type { PaginationProps } from "../../types/dashboard";


const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    if (totalPages <= 1) return null;

    return (
        <div className="mt-4 flex items-center justify-center gap-2">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="rounded px-3 py-1 text-sm border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10"
            >
                ← Anterior
            </button>

            <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
                            currentPage === page
                                ? "bg-[#c8ff00] text-black"
                                : "border border-white/20 text-white hover:bg-white/10"
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="rounded px-3 py-1 text-sm border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10"
            >
                Próxima →
            </button>

            <span className="ml-4 text-sm text-gray-400">
                Página {currentPage} de {totalPages}
            </span>
        </div>
    );
};

export default Pagination;
