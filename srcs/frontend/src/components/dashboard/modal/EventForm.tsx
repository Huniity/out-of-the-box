import { useEffect, useMemo, useState } from "react";
import { hiddenFields } from "../../../utils/dashboard";
import FieldRenderer from "./FieldRenderer";

type EventFormProps = {
    open: boolean;
    onClose: () => void;
    onSave: (data: Record<string, unknown>) => Promise<void>;
    initial?: Record<string, unknown>;
    fields?: string[];
};

const EventForm = ({
    open,
    onClose,
    onSave,
    initial,
    fields = [],
}: EventFormProps) => {
    const [formData, setFormData] = useState<Record<string, unknown>>({});
    const [saving, setSaving] = useState(false);

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

        for (const field of formFields) {
            nextData[field] = initial?.[field] ?? "";
        }

        setFormData(nextData);
    }, [initial, formFields, open]);

    if (!open) return null;

    const updateField = (key: string, value: unknown) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = async () => {
        setSaving(true);

        try {
            await onSave(formData);
            onClose();
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl">
                <h2 className="mb-4 text-lg font-bold">
                    {initial ? "Editar Evento" : "Adicionar Evento"}
                </h2>

                {formFields.length === 0 ? (
                    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-400">
                        No editable fields available.
                    </div>
                ) : (
                    <div className="max-h-[55vh] space-y-3 overflow-y-auto pr-1">
                        {formFields.map((field) => (
                            <FieldRenderer
                                key={field}
                                field={field}
                                value={formData[field]}
                                initialValue={initial?.[field]}
                                onChange={updateField}
                            />
                        ))}
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