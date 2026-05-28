
import { getFieldLabel, hiddenFields, imageFields, resolveMediaUrl } from "../../../utils/dashboard";

type EventViewProps = {
    row: Record<string, unknown>;
    onClose: () => void;
    formatValue: (value: unknown) => string;
};

const EventView = ({ row, onClose, formatValue }: EventViewProps) => {
    const imageEntries = Object.entries(row).filter(
        ([key, value]) => imageFields.has(key) && typeof value === 'string' && value
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl">
                <h2 className="mb-4 text-lg font-bold">Detalhes</h2>

                {imageEntries.length > 0 && (
                    <div className="mb-4 flex gap-3">
                        {imageEntries.map(([key, value]) => (
                            <div key={key} className="flex flex-col gap-1">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                                    {getFieldLabel(key)}
                                </span>
                                <img
                                    src={resolveMediaUrl(value as string)}
                                    alt={getFieldLabel(key)}
                                    className="h-24 w-auto rounded-lg object-cover border border-white/10"
                                />
                            </div>
                        ))}
                    </div>
                )}

                <dl className="max-h-[55vh] space-y-2 overflow-y-auto pr-1">
                    {Object.entries(row)
                        .filter(([key]) => !hiddenFields.has(key) && !imageFields.has(key))
                        .map(([key, value]) => (
                            <div key={key} className="flex gap-3 text-sm">
                                <dt className="w-32 shrink-0 text-gray-500">
                                    {getFieldLabel(key)}
                                </dt>
                                <dd className="text-gray-200 break-all">
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