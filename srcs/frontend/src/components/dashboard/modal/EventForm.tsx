import { useEffect, useMemo, useState } from "react";
import type React from "react";
import { Eye, Pencil } from "lucide-react";
import { hiddenFields, imageFields } from "../../../utils/dashboard";
import FieldRenderer from "./FieldRenderer";

type EventFormProps = {
    open: boolean;
    onClose: () => void;
    onSave: (data: Record<string, unknown>) => Promise<void>;
    initial?: Record<string, unknown>;
    fields?: string[];
    title?: string;
    renderPreview?: (data: Record<string, unknown>) => React.ReactNode;
};

const EventForm = ({
    open,
    onClose,
    onSave,
    initial,
    fields = [],
    title,
    renderPreview,
}: EventFormProps) => {
    const [formData, setFormData] = useState<Record<string, unknown>>({});
    const [saving, setSaving] = useState(false);
    const [previewing, setPreviewing] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

    const formFields = useMemo(() => {
        if (fields.length > 0) {
            return fields.filter((field) => !hiddenFields.has(field));
        }

        if (initial) {
            return Object.keys(initial).filter(
                (field) => !hiddenFields.has(field)
            );
        }

        return [];
    }, [fields, initial]);

    useEffect(() => {
        const nextData: Record<string, unknown> = {};

        const boolField = (f: string) => f.startsWith("is_") || f === "registration_required";
        for (const field of formFields) {
            if (imageFields.has(field)) nextData[field] = null;
            else if (boolField(field)) nextData[field] = initial?.[field] ?? false;
            else nextData[field] = initial?.[field] ?? "";
        }

        setFormData(nextData);
        setPreviewing(false);
        setFieldErrors({});
    }, [initial, formFields, open]);

    if (!open) return null;

    const updateField = (key: string, value: unknown) => {
        setFieldErrors((prev) => { const e = { ...prev }; delete e[key]; return e; });
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async () => {
        setSaving(true);

        try {
            const intFields = new Set(["max_participants", "duration_minutes", "capacity", "max_candidates"]);
            const dataToSend = Object.fromEntries(
                Object.entries(formData)
                    .filter(([k, v]) => !(imageFields.has(k) && v === null))
                    .map(([k, v]) => {
                        if ((k.endsWith("_datetime") || k.endsWith("_date") || k === "date") && v === "") return [k, null];
                        if (intFields.has(k)) { const n = parseInt(v as string, 10); return [k, isNaN(n) ? null : n]; }
                        if ((k.endsWith("_link") || k.endsWith("_social") || k.endsWith("_url")) && v === "") return [k, null];
                        return [k, v];
                    })
            );
            await onSave(dataToSend);
            onClose();
        } catch (err) {
            if (err && typeof err === "object" && !("message" in err)) {
                setFieldErrors(err as Record<string, string[]>);
            }
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
            <div className={`w-full rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl transition-[max-width] duration-300 ${previewing ? 'max-w-4xl' : 'max-w-lg'}`}>
                {/* Header */}
                <div className="mb-4 flex items-center justify-between gap-4">
                    <h2 className="text-lg font-bold leading-tight">
                        {title ?? (initial ? "Editar Evento" : "Adicionar Evento")}
                    </h2>
                    {renderPreview && (
                        <div className="flex shrink-0 items-center gap-1 rounded-lg border border-white/10 p-0.5">
                            <button
                                onClick={() => setPreviewing(false)}
                                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                                    !previewing
                                        ? "bg-white/10 text-white"
                                        : "text-gray-500 hover:text-gray-300"
                                }`}
                            >
                                <Pencil size={11} />
                                Editar
                            </button>
                            <button
                                onClick={() => setPreviewing(true)}
                                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                                    previewing
                                        ? "bg-white/10 text-white"
                                        : "text-gray-500 hover:text-gray-300"
                                }`}
                            >
                                <Eye size={11} />
                                Preview
                            </button>
                        </div>
                    )}
                </div>

                {previewing && renderPreview ? (
                    renderPreview(formData)
                ) : formFields.length === 0 ? (
                    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-400">
                        No editable fields available.
                    </div>
                ) : (
                    <div className="max-h-[55vh] space-y-3 overflow-y-auto pr-1">
                        {formFields.map((field) => {
                            if (field === 'category_other' && formData['category'] !== 'OUTROS') return null;
                            return (
                                <FieldRenderer
                                    key={field}
                                    field={field}
                                    value={formData[field]}
                                    initialValue={initial?.[field]}
                                    onChange={updateField}
                                    error={fieldErrors[field]?.[0]}
                                />
                            );
                        })}
                    </div>
                )}

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 hover:bg-white/5"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={saving}
                        className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {saving ? "A guardar..." : "Salvar"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventForm;