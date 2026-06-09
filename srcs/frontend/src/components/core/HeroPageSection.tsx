  import type { ReactNode } from 'react'
  import PageStars from './PageStars'
  import HeroPolaroid from './HeroPolaroid'
  import StaticZigzagPath from './StaticZigzagPath'
  import leaf from '../../assets/doodles/leaf3.webp'

  interface HeroPageSectionProps {
    polaroidSrc?: string
    heroImgSrc: string
    heroImgAlt: string
    children: ReactNode
    noLeaf?: boolean
    zigzag?: {
      steps?: number
      amplitude?: number
      curve?: number
      from?: { x: number; y: number }
      to?: { x: number; y: number }
      strokeWidth?: number
      dashLength?: number
      dashGap?: number
      opacity?: number
    }
  }

  const HeroPageSection = ({ polaroidSrc, heroImgSrc, heroImgAlt, children, noLeaf, zigzag }: HeroPageSectionProps) => {
    const {
      steps = 4,
      amplitude = 20,
      curve = 1.2,
      from = { x: 20, y: 5 },
      to = { x: 80, y: 95 },
      strokeWidth = 4,
      dashLength = 10,
      dashGap = 8,
      opacity = 0.7,
    } = zigzag ?? {}

    return (
      <section className="relative h-[calc(100vh-66px)] min-h-[780px] sm:min-h-[820px] md:min-h-0 flex items-stretch px-8 xl:px-20 overflow-hidden">        {!noLeaf && (
          <img
            src={leaf}
            alt=""
            aria-hidden="true"
            className=" z-0
              leaf-2 absolute pointer-events-none select-none
              w-[65%] right-[60%] top-[95%] -translate-y-1/2 rotate-[8deg]
              sm:w-[65%] sm:left-[110%] sm:top-[70%] sm:rotate-[310deg] sm:z-0
              md:w-[40%] md:right-[78%] md:top-[98%] md:rotate-[310deg] md:z-0
              lg:w-[30%] lg:left-[105%] lg:top-[70%] lg:rotate-[310deg] lg:z-[11]
            "
          />
        )}
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#c8ff00]/10 blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#745ff2]/10 blur-3xl pointer-events-none" />
        <PageStars />

        <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-12 ">
          {polaroidSrc && <HeroPolaroid src={polaroidSrc} />}
          <div className="flex-1 flex flex-col py-8">
            {children}
          </div>
          <div className="hidden lg:block flex-1 relative overflow-hidden lg:min-h-0 -mr-8 xl:-mr-20 ">
            <img src={heroImgSrc} alt={heroImgAlt} className="absolute inset-0 h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <StaticZigzagPath
              from={from}
              to={to}
              steps={steps}
              amplitude={amplitude}
              curve={curve}
              color="#c8ff00"
              strokeWidth={strokeWidth}
              dashed
              dashLength={dashLength}
              dashGap={dashGap}
              opacity={opacity}
            />
          </div>
        </div>
      </section>
    )
  }

  export default HeroPageSection
