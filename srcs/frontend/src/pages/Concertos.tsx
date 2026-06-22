
import { useState, useEffect } from 'react'
import { CalendarDays, MapPin, Music, ChevronDown, ArrowRight, Clock, ExternalLink, Share2 } from 'lucide-react'
import heroImg from '../assets/etic_algarve/FUNDO2.webp'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'
import { motion } from 'framer-motion'

import { concertosFeatures as features } from '../utils/metrics'
import { concertosApi } from '../services/api/concertos.api'
import type { ConcertosContract } from '../api/contracts'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange, resolveMediaUrl } from '../utils/dashboard'
import polaroid_concertos from '../assets/polaroids/polaroid_concertos.webp'

import SectionHeader from '../components/core/SectionHeader'
import EventCard from '../components/core/EventCard'
import CtaBannerSection from '../components/core/CtaBannerSection'
import HeroPageSection from '../components/core/HeroPageSection'
import { fadeUp, stagger, cardItem, heroStagger, heroItem, viewport } from '../utils/animations'

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

    const [programme, setProgramme] = useState<ConcertosContract[]>([])
    useEffect(() => { concertosApi.getConcertos().then(data => setProgramme([...data].sort((a, b) => new Date(a.start_datetime).getTime() - new Date(b.start_datetime).getTime()))) }, [])
    const [activeCard, setActiveCard] = useState<number | null>(null)

    const featured = programme[0]
    const featuredDt = featured ? new Date(featured.start_datetime) : null
    const featuredDay = featuredDt ? featuredDt.getDate() : ''
    const featuredMonth = featuredDt ? featuredDt.toLocaleString('pt-PT', { month: 'short' }).toUpperCase().replace('.', '') : ''
    const featuredTime = featuredDt ? featuredDt.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }) : ''

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden relative">

            {/* ── HERO ── */}
            <HeroPageSection
                polaroidSrc={polaroid_concertos}
                heroImgSrc={heroImg}
                heroImgAlt="Concertos & Happenings"
                zigzag={{ steps: 7, amplitude: 10, curve: 0.5, dashLength: 5, dashGap: 9 }}
            >
                <motion.div variants={heroStagger} initial="hidden" animate="visible">
                    <motion.h1 variants={heroItem} className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
                        {main_white_title} <br />
                        <span className="text-[#c8ff00]">{main_green_title}</span>
                    </motion.h1>
                    <motion.p variants={heroItem} className="mb-6 max-w-md text-sm leading-relaxed text-white">{main_description}</motion.p>
                    <motion.div variants={heroItem} className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
                        <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> {formatEventDateRange(start_event_date, end_event_date)}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
                        <span className="flex items-center gap-1.5"><Music size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
                    </motion.div>
                    <motion.div variants={heroItem} className="flex flex-wrap gap-3">
                        <PrimaryButton href="#programa">
                            <Music size={14} /> Ver Programa
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </PrimaryButton>
                        <SecondaryButton href="#live-in-sight">
                            Live in Sight
                            <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                        </SecondaryButton>
                    </motion.div>
                </motion.div>
            </HeroPageSection>

            {/* ── FEATURED EVENT — LIVE IN SIGHT ── */}
            {featured && (
            <motion.section id="live-in-sight" className="px-8 xl:px-20 py-10 border-b border-white/10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <div className="mb-12">
                    <SectionHeader
                        label="O grande evento"
                        title={<>LIVE IN <span className="text-[#c8ff00]">SIGHT</span></>}
                    />
                </div>

                <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden flex flex-col lg:flex-row">
                    {/* Left — image + date */}
                    <div className="relative lg:w-80 xl:w-96 min-h-56 shrink-0">
                        <img src={featured.image ? resolveMediaUrl(featured.image) : heroImg} alt={featured.band_name} className="absolute inset-0 h-full w-full object-cover brightness-60" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                        <div className="absolute top-5 left-5">
                            <div className="bg-[#c8ff00] text-black px-3 py-2 text-center inline-block">
                                <span className="block text-2xl font-black leading-none">{featuredDay}</span>
                                <span className="block text-[10px] font-black uppercase tracking-widest">{featuredMonth}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-5 left-5 flex flex-col gap-1.5">
                            <span className="flex items-center gap-1.5 text-[11px] text-white/70">
                                <Clock size={11} className="text-[#c8ff00]" /> {featuredTime}
                            </span>
                            <span className="flex items-center gap-1.5 text-[11px] text-white/70">
                                <MapPin size={11} className="text-[#c8ff00]" /> {featured.location}
                            </span>
                        </div>
                    </div>

                    {/* Right — info */}
                    <div className="flex-1 p-8 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[#c8ff00] text-sm leading-none">✦</span>
                            <span className="text-[#c8ff00] text-[10px] font-black tracking-[0.25em] uppercase">EVENTO DE ABERTURA</span>
                        </div>
                        <h2 className="font-black text-4xl xl:text-5xl uppercase leading-none tracking-tight mb-2">
                            {featured.band_name}
                        </h2>
                        <div className="h-[1px] w-12 bg-[#c8ff00] opacity-50 mb-4" />
                        <p className="text-xs leading-relaxed text-white/40 max-w-md mb-4">
                            {featured.description}
                        </p>
                        <div className="flex items-center justify-between gap-2 mt-auto pt-5">
                            <div className="flex flex-wrap items-center gap-2">
                                {(['CONCERTO', 'ENTRADA LIVRE'] as const).map((b, i) => (
                                    <span key={i}
                                        className="block px-2 py-1 text-[10px] font-black uppercase tracking-widest text-black rounded-sm text-center w-[120px]"
                                        style={{ backgroundColor: i === 0 ? '#c8ff00' : 'rgba(255,255,255,0.65)' }}>
                                        {b}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                {featured.info_link && (
                                    <a
                                        href={featured.info_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-black uppercase tracking-widest border border-white/20 text-white/60 rounded-sm hover:border-white/40 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={11} /> Info
                                    </a>
                                )}
                                {featured.social_link && (
                                    <a
                                        href={featured.social_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-black uppercase tracking-widest border border-white/20 text-white/60 rounded-sm hover:border-white/40 hover:text-white transition-colors"
                                    >
                                        <Share2 size={11} /> Socials
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
            )}

            {/* ── O QUE ESPERAR ── */}
            <motion.section className="bg-[#111]px-8 xl:px-20 py-20 border-b border-white/10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <div className="mb-12">
                    <SectionHeader
                        label="O Que Esperar"
                        title={<>MÚSICA, ARTE E <span className="text-[#c8ff00]">EXPERIÊNCIA AO VIVO</span></>}
                    />
                </div>

                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <motion.div key={i} variants={cardItem} className="flex gap-5 p-6 rounded-sm border border-white/10 bg-white/5 hover:border-[#c8ff00]/20 transition-colors duration-300">
                            <div className="shrink-0 mt-0.5">{f.icon}</div>
                            <div>
                                <h3 className="text-xs font-black uppercase tracking-widest text-[#c8ff00] mb-2">{f.title}</h3>
                                <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* ── PROGRAMA DE ATUAÇÕES ── */}
            <motion.section id="programa" className="px-8 xl:px-20 py-20 border-b border-white/10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <SectionHeader
                        label="Programa"
                        title={<>PROGRAMA DE <span className="text-[#c8ff00]">ATUAÇÕES</span></>}
                    />
                </div>

                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {programme.map((p, i) => {
                        const dt = p.start_datetime ? new Date(p.start_datetime) : null
                        const day = dt ? dt.getDate() : undefined
                        const month = dt ? dt.toLocaleString('pt-PT', { month: 'short' }).toUpperCase().replace('.', '') : undefined
                        const time = dt ? dt.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }) : undefined
                        const imgSrc = p.image ? resolveMediaUrl(p.image) : heroImg
                        const isActive = activeCard === p.id
                        return (
                            <motion.div key={i} variants={cardItem}>
                                <EventCard
                                    title={p.band_name}
                                    imageSrc={imgSrc}
                                    day={day}
                                    month={month}
                                    time={time}
                                    location={p.location || undefined}
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
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.section>

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
