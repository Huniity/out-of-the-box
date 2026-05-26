

import { useState, useEffect } from 'react'
import { CalendarDays, MapPin, Ticket, ArrowRight, ChevronDown, Clock, Zap, Camera, Film, Music2, Code2, Megaphone, Gamepad2, Tv2, X } from 'lucide-react'
import heroImg from '../assets/FUNDO2.webp'
import StaticZigzagPath from '../components/core/StaticZigzagPath'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'

import { workshopsMetrics as metrics, workshopsAreaColor as areaColor, workshopsAreas as areas, workshopFilterAreas as filterAreas } from '../utils/metrics'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange } from '../utils/dashboard'
import { workshopsApi } from '../services/api/workshops.api'
import type { WorkshopsContract } from '../api/contracts'

const Workshops = () => {
    const {
        main_white_title,
        main_green_title,
        main_description,
        cta_button_text,
        cta_button_link,
        start_event_date,
        end_event_date,
    } = usePageData('workshops');

    const [workshops, setWorkshops] = useState<WorkshopsContract[]>([])
    useEffect(() => {
        workshopsApi.getWorkshops().then(setWorkshops)
    }, [])

    const [activeArea, setActiveArea] = useState('TODAS')

    const filtered = activeArea === 'TODAS'
        ? workshops
        : workshops.filter((w: any) => w.area && (w.area === activeArea || w.area.startsWith(activeArea.split(' ')[0])))

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">

            {/* ── HERO ── */}
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
                            <span className="flex items-center gap-1.5"><Ticket size={14} className="text-[#c8ff00]" /> Entrada Grátis</span>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <PrimaryButton href="#programa">
                                Ver Workshops
                                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </PrimaryButton>
                            <SecondaryButton href="#areas">
                                Explorar Áreas
                                <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                            </SecondaryButton>
                        </div>
                    </div>

                    {/* Right — hero image */}
                    <div className="hidden lg:block flex-1 relative overflow-hidden lg:min-h-0 -mr-8 xl:-mr-20">
                        <img src={heroImg} alt="Workshops" className="absolute inset-0 h-full w-full object-cover brightness-75" />
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

            {/* ── METRICS BAR ── */}
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

            {/* ── FILTER BAR ── */}
            <section className="border-b border-white/10 px-8 xl:px-20 py-4 bg-black/90 sticky top-0 z-20 backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mr-2 shrink-0">Filtrar por:</span>
                    {filterAreas.map(area => (
                        <button
                            key={area}
                            onClick={() => setActiveArea(area)}
                            className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-sm border transition-colors duration-200 ${activeArea === area
                                ? 'bg-[#c8ff00] border-[#c8ff00] text-black'
                                : 'bg-transparent border-white/20 text-white/50 hover:border-white/40 hover:text-white'
                                }`}
                        >
                            {area}
                        </button>
                    ))}
                    {activeArea !== 'TODAS' && (
                        <button
                            onClick={() => setActiveArea('TODAS')}
                            className="ml-auto flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors duration-200"
                        >
                            <X size={11} /> Limpar Filtros
                        </button>
                    )}
                </div>
            </section>

            {/* ── PROGRAMA DE WORKSHOPS ── */}
            <section id="programa" className="px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div className="flex items-center gap-3">
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                            PROGRAMA DE <span className="text-[#c8ff00]">WORKSHOPS</span>
                        </h2>
                    </div>
                    <p className="text-sm text-white/40 max-w-xs leading-relaxed lg:text-right">
                        Sessões práticas organizadas por área formativa e equipa responsável.<br />
                        Escolhe a tua e garante já o teu lugar.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {filtered.map((w: any, i) => {
                        const wArea = w.area || 'GERAL'
                        const color = areaColor[wArea] ?? '#c8ff00'
                        const areaObj = areas.find(a => a.name === wArea || wArea.startsWith(a.name.split(' ')[0]))

                        const date = w.start_datetime ? new Date(w.start_datetime) : null
                        const wDay = date ? date.getDate() : '--'
                        const wMonth = date ? date.toLocaleString('pt-PT', { month: 'short' }) : ''
                        const wTime = date ? date.toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit' }) : '--:--'

                        return (
                            <div
                                key={i}
                                className="group flex items-center gap-4 p-5 rounded-sm border bg-white/[0.02] hover:bg-white/5 transition-all duration-300 cursor-pointer"
                                style={{ borderColor: `${color}30` }}
                            >
                                {/* Number + Icon */}
                                <div className="shrink-0 flex flex-col items-center gap-1">
                                    <span className="text-[10px] font-black text-white/25 leading-none tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ background: `${color}15`, border: `1.5px solid ${color}50`, color }}
                                    >
                                        {areaObj?.icon}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-black uppercase text-sm tracking-wide text-white leading-tight mb-1">{w.title}</h3>
                                    <p className="text-xs text-white/40 mb-2 truncate">{w.description || w.desc}</p>
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        <span
                                            className="px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm"
                                            style={{ background: `${color}25`, color }}
                                        >{wArea}</span>
                                        <span className="px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm bg-white/10 text-white/50">{w.mentor_name || w.team}</span>
                                    </div>
                                </div>

                                {/* Date + Time */}
                                <div className="shrink-0 flex flex-col items-end gap-1.5 text-right">
                                    <span className="flex items-center gap-1 text-[11px] text-white/60">
                                        <CalendarDays size={11} className="text-[#c8ff00]" /> {wDay} {wMonth}
                                    </span>
                                    <span className="flex items-center gap-1 text-[11px] text-white/60">
                                        <Clock size={11} className="text-[#c8ff00]" /> {wTime}
                                    </span>
                                </div>

                                {/* Arrow */}
                                <div className="shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c8ff00]/50 group-hover:text-[#c8ff00] transition-all duration-300">
                                    <ArrowRight size={12} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <p className="mt-8 flex items-center gap-2 text-xs text-white/30">
                    <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] shrink-0">i</span>
                    As vagas são limitadas. Inscreve-te com antecedência para garantir o teu lugar.
                </p>
            </section>

            {/* ── ÁREAS FORMATIVAS E EQUIPAS ── */}
            <section id="areas" className="px-8 xl:px-20 py-20 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-12">
                    <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                        ÁREAS FORMATIVAS <span className="text-[#c8ff00]">E EQUIPAS</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                    {areas.map((a, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-3">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center"
                                style={{ background: `${a.color}15`, border: `1.5px solid ${a.color}40`, color: a.color }}
                            >
                                {a.icon}
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-wide text-white leading-tight">{a.name}</p>
                            <p className="text-[10px] text-white/35 leading-relaxed">{a.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="relative overflow-hidden pr-8 xl:pr-20 py-20">
                <div className="relative z-10 border border-white/10 bg-white/5 rounded-sm px-10 py-12 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
                    <div className="flex-1">
                        <h2 className="font-black uppercase leading-none tracking-tight text-white"
                            style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
                            APRENDE COM AS EQUIPAS.<br />
                            CRIA <span className="text-[#c8ff00]">SEM LIMITES.</span>
                        </h2>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Workshops intensivos para desafiar ideias, ganhar novas skills
                            e transformar criatividade em ação.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 max-w-xs">
                        <PrimaryButton href={cta_button_link} size="lg" className="self-start">
                            {cta_button_text}
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </PrimaryButton>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Workshops
