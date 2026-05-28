
type Props = {
  value: "all" | "active" | "inactive";
  onChange: (v: "all" | "active" | "inactive") => void;
};

export default function IsActiveFilter({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value as "all" | "active" | "inactive")}
      className="rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white"
    >
      <option value="all">Todos</option>
      <option value="active">Ativos</option>
      <option value="inactive">Inativos</option>
    </select>
  );
}
