import { useState, useEffect, useMemo } from 'react'
import { CalendarDays, MapPin, Users, ArrowRight, ChevronDown, RefreshCw, Clock } from 'lucide-react'
import Fundo from '../assets/etic_algarve/FUNDO2.webp'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange, resolveMediaUrl } from '../utils/dashboard'
import { motion } from 'framer-motion'

import { exposicoesAreaColors as areaColors, exposicoesAreaLabels as areaLabels, exposicoesCriatividade as criatividade } from '../utils/metrics'
import { exposicoesApi } from '../services/api/exposicoes.api'
import type { ExposicoesContract } from '../api/contracts'

const AREA_OPTIONS = [
  { value: 'TODAS',  label: 'TODAS' },
  { value: 'DESIGN', label: 'DESIGN' },
  { value: 'FOTO',   label: 'FOTOGRAFIA' },
  { value: 'JOGOS',  label: 'VIDEOJOGOS' },
  { value: 'OUTROS', label: 'OUTROS' },
]
import PageStars from '../components/core/PageStars'
import polaroid_exposicoes from '../assets/polaroids/polaroid_exposicoes.webp'

import SectionHeader from '../components/core/SectionHeader'
import MetricsBar from '../components/core/MetricsBar'
import CtaBannerSection from '../components/core/CtaBannerSection'
import HeroPageSection from '../components/core/HeroPageSection'
import { fadeUp, stagger, cardItem, heroStagger, heroItem, viewport } from '../utils/animations'


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

  const [destaques, setDestaques] = useState<ExposicoesContract[]>([])
  useEffect(() => { exposicoesApi.getExposicoes().then(data => setDestaques(data)) }, [])
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const [activeArea, setActiveArea] = useState('TODAS')
  useEffect(() => {
  setActiveCard(null)
  }, [activeArea])
  const filtered = useMemo(
    () => destaques.filter(d => d.is_active && (activeArea === 'TODAS' || d.category === activeArea)),
    [destaques, activeArea]
    
  )
console.log('Área:', activeArea)
console.log('Filtrados:', filtered.length)
  return (
    
    <main className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* ── Hero ── */}
      <HeroPageSection
        polaroidSrc={polaroid_exposicoes}
        heroImgSrc={Fundo}
        heroImgAlt="Exposições"
        zigzag={{ from: { x: 35, y: 5 }, to: { x: 98, y: 95 }, steps: 3, amplitude: 33, curve: 2.0, dashLength: 10, dashGap: 14 }}
      >
        <motion.div variants={heroStagger} initial="hidden" animate="visible">
          <motion.h1 variants={heroItem} className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
            {main_white_title}{' '}
            <span className="text-[#c8ff00]">{main_green_title}</span>
          </motion.h1>
          <motion.p variants={heroItem} className="mb-6 max-w-md text-sm leading-relaxed text-white/50">{main_description}</motion.p>
          <motion.div variants={heroItem} className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> {formatEventDateRange(start_event_date, end_event_date)}</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
            <span className="flex items-center gap-1.5"><Users size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
          </motion.div>
          <motion.div variants={heroItem} className="flex flex-wrap gap-3">
            <PrimaryButton href="#destaques">
              Ver Exposições <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </PrimaryButton>
            <SecondaryButton href="#sobre">
              Sobre a Área <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
            </SecondaryButton>
          </motion.div>
        </motion.div>
      </HeroPageSection>

      {/* ── Criatividade bar ── */}
      <MetricsBar metrics={criatividade} cols={3} />

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
      <motion.section id="destaques" className="border-t border-white/10 px-8 xl:px-20 py-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeader
            label="Destaques em Exposição"
            title={<>OBRAS EM <span className="text-[#c8ff00]">DESTAQUE</span></>}
            accent="#ec4899"
          />
        </div>

        {/* Se estiver vazio, mostra mensagem. Se tiver itens, mostra a grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-sm">
            <p className="text-sm text-white/40 uppercase tracking-widest font-black">
              Nenhuma exposição encontrada nesta área.
            </p>
            <button 
              onClick={() => setActiveArea('TODAS')}
              className="mt-4 text-xs text-[#c8ff00] underline font-black uppercase tracking-widest hover:opacity-80"
            >
              Ver todas as áreas
            </button>
          </div>
        ) : (
            <motion.div
              key={activeArea}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >            
            {filtered.map((d, i) => {
            console.log('Renderizando:', d.title, 'Categoria:', d.category)
            const accent    = areaColors[d.category as keyof typeof areaColors] ?? '#c8ff00'
            const start     = parseDateBadge(d.start_date)
            const imgSrc    = d.image ? resolveMediaUrl(d.image as string) : Fundo
            const openTime  = d.opening_hours?.split(/[\s–-]/)[0].trim() ?? ''
            
            const isActive = activeCard === (d.id ?? i)
            return (
              <motion.div key={d.id ?? i} variants={cardItem} onClick={() => setActiveCard(isActive ? null : (d.id ?? i))} className="group relative flex flex-col rounded-sm border border-white/10 bg-black hover:border-[#c8ff00]/30 transition-colors duration-300 overflow-hidden cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video shrink-0">
                  <img src={imgSrc} alt={d.title} loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-[0.3] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {d.start_date && (
                    <div className="absolute top-3 left-3">
                      <div className="bg-[#c8ff00] text-black px-2 py-1 text-center inline-block">
                        <span className="block text-base font-black leading-none">{start.day}</span>
                        <span className="block text-[8px] font-black uppercase tracking-widest">{start.month}</span>
                      </div>
                    </div>
                  )}
                  <div
                    className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-black rounded-sm"
                    style={{ backgroundColor: accent }}
                  >
                    {areaLabels[d.category as keyof typeof areaLabels]}
                  </div>
                </div>

                {/* Card face */}
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="font-black text-sm uppercase leading-tight tracking-wide text-white">{d.title}</h3>
                  <p className="text-[11px] text-white/50 leading-relaxed">{d.artists}</p>
                  <div className="flex items-center gap-3 text-[10px] text-white/30 mt-auto pt-2 border-t border-white/10">
                    {d.start_date && <span className="flex items-center gap-1 shrink-0"><CalendarDays size={10} style={{ color: accent }} /> {start.day} {start.month}</span>}
                    {openTime && <span className="flex items-center gap-1 shrink-0"><Clock size={10} style={{ color: accent }} /> {openTime}</span>}
                    {d.location && <span className="flex items-center gap-1 truncate"><MapPin size={10} className="shrink-0" style={{ color: accent }} /> <span className="truncate">{d.location}</span></span>}
                  </div>
                </div>

                {/* Hover panel */}
                <div className={`absolute inset-0 flex flex-col bg-black/96 border border-[#c8ff00]/20 p-5 transition-transform duration-300 ease-out ${isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-black text-sm uppercase leading-tight tracking-tight text-white">{d.title}</h3>
                    <span className="text-lg leading-none shrink-0" style={{ color: accent }}>✦</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: accent }}>{d.artists}</p>
                  <p className="text-xs text-white/55 leading-relaxed flex-1 overflow-y-auto">{d.synopsis}</p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-1 text-[10px] text-white/35">
                    {d.start_date && <span className="flex items-center gap-1"><CalendarDays size={10} style={{ color: accent }} /> {start.day} {start.month}</span>}
                    {openTime && <span className="flex items-center gap-1"><Clock size={10} style={{ color: accent }} /> {openTime}</span>}
                    {d.location && <span className="flex items-center gap-1"><MapPin size={10} style={{ color: accent }} className="shrink-0" /> {d.location}</span>}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        )}
      </motion.section>

      {/* ── Sobre ── */}
      <motion.section id="sobre" className="border-t border-white/10 px-8 xl:px-20 py-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          <div className="flex-1">
            <h2 className="font-black text-4xl xl:text-6xl uppercase leading-none tracking-tight mb-4 text-white">
              CRIATIVIDADE<br />EM EXPOSIÇÃO
            </h2>
            <div className="h-[3px] w-20 bg-[#c8ff00] mb-10" />
            <p className="text-sm leading-relaxed text-white/50">
              Nesta área apresentamos ao público os projetos finais dos formandos de todas as áreas formativas da ETIC_Algarve.
            </p>
            <p className="text-sm leading-relaxed text-white/50">
              É o momento em que ideias, pesquisa e experimentação se transformam em obras que inspiram e surpreendem.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4 lg:pt-2" />
        </div>
      </motion.section>

      {/* ── Footer CTA ── */}
      <CtaBannerSection
        headline={<>Visita as <span className="text-[#c8ff00]">exposições.</span><br />Vem ver o talento ao <span className="text-[#c8ff00]">vivo.</span></>}
        subtext={<p className="text-xs text-white/40">Inspira-te e apoia os criadores do futuro.</p>}
      />
    </main>
  )
}

export default Exposicoes
