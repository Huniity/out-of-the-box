
import { Clock, Eye, MapPin, Pencil, Tag, Trash } from "lucide-react";

type Props = {
    rows: Record<string, unknown>[];
    columns: string[];
    onView: (row: Record<string, unknown>) => void;
    onEdit: (row: Record<string, unknown>) => void;
    onDelete: (row: Record<string, unknown>) => void;
    fmt: (val: unknown) => string;
};

// Title-like fields tried in order (first non-empty wins)
const TITLE_FIELDS = ["title", "band_name", "company_name"];

// Description-like fields tried in order
const DESC_FIELDS = ["description", "synopsis", "company_description"];

// Secondary label fields shown as a chip
const CATEGORY_FIELDS = [
    "speaker_name", "band_name", "artist_name", "mentor_name",
    "director_team", "recruiter_name", "speaker_role", "company",
];

const PT_MONTHS = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];

function parseDateTime(raw: unknown) {
    if (!raw) return null;
    const d = new Date(raw as string);
    return isNaN(d.getTime()) ? null : d;
}

function toHHMM(d: Date) {
    return d.toTimeString().slice(0, 5);
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <span className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-gray-400">
            {icon}
            {label}
        </span>
    );
}

function EventCard({
    row,
    onView,
    onEdit,
    onDelete,
}: {
    row: Record<string, unknown>;
    onView: () => void;
    onEdit: () => void;
    onDelete: () => void;
}) {
    const startDt = parseDateTime(row.start_datetime);
    const endDt   = parseDateTime(row.end_datetime);

    const day   = startDt ? startDt.getDate() : null;
    const month = startDt ? PT_MONTHS[startDt.getMonth()] : null;
    const year  = startDt ? startDt.getFullYear() : null;
    const timeRange =
        startDt && endDt
            ? `${toHHMM(startDt)} - ${toHHMM(endDt)}`
            : startDt
            ? toHHMM(startDt)
            : null;

    const titleField = TITLE_FIELDS.find((f) => row[f]);
    const titleValue = titleField ? String(row[titleField]) : "—";

    const descField = DESC_FIELDS.find((f) => row[f]);
    const descValue = descField ? String(row[descField]) : null;

    // Don't show the same value as both title and category chip
    const catField = CATEGORY_FIELDS.find((f) => f !== titleField && row[f]);
    const category = catField ? String(row[catField]) : null;

    return (
        <div className="flex items-center gap-5 border-b border-white/10 px-6 py-5 last:border-0 transition-colors hover:bg-white/[0.02]">
            {/* Date box */}
            {startDt ? (
                <div className="flex w-14 shrink-0 flex-col items-center rounded-lg border border-white/10 bg-white/[0.04] px-2 py-2 text-center">
                    <span className="mb-0.5 text-[9px] font-bold tracking-widest text-[#c8ff00] opacity-50">· · ·</span>
                    <span className="text-2xl font-black leading-none text-[#c8ff00]">{day}</span>
                    <span className="mt-0.5 text-[10px] font-bold uppercase text-gray-400">{month}</span>
                    <span className="text-[10px] text-gray-600">{year}</span>
                </div>
            ) : (
                <div className="w-14 shrink-0" />
            )}

            {/* Content */}
            <div className="min-w-0 flex-1">
                <h3 className="mb-0.5 truncate text-base font-bold text-white">
                    {titleValue}
                </h3>
                {descValue && (
                    <p className="mb-3 truncate text-sm text-gray-400">
                        {descValue}
                    </p>
                )}
                <div className="flex flex-wrap items-center gap-2">
                    {timeRange && <Chip icon={<Clock size={11} />} label={timeRange} />}
                    {row.location != null && row.location !== "" && <Chip icon={<MapPin size={11} />} label={String(row.location)} />}
                    {category && <Chip icon={<Tag size={11} />} label={category} />}
                    <span
                        className={`rounded px-2 py-0.5 text-[11px] font-bold ${
                            row.is_active
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-red-500/20 text-red-400"
                        }`}
                    >
                        {row.is_active ? "Ativo" : "Inativo"}
                    </span>
                    {!!row.is_highlight && (
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-400">
                            Destaque
                        </span>
                    )}

                </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-0.5 border-l border-white/10 pl-5">
                <button
                    onClick={onView}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                    <Eye size={14} /> Ver
                </button>
                <button
                    onClick={onEdit}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                    <Pencil size={14} /> Editar
                </button>
                <button
                    onClick={onDelete}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
                >
                    <Trash size={14} /> Eliminar
                </button>
            </div>
        </div>
    );
}

const CrudAction = ({ rows, onView, onEdit, onDelete }: Props) => {
    return (
        <div className="divide-y-0">
            {rows.map((row, i) => (
                <EventCard
                    key={i}
                    row={row}
                    onView={() => onView(row)}
                    onEdit={() => onEdit(row)}
                    onDelete={() => onDelete(row)}
                />
            ))}
        </div>
    );
};

export default CrudAction;
