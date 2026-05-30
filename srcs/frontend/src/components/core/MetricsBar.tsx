import type { ReactNode } from 'react'

interface MetricItem {
  icon: ReactNode
  value?: string
  label: string
  desc: string
}

interface MetricsBarProps {
  metrics: MetricItem[]
  cols?: 3 | 4
}

const MetricsBar = ({ metrics, cols = 4 }: MetricsBarProps) => (
  <section className="border-t border-b border-white/10 bg-white/5 px-8 xl:px-20 py-10">
    <div className={`grid grid-cols-1 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'} gap-24 ml-12 mr-12`}>
      {metrics.map((m, i) => (
        <div key={i} className="flex flex-col gap-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="text-[#c8ff00] opacity-70">{m.icon}</div>
            {m.value && <p className="text-4xl font-black leading-none text-white">{m.value}</p>}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#c8ff00] mb-1">{m.label}</p>
          <p className="text-xs text-white/40 leading-relaxed mt-2">{m.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default MetricsBar
