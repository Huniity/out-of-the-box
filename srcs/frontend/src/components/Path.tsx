'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'

import doodleBlue from '../assets/d_b.png'

const areas = [
  { num: '01', name: 'Exposições',      desc: 'Design, Fotografia e Videógrafos',             slug: 'exposicoes',    color: '#f97316', rotate: -1.2, side: 'right' },
  { num: '02', name: 'Palestras',       desc: 'Conversas com convidados e oradores',           slug: 'palestras',     color: '#22c55e', rotate:  0.8, side: 'left'  },
  { num: '03', name: 'Workshops',       desc: 'Sessões práticas em várias áreas formativas',   slug: 'workshops',     color: '#a855f7', rotate: -0.6, side: 'right' },
  { num: '04', name: 'Projeções Vídeo', desc: 'Projetos finais de Realização, Cinema e TV',    slug: 'projecoes',     color: '#3b82f6', rotate:  1.4, side: 'left'  },
  { num: '05', name: 'Concertos',       desc: 'Live in Sight e atuações de alunos',            slug: 'concertos',     color: '#eab308', rotate: -1.0, side: 'right' },
  { num: '06', name: 'Speed Hunting',   desc: 'Encontros entre empresas e alunos',             slug: 'speed-hunting', color: '#ec4899', rotate:  0.5, side: 'left'  },
  { num: '07', name: 'Área Especial',   desc: 'Projetos da Semana Lábia 2026',                 slug: 'area-especial', color: '#14b8a6', rotate: -0.8, side: 'right' },
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
    <section ref={sectionRef} className="bg-black px-8 xl:px-20 py-16 max-w-8xl mx-[10%] auto">
      <img
                src={doodleBlue}
                alt=""
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: '9%',
                    right: '15%',
                    width: '12%',
                    pointerEvents: 'none',
                    zIndex: 1,
                    userSelect: 'none',
                    opacity: 0.7,
                    filter: 'contrast(70%)',
                }}
            />
      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <div className="flex justify-between items-start mb-12 gap-6 text-left">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#c6dc80] text-lg">✦</span>
            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
              The Wall · What's Happening 
            </span>
          </div>
          <h2 className="font-black text-4xl xl:text-5xl uppercase leading-none tracking-tight">
            <span className="text-white">O que é o</span><span className="text-[#c6dc80]"> OUT OF THE BOX</span>
          </h2>
          <p className="max-w-sm text-xs leading-relaxed text-white/40">
            O Out of the Box é um evento anual que celebra a criatividade e o talento dos alunos da ETIC_Algarve, reunindo exposições, palestras, workshops, projeções vídeo, concertos e muito mais.
          </p>
        </div>
      </div>

      {/* ── Board ────────────────────────────────────────────────────────────── */}
      <div className="relative">

        {/* SVG — always mounted so ref is available for measurement */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full pointer-events-none z-0"
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
                strokeWidth="4"
                strokeDasharray="38 32"
                strokeLinecap="butt"
              />

              {/* Dashed line — unmasked progressively by scroll */}
              <path
                d={svgData.path}
                fill="none"
                stroke="#c6dc80"
                strokeWidth="5"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeDasharray="38 32"
                mask="url(#trailRevealMask)"
              />

              {/* Coloured dot at each card anchor */}
              {svgData.points.map((pt, i) => (
                <motion.circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r={6}
                  fill={areas[i].color}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.1, duration: 0.35, type: 'spring' }}
                />
              ))}
            </>
          )}
        </svg>

        {/* ── Cards ────────────────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col">
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
              <a
                href={`/areas/${area.slug}`}
                ref={el => { cardRefs.current[i] = el }}
                className="block relative bg-[#111111] border border-[#2a2a2a] rounded-sm p-5 w-60
                           hover:rotate-0 hover:scale-[1.04] hover:z-20
                           transition-transform duration-300 ease-out group"
                style={{ transform: `rotate(${area.rotate}deg)` }}
              >
                {/* Tape */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 rounded-sm"
                  style={{ background: 'rgba(198,220,128,0.65)' }}
                />

                {/* Colour bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-sm"
                  style={{ background: area.color }}
                />

                <div className="flex justify-between mb-3.5">
                  <span className="text-[11px] font-black text-white/30 tracking-wide">//{area.num}</span>
                  <span className="text-[10px] font-bold text-white/20 tracking-widest">FARO/26</span>
                </div>

                <p className="font-black text-[24px] uppercase text-white leading-none tracking-tight mb-2">
                  {area.name}
                </p>
                <p className="text-[11px] text-white/40 leading-relaxed mb-4">{area.desc}</p>

                <div className="flex justify-between items-center border-t border-white/10 pt-2.5">
                  <span className="flex items-center gap-1.5 text-[10px] font-black text-white/35
                                   uppercase tracking-widest group-hover:text-[#c6dc80] transition-colors">
                    Ver a Área <ArrowRight size={10} strokeWidth={3} />
                  </span>
                  {/* <span className="text-[10px] font-bold text-white/15">/{area.slug}</span> */}
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}