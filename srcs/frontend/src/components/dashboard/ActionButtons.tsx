


import { Eye, Pencil, Trash } from "lucide-react";

import type { CrudProps } from "../../types/buttons";


const CrudButtons = ({ onView, onEdit, onDelete }: CrudProps) => {
    return (
        <div className="flex items-center justify-end gap-3">
            <button onClick={onView} className="flex items-center gap-1 text-[11px] text-gray-400 transition-colors hover:text-white">
                <Eye size={14} className="shrink-0" />
                <span>Ver</span>
            </button>
            <button onClick={onEdit} className="flex items-center gap-1 text-[11px] text-gray-400 transition-colors hover:text-white">
                <Pencil size={14} className="shrink-0" />
                <span>Editar</span>
            </button>
            <button onClick={onDelete} className="flex items-center gap-1 text-[11px] text-red-400 transition-colors hover:text-red-300">
                <Trash size={14} className="shrink-0" />
                <span>Eliminar</span>
            </button>
        </div>
    );
}

export default CrudButtons;