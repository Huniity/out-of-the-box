


import type { CrudProps } from "../../types/buttons";


const CrudButtons = ({ onView, onEdit, onDelete }: CrudProps) => {
    return (
        <div className="flex items-center justify-end gap-3">
            <button onClick={onView} className="text-[11px] text-gray-400 hover:text-white">
                Ver
            </button>
            <button onClick={onEdit} className="text-[11px] text-gray-400 hover:text-white">
                Editar
            </button>
            <button onClick={onDelete} className="text-[11px] text-red-400 hover:text-red-300">
                Eliminar
            </button>
        </div>
    );
}

export default CrudButtons;