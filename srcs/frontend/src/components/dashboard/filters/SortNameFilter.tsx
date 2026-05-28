
type Props = {
  value: "asc" | "desc";
  onChange: (v: "asc" | "desc") => void;
};

export default function SortNameFilter({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value as "asc" | "desc")}
      className="rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white"
    >
      <option value="asc">Nome A-Z</option>
      <option value="desc">Nome Z-A</option>
    </select>
  );
}
