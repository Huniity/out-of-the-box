// components/ProgramacaoCarousel.tsx
'use client'

import { useRef, useState, useEffect } from 'react'
import { MapPin, ChevronLeft, ChevronRight, MoveRight } from 'lucide-react'
import Fundo from '../assets/FUNDO.jpg'
import Button from './buttons/MainButton'

type EventCard = {
  day: number
  month: string
  time: string
  accentColor: string
  title: string
  subtitle: string
  location: string
  image?: string
  tag?: string // optional event-type pill
}

const events: EventCard[] = [
  { day: 3,  month: 'JUL', time: '19:00', accentColor: '#c6dc80',  title: 'Live in Sight',           subtitle: 'Abertura Oficial',          location: 'IPDJ, Faro',   tag: 'CONCERTO'   },
  { day: 5,  month: 'JUL', time: '10:00', accentColor: '#f9a8d4',  title: 'Exposição de Design',      subtitle: 'Mostra de Trabalhos',        location: 'IPDJ, Faro',   tag: 'EXPOSIÇÃO'  },
  { day: 7,  month: 'JUL', time: '11:00', accentColor: '#c6dc80',  title: 'Workshop Foto',            subtitle: 'Olhar Urbano',               location: 'IPDJ, Faro',   tag: 'WORKSHOP'   },
  { day: 9,  month: 'JUL', time: '14:00', accentColor: '#fb923c',  title: 'Speed Hunting #1',         subtitle: 'Recrutamento & Networking',  location: 'IPDJ, Faro',   tag: 'NETWORK'    },
  { day: 10, month: 'JUL', time: '20:00', accentColor: '#f9a8d4',  title: 'Open Mic Night',           subtitle: 'Voz Livre',                  location: 'IPDJ, Faro',   tag: 'LIVE'       },
  { day: 11, month: 'JUL', time: '18:00', accentColor: '#c6dc80',  title: 'Live Painting',            subtitle: 'Arte em Directo',            location: 'Jardim, Faro', tag: 'ARTE'       },
  { day: 12, month: 'JUL', time: '16:00', accentColor: '#60a5fa',  title: 'Projeções de Cinema',      subtitle: 'Sessão de Curtas',           location: 'IPDJ, Faro',   tag: 'CINEMA'     },
  { day: 13, month: 'JUL', time: '15:00', accentColor: '#fb923c',  title: 'Mercado Criativo',         subtitle: 'Pop-up de Artistas',         location: 'Jardim, Faro', tag: 'MERCADO'    },
  { day: 14, month: 'JUL', time: '19:00', accentColor: '#f9a8d4',  title: 'Dança Contemporânea',      subtitle: 'Performance ao Vivo',        location: 'IPDJ, Faro',   tag: 'DANÇA'      },
  { day: 15, month: 'JUL', time: '22:00', accentColor: '#c6dc80',  title: 'DJ Set — Noite',           subtitle: 'Música Electrónica',         location: 'IPDJ, Faro',   tag: 'DJ SET'     },
  { day: 16, month: 'JUL', time: '14:00', accentColor: '#60a5fa',  title: 'Speed Hunting #2',         subtitle: 'Recrutamento & Networking',  location: 'IPDJ, Faro',   tag: 'NETWORK'    },
  { day: 17, month: 'JUL', time: '21:00', accentColor: '#c6dc80',  title: 'Concerto Final',           subtitle: 'Encerramento',               location: 'IPDJ, Faro',   tag: 'CONCERTO'   },
]

const CARD_W = 182

const Programacao = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const maxOffset = Math.max(0, events.length - 3) * CARD_W

  // fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const shift = (dir: 1 | -1) => {
    setOffset(prev => Math.max(0, Math.min(prev + dir * CARD_W, maxOffset)))
  }

  const touchStartX = useRef(0)

  return (
    <section
      ref={sectionRef}
      className="bg-black border-t border-white/10 rounded-2xl p-8 select-none flex flex-col justify-between"
      style={{
        minHeight: 'calc(100vh - 66px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <div className="flex items-center justify-between mb-6">
        {/* Section label — matches homepage #c6dc80 accent */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#e8365d] text-lg leading-none">✦</span><span className="text-white/18 text-[10px] font-bold tracking-[0.2em] uppercase">THE FACES OF THE EVENT</span>
          </div>
          <h2 className="font-black text-3xl xl:text-4xl text-white tracking-widest uppercase leading-tight tracking-tight">
            Em Destaque no <span className="text-[#c6dc80]">IPDJ</span>
          </h2>
        </div>

        <div className="flex gap-2">
          {([[-1, ChevronLeft], [1, ChevronRight]] as const).map(([dir, Icon]) => (
            <button
              key={dir}
              onClick={() => shift(dir)}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-25"
              style={{
                borderColor: dir === -1
                  ? (offset <= 0 ? 'rgba(198,220,128,0.2)' : 'rgba(198,220,128,0.5)')
                  : (offset >= maxOffset ? 'rgba(198,220,128,0.2)' : 'rgba(198,220,128,0.5)'),
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                if (!(e.currentTarget as HTMLButtonElement).disabled)
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(198,220,128,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
              }}
              disabled={dir === -1 ? offset <= 0 : offset >= maxOffset}
            >
              <Icon size={14} color="#c6dc80" />
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-3 transition-transform duration-[420ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ transform: `translateX(-${offset}px)` }}
          onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const dx = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(dx) > 40) shift(dx > 0 ? 1 : -1)
          }}
        >
          {events.map((ev, i) => (
            <div
              key={i}
              className="flex-none w-[170px] rounded-xl overflow-hidden relative cursor-pointer group"
              style={{
                // staggered entrance animation
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
                transition: `opacity 0.4s ease ${i * 45}ms, transform 0.4s ease ${i * 45}ms`,
              }}
            >
              {/* Card background */}
              <img
                src={ev.image ?? Fundo}
                alt={ev.title}
                className="w-full h-56 object-cover brightness-[0.55] group-hover:brightness-[0.75] transition-[filter] duration-300"
              />

              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${ev.accentColor}55`,
                  background: `radial-gradient(ellipse at 50% 100%, ${ev.accentColor}18 0%, transparent 70%)`,
                }}
              />

              {/* Scale-up transform on hover */}
              <div
                className="absolute inset-0 flex flex-col justify-between p-2.5"
                style={{
                  transform: 'scale(1)',
                  transition: 'transform 0.25s ease',
                }}
              >
                {/* Top row: date badge + tag */}
                <div className="flex items-start justify-between">
                  <div
                    className="text-black text-[11px] font-extrabold leading-none px-2 py-1 rounded-md uppercase tracking-tight"
                    style={{ backgroundColor: '#c6dc80' }}
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

                {/* Bottom info */}
                <div className="flex flex-col gap-1">
                  {/* Animated time badge — subtle pulse */}
                  <p className="text-white text-[13px] font-extrabold uppercase leading-tight tracking-wide group-hover:text-white transition-colors duration-200">
                    {ev.title}
                  </p>
                  <p className="text-white/55 text-[11px] font-medium">{ev.subtitle}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                                      <span
                    className="self-start text-black text-[11px] font-extrabold px-2 py-0.5 rounded animate-pulse"
                    style={{
                      backgroundColor: ev.accentColor,
                      animationDuration: '3s',
                    }}
                  >
                    {ev.time}
                  </span>
                    <MapPin size={10} color="rgba(198,220,128,0.55)" />
                    <span className="text-white/45 text-[11px]">{ev.location}</span>
                    
                  </div>
                </div>
              </div>

              {/* Card scale on hover via wrapper */}
              <style>{`
                .group:hover .card-scale {
                  transform: scale(1.03);
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mt-5">
        {events.map((_, i) => {
          const active = Math.round(offset / CARD_W) === i
          return (
            <button
              key={i}
              onClick={() => setOffset(Math.min(i * CARD_W, maxOffset))}
              className="rounded-full transition-all duration-300"
              style={{
                width: active ? '20px' : '6px',
                height: '6px',
                backgroundColor: active ? '#c6dc80' : 'rgba(255,255,255,0.2)',
              }}
              aria-label={`Go to event ${i + 1}`}
            />
          )
        })}
      </div>

      {/* CTA button */}
      <div className="flex justify-center mt-6">
        <Button
          name="VER A PROGRAMAÇÃO COMPLETA"
          textColor="black"
          hoverTextColor="#c6dc80"
          bgColor="#c6dc80"
          hoverBgColor="black"
          borderColor="black"
          hoverBorderColor="#c6dc80"
          borderWidth="2"
          width="82"
          height="8"
          textSize="text-base"
          fontSize="semibold"
          svgRight={<MoveRight size={18} />}
        />
      </div>
    </section>
  )
}

export default Programacao