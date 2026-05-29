import { RefreshCw } from 'lucide-react'

interface FilterBoxProps {
  categories: string[]
  active: string
  onChange: (cat: string) => void
  labelMap?: Record<string, string>
  spanFirstFull?: boolean
}

const FilterBox = ({ categories, active, onChange, labelMap, spanFirstFull }: FilterBoxProps) => (
  <div className="bg-[#0d0d0d] border border-white/10 rounded-sm p-5">
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-sm border transition-colors duration-200 ${
            spanFirstFull && cat === 'TODAS' ? 'col-span-2 sm:col-auto' : ''
          } ${
            active === cat
              ? 'bg-[#c8ff00] border-[#c8ff00] text-black'
              : 'bg-transparent border-white/20 text-white/50 hover:border-white/40 hover:text-white'
          }`}
        >
          {cat === 'TODAS' ? 'TODAS' : (labelMap?.[cat] ?? cat)}
        </button>
      ))}
    </div>
    <div className="flex justify-center mt-3">
      <button
        onClick={() => onChange('TODAS')}
        className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#c8ff00] hover:opacity-70 transition-opacity"
      >
        <RefreshCw size={13} /> Limpar Filtros
      </button>
    </div>
  </div>
)

export default FilterBox
