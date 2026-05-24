import React from "react";

type Props = {
  onClick: () => void;
};

export default function ClearFiltersButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white hover:bg-white/10"
    >
      Limpar Filtros
    </button>
  );
}
