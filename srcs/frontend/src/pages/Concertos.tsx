
import { useState, useEffect } from 'react'
import { CalendarDays, MapPin, Music, ChevronDown, ArrowRight, Clock, ExternalLink, Share2 } from 'lucide-react'
import heroImg from '../assets/etic_algarve/FUNDO2.webp'
import StaticZigzagPath from '../components/core/StaticZigzagPath'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'

import { concertosFeaturedEvent as featuredEvent, concertosProgramme, concertosHappenings as happenings, concertosFeatures as features } from '../utils/metrics'
import { concertosApi } from '../services/api/concertos.api'
import type { ConcertosContract } from '../api/contracts'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange } from '../utils/dashboard'
import PageStars from '../components/core/PageStars'
import polaroid_concertos from '../assets/polaroids/polaroid_concertos.webp'
import HeroPolaroid from '../components/core/HeroPolaroid'
import leaf from '../assets/doodles/leaf3.webp'

const Concertos = () => {
        const {
            main_white_title,
            main_green_title,
            main_description,
            cta_button_text,
            cta_button_link,
            start_event_date,
            end_event_date,
        } = usePageData('concertos');

    const [programme, setProgramme] = useState<ConcertosContract[]>(concertosProgramme as any)
    useEffect(() => { concertosApi.getConcertos().then(setProgramme as any) }, [])

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">

            {/* ── HERO ── */}
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
                <HeroPolaroid src={polaroid_concertos} />

                <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-12">
                    {/* Left — text */}
                    <div className="flex-1 flex flex-col py-8">
                        <h1 className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
                            {main_white_title} <br />
                            <span className="text-[#c8ff00]">{main_green_title}</span>
                        </h1>

                        <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">
                            {main_description}
                        </p>

                        {/* Info pills */}
                        <div className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
                            <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> {formatEventDateRange(start_event_date, end_event_date)}</span>
                            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
                            <span className="flex items-center gap-1.5"><Music size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <PrimaryButton href="#programa">
                                <Music size={14} /> Ver Programa
                                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </PrimaryButton>
                            <SecondaryButton href="#live-in-sight">
                                Live in Sight
                                <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                            </SecondaryButton>
                        </div>
                    </div>

                    {/* Right — hero image */}
                    <div className="hidden lg:block flex-1 relative overflow-hidden lg:min-h-0 -mr-8 xl:-mr-20">
                        <img src={heroImg} alt="Concertos & Happenings" className="absolute inset-0 h-full w-full object-cover brightness-75" />
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
            {/* ── FEATURED EVENT — LIVE IN SIGHT ── */}
            <section id="live-in-sight" className="px-8 xl:px-20 py-10 border-b border-white/10">
                <div className="mb-12">
                    <div className="mb-3 flex items-center gap-2">
                        <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                        <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">O grande evento</span>
                    </div>
                    <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                        LIVE IN <span className="text-[#c8ff00]">SIGHT</span>
                    </h2>
                </div>
                
                <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden flex flex-col lg:flex-row">
                    {/* Left — image + date */}
                    <div className="relative lg:w-80 xl:w-96 min-h-56 shrink-0">
                        <img src={heroImg} alt="Live In Sight" className="absolute inset-0 h-full w-full object-cover brightness-60" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                        <div className="absolute top-5 left-5">
                            <div className="bg-[#c8ff00] text-black px-3 py-2 text-center inline-block">
                                <span className="block text-2xl font-black leading-none">{featuredEvent.day}</span>
                                <span className="block text-[10px] font-black uppercase tracking-widest">{featuredEvent.month}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-5 left-5 flex flex-col gap-1.5">
                            <span className="flex items-center gap-1.5 text-[11px] text-white/70">
                                <Clock size={11} className="text-[#c8ff00]" /> {featuredEvent.time}
                            </span>
                            <span className="flex items-center gap-1.5 text-[11px] text-white/70">
                                <MapPin size={11} className="text-[#c8ff00]" /> {featuredEvent.venue}
                            </span>
                        </div>
                    </div>

                    {/* Right — info */}
                    <div className="flex-1 p-8 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[#c8ff00] text-sm leading-none">✦</span>
                            <span className="text-[#c8ff00] text-[10px] font-black tracking-[0.25em] uppercase">{featuredEvent.tag}</span>
                        </div>
                        <h2 className="font-black text-4xl xl:text-5xl uppercase leading-none tracking-tight mb-2">
                            {featuredEvent.title}
                        </h2>
                        <p className="text-sm text-white/50 mb-3">{featuredEvent.subtitle}</p>
                        <div className="h-[1px] w-12 bg-[#c8ff00] opacity-50 mb-4" />
                        <p className="text-xs leading-relaxed text-white/40 max-w-md mb-4">
                            {featuredEvent.desc}
                        </p>
                        <div className="flex items-center justify-between gap-2 mt-auto pt-5">
                            <div className="flex flex-wrap items-center gap-2">
                                {featuredEvent.badges.map((b, i) => (
                                    <span key={i}
                                        className="block px-2 py-1 text-[10px] font-black uppercase tracking-widest text-black rounded-sm text-center w-[120px]"
                                        style={{ backgroundColor: i === 0 ? '#c8ff00' : 'rgba(255,255,255,0.65)' }}>
                                        {b}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                <a
                                    href={featuredEvent.info_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-black uppercase tracking-widest border border-white/20 text-white/60 rounded-sm hover:border-white/40 hover:text-white transition-colors"
                                >
                                    <ExternalLink size={11} /> Info
                                </a>
                                <a
                                    href={featuredEvent.social_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-black uppercase tracking-widest border border-white/20 text-white/60 rounded-sm hover:border-white/40 hover:text-white transition-colors"
                                >
                                    <Share2 size={11} /> Socials
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROGRAMA DE ATUAÇÕES ── */}
            

            {/* ── ATUAÇÕES DOS ALUNOS ── */}
            {/* <section id="atuacoes" className="px-8 xl:px-20 py-20 border-b border-white/10 bg-white/[0.02]">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Happenings de Alunos</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                            ATUAÇÕES DOS <span className="text-[#c8ff00]">ALUNOS</span>
                        </h2>
                    </div>
                    <SecondaryButton href="#" className="shrink-0">
                        Ver Todas as Atuações
                        <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </SecondaryButton>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {happenings.map((h, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#111] aspect-[4/3] cursor-pointer">
                            <img src={heroImg} alt={h.title}
                                className="absolute inset-0 h-full w-full object-cover brightness-40 transition duration-500 group-hover:brightness-[0.55] group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c8ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="font-black text-xs uppercase leading-tight tracking-wide text-white mb-1">{h.title}</h3>
                                <p className="text-[10px] text-white/40">{h.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* ── O QUE ESPERAR ── */}
            <section className="bg-[#111]px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="mb-12">
                    <div className="mb-3 flex items-center gap-2">
                        <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                        <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">O Que Esperar</span>
                    </div>
                    <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                        MÚSICA, ARTE E <span className="text-[#c8ff00]">EXPERIÊNCIA AO VIVO</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="flex gap-5 p-6 rounded-sm border border-white/10 bg-white/5 hover:border-[#c8ff00]/20 transition-colors duration-300">
                            <div className="shrink-0 mt-0.5">{f.icon}</div>
                            <div>
                                <h3 className="text-xs font-black uppercase tracking-widest text-[#c8ff00] mb-2">{f.title}</h3>
                                <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section id="programa" className="px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Programa</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                            PROGRAMA DE <span className="text-[#c8ff00]">ATUAÇÕES</span>
                        </h2>
                    </div>
                    {/* <SecondaryButton href="#" className="shrink-0">
                        Ver Programa Completo
                        <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </SecondaryButton> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {programme.map((p, i) => {
                        const dt = new Date(p.start_datetime)
                        const day = dt.getDate()
                        const time = dt.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })

                        return (
                            <div key={i} className="group relative flex flex-col rounded-sm border border-white/10 bg-black hover:border-[#c8ff00]/30 transition-colors duration-300 overflow-hidden cursor-pointer">
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video shrink-0">
                                    <img
                                        src={p.image ?? heroImg}
                                        alt={p.band_name}
                                        className="absolute inset-0 h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-[0.3] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <div className="absolute top-3 left-3">
                                        <div className="bg-[#c8ff00] text-black px-2 py-1 text-center inline-block">
                                            <span className="block text-base font-black leading-none">{day}</span>
                                            <span className="block text-[8px] font-black uppercase tracking-widest">JUL</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card face */}
                                <div className="p-4 flex flex-col gap-2 flex-1">
                                    <h3 className="font-black text-sm uppercase leading-tight tracking-wide text-white">{p.band_name}</h3>
                                    <div className="flex items-center gap-3 text-[10px] text-white/30 mt-auto pt-2 border-t border-white/10">
                                        <span className="flex items-center gap-1 shrink-0"><CalendarDays size={10} className="text-[#c8ff00]" /> {day} JUL</span>
                                        <span className="flex items-center gap-1 shrink-0"><Clock size={10} className="text-[#c8ff00]" /> {time}</span>
                                        <span className="flex items-center gap-1 truncate"><MapPin size={10} className="text-[#c8ff00] shrink-0" /> <span className="truncate">{p.location}</span></span>
                                    </div>
                                </div>

                                {/* Hover info panel — slides up from bottom */}
                                <div className="absolute inset-0 flex flex-col bg-black/96 border border-[#c8ff00]/20 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <h3 className="font-black text-sm uppercase leading-tight tracking-tight text-white">{p.band_name}</h3>
                                        <span className="text-[#c8ff00] text-lg leading-none shrink-0">✳</span>
                                    </div>
                                    <p className="text-xs text-white/55 leading-relaxed flex-1 overflow-y-auto">{p.description}</p>
                                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
                                        <div className="flex items-center gap-3 text-[10px] text-white/35">
                                            <span className="flex items-center gap-1 shrink-0"><CalendarDays size={10} className="text-[#c8ff00]" /> {day} JUL</span>
                                            <span className="flex items-center gap-1 shrink-0"><Clock size={10} className="text-[#c8ff00]" /> {time}</span>
                                            <span className="flex items-center gap-1 truncate"><MapPin size={10} className="text-[#c8ff00] shrink-0" /> <span className="truncate">{p.location}</span></span>
                                        </div>
                                        {(p.info_link || p.social_link) && (
                                            <div className="flex gap-2 mt-1">
                                                {p.info_link && (
                                                    <a
                                                        href={p.info_link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={e => e.stopPropagation()}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest border border-white/20 text-white/60 rounded-sm hover:border-white/40 hover:text-white transition-colors"
                                                    >
                                                        <ExternalLink size={10} /> Info
                                                    </a>
                                                )}
                                                {p.social_link && (
                                                    <a
                                                        href={p.social_link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={e => e.stopPropagation()}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest border border-white/20 text-white/60 rounded-sm hover:border-white/40 hover:text-white transition-colors"
                                                    >
                                                        <Share2 size={10} /> Socials
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            {/* ── CTA BANNER ── */}
            <section className="relative overflow-hidden pl-8 xl:pl-20 py-20">
                <div className="relative z-10 border border-white/10 bg-white/5 rounded-sm px-10 py-12 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
                   <div className="flex-1">
                        <h2 className="font-black uppercase leading-none tracking-tight text-white"
                            style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
                            QUERES VIVER A EXPERIÊNCIA<br />
                            <span className="text-[#c8ff00]">AO VIVO?</span>
                        </h2>
                        <p className="mt-4 text-xs text-white/40 max-w-sm">
                            Junta-te a nós no IPDJ, Faro, e faz parte de 15 dias de música,
                            arte e criatividade sem limites. Entrada livre!
                        </p>
                    </div>
                    <div className="shrink-0">
                        <PrimaryButton href={cta_button_link} size="lg">
                            {cta_button_text}
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </PrimaryButton>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Concertos
