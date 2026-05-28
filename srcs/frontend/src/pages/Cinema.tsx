
import { useState, useEffect } from 'react'
import { CalendarDays, MapPin, ChevronDown, ArrowRight, Clock, Mic, Share2 } from 'lucide-react'
import heroImg from '../assets/etic_algarve/FUNDO2.webp'
import StaticZigzagPath from '../components/core/StaticZigzagPath'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'

import { projecoesMetrics as metrics, projecoesSessions, projecoesFeatures as features } from '../utils/metrics'
import { cinemaApi } from '../services/api/cinema.api'
import type { CinemaContract } from '../api/contracts'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange, resolveMediaUrl } from '../utils/dashboard'
import PageStars from '../components/core/PageStars'
import polaroid_cinema from '../assets/polaroids/polaroid_cinema.webp'
import HeroPolaroid from '../components/core/HeroPolaroid'
import leaf from '../assets/doodles/leaf3.webp'

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
                <HeroPolaroid src={polaroid_cinema} />

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
                            <PrimaryButton href="#programa">
                                Ver Programa
                                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </PrimaryButton>
                            <SecondaryButton href="#sobre">
                                Sobre as Projeções
                                <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                            </SecondaryButton>
                        </div>
                    </div>

                    {/* Right — hero image */}
                    <div className="hidden lg:block flex-1 relative overflow-hidden lg:min-h-0 -mr-8 xl:-mr-20">
                        <img src={heroImg} alt="Projeções Vídeo" className="absolute inset-0 h-full w-full object-cover brightness-75" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                        <StaticZigzagPath
                            from={{ x: 20, y: 5 }}
                            to={{ x: 80, y: 95 }}
                            steps={3}
                            amplitude={25}
                            curve={1.4}
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

            {/* ── INFO BAR ── */}
            <section className="border-t border-b border-white/10 bg-white/5 px-8 xl:px-20 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 ml-12 mr-12">
                    {metrics.map((m, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="text-[#c8ff00] opacity-70">{m.icon}</div>
                                {m.value && (
                                    <p className="text-4xl font-black leading-none text-white">{m.value}</p>
                                )}
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#c8ff00] mb-1">{m.label}</p>
                            <p className="text-xs text-white/40 leading-relaxed mt-2">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PROGRAMA DE PROJEÇÕES ── */}
            <section id="programa" className="px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Programa de Projeções</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                            SESSÕES DO <span className="text-[#c8ff00]">FESTIVAL</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sessions.map((s, i) => {
                        const dt = new Date(s.start_datetime)
                        const day = dt.getDate()
                        const time = dt.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
                        const imgSrc = s.image ? resolveMediaUrl(s.image) : heroImg

                        return (
                            <div key={i} className="group relative flex flex-col rounded-sm border border-white/10 bg-black hover:border-[#c8ff00]/30 transition-colors duration-300 overflow-hidden cursor-pointer">
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video shrink-0">
                                    <img src={imgSrc} alt={s.title}
                                        className="absolute inset-0 h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-[0.3] group-hover:scale-105" />
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
                                    <h3 className="font-black text-sm uppercase leading-tight tracking-wide text-white">{s.title}</h3>
                                    <div className="flex items-center gap-3 text-[10px] text-white/30 mt-auto pt-2 border-t border-white/10">
                                        <span className="flex items-center gap-1"><Clock size={10} className="text-[#c8ff00]" /> {time}</span>
                                        <span className="flex items-center gap-1 truncate"><MapPin size={10} className="text-[#c8ff00] shrink-0" /> <span className="truncate">{s.location}</span></span>
                                    </div>
                                </div>

                                {/* Hover info panel */}
                                <div className="absolute inset-0 flex flex-col bg-black/96 border border-[#c8ff00]/20 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <h3 className="font-black text-sm uppercase leading-tight tracking-tight text-white">{s.title}</h3>
                                        <span className="text-[#c8ff00] text-lg leading-none shrink-0">✳</span>
                                    </div>
                                    {s.director_team && (
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#c8ff00] mb-2">{s.director_team}</p>
                                    )}
                                    <p className="text-xs text-white/55 leading-relaxed flex-1 overflow-y-auto">{s.synopsis}</p>
                                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
                                        <div className="flex items-center gap-3 text-[10px] text-white/35">
                                            <span className="flex items-center gap-1"><Clock size={10} className="text-[#c8ff00]" /> {time}</span>
                                            <span className="flex items-center gap-1 truncate"><MapPin size={10} className="text-[#c8ff00] shrink-0" /> <span className="truncate">{s.location}</span></span>
                                        </div>
                                        {s.social_link && (
                                            <div className="flex gap-2 mt-1">
                                                <a
                                                    href={s.social_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={e => e.stopPropagation()}
                                                    className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest border border-white/20 text-white/60 rounded-sm hover:border-white/40 hover:text-white transition-colors"
                                                >
                                                    <Share2 size={10} /> Socials
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* ── SOBRE AS PROJEÇÕES ── */}
            <section id="sobre" className="px-8 xl:px-20 py-20 border-b border-white/10 bg-white/[0.02]">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left — text */}
                    <div className="flex-1">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Sobre as Projeções</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight mb-6">
                            HISTÓRIAS QUE GANHAM VIDA<br /><span className="text-[#c8ff00]">NO GRANDE ECRÃ</span>
                        </h2>
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
            <section className="relative overflow-hidden pl-8 xl:pl-20 py-20">
                <div className="relative z-10 border border-white/10 bg-white/5 rounded-sm px-10 py-12 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
                    <div className="flex-1">
                        <h2 className="font-black uppercase leading-none tracking-tight text-white"
                            style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
                            APOIA O  <span className="text-[#c8ff00]">TALENTO.</span><br />
                            VEM<span className="text-[#c8ff00]"> VER.</span>
                        </h2>
                        <p className="mt-4 text-xs text-white/40">A tua presença inspira o futuro do cinema e da televisão.</p>
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

export default Cinema
