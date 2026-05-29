
import { useState, useEffect } from 'react'
import { ChevronRight, ChevronDown, ArrowRight } from 'lucide-react'
import heroImg from '../assets/etic_algarve/FUNDO2.webp'
import '../styles/leaves.css'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'
import { usePageData } from '../hooks/usePageData'

import { semanaLabiaMetrics as metrics, semanaLabiaProjects, semanaLabiaReasons as reasons, semanaLabiaProcessSteps as processSteps } from '../utils/metrics'
import { semanaLabiaApi } from '../services/api/semanaLabia.api'
import polaroid_semanalabias from '../assets/polaroids/polaroid_semanalabias.webp'

import SectionHeader from '../components/core/SectionHeader'
import MetricsBar from '../components/core/MetricsBar'
import CtaBannerSection from '../components/core/CtaBannerSection'
import HeroPageSection from '../components/core/HeroPageSection'


const SemanaLabia = () => {
    const {
        main_white_title,
        main_green_title,
        main_description,
        cta_button_text,
        cta_button_link,
    } = usePageData('semana-labia');

    const [projects, setProjects] = useState(semanaLabiaProjects)
    useEffect(() => { semanaLabiaApi.getProjects().then(setProjects as any) }, [])

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            {/* ── HERO ── */}
            <HeroPageSection
                polaroidSrc={polaroid_semanalabias}
                heroImgSrc={heroImg}
                heroImgAlt="Semana Lábia 2026"
                noLeaf
                zigzag={{
                    from: { x: 70, y: 0 },
                    to: { x: 2, y: 100 },
                    steps: 1,
                    amplitude: 10,
                    curve: 0.6,
                    strokeWidth: 5,
                    dashLength: 18,
                    dashGap: 12,
                    opacity: 0.9,
                }}
            >
                <h1 className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
                    {main_white_title}{' '}
                    <span className="text-[#c8ff00]">{main_green_title}</span>
                </h1>
                <p className="mb-8 max-w-md text-sm leading-relaxed text-white/50">
                    {main_description}
                </p>
                <div className="flex flex-wrap gap-3">
                    <PrimaryButton href="#sobre">
                        O que é a lábia?
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </PrimaryButton>
                    <SecondaryButton href="#projetos">
                        Ver projetos
                        <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                    </SecondaryButton>
                </div>
            </HeroPageSection>

            {/* ── METRICS BAR ── */}
            <MetricsBar metrics={metrics} />

            {/* ── O QUE É ── */}
            <section id="sobre" className="px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left */}
                    <div className="flex-1">
                        <SectionHeader
                            label="Sobre"
                            title={<>O QUE É A<br /><span className="text-[#c8ff00]">SEMANA LÁBIA?</span></>}
                            className="mb-6"
                        />
                        <div className="h-[2px] w-16 bg-[#c8ff00] opacity-50 mb-6" />
                        <p className="text-sm leading-relaxed text-white/50 mb-4 max-w-md">
                            A Semana Lábia é uma semana intensiva e multidisciplinar onde
                            os formandos de diferentes áreas da ETIC_Algarve são desafiados
                            a trabalhar em equipas mistas, fora da sua zona de conforto,
                            para desenvolver projetos a partir de um tema proposto pela escola.
                        </p>
                        <p className="text-sm leading-relaxed text-white/50 max-w-md">
                            Durante esta semana, colaboram de forma intensa para criar
                            e apresentar o projeto mais completo possível, promovendo
                            o trabalho em equipa, a interdisciplinaridade, a adaptação
                            e a preparação para os desafios das indústrias criativas.
                        </p>
                    </div>

                    {/* Right — process steps */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4 w-full">
                            {processSteps.map((step, i) => (
                                <div key={i} className="flex sm:contents">
                                    <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-1">
                                        <div className="w-18 h-18 rounded-full border-2 border-[#c8ff00]/80 flex items-center justify-center text-[#c8ff00] shrink-0">
                                            {step.icon}
                                        </div>
                                        <p className="text-[11px] text-white/50 leading-tight text-left sm:text-center max-w-[110px]">{step.label}</p>
                                    </div>
                                    {i < processSteps.length - 1 && (
                                        <div className="hidden sm:flex items-center justify-center self-start mt-5 px-1">
                                            <ChevronRight size={16} className="text-pink-400" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJETOS EM ANÁLISE ── */}
            <section id="projetos" className="px-16 xl:px-32 py-24 border-b border-white/10 bg-white/[0.02]">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <SectionHeader
                        label="Projetos em Análise"
                        title={<>PROJETOS PARTICIPANTES <span className="text-[#c8ff00]"> DA SEMANA LÁBIA 2026</span></>}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {projects.map((p, i) => (
                        <article key={i}
                            className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#111] aspect-[4/3] cursor-pointer">
                            <img src={p.image} alt={p.title}
                                className="h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-[0.65] group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c8ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-4 left-4 bg-[#c8ff00] px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-black rounded-sm">
                                A Confirmar
                            </div>
                            <div className="absolute bottom-5 left-4 right-4">
                                <h3 className="text-base font-black uppercase leading-tight tracking-tight text-white">
                                    {p.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ── PORQUÊ PARTICIPAR ── */}
            <section className="px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="mb-12">
                    <SectionHeader
                        label="Motivações"
                        title={<>PORQUÊ <span className="text-[#c8ff00]">PARTICIPAR?</span></>}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((r, i) => (
                        <div key={i} className="flex flex-col gap-4 p-6 rounded-sm border border-white/10 bg-white/5 hover:border-[#c8ff00]/20 transition-colors duration-300">
                            <div>{r.icon}</div>
                            <h3 className="text-sm font-black uppercase tracking-wide text-white leading-tight">{r.title}</h3>
                            <p className="text-xs text-white/40 leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <CtaBannerSection
                headline={<><span className="text-[#c8ff00]">1</span> SEMANA. <br /><span className="text-[#c8ff00]">12</span> PROJETOS.<br /><span className="text-[#c8ff00]">104</span> FORMANDOS.<br /><span className="text-[#c8ff00]">INÚMERAS</span> EXPERIÊNCIAS.</>}
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

export default SemanaLabia
