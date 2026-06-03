import doodleBlue from '../../assets/doodles/d_blu2.webp'
import doodlePurple from '../../assets/doodles/d_pu.webp'
import doodlePink from '../../assets/doodles/d_p.webp'
import { useRef, useState, useEffect, useCallback } from 'react'
import { MapPin, ChevronLeft, ChevronRight, MoveRight } from 'lucide-react'
import Fundo from '../../assets/etic_algarve/FUNDO.webp'
import { PrimaryButton } from '../buttons/MainButton'
import { highlightsApi } from '../../services/api/highlights.api'
import type { HighlightContract } from '../../api/contracts'

const TAG_COLORS: Record<string, string> = {
  CONCERTO:   '#c8ff00',
  TALK:       '#f9a8d4',
  WORKSHOP:   '#fb923c',
  CINEMA:     '#60a5fa',
  'EXPOSIÇÃO': '#a78bfa',
}

function parseDt(iso: string | null) {
  if (!iso) return { day: 0, month: 'JUL', time: '--:--' }
  const d = new Date(iso)
  return {
    day:   d.getUTCDate(),
    month: d.toLocaleString('pt-PT', { month: 'short', timeZone: 'UTC' }).toUpperCase().replace('.', ''),
    time:  d.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' }),
  }
}

const GAP = 18 

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [events, setEvents] = useState<HighlightContract[]>([])
  const [cardsPerPage, setCardsPerPage] = useState(5)
  const [containerWidth, setContainerWidth] = useState(0)
  const [page, setPage] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => { 
    highlightsApi.getHighlights().then(setEvents).catch(() => {}) 
  }, [])

  const totalPages = Math.max(1, Math.ceil(events.length / cardsPerPage))

  const updateLayout = useCallback(() => {
    const w = window.innerWidth
    const cpp = w >= 1024 ? 5 : w >= 640 ? 3 : 2
    setCardsPerPage(cpp)
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth)
    }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [updateLayout, events]) 

  useEffect(() => {
    setPage(p => Math.min(p, Math.max(0, totalPages - 1)))
  }, [totalPages])

  const cardWidth = containerWidth > 0
    ? (containerWidth - GAP * (cardsPerPage - 1)) / cardsPerPage
    : 170

  const touchStartX = useRef(0)

  const prevPage = () => setPage(p => Math.max(0, p - 1))
  const nextPage = () => setPage(p => Math.min(totalPages - 1, p + 1))

  const navBtnStyle = (disabled: boolean) => ({
    borderColor: disabled ? 'rgba(198,220,128,0.2)' : 'rgba(198,220,128,0.5)',
    backgroundColor: 'transparent' as const,
  })

  return (
    <section
      className="relative border-t border-white/10 py-12 select-none flex flex-col bg-white/5 sm:min-h-[calc(100vh-66px)] overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {/* Doodles */}
      <img src={doodleBlue} alt="" aria-hidden="true" className="absolute pointer-events-none select-none z-0" style={{ top: '5%', left: '75%', width: '4%' }} />
      <img src={doodlePurple} alt="" aria-hidden="true" className="absolute pointer-events-none select-none z-0" style={{ top: '65%', left: '5%', width: '10%', transform: 'rotate(40deg)' }} />
      <img src={doodlePink} alt="" aria-hidden="true" className="absolute pointer-events-none select-none z-0" style={{ top: '50%', left: '90%', width: '12%', transform: 'rotate(270deg)' }} />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col gap-8 z-10">
        
        {/* Header: title + nav arrows */}
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#e8365d] text-lg leading-none">✦</span>
              <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">CABEÇAS DE CARTAZ</span>
            </div>
            <h2 className="font-black text-3xl xl:text-4xl text-white uppercase leading-tight tracking-tight">
              Os Destaques do <span className="text-[#c8ff00]">Out of The Box</span>
            </h2>
          </div>

          <div className="flex gap-2">
            {[
              { dir: -1 as const, Icon: ChevronLeft,  disabled: page === 0 },
              { dir:  1 as const, Icon: ChevronRight, disabled: page === totalPages - 1 },
            ].map(({ dir, Icon, disabled }) => (
              <button
                key={dir}
                onClick={dir === -1 ? prevPage : nextPage}
                disabled={disabled}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 disabled:opacity-25"
                style={navBtnStyle(disabled)}
                onMouseEnter={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(198,220,128,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent' }}
              >
                <Icon size={24} color="#c8ff00" />
              </button>
            ))}
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={containerRef}
          className="overflow-hidden w-full"
          onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const dx = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(dx) > 40) dx > 0 ? nextPage() : prevPage()
          }}
        >
          <div
            className="flex transition-transform duration-[500ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ 
              gap: `${GAP}px`,
              transform: `translateX(-${page * (containerWidth + GAP)}px)` 
            }}
          >
            {events.map((ev, i) => {
              const accent = TAG_COLORS[ev.tag] ?? '#c8ff00'
              const { day, month, time } = parseDt(ev.start_datetime)
              return (
                <div
                  key={i}
                  className="flex-none rounded-xl overflow-hidden relative cursor-pointer group"
                  style={{
                    width: cardWidth,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
                    transition: `opacity 0.4s ease ${i * 45}ms, transform 0.4s ease ${i * 45}ms`,
                  }}
                >
                  <img
                    src={ev.image ?? Fundo}
                    alt={ev.title}
                    className="w-full h-56 md:h-68 lg:h-68 xl:h-68 object-cover brightness-[0.55] group-hover:brightness-[0.75] transition-[filter] duration-300"
                  />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 0 1px ${accent}55`,
                      background: `radial-gradient(ellipse at 50% 100%, ${accent}18 0%, transparent 70%)`,
                    }}
                  />

                  <div className="absolute inset-0 flex flex-col p-3.5">
                    {/* Top: date + tag — always anchored to top */}
                    <div className="flex items-start justify-between shrink-0">
                      {ev.start_datetime ? (
                        <div
                          className="text-black text-[11px] font-extrabold leading-none px-2 py-1 rounded-md uppercase tracking-tight text-center"
                          style={{ backgroundColor: '#c8ff00' }}
                        >
                          <span className="text-base block font-black">{day}</span>
                          {month}
                        </div>
                      ) : <div className="h-11"/>}
                      {ev.tag && (
                        <span
                          className="text-[9px] font-extrabold px-1.5 py-0.5 rounded tracking-widest text-black"
                          style={{ backgroundColor: accent, opacity: 0.92 }}
                        >
                          {ev.tag}
                        </span>
                      )}
                    </div>

                    {/* Gap between top badges and text */}
                    <div className="h-12 shrink-0" />

                    {/* Title — fixed height, always same position */}
                    <div className="h-[2.6em] shrink-0">
                      <p className="text-white text-[13px] font-black uppercase leading-tight tracking-wide">
                        {ev.title}
                      </p>
                    </div>

                    {/* Subtitle — fixed height (5 lines), always same position */}
                    <div className="h-[54px] shrink-0">
                      <p className="text-white/60 text-[12px] font-medium leading-snug">
                        {ev.subtitle}
                      </p>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Time + location — always anchored to bottom */}
                    <div className="flex items-start gap-1 shrink-0">
                      {ev.start_datetime && (
                        <span
                          className="shrink-0 text-black text-[12px] font-extrabold px-2 py-0.5 rounded animate-pulse"
                          style={{ backgroundColor: accent, animationDuration: '3s' }}
                        >
                          {time}
                        </span>
                      )}
                      {ev.location && (
                        <>
                          <MapPin size={10} color="rgba(198,220,128,0.55)" className="shrink-0 mt-0.5" />
                          <span className="text-white/45 text-[12px] leading-tight">{ev.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Page dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="rounded-full transition-all duration-300 h-2.5"
                style={{
                  width: i === page ? '40px' : '10px',
                  backgroundColor: i === page ? '#c8ff00' : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="w-full flex justify-center">
          <PrimaryButton href="/programacao#sessoes">
            PROGRAMAÇÃO COMPLETA
            <MoveRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </PrimaryButton>
        </div>

      </div>
    </section>
  )
}

export default Carousel