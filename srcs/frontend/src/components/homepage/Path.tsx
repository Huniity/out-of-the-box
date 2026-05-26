'use client'

import doodlePink from '../../assets/d_p.webp'
import doodlePurple from '../../assets/d_pu.webp'
import doodleBlue from '../../assets/d_blu.webp'
import doodleGreen from '../../assets/d_g.webp'
import doodleBlack from '../../assets/d_b.webp'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import BushImage from '../../assets/bush.webp'

import polaroidExposicoes   from '../../assets/polaroid_exposicoes.webp'
import polaroidSunsetTalks    from '../../assets/polaroid_sunset-talks.webp'
import polaroidWorkshops    from '../../assets/polaroid_workshops.webp'
import polaroidCinema       from '../../assets/polaroid_cinema.webp'
import polaroidConcertos    from '../../assets/polaroid_concertos.webp'
import polaroidSpeedHunting from '../../assets/polaroid_speedhunting.webp'
import polaroidSemanaLabia  from '../../assets/polaroid_semanalabias.webp'


const areas = [
  { num: '01', name: 'Exposições',    desc: 'Design, Fotografia e Videógrafos',           slug: 'exposicoes',    rotate: -3,   side: 'right', polaroid: polaroidExposicoes   },
  { num: '02', name: 'Sunset Talks',  desc: 'Conversas com convidados e oradores',         slug: 'sunset-talks',     rotate:  2.5, side: 'left',  polaroid: polaroidSunsetTalks    },
  { num: '03', name: 'Workshops',     desc: 'Sessões práticas em várias áreas formativas', slug: 'workshops',     rotate: -2,   side: 'right', polaroid: polaroidWorkshops    },
  { num: '04', name: 'Cinema',        desc: 'Projetos finais de Realização, Cinema e TV',  slug: 'cinema',     rotate:  3.5, side: 'left',  polaroid: polaroidCinema       },
  { num: '05', name: 'Concertos',     desc: 'Live in Sight e atuações de alunos',          slug: 'concertos',     rotate: -2.5, side: 'right', polaroid: polaroidConcertos    },
  { num: '06', name: 'Speed Hunting', desc: 'Encontros entre empresas e alunos',           slug: 'speed-hunting', rotate:  2,   side: 'left',  polaroid: polaroidSpeedHunting },
  { num: '07', name: 'Semana Lábia',  desc: 'Projetos da Semana Lábia 2026',               slug: 'area-especial', rotate: -3,   side: 'right', polaroid: polaroidSemanaLabia  },
]

function buildZigzagPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return ''
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1]
    const midY = (a.y + b.y) / 2
    // tight S-curve: hangs vertical at each end, crosses hard in the middle
    d += ` C ${a.x} ${midY + (b.y - a.y) * 0.05}, ${b.x} ${midY - (b.y - a.y) * 0.05}, ${b.x} ${b.y}`
  }
  return d
}

export default function AreasWall() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const svgRef     = useRef<SVGSVGElement>(null)
  const cardRefs   = useRef<(HTMLAnchorElement | null)[]>([])

  const [svgData, setSvgData] = useState<{
    path: string
    w: number
    h: number
    points: { x: number; y: number }[]
  } | null>(null)

  // ── Scroll progress ──────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 55%', 'end 45%'],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  // pathLength 0→1 drives the solid mask that progressively uncovers the dashed line
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1])

  // ── Geometry ─────────────────────────────────────────────────────────────────
  const compute = useCallback(() => {
    const svgEl = svgRef.current
    if (!svgEl) return
    const svgR = svgEl.getBoundingClientRect()

    const points = cardRefs.current.map((el, i) => {
      if (!el) return { x: svgR.width / 2, y: 0 }
      const cr = el.getBoundingClientRect()
      return {
        // anchor at the inner edge so the path reaches toward the centre
        x: areas[i].side === 'right'
          ? cr.right - svgR.left - 20
          : cr.left  - svgR.left + 20,
        y: cr.top - svgR.top + cr.height / 2,
      }
    })

    setSvgData({
      path: buildZigzagPath(points),
      w: svgR.width,
      h: svgR.height,
      points,
    })
  }, [])

  useEffect(() => {
    const t = setTimeout(compute, 80)
    window.addEventListener('resize', compute)
    return () => { clearTimeout(t); window.removeEventListener('resize', compute) }
  }, [compute])

  return (
    <section ref={sectionRef} className="px-8 xl:px-20 py-16 overflow-hidden relative bg-white/5">
      {/* Top fade — transparent → black */}
      {/* <div className="absolute inset-x-0 top-0 h-32 pointer-events-none z-50" style={{ background: 'linear-gradient(to bottom, black, transparent)' }} /> */}
                  <img
                    src={doodleBlue}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '5%',
                        left: '80%',
                        width: '25%',
                        pointerEvents: 'none',
                        zIndex: 0,
                        opacity: 0.75,
                        userSelect: 'none',
                    }}
        />
        <img
                    src={doodlePurple}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '75%',
                        left: '15%',
                        width: '12%',
                        pointerEvents: 'none',
                        zIndex: 0,
                        userSelect: 'none',
                        transform: 'rotate(40deg)',
                    }}
        />
                <img
                    src={doodlePink}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '90%',
                        width: '15%',
                        pointerEvents: 'none',
                        zIndex: 0,
                        userSelect: 'none',
                        transform: 'rotate(270deg)',
                    }}
        />
                    <img
                    src={doodleGreen}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '90%',
                        left: '85%',
                        width: '15%',
                        pointerEvents: 'none',
                        zIndex: 0,
                        userSelect: 'none',
                        transform: 'rotate(120deg)',
                    }}
        />
        <img
                    src={doodleBlack}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '39%',
                        left: '15%',
                        width: '20%',
                        pointerEvents: 'none',
                        zIndex: 0,
                        userSelect: 'none',
                        transform: 'rotate(20deg)',
                    }}
        />
      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <div className="max-w-8xl mx-[10%] auto">
        <div className="flex justify-between items-start mb-12 gap-6 text-left">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#c8ff00] text-lg">✦</span>
              <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                The Wall · What's Happening 
              </span>
            </div>
            <h2 className="font-black text-4xl xl:text-5xl uppercase leading-none tracking-tight">
              <span className="text-white">O que é o</span><span className="text-[#c8ff00]"> OUT OF THE BOX</span>
            </h2>
            <p className="max-w-sm text-xs leading-relaxed text-white/40">
              O Out of the Box é um evento anual que celebra a criatividade e o talento dos alunos da ETIC_Algarve, reunindo exposições, palestras, workshops, projeções vídeo, concertos e muito mais.
            </p>
          </div>
        </div>

        {/* ── Board ────────────────────────────────────────────────────────────── */}
        <div className="relative isolate">

          {/* SVG — always mounted so ref is available for measurement */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full pointer-events-none z-"
            style={{ height: svgData?.h ?? '100%' }}
            viewBox={svgData ? `0 0 ${svgData.w} ${svgData.h}` : '0 0 800 1400'}
            overflow="visible"
          >
            {svgData && (
              <>
                <defs>
                  {/* Mask that progressively uncovers the dashed line on scroll */}
                  <mask id="trailRevealMask">
                    <motion.path
                      
                      d={svgData.path}
                      fill="none"
                      stroke="white"
                      strokeWidth="28"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength={1}
                      style={{ pathLength }}
                    />
                  </mask>
                </defs>

                {/* Ghost — always visible, very dim */}
                <path
                  d={svgData.path}
                  fill="none"
                  stroke="rgba(198,220,128,0.08)"
                  strokeWidth="5"
                  strokeDasharray="38 32"
                  strokeLinecap="butt"
                />

                {/* Dashed line — unmasked progressively by scroll */}
                <path
                  d={svgData.path}
                  fill="none"
                  stroke="#c8ff00"
                  strokeWidth="15"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  strokeDasharray="38 32"
                  mask="url(#trailRevealMask)"
                />
              </>
            )}
          </svg>

          {/* ── Cards ────────────────────────────────────────────────────────── */}
          <div className="relative z-[10] flex flex-col">
            {areas.map((area, i) => (
              <motion.div
                key={area.slug}
                className={`flex items-center py-8 md:py-10 ${
                  area.side === 'right' ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="relative" style={{ isolation: 'isolate' }}>
                  {/* Bush on the inner border edge */}
                  <img
                    src={BushImage}
                    alt=""
                    aria-hidden
                    className="absolute pointer-events-none z-10 top-1/2 -translate-y-1/2"
                    style={{
                      width: 110,
                      height: 110,
                      objectFit: 'contain',
                      opacity: 1,
                      ...(area.side === 'right'
                        ? { left: '100%', marginLeft: '-28px', transform: `translateY(-50%) rotate(${6 + i * 7}deg) scaleX(-1)` }
                        : { right: '100%', marginRight: '-28px', transform: `translateY(-50%) rotate(${-5 - i * 6}deg)` }
                      ),
                    }}
                  />
                <motion.a
                  href={`/areas/${area.slug}`}
                  ref={el => { cardRefs.current[i] = el }}
                  className="z-20 block relative group"
                  style={{ rotate: area.rotate }}
                  whileHover={{ rotate: 0, scale: 1.06 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* Number badge */}
                  <span
                    className="absolute -top-3 -left-3 z-30 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-black leading-none"
                    style={{ background: '#c8ff00', boxShadow: '0 2px 10px rgba(200,255,0,0.45)' }}
                  >
                    {area.num}
                  </span>

                  <img
                    src={area.polaroid}
                    alt={area.name}
                    draggable={false}
                    className="w-64 md:w-72 lg:w-80 block select-none"
                    style={{ filter: 'drop-shadow(0 8px 28px rgba(0,0,0,0.6))' }}
                  />

                  {/* Description + link below the polaroid */}
                  <div className="mt-2 px-2 flex flex-col gap-0.5">
                    <p className="text-white/45 text-[11px] leading-snug text-center">{area.desc}</p>
                    <span className="flex items-center justify-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#c8ff00]/60 group-hover:text-[#c8ff00] transition-colors duration-200">
                      Ver a Área <ArrowRight size={9} strokeWidth={3} />
                    </span>
                  </div>
                </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
