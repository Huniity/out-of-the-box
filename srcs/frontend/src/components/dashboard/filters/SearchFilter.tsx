import React from "react";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SearchFilter({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Pesquisar eventos..."
      className="flex-1 min-w-[220px] rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-white/30"
    />
  );
}
