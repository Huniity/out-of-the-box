import { useState, useRef } from 'react'
import { MoveRight, MoveDown, RefreshCw, CalendarDays, MapPin, Mic, ArrowRight, ChevronDown } from 'lucide-react'
import Fundo from '../assets/FUNDO.webp'
import StaticZigzagPath from '../components/core/StaticZigzagPath'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange } from '../utils/dashboard'
import { Session, SessionType } from '../types/palestras'
import { palestrasTypeColors as typeColors, palestrasSessions as sessions, palestrasEventDays as eventDays, palestrasAllTypes as allTypes, palestrasAllSalas as allSalas, palestrasPageSize as pageSize } from '../utils/metrics'



const SunsetTalks = () => {
  const {
    main_white_title,
    main_green_title,
    main_description,
    start_event_date,
    end_event_date,
  } = usePageData('sunset-talks')

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

  const filtered = sessions.filter(s => {
    const matchDay  = selectedDay  === null          || s.day  === selectedDay
    const matchType = selectedType === 'TODAS'       || s.type === selectedType
    const matchSala = selectedSala === 'TODAS'       || s.location === selectedSala
    return matchDay && matchType && matchSala
  })

  const visible = filtered.slice(0, shown)

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative h-[calc(100vh-66px)] flex items-stretch px-8 xl:px-20 overflow-hidden">
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#c8ff00]/10 blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#745ff2]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-12">
          {/* Left — text */}
          <div className="flex-1 flex flex-col py-8">
            <h1 className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
              {main_white_title}<br />
              <span className="text-[#c8ff00]">{main_green_title}</span>
            </h1>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">
              {main_description}
            </p>

            {/* Info pills */}
            <div className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
              <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> {formatEventDateRange(start_event_date, end_event_date)}</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
              <span className="flex items-center gap-1.5"><Mic size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="#sessoes">
                Ver Sessões <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </PrimaryButton>
              <SecondaryButton href="#filtros">
                Filtrar <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
              </SecondaryButton>
            </div>
          </div>

          {/* Right — hero image */}
          <div className="hidden lg:block flex-1 relative overflow-hidden lg:min-h-0 -mr-8 xl:-mr-20">
            <img src={Fundo} alt="Palestras" className="absolute inset-0 h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <StaticZigzagPath
              from={{ x: 20, y: 5 }}
              to={{ x: 80, y: 95 }}
              steps={4}
              amplitude={20}
              curve={1.2}
              color="#c8ff00"
              strokeWidth={4}
              dashed
              dashLength={10}
              dashGap={8}
              opacity={0.7}
            />
          </div>
        </div>
      </section>

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
            const hasSession = sessions.some(s => s.day === d.day)
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

        {visible.map((s, idx) => {
          const typeColor = typeColors[s.type]

          return (
            <div
              key={s.id}
              className="flex flex-col sm:flex-row overflow-hidden rounded-sm border border-white/10 bg-[#0d0d0d] hover:border-white/20 transition-all duration-200 group"
            >
              {/* Left — time + sala + type */}
              <div className="flex-none sm:w-28 flex flex-row sm:flex-col justify-start sm:justify-center gap-3 sm:gap-2 px-4 pt-4 sm:pt-0 sm:border-r border-white/10 sm:items-start">
                <p
                  className="font-black text-2xl sm:text-3xl leading-none"
                  style={{ color: typeColor }}
                >
                  {s.time}
                </p>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[10px] text-white/35 font-bold uppercase tracking-widest">{'Sala: '}{s.location}</p>
                  <span
                    className="inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-black rounded-sm w-fit"
                    style={{ backgroundColor: typeColor }}
                  >
                    {s.type}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="flex-none sm:w-52 h-36 sm:h-auto overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover brightness-60 group-hover:brightness-75 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 px-5 py-4 flex flex-col justify-center gap-1 min-w-0">
                <h3 className="font-black text-base sm:text-lg uppercase leading-tight tracking-tight text-white">
                  {s.title}
                </h3>
                <p
                  className="text-xs font-black uppercase tracking-wide"
                  style={{ color: typeColor }}
                >
                  {s.speaker_name}
                </p>
                {s.moderator && (
                  <p className="text-[11px] text-white/30">Moderador: {s.moderator}</p>
                )}
                <p className="text-xs text-white/40 mt-0.5">{s.speaker_activity}</p>
                <p className="text-xs text-white/35 leading-relaxed mt-1 line-clamp-2">{s.description}</p>
              </div>

              {/* Right — star + button */}
              <div className="flex-none flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 px-4 pb-4 sm:pb-0 sm:pr-5">
                <span className="text-2xl" style={{ color: typeColor }}>✳</span>
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
