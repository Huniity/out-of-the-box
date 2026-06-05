

import { useState, useEffect, useMemo } from 'react'
import { CalendarDays, MapPin, Ticket, ArrowRight, ChevronDown, Clock, Timer, Users } from 'lucide-react'
import heroImg from '../assets/etic_algarve/FUNDO2.webp'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'
import { motion } from 'framer-motion'

import { workshopsMetrics as metrics, workshopsAreaColor as areaColor, workshopsAreaLabel as areaLabel, workshopsAreas as areas, workshopFilterAreas as filterAreas } from '../utils/metrics'
import { workshopsApi } from '../services/api/workshops.api'
import type { WorkshopsContract } from '../api/contracts'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange } from '../utils/dashboard'
import polaroid_workshops from '../assets/polaroids/polaroid_workshops.webp'

import SectionHeader from '../components/core/SectionHeader'
import MetricsBar from '../components/core/MetricsBar'
import FilterBox from '../components/core/FilterBox'
import CtaBannerSection from '../components/core/CtaBannerSection'
import HeroPageSection from '../components/core/HeroPageSection'
import { fadeUp, stagger, cardItem, heroStagger, heroItem, viewport } from '../utils/animations'


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
    useEffect(() => { workshopsApi.getWorkshops().then(data => setWorkshops(data)) }, [])

    const [activeArea, setActiveArea] = useState('TODAS')

    const filtered = useMemo(
        () => activeArea === 'TODAS' ? workshops : workshops.filter(w => w.category === activeArea),
        [workshops, activeArea]
    )

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden relative">

            {/* ── HERO ── */}
            <HeroPageSection
                polaroidSrc={polaroid_workshops}
                heroImgSrc={heroImg}
                heroImgAlt="Workshops"
                zigzag={{ from: { x: 25, y: 2 }, to: { x: 75, y: 98 }, steps: 4, amplitude: 22, curve: 1.4 }}
            >
                <motion.div variants={heroStagger} initial="hidden" animate="visible">
                    <motion.h1 variants={heroItem} className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
                        {main_white_title}<br />
                        <span className="text-[#c8ff00]">{main_green_title}</span>
                    </motion.h1>
                    <motion.p variants={heroItem} className="mb-6 max-w-md text-sm leading-relaxed text-white">{main_description}</motion.p>
                    <motion.div variants={heroItem} className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
                        <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> {formatEventDateRange(start_event_date, end_event_date)}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
                        <span className="flex items-center gap-1.5"><Ticket size={14} className="text-[#c8ff00]" /> Entrada Grátis</span>
                    </motion.div>
                    <motion.div variants={heroItem} className="flex flex-wrap gap-3">
                        <PrimaryButton href="#programa">
                            Ver Workshops
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </PrimaryButton>
                        <SecondaryButton href="#areas">
                            Explorar Áreas
                            <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                        </SecondaryButton>
                    </motion.div>
                </motion.div>
            </HeroPageSection>

            {/* ── METRICS BAR ── */}
            <MetricsBar metrics={metrics} />

            {/* ── FILTER BAR ── */}
            <section className="px-8 xl:px-20 py-8">
                <FilterBox
                    categories={filterAreas}
                    active={activeArea}
                    onChange={setActiveArea}
                    labelMap={areaLabel}
                    spanFirstFull
                />
            </section>

            {/* ── PROGRAMA DE WORKSHOPS ── */}
            <motion.section id="programa" className="px-8 xl:px-20 py-20 border-b border-white/10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <SectionHeader
                            label="APRENDER COM A ETIC_ALGARVE"
                            title={<>PROGRAMA DE <span className="text-[#c8ff00]">WORKSHOPS</span></>}
                        />
                    </div>
                    <p className="text-sm text-white/40 max-w-xs leading-relaxed lg:text-right">
                        Sessões práticas organizadas por área formativa e equipa responsável.<br />
                        Escolhe a tua e garante já o teu lugar.
                    </p>
                </div>

                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {filtered.map((w, i) => {
                        const cat = w.category ?? ''
                        const color = areaColor[cat] ?? '#c8ff00'
                        const areaObj = areas.find(a => a.code === cat)
                        const dt = w.start_datetime ? new Date(w.start_datetime) : null
                        const day = dt ? dt.getDate() : null
                        const month = dt ? dt.toLocaleString('pt-PT', { month: 'short' }).toUpperCase().replace('.', '') : null
                        const time = dt ? dt.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }) : null

                        return (
                            <motion.div
                                key={i}
                                variants={cardItem}
                                className="group flex flex-col lg:flex-row lg:items-center gap-4 p-5 pr-6 lg:pr-5 lg:h-[200px] rounded-sm border bg-white/[0.02] hover:bg-white/5 transition-all duration-300 cursor-pointer min-h-[290px] lg:min-h-0"
                                style={{ borderColor: `${color}30` }}
                            >
                                {/* Mobile: top row (icon+badge left, date/time right).
                                    Desktop: lg:contents dissolves this wrapper so children
                                    participate directly in the flex-row and can be reordered. */}
                                <div className="flex items-start justify-between gap-3 lg:contents">
                                    {/* Area icon + badge — desktop order 1 */}
                                    <div className="shrink-0 flex flex-col items-center gap-1.5 w-20 lg:w-24 lg:order-1">
                                        <div className="w-14 h-14 lg:w-20 lg:h-20 flex items-center justify-center">
                                            {areaObj?.icon}
                                        </div>
                                        {cat && (
                                            <span
                                                className="block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-black rounded-sm text-center w-full truncate"
                                                style={{ backgroundColor: color }}
                                            >{areaLabel[cat] ?? cat}</span>
                                        )}
                                    </div>

                                    {/* Date + Time + Sala + chips — desktop order 3 */}
                                    <div className="shrink-0 flex flex-col items-end gap-2 text-right max-w-[52%] lg:max-w-none lg:order-3">
                                        <span className="flex items-center gap-1.5 text-sm font-black text-white/60">
                                            <CalendarDays size={14} className="text-[#c8ff00]" />
                                            {day && month ? `${day} ${month}` : 'Em Breve'}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-sm font-black text-white/60">
                                            <Clock size={14} className="text-[#c8ff00]" />
                                            {time || 'Em Breve'}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-white/40 leading-snug">
                                            <MapPin size={12} className="text-[#c8ff00] shrink-0" />
                                            <span className="text-right">{w.location || 'Em Breve'}</span>
                                        </span>
                                        {(w.duration || w.max_participants) && (
                                            <div className="flex flex-wrap items-center justify-end gap-1 mt-1">
                                                {w.duration && (
                                                    <span className="flex items-center gap-1 text-[10px] text-white/35 border border-white/10 rounded-sm px-1.5 py-0.5">
                                                        <Timer size={10} className="text-[#c8ff00]" /> {w.duration}
                                                    </span>
                                                )}
                                                {w.max_participants && (
                                                    <span className="flex items-center gap-1 text-[10px] text-white/35 border border-white/10 rounded-sm px-1.5 py-0.5">
                                                        <Users size={10} className="text-[#c8ff00]" /> {w.max_participants} vagas
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Info — desktop order 2 */}
                                <div className="flex-1 min-w-0 lg:order-2">
                                    <h3 className="font-black uppercase text-sm tracking-wide text-white leading-tight mb-1">{w.title}</h3>
                                    <p className="text-xs text-white/40 line-clamp-3">{w.description}</p>
                                </div>

                                {/* Arrow — desktop order 4 */}
                                <div className="shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c8ff00]/50 group-hover:text-[#c8ff00] transition-all duration-300 self-end lg:self-auto lg:order-4">
                                    <a href={w.registration_link ?? '#'} target="_blank" rel="noopener noreferrer">
                                        <ArrowRight size={12} />
                                    </a>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <p className="mt-8 flex items-center gap-2 text-xs text-white/30">
                    <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] shrink-0">i</span>
                    As vagas são limitadas. Inscreve-te com antecedência para garantir o teu lugar.
                </p>
            </motion.section>

            {/* ── ÁREAS FORMATIVAS E EQUIPAS ── */}
            <motion.section id="areas" className="px-8 xl:px-20 py-20 border-b border-white/10 bg-white/[0.02]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <div>
                    <SectionHeader
                        label="CONHECER AS ÁREAS FORMATIVAS"
                        title={<>ÁREAS FORMATIVAS <span className="text-[#c8ff00]">E EQUIPAS</span></>}
                    />
                </div>
                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                    {areas.map((a, i) => (
                        <motion.div key={i} variants={cardItem} className="flex flex-col items-center text-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center">
                                {a.icon}
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-wide text-white leading-tight">{a.name}</p>
                            <p className="text-[10px] text-white/35 leading-relaxed">{a.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* ── CTA BANNER ── */}
            <CtaBannerSection
                alignRight
                headline={<>APRENDE COM AS EQUIPAS.<br />CRIA <span className="text-[#c8ff00]">SEM LIMITES.</span></>}
                subtext={<p className="text-sm text-white/50 leading-relaxed">Workshops intensivos para desafiar ideias, ganhar novas skills e transformar criatividade em ação.</p>}
                rightSlot={
                    <div className="flex flex-col gap-5 max-w-xs">
                        <PrimaryButton href={cta_button_link} size="lg" className="self-start">
                            {cta_button_text}
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </PrimaryButton>
                    </div>
                }
            />

        </div>
    )
}

export default Workshops
