import { getFieldLabel } from "../../../utils/dashboard";

type FieldRendererProps = {
    field: string;
    value: unknown;
    initialValue?: unknown;
    onChange: (field: string, value: unknown) => void;
};

const FieldRenderer = ({
    field,
    value,
    initialValue,
    onChange,
}: FieldRendererProps) => {
    const label = getFieldLabel(field);
    // Special case: is_active checkbox
    if (field === "is_active") {
        return (
            <label className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                <input
                    type="checkbox"
                    checked={Boolean(value)}
                    onChange={(e) => onChange(field, e.target.checked)}
                    className="h-4 w-4 rounded border border-white/20 bg-black"
                />
            </label>
        );
    }

    // Special case: datetime fields
    if (field === "start_datetime" || field === "end_datetime") {
        let inputValue = "";

        if (value) {
            const date = new Date(value as string);

            if (!isNaN(date.getTime())) {
                inputValue = date.toISOString().slice(0, 16);
            }
        }

        return (
            <label className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                <input
                    type="datetime-local"
                    value={inputValue}
                    onChange={(e) => onChange(field, e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-black px-3 py-2 text-white placeholder-gray-500 outline-none focus:border-white/30"
                />
            </label>
        );
    }

    // Automatic boolean detection
    const isBoolean = typeof (initialValue ?? value) === "boolean";

    if (isBoolean) {
        return (
            <label className="block text-sm">
                <span className="mb-1 block text-gray-300">{label}</span>
                <input
                    type="checkbox"
                    checked={Boolean(value)}
                    onChange={(e) => onChange(field, e.target.checked)}
                    className="h-4 w-4 rounded border border-white/20 bg-black"
                />
            </label>
        );
    }

    // Default text input
    return (
        <label className="block text-sm">
            <span className="mb-1 block text-gray-300">{label}</span>
            <input
                type="text"
                value={String(value ?? "")}
                onChange={(e) => onChange(field, e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-black px-3 py-2 text-white placeholder-gray-500 outline-none focus:border-white/30"
            />
        </label>
    );
};

export default FieldRenderer;