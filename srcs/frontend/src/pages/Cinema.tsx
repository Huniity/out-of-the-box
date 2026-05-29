
import { useState, useEffect } from 'react'
import { CalendarDays, MapPin, ChevronDown, ArrowRight, Mic, Share2 } from 'lucide-react'
import heroImg from '../assets/etic_algarve/FUNDO2.webp'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'

import { projecoesMetrics as metrics, projecoesSessions, projecoesFeatures as features } from '../utils/metrics'
import { cinemaApi } from '../services/api/cinema.api'
import type { CinemaContract } from '../api/contracts'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange, resolveMediaUrl } from '../utils/dashboard'
import polaroid_cinema from '../assets/polaroids/polaroid_cinema.webp'

import SectionHeader from '../components/core/SectionHeader'
import MetricsBar from '../components/core/MetricsBar'
import EventCard from '../components/core/EventCard'
import CtaBannerSection from '../components/core/CtaBannerSection'
import HeroPageSection from '../components/core/HeroPageSection'

const Cinema = () => {
        const {
            main_white_title,
            main_green_title,
            main_description,
            cta_button_text,
            cta_button_link,
            start_event_date,
            end_event_date,
        } = usePageData('cinema');

    const [sessions, setSessions] = useState<CinemaContract[]>(projecoesSessions as any)
    useEffect(() => { cinemaApi.getSessions().then(setSessions as any) }, [])
    const [activeCard, setActiveCard] = useState<number | null>(null)

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">

            {/* ── HERO ── */}
            <HeroPageSection
                polaroidSrc={polaroid_cinema}
                heroImgSrc={heroImg}
                heroImgAlt="Projeções Vídeo"
                zigzag={{ steps: 3, amplitude: 25, curve: 1.4 }}
            >
                <h1 className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
                    {main_white_title}<br />
                    <span className="text-[#c8ff00]">{main_green_title}</span>
                </h1>
                <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">{main_description}</p>
                <div className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
                    <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> {formatEventDateRange(start_event_date, end_event_date)}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
                    <span className="flex items-center gap-1.5"><Mic size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    <PrimaryButton href="#programa">
                        Ver Programa
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </PrimaryButton>
                    <SecondaryButton href="#sobre">
                        Sobre as Projeções
                        <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                    </SecondaryButton>
                </div>
            </HeroPageSection>

            {/* ── INFO BAR ── */}
            <MetricsBar metrics={metrics} />

            {/* ── PROGRAMA DE PROJEÇÕES ── */}
            <section id="programa" className="px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <SectionHeader
                        label="Programa de Projeções"
                        title={<>SESSÕES DO <span className="text-[#c8ff00]">FESTIVAL</span></>}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sessions.map((s, i) => {
                        const dt = new Date(s.start_datetime)
                        const day = dt.getDate()
                        const time = dt.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
                        const imgSrc = s.image ? resolveMediaUrl(s.image) : heroImg
                        const isActive = activeCard === s.id
                        return (
                            <EventCard
                                key={i}
                                title={s.title}
                                imageSrc={imgSrc}
                                day={day}
                                time={time}
                                location={s.location}
                                isActive={isActive}
                                onToggle={() => setActiveCard(isActive ? null : s.id)}
                                expandedContent={
                                    <>
                                        {s.director_team && (
                                            <p className="text-[10px] font-black uppercase tracking-widest text-[#c8ff00] mb-2">{s.director_team}</p>
                                        )}
                                        <p className="text-xs text-white/55 leading-relaxed flex-1 overflow-y-auto">{s.synopsis}</p>
                                    </>
                                }
                                footerLinks={s.social_link ? (
                                    <a
                                        href={s.social_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={e => e.stopPropagation()}
                                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest border border-white/20 text-white/60 rounded-sm hover:border-white/40 hover:text-white transition-colors"
                                    >
                                        <Share2 size={10} /> Socials
                                    </a>
                                ) : undefined}
                            />
                        )
                    })}
                </div>
            </section>

            {/* ── SOBRE AS PROJEÇÕES ── */}
            <section id="sobre" className="px-8 xl:px-20 py-20 border-b border-white/10 bg-white/[0.02]">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left — text */}
                    <div className="flex-1">
                        <SectionHeader
                            label="Sobre as Projeções"
                            title={<>HISTÓRIAS QUE GANHAM VIDA<br /><span className="text-[#c8ff00]">NO GRANDE ECRÃ</span></>}
                            className="mb-6"
                        />
                        <div className="h-[2px] w-16 bg-[#c8ff00] opacity-50 mb-6" />
                        <p className="text-sm leading-relaxed text-white/50 mb-4 max-w-md">
                            Os alunos finalistas apresentam os seus projetos finais, desenvolvidos
                            ao longo do curso, em sessões públicas de cinema e televisão.
                        </p>
                        <p className="text-sm leading-relaxed text-white/50 max-w-md">
                            Uma oportunidade única para descobrir novas vozes, talentos e
                            perspetivas do audiovisual.
                        </p>
                    </div>

                    {/* Right — features */}
                    <div className="flex-1 flex flex-col gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="flex gap-5 p-5 rounded-sm border border-white/10 bg-black hover:border-[#c8ff00]/20 transition-colors duration-300">
                                <div className="shrink-0 mt-0.5">{f.icon}</div>
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest text-[#c8ff00] mb-2">{f.title}</h3>
                                    <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <CtaBannerSection
                headline={<>APOIA O <span className="text-[#c8ff00]">TALENTO.</span><br />VEM<span className="text-[#c8ff00]"> VER.</span></>}
                subtext={<p className="text-xs text-white/40">A tua presença inspira o futuro do cinema e da televisão.</p>}
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

export default Cinema
