

import { getFieldLabel, hiddenFields } from "../../../utils/dashboard";

type EventViewProps = {
    row: Record<string, unknown>;
    onClose: () => void;
    formatValue: (value: unknown) => string;
};

const EventView = ({ row, onClose, formatValue }: EventViewProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl">
                <h2 className="mb-4 text-lg font-bold">Detalhes</h2>

                <dl className="space-y-2">
                    {Object.entries(row)
                        .filter(([key]) => !hiddenFields.has(key))
                        .map(([key, value]) => (
                            <div key={key} className="flex gap-3 text-sm">
                                <dt className="w-32 shrink-0 text-gray-500">
                                    {getFieldLabel(key)}
                                </dt>
                                <dd className="text-gray-200">
                                    {formatValue(value)}
                                </dd>
                            </div>
                        ))}
                </dl>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 hover:bg-white/5"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventView;