
import { useState, useEffect } from 'react'
import { CalendarDays, MapPin, Music, ChevronDown, ArrowRight, Clock, ExternalLink, Share2 } from 'lucide-react'
import heroImg from '../assets/etic_algarve/FUNDO2.webp'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'

import { concertosFeaturedEvent as featuredEvent, concertosProgramme, concertosFeatures as features } from '../utils/metrics'
import { concertosApi } from '../services/api/concertos.api'
import type { ConcertosContract } from '../api/contracts'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange, resolveMediaUrl } from '../utils/dashboard'
import polaroid_concertos from '../assets/polaroids/polaroid_concertos.webp'

import SectionHeader from '../components/core/SectionHeader'
import EventCard from '../components/core/EventCard'
import CtaBannerSection from '../components/core/CtaBannerSection'
import HeroPageSection from '../components/core/HeroPageSection'

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
    const [activeCard, setActiveCard] = useState<number | null>(null)

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">

            {/* ── HERO ── */}
            <HeroPageSection
                polaroidSrc={polaroid_concertos}
                heroImgSrc={heroImg}
                heroImgAlt="Concertos & Happenings"
                zigzag={{ steps: 4, amplitude: 20, curve: 1.2 }}
            >
                <h1 className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
                    {main_white_title} <br />
                    <span className="text-[#c8ff00]">{main_green_title}</span>
                </h1>
                <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">{main_description}</p>
                <div className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
                    <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> {formatEventDateRange(start_event_date, end_event_date)}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
                    <span className="flex items-center gap-1.5"><Music size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
                </div>
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
            </HeroPageSection>

            {/* ── FEATURED EVENT — LIVE IN SIGHT ── */}
            <section id="live-in-sight" className="px-8 xl:px-20 py-10 border-b border-white/10">
                <div className="mb-12">
                    <SectionHeader
                        label="O grande evento"
                        title={<>LIVE IN <span className="text-[#c8ff00]">SIGHT</span></>}
                    />
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

            {/* ── O QUE ESPERAR ── */}
            <section className="bg-[#111]px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="mb-12">
                    <SectionHeader
                        label="O Que Esperar"
                        title={<>MÚSICA, ARTE E <span className="text-[#c8ff00]">EXPERIÊNCIA AO VIVO</span></>}
                    />
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

            {/* ── PROGRAMA DE ATUAÇÕES ── */}
            <section id="programa" className="px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <SectionHeader
                        label="Programa"
                        title={<>PROGRAMA DE <span className="text-[#c8ff00]">ATUAÇÕES</span></>}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {programme.map((p, i) => {
                        const dt = new Date(p.start_datetime)
                        const day = dt.getDate()
                        const time = dt.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
                        const imgSrc = p.image ? resolveMediaUrl(p.image) : heroImg
                        const isActive = activeCard === p.id
                        return (
                            <EventCard
                                key={i}
                                title={p.band_name}
                                imageSrc={imgSrc}
                                day={day}
                                time={time}
                                location={p.location}
                                isActive={isActive}
                                onToggle={() => setActiveCard(isActive ? null : p.id)}
                                expandedContent={
                                    <p className="text-xs text-white/55 leading-relaxed flex-1 overflow-y-auto">{p.description}</p>
                                }
                                footerLinks={(p.info_link || p.social_link) ? (
                                    <>
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
                                    </>
                                ) : undefined}
                            />
                        )
                    })}
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <CtaBannerSection
                headline={<>QUERES VIVER A EXPERIÊNCIA<br /><span className="text-[#c8ff00]">AO VIVO?</span></>}
                subtext={<p className="text-xs text-white/40 max-w-sm">Junta-te a nós no IPDJ, Faro, e faz parte de 15 dias de música, arte e criatividade sem limites. Entrada livre!</p>}
                rightSlot={
                    <div className="shrink-0">
                        <PrimaryButton href={cta_button_link} size="lg">
                            {cta_button_text}
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </PrimaryButton>
                    </div>
                }
            />
        </div>
    )
}

export default Concertos
