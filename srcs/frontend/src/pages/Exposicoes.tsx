import { useState, useRef, useEffect } from 'react'
import { CalendarDays, MapPin, Users, ArrowRight, ChevronDown, RefreshCw, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import Fundo from '../assets/etic_algarve/FUNDO2.webp'
import StaticZigzagPath from '../components/core/StaticZigzagPath'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange, resolveMediaUrl } from '../utils/dashboard'

import { exposicoesAreaColors as areaColors, exposicoesAreaLabels as areaLabels, exposicoesDestaques, exposicoesGalleryImages as galleryImages, exposicoesCriatividade as criatividade, exposicoesGalCardW as GAL_CARD_W } from '../utils/metrics'
import { exposicoesApi } from '../services/api/exposicoes.api'

const AREA_OPTIONS = [
  { value: 'TODAS',  label: 'TODAS' },
  { value: 'DESIGN', label: 'DESIGN' },
  { value: 'FOTO',   label: 'FOTOGRAFIA' },
  { value: 'GAMES',  label: 'VIDEOJOGOS' },
  { value: 'LABIA',  label: 'ESPAÇO LÁBIA' },
]
import PageStars from '../components/core/PageStars'
import polaroid_exposicoes from '../assets/polaroids/polaroid_exposicoes.webp'
import HeroPolaroid from '../components/core/HeroPolaroid'
import leaf from '../assets/doodles/leaf3.webp'


const parseDateBadge = (dateStr: string) => {
  const d = new Date(dateStr)
  return {
    day:   d.getUTCDate(),
    month: d.toLocaleString('pt-PT', { month: 'short', timeZone: 'UTC' }).toUpperCase().replace('.', ''),
  }
}

const Exposicoes = () => {
  const {
    main_white_title,
    main_green_title,
    main_description,
    start_event_date,
    end_event_date,
  } = usePageData('exposicoes')

  const [destaques, setDestaques] = useState(exposicoesDestaques)
  useEffect(() => { exposicoesApi.getExposicoes().then(setDestaques as any) }, [])

  const [activeArea, setActiveArea] = useState('TODAS')

  const [galOffset,  setGalOffset]  = useState(0)
  const [galIndex,   setGalIndex]   = useState(0)
  const [galMax,     setGalMax]     = useState(0)

  const galTrack       = useRef<HTMLDivElement>(null)
  const galBox         = useRef<HTMLDivElement>(null)
  const galTouchStartX = useRef(0)

  useEffect(() => {
    const compute = () => {
      if (galTrack.current && galBox.current)
        setGalMax(Math.max(0, galTrack.current.scrollWidth - galBox.current.clientWidth))
    }
    const t = setTimeout(compute, 80)
    window.addEventListener('resize', compute)
    return () => { clearTimeout(t); window.removeEventListener('resize', compute) }
  }, [])

  const galPageCount  = Math.max(1, Math.floor(galMax / GAL_CARD_W) + 1)
  const galPageOffset = (i: number) => i === galPageCount - 1 ? galMax : i * GAL_CARD_W

  useEffect(() => {
    const clamped = Math.max(0, Math.min(galIndex, galPageCount - 1))
    if (clamped !== galIndex) {
      setGalIndex(clamped)
      setGalOffset(galPageOffset(clamped))
    }
  }, [galMax])

  const shiftGal = (dir: 1 | -1) => {
    const next = Math.max(0, Math.min(galIndex + dir, galPageCount - 1))
    setGalIndex(next)
    setGalOffset(galPageOffset(next))
  }

  const filtered = destaques.filter(d => d.is_active && (activeArea === 'TODAS' || d.area === activeArea))

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative h-[calc(100vh-66px)] flex items-stretch px-8 xl:px-20 overflow-hidden">
        <img
          src={leaf}
          alt=""
          aria-hidden="true"
          className="
            leaf-2 absolute pointer-events-none select-none z-[200]
            w-[65%] right-[60%] top-[95%] -translate-y-1/2 rotate-[8deg]
            sm:w-[65%] sm:left-[110%] sm:top-[70%] sm:rotate-[310deg]
            md:w-[40%] md:right-[78%] md:top-[98%] md:rotate-[5deg]
            lg:w-[30%] lg:left-[105%] lg:top-[70%] lg:rotate-[310deg]
          "
        />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#c8ff00]/10 blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#745ff2]/10 blur-3xl pointer-events-none" />
        <PageStars />
        <HeroPolaroid src={polaroid_exposicoes} />

        <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-12">
          <div className="flex-1 flex flex-col py-8">
            <h1 className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
              {main_white_title}{' '}
              <span className="text-[#c8ff00]">{main_green_title}</span>
            </h1>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">{main_description}</p>
            <div className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
              <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> {formatEventDateRange(start_event_date, end_event_date)}</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
              <span className="flex items-center gap-1.5"><Users size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="#destaques">
                Ver Exposições <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </PrimaryButton>
              <SecondaryButton href="#sobre">
                Sobre a Área <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
              </SecondaryButton>
            </div>
          </div>

          <div className="hidden lg:block flex-1 relative overflow-hidden lg:min-h-0 -mr-8 xl:-mr-20">
            <img src={Fundo} alt="Exposições" className="absolute inset-0 h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <StaticZigzagPath
              from={{ x: 20, y: 5 }} to={{ x: 80, y: 95 }}
              steps={4} amplitude={20} curve={1.2}
              color="#c8ff00" strokeWidth={4} dashed dashLength={10} dashGap={8} opacity={0.7}
            />
          </div>
        </div>
      </section>

      {/* ── Criatividade bar ── */}
      <section className="border-t border-b border-white/10 bg-white/5 px-8 xl:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 ml-12 mr-12">
          {criatividade.map((f, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-center gap-3 mb-1">
                <div className="text-[#c8ff00] opacity-70">{f.icon}</div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#c8ff00] mb-1">{f.label}</p>
              <p className="text-xs text-white/40 leading-relaxed mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Filter ── */}
      <section id="filtros" className="px-8 xl:px-20 pb-8 pt-12">
        <div className="bg-[#0d0d0d] border border-white/10 rounded-sm p-5">
          <div className="flex flex-wrap items-end gap-4 justify-center">
            <div className="flex flex-col gap-1.5 min-w-[160px]">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Área</label>
              <div className="relative">
                <select
                  value={activeArea}
                  onChange={e => setActiveArea(e.target.value)}
                  className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                >
                  {AREA_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
              </div>
            </div>
            <button
              onClick={() => setActiveArea('TODAS')}
              className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#c8ff00] hover:opacity-70 transition-opacity pb-2.5"
            >
              <RefreshCw size={13} /> Limpar Filtros
            </button>
          </div>
        </div>
      </section>

      {/* ── Exposições grid ── */}
      <section id="destaques" className="border-t border-white/10 px-8 xl:px-20 py-14">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[#ec4899] text-lg leading-none">✦</span>
              <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Destaques em Exposição</span>
            </div>
            <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
              OBRAS EM <span className="text-[#c8ff00]">DESTAQUE</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((d, i) => {
            const accent    = areaColors[d.area]
            const start     = parseDateBadge(d.start_date)
            const imgSrc    = d.image ? resolveMediaUrl(d.image as string) : Fundo
            const openTime  = d.opening_hours?.split(/[\s–-]/)[0].trim() ?? ''

            return (
              <div key={d.id ?? i} className="group relative flex flex-col rounded-sm border border-white/10 bg-black hover:border-[#c8ff00]/30 transition-colors duration-300 overflow-hidden cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video shrink-0">
                  <img src={imgSrc} alt={d.title}
                    className="absolute inset-0 h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-[0.3] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <div className="text-black px-2 py-1 text-center inline-block" style={{ backgroundColor: accent }}>
                      <span className="block text-base font-black leading-none">{start.day}</span>
                      <span className="block text-[8px] font-black uppercase tracking-widest">{start.month}</span>
                    </div>
                  </div>
                  <div
                    className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-black rounded-sm"
                    style={{ backgroundColor: accent }}
                  >
                    {areaLabels[d.area]}
                  </div>
                </div>

                {/* Card face */}
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="font-black text-sm uppercase leading-tight tracking-wide text-white">{d.title}</h3>
                  <p className="text-[11px] text-white/50 leading-relaxed">{d.artists}</p>
                  <div className="flex items-center gap-3 text-[10px] text-white/30 mt-auto pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1 shrink-0"><CalendarDays size={10} style={{ color: accent }} /> {start.day} {start.month}</span>
                    <span className="flex items-center gap-1 shrink-0"><Clock size={10} style={{ color: accent }} /> {openTime}</span>
                    <span className="flex items-center gap-1 truncate"><MapPin size={10} className="shrink-0" style={{ color: accent }} /> <span className="truncate">{d.location}</span></span>
                  </div>
                </div>

                {/* Hover panel */}
                <div className="absolute inset-0 flex flex-col bg-black/96 border border-[#c8ff00]/20 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-black text-sm uppercase leading-tight tracking-tight text-white">{d.title}</h3>
                    <span className="text-lg leading-none shrink-0" style={{ color: accent }}>✳</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: accent }}>{d.artists}</p>
                  <p className="text-xs text-white/55 leading-relaxed flex-1 overflow-y-auto">{d.synopsis}</p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-1 text-[10px] text-white/35">
                    <span className="flex items-center gap-1"><CalendarDays size={10} style={{ color: accent }} /> {start.day} {start.month}</span>
                    <span className="flex items-center gap-1"><Clock size={10} style={{ color: accent }} /> {openTime}</span>
                    <span className="flex items-center gap-1"><MapPin size={10} style={{ color: accent }} className="shrink-0" /> {d.location}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Sobre ── */}
      <section id="sobre" className="border-t border-white/10 px-8 xl:px-20 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          <div className="flex-1">
            <h2 className="font-black text-4xl xl:text-6xl uppercase leading-none tracking-tight mb-4 text-white">
              CRIATIVIDADE<br />EM EXPOSIÇÃO
            </h2>
            <div className="h-[3px] w-20 bg-[#c8ff00] mb-10" />
            <p className="text-sm leading-relaxed text-white/50">
              Nesta área apresentamos ao público os projetos finais dos alunos de todas as áreas formativas da ETIC_Algarve.
            </p>
            <p className="text-sm leading-relaxed text-white/50">
              É o momento em que ideias, pesquisa e experimentação se transformam em obras que inspiram e surpreendem.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4 lg:pt-2" />
        </div>
      </section>

      {/* ── Gallery strip ── */}
      <section className="border-t border-white/10 px-8 xl:px-20 py-14 bg-[#0a0a0a]">
        <div className="flex items-center justify-between mb-8 max-w-[1300px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-[#c8ff00] text-xl">✦</span>
            <span className="text-white font-black text-sm uppercase tracking-widest">Um Olhar sobre as Exposições</span>
          </div>
          <div className="flex gap-2">
            {([-1, 1] as const).map(dir => (
              <button
                key={dir}
                onClick={() => shiftGal(dir)}
                disabled={dir === -1 ? galIndex <= 0 : galIndex >= galPageCount - 1}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-all duration-200 disabled:opacity-20 text-white/60"
              >
                {dir === -1 ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-hidden max-w-[1300px] mx-auto" ref={galBox}>
          <div
            ref={galTrack}
            className="flex gap-3 transition-transform duration-[420ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{ transform: `translateX(-${galOffset}px)` }}
            onTouchStart={e => { galTouchStartX.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              const dx = galTouchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(dx) > 40) shiftGal(dx > 0 ? 1 : -1)
            }}
          >
            {galleryImages.map((img, i) => (
              <div key={i} className="flex-none w-[200px] h-[140px] overflow-hidden rounded-sm">
                <img src={img} alt="" aria-hidden
                  className="w-full h-full object-cover brightness-75 hover:brightness-90 hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {galPageCount > 1 && (
          <div className="flex justify-center gap-1.5 mt-6 max-w-[836px] mx-auto">
            {Array.from({ length: galPageCount }, (_, i) => {
              const active = galIndex === i
              return (
                <button
                  key={i}
                  onClick={() => { setGalIndex(i); setGalOffset(galPageOffset(i)) }}
                  className="rounded-full transition-all duration-300"
                  style={{ width: active ? '50px' : '10px', height: '10px', backgroundColor: active ? '#c8ff00' : 'rgba(255,255,255,0.2)' }}
                  aria-label={`Go to gallery page ${i + 1}`}
                />
              )
            })}
          </div>
        )}
      </section>

      {/* ── Footer CTA ── */}
      <section className="relative overflow-hidden pl-8 xl:pl-20 py-20">
        <div className="relative z-10 border border-white/10 bg-white/5 rounded-sm px-10 py-12 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
          <div className="flex-1">
            <h2 className="font-black uppercase leading-none tracking-tight text-white"
                style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
              Visita as <span className="text-[#c8ff00]">exposições.</span><br />
              Vem ver o talento ao <span className="text-[#c8ff00]">vivo.</span>
            </h2>
            <p className="mt-4 text-xs text-white/40">Inspira-te e apoia os criadores do futuro.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Exposicoes
