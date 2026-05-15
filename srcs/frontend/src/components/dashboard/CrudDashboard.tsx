

import CrudButtons from "./ActionButtons";
import { getFieldLabel } from "../../utils/dashboard";

type Props = {
    rows: Record<string, unknown>[];
    columns: string[];
    onView: (row: Record<string, unknown>) => void;
    onEdit: (row: Record<string, unknown>) => void;
    onDelete: (row: Record<string, unknown>) => void;
    fmt: (val: unknown) => string;
};

const CrudAction = ({ rows, columns, onView, onEdit, onDelete, fmt }: Props) => {
    return (
        <table className="w-full text-xs">
            <thead>
                <tr className="border-b border-white/10">
                    {columns.map((col) => (
                        <th
                            key={col}
                            className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500"
                        >
                            {getFieldLabel(col)}
                        </th>
                    ))}
                    <th className="px-3 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr
                        key={i}
                        className="border-b border-white/5 last:border-0 transition-colors hover:bg-white/5"
                    >
                        {columns.map((col) => (
                            <td
                                key={col}
                                className="max-w-[180px] truncate whitespace-nowrap px-3 py-2 text-gray-300"
                            >
                                {col === "is_active" ? (
                                    <span
                                        className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                                            row[col]
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-red-500/20 text-red-400"
                                        }`}
                                    >
                                        {row[col] ? "Ativo" : "Inativo"}
                                    </span>
                                ) : (
                                    fmt(row[col])
                                )}
                            </td>
                        ))}
                        <td className="whitespace-nowrap px-3 py-2 text-right">
                            <CrudButtons
                                onView={() => onView(row)}
                                onEdit={() => onEdit(row)}
                                onDelete={() => onDelete(row)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CrudAction;