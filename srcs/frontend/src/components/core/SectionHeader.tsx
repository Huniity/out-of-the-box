import type { ReactNode } from 'react'

interface SectionHeaderProps {
  label: string
  title: ReactNode
  accent?: string
  className?: string
}

const SectionHeader = ({ label, title, accent = '#c8ff00', className }: SectionHeaderProps) => (
  <div className={className}>
    <div className="mb-3 flex items-center gap-2">
      <span className="text-lg leading-none" style={{ color: accent }}>✦</span>
      <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">{label}</span>
    </div>
    <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
      {title}
    </h2>
  </div>
)

export default SectionHeader
