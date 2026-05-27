// components/ProgramacaoCarousel.tsx
'use client'

import doodleBlue from '../../assets/d_blu2.webp'
import doodlePurple from '../../assets/d_pu.webp'
import doodlePink from '../../assets/d_p.webp'
import { useRef, useState, useEffect, useCallback } from 'react'
import { MapPin, ChevronLeft, ChevronRight, MoveRight } from 'lucide-react'
import Fundo from '../../assets/FUNDO.webp'
import { PrimaryButton } from '../buttons/MainButton'

type EventCard = {
  day: number
  month: string
  time: string
  accentColor: string
  title: string
  subtitle: string
  location: string
  image?: string
  tag?: string
}

const events: EventCard[] = [
  { day: 3,  month: 'JUL', time: '19:00', accentColor: '#c8ff00', title: 'A Confirmar', subtitle: 'Cabeça de Cartaz — Dia 1', location: 'IPDJ, Faro', tag: 'CONCERTO' },
  { day: 4,  month: 'JUL', time: '20:00', accentColor: '#f9a8d4', title: 'A Confirmar', subtitle: 'Cabeça de Cartaz — Dia 2', location: 'IPDJ, Faro', tag: 'PALESTRA' },
  { day: 5,  month: 'JUL', time: '19:00', accentColor: '#fb923c', title: 'A Confirmar', subtitle: 'Cabeça de Cartaz — Dia 3', location: 'IPDJ, Faro', tag: 'WORKSHOP' },
  { day: 6,  month: 'JUL', time: '20:00', accentColor: '#c8ff00', title: 'A Confirmar', subtitle: 'Cabeça de Cartaz — Dia 4', location: 'IPDJ, Faro', tag: 'CONCERTO' },
  { day: 7,  month: 'JUL', time: '19:00', accentColor: '#60a5fa', title: 'A Confirmar', subtitle: 'Cabeça de Cartaz — Dia 5', location: 'IPDJ, Faro', tag: 'CINEMA'   },
  { day: 8,  month: 'JUL', time: '20:00', accentColor: '#f9a8d4', title: 'A Confirmar', subtitle: 'Cabeça de Cartaz — Dia 6', location: 'IPDJ, Faro', tag: 'LIVE'     },
  { day: 9,  month: 'JUL', time: '19:00', accentColor: '#c8ff00', title: 'A Confirmar', subtitle: 'Cabeça de Cartaz — Dia 7', location: 'IPDJ, Faro', tag: 'CONCERTO' },
]

const GAP = 12 // gap-3

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const [cardsPerPage, setCardsPerPage] = useState(5)
  const [containerWidth, setContainerWidth] = useState(0)
  const [page, setPage] = useState(0)
  const [visible, setVisible] = useState(false)

  const totalPages = Math.ceil(events.length / cardsPerPage)

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
  }, [updateLayout])

  // clamp page when viewport resizes and totalPages shrinks
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
      ref={sectionRef}
      className="relative border-t border-white/10 py-8 select-none flex flex-col gap-8 bg-white/5 sm:min-h-[calc(100vh-66px)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {/* Doodles */}
      <img src={doodleBlue} alt="" aria-hidden="true" className="absolute pointer-events-none select-none z-0" style={{ top: '5%', left: '60%', width: '5%' }} />
      <img src={doodlePurple} alt="" aria-hidden="true" className="absolute pointer-events-none select-none z-0" style={{ top: '65%', left: '15%', width: '12%', transform: 'rotate(40deg)' }} />
      <img src={doodlePink} alt="" aria-hidden="true" className="absolute pointer-events-none select-none z-0" style={{ top: '50%', left: '87%', width: '15%', transform: 'rotate(270deg)' }} />

      {/* Header: title + nav arrows */}
      <div className="px-8 xl:px-20 flex items-center justify-between">
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
          {([
            { dir: -1 as const, Icon: ChevronLeft,  disabled: page === 0 },
            { dir:  1 as const, Icon: ChevronRight, disabled: page === totalPages - 1 },
          ]).map(({ dir, Icon, disabled }) => (
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
        className="overflow-hidden px-8 xl:px-20"
        ref={containerRef}
        onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          const dx = touchStartX.current - e.changedTouches[0].clientX
          if (Math.abs(dx) > 40) dx > 0 ? nextPage() : prevPage()
        }}
      >
        <div
          className="flex gap-3 transition-transform duration-[420ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ transform: `translateX(-${page * containerWidth}px)` }}
        >
          {events.map((ev, i) => (
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
                className="w-full h-56 object-cover brightness-[0.55] group-hover:brightness-[0.75] transition-[filter] duration-300"
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${ev.accentColor}55`,
                  background: `radial-gradient(ellipse at 50% 100%, ${ev.accentColor}18 0%, transparent 70%)`,
                }}
              />

              <div className="absolute inset-0 flex flex-col justify-between p-2.5">
                <div className="flex items-start justify-between">
                  <div
                    className="text-black text-[11px] font-extrabold leading-none px-2 py-1 rounded-md uppercase tracking-tight"
                    style={{ backgroundColor: '#c8ff00' }}
                  >
                    <span className="text-base block">{ev.day}</span>
                    {ev.month}
                  </div>
                  {ev.tag && (
                    <span
                      className="text-[9px] font-extrabold px-1.5 py-0.5 rounded tracking-widest"
                      style={{ color: '#000', backgroundColor: ev.accentColor, opacity: 0.92 }}
                    >
                      {ev.tag}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-white text-[13px] font-extrabold uppercase leading-tight tracking-wide">
                    {ev.title}
                  </p>
                  <p className="text-white/55 text-[11px] font-medium">{ev.subtitle}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span
                      className="self-start text-black text-[11px] font-extrabold px-2 py-0.5 rounded animate-pulse"
                      style={{ backgroundColor: ev.accentColor, animationDuration: '3s' }}
                    >
                      {ev.time}
                    </span>
                    <MapPin size={10} color="rgba(198,220,128,0.55)" />
                    <span className="text-white/45 text-[11px]">{ev.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page dots */}
      <div className="flex justify-center gap-1.5">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === page ? '50px' : '10px',
              height: '10px',
              backgroundColor: i === page ? '#c8ff00' : 'rgba(255,255,255,0.2)',
            }}
            aria-label={`Page ${i + 1}`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="w-full flex justify-center">
        <PrimaryButton href="/programacao">
          PROGRAMAÇÃO COMPLETA
          <MoveRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </PrimaryButton>
      </div>
    </section>
  )
}

export default Carousel
