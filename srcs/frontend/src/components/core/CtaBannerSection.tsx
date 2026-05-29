import type { ReactNode } from 'react'

interface CtaBannerSectionProps {
  headline: ReactNode
  subtext?: ReactNode
  alignRight?: boolean
  rightSlot?: ReactNode
}

const CtaBannerSection = ({ headline, subtext, alignRight, rightSlot }: CtaBannerSectionProps) => (
  <section className={`relative overflow-hidden ${alignRight ? 'pr-8 xl:pr-20' : 'pl-8 xl:pl-20'} py-20`}>
    <div className="relative z-10 border border-white/10 bg-white/5 rounded-sm px-10 py-12 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
      <div className="flex-1">
        <h2
          className="font-black uppercase leading-none tracking-tight text-white"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
        >
          {headline}
        </h2>
        {subtext && <div className="mt-4">{subtext}</div>}
      </div>
      {rightSlot}
    </div>
  </section>
)

export default CtaBannerSection
