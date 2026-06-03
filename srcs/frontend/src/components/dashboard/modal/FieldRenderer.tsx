import { getFieldLabel, imageFields, choiceFields, resolveMediaUrl } from "../../../utils/dashboard";

type FieldRendererProps = {
    field: string;
    value: unknown;
    initialValue?: unknown;
    onChange: (field: string, value: unknown) => void;
    error?: string;
};

const inputClass = (border: string) =>
    `w-full rounded-lg border ${border} bg-black px-3 py-2 text-white placeholder-gray-500 outline-none focus:border-white/30 [color-scheme:dark]`;

function ClearButton({ onClear }: { onClear: () => void }) {
    return (
        <button
            type="button"
            onClick={onClear}
            className="shrink-0 px-3 py-2 rounded-lg border border-white/10 bg-black text-white/40 hover:text-white hover:border-white/30 text-xs transition-colors"
        >
            ✕
        </button>
    );
}

const FieldRenderer = ({
    field,
    value,
    initialValue,
    onChange,
    error,
}: FieldRendererProps) => {
    const label = getFieldLabel(field);
    const border = error ? "border-red-500/60" : "border-white/10";
    const err = error ? <p className="mt-1 text-xs text-red-400">{error}</p> : null;

    // Image / file upload
    if (imageFields.has(field)) {
        const existingUrl = typeof initialValue === "string" && initialValue
            ? resolveMediaUrl(initialValue) : null;
        const previewUrl = value instanceof File
            ? URL.createObjectURL(value as File) : existingUrl;
        return (
            <label className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                {previewUrl && (
                    <img src={previewUrl} alt="preview"
                        className="mb-2 h-24 w-auto rounded-lg object-cover border border-white/10" />
                )}
                <input type="file" accept="image/*"
                    onChange={(e) => onChange(field, e.target.files?.[0] ?? null)}
                    className="w-full text-sm text-gray-400 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-white hover:file:bg-white/20"
                />
                {existingUrl && !(value instanceof File) && (
                    <p className="mt-1 text-xs text-gray-500">Nenhuma imagem nova — a atual mantém-se</p>
                )}
                {err}
            </label>
        );
    }

    // Datetime fields
    if (field === "start_datetime" || field === "end_datetime") {
        const inputValue = typeof value === "string" ? value.slice(0, 16) : "";
        return (
            <div className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                <div className="flex gap-2">
                    <input type="datetime-local" value={inputValue}
                        onChange={(e) => onChange(field, e.target.value)}
                        className={`${inputClass(border)} flex-1`} />
                    {inputValue && <ClearButton onClear={() => onChange(field, "")} />}
                </div>
                {err}
            </div>
        );
    }

    // Date-only fields
    if (field === "date" || field.endsWith("_date")) {
        const dateValue = String(value ?? "");
        return (
            <div className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                <div className="flex gap-2">
                    <input type="date" value={dateValue}
                        onChange={(e) => onChange(field, e.target.value)}
                        className={`${inputClass(border)} flex-1`} />
                    {dateValue && <ClearButton onClear={() => onChange(field, "")} />}
                </div>
                {err}
            </div>
        );
    }

    // Integer fields
    const intFields = new Set(["max_participants", "duration_minutes", "capacity", "max_candidates"]);
    if (intFields.has(field)) {
        return (
            <label className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                <input type="number" min={0}
                    value={value === null || value === undefined ? "" : String(value)}
                    onChange={(e) => onChange(field, e.target.value === "" ? null : parseInt(e.target.value, 10))}
                    className={inputClass(border)} />
                {err}
            </label>
        );
    }

    // Long-text fields
    const longTextFields = new Set(["description", "main_description", "lineup", "materials_required", "featured_projects", "synopsis", "artists"]);
    if (longTextFields.has(field)) {
        return (
            <label className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                <textarea rows={3} value={String(value ?? "")}
                    onChange={(e) => onChange(field, e.target.value)}
                    className={`w-full resize-none rounded-lg border ${border} bg-black px-3 py-2 text-white placeholder-gray-500 outline-none focus:border-white/30`} />
                {err}
            </label>
        );
    }

    // Boolean — by name convention (is_*) or type detection
    const isBoolean = field.startsWith("is_") || field === "registration_required" || typeof (initialValue ?? value) === "boolean";
    if (isBoolean) {
        return (
            <div className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={Boolean(value)}
                        onChange={(e) => onChange(field, e.target.checked)}
                        className="h-4 w-4 rounded border border-white/20 bg-black" />
                </label>
                {err}
            </div>
        );
    }

    // Choice / select fields
    if (choiceFields[field]) {
        return (
            <label className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                <select value={String(value ?? "")}
                    onChange={(e) => onChange(field, e.target.value)}
                    className={inputClass(border)}>
                    <option value="">— Selecionar —</option>
                    {choiceFields[field].map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                {err}
            </label>
        );
    }

    // Default text input
    return (
        <label className="block text-sm">
            <span className="mb-1 block text-gray-300">{label}</span>
            <input type="text" value={String(value ?? "")}
                onChange={(e) => onChange(field, e.target.value)}
                className={inputClass(border)} />
            {err}
        </label>
    );
};

export default FieldRenderer;
