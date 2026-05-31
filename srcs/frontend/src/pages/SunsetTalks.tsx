import { useState, useRef, useEffect, useMemo } from 'react'
import { MoveDown, RefreshCw, CalendarDays, MapPin, Mic, ArrowRight, ChevronDown, ExternalLink, Share2 } from 'lucide-react'
import Fundo from '../assets/etic_algarve/FUNDO2.webp'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange, resolveMediaUrl } from '../utils/dashboard'
import { sunsetTalksTypeColors as typeColors, sunsetTalksEventDays as eventDays, sunsetTalksAllTypes as allTypes, sunsetTalksAllSalas as allSalas, sunsetTalksPageSize as pageSize, workshopsAreaColor as areaColor, workshopsAreaLabel as areaLabel } from '../utils/metrics'
import { sunsetTalksApi } from '../services/api/sunsetTalks.api'
import type { SunsetTalksContract } from '../api/contracts'
import polaroid_sunset_talks from '../assets/polaroids/polaroid_sunset-talks.webp'
import { motion } from 'framer-motion'
import { heroStagger, heroItem } from '../utils/animations'
import HeroPageSection from '../components/core/HeroPageSection'


const SunsetTalks = () => {
  const {
    main_white_title,
    main_green_title,
    main_description,
    start_event_date,
    end_event_date,
  } = usePageData('sunset-talks')

  const [sessions, setSessions] = useState<SunsetTalksContract[]>([])
  useEffect(() => { sunsetTalksApi.getTalks().then(data => setSessions(data)) }, [])

  const [selectedDay,  setSelectedDay]  = useState<number | null>(null)
  const [selectedType, setSelectedType] = useState<string>('TODAS')
  const [selectedSala, setSelectedSala] = useState<string>('TODAS')
  const [shown, setShown] = useState(pageSize)
  const daysRef = useRef<HTMLDivElement>(null)

  const clearFilters = () => {
    setSelectedDay(null)
    setSelectedType('TODAS')
    setSelectedSala('TODAS')
    setShown(pageSize)
  }

  const filtered = useMemo(() => sessions.filter(s => {
    const sDay = s.start_datetime ? new Date(s.start_datetime).getDate() : s.day
    const matchDay  = selectedDay  === null    || sDay === selectedDay
    const matchType = selectedType === 'TODAS' || s.type === selectedType
    const matchSala = selectedSala === 'TODAS' || s.location === selectedSala
    return matchDay && matchType && matchSala
  }), [sessions, selectedDay, selectedType, selectedSala])

  const visible = useMemo(() => filtered.slice(0, shown), [filtered, shown])

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden relative">

      {/* ── Hero ── */}
      <HeroPageSection
        polaroidSrc={polaroid_sunset_talks}
        heroImgSrc={Fundo}
        heroImgAlt="Sunset Talks"
        zigzag={{ from: { x: 30, y: 2 }, to: { x: 70, y: 98 }, steps: 3, amplitude: 24, curve: 2.2, strokeWidth: 4, dashLength: 12, dashGap: 10, opacity: 0.7 }}
      >
        <motion.div variants={heroStagger} initial="hidden" animate="visible">
          <motion.h1 variants={heroItem} className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
            {main_white_title}<br />
            <span className="text-[#c8ff00]">{main_green_title}</span>
          </motion.h1>

          <motion.p variants={heroItem} className="mb-6 max-w-md text-sm leading-relaxed text-white/50">
            {main_description}
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> {formatEventDateRange(start_event_date, end_event_date)}</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
            <span className="flex items-center gap-1.5"><Mic size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
          </motion.div>

          <motion.div variants={heroItem} className="flex flex-col items-start sm:flex-row gap-3">
            <PrimaryButton href="#sessoes">
              Ver Sessões <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </PrimaryButton>
            <SecondaryButton href="#filtros">
              Filtrar <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
            </SecondaryButton>
          </motion.div>
        </motion.div>
      </HeroPageSection>

      {/* ── Filter box ── */}
      <section id="filtros" className="px-8 xl:px-20 pb-8">
        <div className="bg-[#0d0d0d] border border-white/10 rounded-sm p-5 ">
          <div className="flex flex-wrap items-end gap-4 justify-center">

            {/* CATEGORIA */}
            <div className="flex flex-col gap-1.5 min-w-[140px]">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Categoria</label>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={e => { setSelectedType(e.target.value); setShown(pageSize) }}
                  className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                >
                  {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
              </div>
            </div>

            {/* DIA */}
            <div className="flex flex-col gap-1.5 min-w-[120px]">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Dia</label>
              <div className="relative">
                <select
                  value={selectedDay ?? ''}
                  onChange={e => { setSelectedDay(e.target.value === '' ? null : Number(e.target.value)); setShown(pageSize) }}
                  className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                >
                  <option value="">TODAS</option>
                  {eventDays.map(d => <option key={d.day} value={d.day}>{d.day} JUL</option>)}
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
              </div>
            </div>

            {/* SALA */}
            <div className="flex flex-col gap-1.5 min-w-[140px]">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Sala</label>
              <div className="relative">
                <select
                  value={selectedSala}
                  onChange={e => { setSelectedSala(e.target.value); setShown(pageSize) }}
                  className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                >
                  {allSalas.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
              </div>
            </div>

            {/* Clear */}
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#c8ff00] hover:opacity-70 transition-opacity pb-2.5"
            >
              <RefreshCw size={13} /> Limpar Filtros
            </button>
          </div>
        </div>
      </section>

      {/* ── Date tabs ── */}
      <section className="px-8 xl:px-20 pb-8">
        <div ref={daysRef} className="flex gap-2 overflow-x-auto no-scrollbar pb-1 justify-center">
          {eventDays.map(d => {
            const isActive = selectedDay === d.day
            const hasSession = sessions.some(s => (s.start_datetime ? new Date(s.start_datetime).getDate() : s.day) === d.day)
            return (
              <button
                key={d.day}
                onClick={() => { setSelectedDay(isActive ? null : d.day); setShown(pageSize) }}
                className="flex-none flex flex-col items-center px-4 py-2.5 rounded-sm transition-all duration-200 min-w-[64px]"
                style={{
                  backgroundColor: isActive ? '#c8ff00' : 'transparent',
                  border: `2px solid ${isActive ? '#c8ff00' : 'rgba(255,255,255,0.12)'}`,
                  opacity: hasSession ? 1 : 0.35,
                }}
              >
                <span
                  className="text-xl font-black leading-none"
                  style={{ color: isActive ? '#000' : '#fff' }}
                >
                  {d.day}
                </span>
                <span
                  className="text-[10px] font-black uppercase tracking-wide"
                  style={{ color: isActive ? '#000' : 'rgba(255,255,255,0.5)' }}
                >
                  JUL
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: isActive ? '#000' : 'rgba(255,255,255,0.3)' }}
                >
                  {d.weekday}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Session list ── */}
      <section id="sessoes" className="px-8 xl:px-20 pb-16 flex flex-col gap-4">
        {visible.length === 0 && (
          <div className="py-20 text-center text-white/30 text-sm font-bold uppercase tracking-widest">
            Sem sessões para os filtros selecionados.
          </div>
        )}

        {visible.map((s) => {
          const typeColor = typeColors[s.type as keyof typeof typeColors] ?? '#c8ff00'
          const cat = s.category ?? ''
          const catColor = cat && cat !== 'OUTROS' ? (areaColor[cat] ?? '#ffffff') : '#ffffff'

          const startDt  = s.start_datetime ? new Date(s.start_datetime) : null
          const dayNum   = startDt ? startDt.getDate() : null
          const monthStr = startDt ? startDt.toLocaleString('pt-PT', { month: 'short', timeZone: 'UTC' }).toUpperCase().replace('.', '') : ''
          const timeStr  = startDt ? startDt.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }) : ''

          const imgSrc           = s.image ? resolveMediaUrl(s.image) : Fundo
          const infoLink         = s.speaker_info_link ?? null
          const socialLink       = s.social_link ?? null
          const registrationLink = s.registration_link ?? null

          return (
            <div
              key={s.id}
              className="flex flex-row overflow-hidden rounded-sm border bg-[#0d0d0d] transition-all duration-200 group"
              style={{ borderColor: `${catColor}50` }}
            >
              {/* LEFT — date · time · location · badge */}
              <div className="flex-none w-36 flex flex-col justify-center gap-2 px-4 py-4 border-r border-white/10">
                <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: catColor }}>
                  {dayNum} {monthStr}
                </p>
                <p className="font-black text-3xl leading-none" style={{ color: typeColor }}>
                  {timeStr}
                </p>
                <p className="text-[10px] text-white/35 font-bold uppercase tracking-widest leading-snug">
                  {s.location}
                </p>
                {cat && (
                  <span
                    className="block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-black rounded-sm w-full text-center truncate"
                    style={{ backgroundColor: catColor }}
                  >
                    {cat === 'OUTROS' ? (s.category_other ?? 'Outros') : (areaLabel[cat] ?? cat)}
                  </span>
                )}
                {s.type && (
                  <span
                    className="block px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-black rounded-sm w-full text-center"
                    style={{ backgroundColor: typeColor }}
                  >
                    {s.type}
                  </span>
                )}
              </div>

              {/* MIDDLE — image + content */}
              <div className="flex flex-1 overflow-hidden">
                <div className="flex-none w-44 h-auto shrink-0 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover brightness-60 group-hover:brightness-75 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="flex-1 px-5 py-4 flex flex-col justify-center gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-base sm:text-lg uppercase leading-tight tracking-tight text-white">
                      {s.title}
                    </h3>
                    <span className="shrink-0 text-lg leading-none" style={{ color: catColor }}>✦</span>
                  </div>
                  <p className="text-xs font-black uppercase tracking-wide" style={{ color: catColor }}>
                    {s.speaker_name}
                  </p>
                  {s.moderator && (
                    <p className="text-[11px] text-white/30">Moderador: {s.moderator}</p>
                  )}
                  <p className="text-xs text-white/40 mt-0.5">{s.speaker_activity}</p>
                  <p className="text-xs text-white/35 leading-relaxed mt-1 line-clamp-3">{s.description}</p>
                </div>
              </div>

              {/* RIGHT — info link · social · chevron */}
              <div className="flex-none flex flex-col items-center justify-center gap-3 px-4 pr-5">
                {infoLink && (
                  <a
                    href={infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                    title="Mais informação"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
                {socialLink && (
                  <a
                    href={socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                    title="Rede social"
                  >
                    <Share2 size={14} />
                  </a>
                )}
                {registrationLink ? (
                  <a
                    href={registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center hover:border-[#c8ff00]/50 hover:text-[#c8ff00] transition-all duration-300"
                    title="Inscrição"
                  >
                    <ArrowRight size={12} />
                  </a>
                ) : (
                  <div className="shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c8ff00]/50 group-hover:text-[#c8ff00] transition-all duration-300">
                    <ArrowRight size={12} />
                  </div>
                )}
              </div>
            </div>
          )
        })}

        {/* Load more */}
        {shown < filtered.length && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShown(n => n + pageSize)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest text-white transition-all duration-200 hover:border-[#c8ff00] hover:text-[#c8ff00]"
              style={{ border: '2px solid rgba(255,255,255,0.2)' }}
            >
              Carregar Mais <MoveDown size={16} />
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default SunsetTalks
