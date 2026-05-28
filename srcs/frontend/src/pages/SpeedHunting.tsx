
import { useState } from 'react'
import { CalendarDays, MapPin, Ticket, ArrowRight, ChevronDown, CheckCircle2, ChevronRight, RefreshCw } from 'lucide-react'
import heroImg from '../assets/etic_algarve/FUNDO2.webp'
import StaticZigzagPath from '../components/core/StaticZigzagPath'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'

import { speedHuntingMetrics as metrics, speedHuntingSteps as steps, speedHuntingTips as tips, speedHuntingCompanies as companies, speedHuntingCategories as categories} from '../utils/metrics'
import { formatEventDateRange } from '../utils/dashboard'
import { usePageData } from '../hooks/usePageData'
import PageStars from '../components/core/PageStars'
import polaroid_speedhunting from '../assets/polaroids/polaroid_speedhunting.webp'
import HeroPolaroid from '../components/core/HeroPolaroid'
import leaf from '../assets/doodles/leaf3.webp'


const SpeedHunting = () => {
    const {
            main_white_title,
            main_green_title,
            main_description,
            cta_button_text,
            cta_button_link,
            start_event_date,
            end_event_date,
        } = usePageData('speed-hunting');


    const [activeCategory, setActiveCategory] = useState('TODAS')

    const filtered = activeCategory === 'TODAS'
        ? companies
        : companies.filter(c => c.category === activeCategory)

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
                <HeroPolaroid src={polaroid_speedhunting} />

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
                            <span className="flex items-center gap-1.5"><Ticket size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <PrimaryButton href="#empresas">
                                Ver Empresas Confirmadas
                                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </PrimaryButton>
                            <SecondaryButton href="#como-funciona">
                                Como Funciona
                                <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                            </SecondaryButton>
                        </div>
                    </div>

                    {/* Right — hero image */}
                    <div className="hidden lg:block flex-1 relative overflow-hidden lg:min-h-0 -mr-8 xl:-mr-20">
                        <img src={heroImg} alt="Speed Hunting" className="absolute inset-0 h-full w-full object-cover brightness-75" />
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

            {/* ── O QUE É ── */}
            <section id="sobre" className="px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left */}
                    <div className="flex-1">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">The Wall · O Que É?</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight mb-6">
                            O QUE É O<br /><span className="text-[#c8ff00]">SPEED HUNTING?</span>
                        </h2>
                        <div className="h-[2px] w-16 bg-[#c8ff00] opacity-50 mb-6" />
                        <p className="text-sm leading-relaxed text-white/50 max-w-md">
                            Inspirado no speed dating, o Speed Hunting é uma dinâmica de
                            encontros rápidos entre alunos e empresas. Em poucos minutos,
                            podes apresentar o teu trabalho, falar sobre o teu percurso,
                            receber feedback e criar ligações que podem abrir portas no futuro.
                        </p>
                    </div>

                    {/* Right — process steps */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4 w-full">
                            {steps.map((step, i) => (
                                <div key={i} className="flex sm:contents">
                                    <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-1">
                                        <div className="w-14 h-14 rounded-full border border-[#c8ff00]/30 flex items-center justify-center text-[#c8ff00] shrink-0">
                                            {step.icon}
                                        </div>
                                        <p className="text-[11px] text-white/50 leading-tight text-left sm:text-center max-w-[110px]">{step.title}</p>
                                    </div>
                                    {i < steps.length - 1 && (
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

            {/* ── EMPRESAS CONFIRMADAS ── */}
            <section id="empresas" className="px-16 xl:px-32 py-24 border-b border-white/10 bg-white/[0.02]">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Empresas Confirmadas</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                            EMPRESAS <span className="text-[#c8ff00]">CONFIRMADAS</span>
                        </h2>
                    </div>
                </div>

                {/* Category filters */}
                <div className="bg-[#0d0d0d] border border-white/10 rounded-sm p-5 mb-12">
                    <div className="flex flex-wrap gap-2 justify-center items-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-sm border transition-colors duration-200 ${
                                    activeCategory === cat
                                        ? 'bg-[#c8ff00] border-[#c8ff00] text-black'
                                        : 'bg-transparent border-white/20 text-white/50 hover:border-white/40 hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                        <button
                            onClick={() => setActiveCategory('TODAS')}
                            className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#c8ff00] hover:opacity-70 transition-opacity ml-2"
                        >
                            <RefreshCw size={13} /> Limpar Filtros
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((c, i) => (
                        <div key={i} className="flex overflow-hidden rounded-sm border border-white/10 bg-[#0d0d0d] hover:border-white/20 transition-all duration-200 group">
                            {/* Left — square logo + badge */}
                            <div className="flex-none w-[168px] flex flex-col justify-center items-center gap-4 py-6 border-r border-white/10">
                                <div
                                    className="w-24 h-24 flex items-center justify-center text-sm font-black rounded-sm"
                                    style={{ background: `${c.color}15`, border: `1.5px solid ${c.color}50`, color: c.color }}
                                >
                                    {c.initials}
                                </div>
                                <span
                                    className="block px-2 py-1 text-[10px] font-black uppercase tracking-widest text-black rounded-sm text-center w-[112px] leading-tight"
                                    style={{ backgroundColor: c.color }}
                                >
                                    {c.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 px-4 py-4 flex flex-col justify-center gap-1 min-w-0">
                                <h3 className="font-black text-sm uppercase leading-tight tracking-tight text-white">{c.name}</h3>
                                <p className="text-xs text-white/35 leading-relaxed line-clamp-4 mt-1">{c.desc}</p>
                                <p className="text-[10px] text-white/25 mt-1.5 flex items-center gap-1">
                                    <MapPin size={10} className="text-[#c8ff00]/50" /> Dias 9 e 10 Jul
                                </p>
                            </div>

                            {/* Right — decoration */}
                            <div className="flex-none flex items-center px-3">
                                <span className="text-xl" style={{ color: c.color }}>✳</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── COMO FUNCIONA ── */}
            <section id="como-funciona" className="px-8 xl:px-20 py-20 border-b border-white/10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left — steps */}
                    <div className="flex-1">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Como Funciona</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight mb-10">
                            O <span className="text-[#c8ff00]">PROCESSO</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {steps.map((step, i) => (
                                <div key={i} className="flex flex-col gap-3 p-5 rounded-sm border border-white/10 bg-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#c8ff00] text-2xl font-black leading-none">{step.num}</span>
                                        <div className="text-[#c8ff00] opacity-70">{step.icon}</div>
                                    </div>
                                    <h3 className="text-xs font-black uppercase tracking-wide text-white leading-tight">{step.title}</h3>
                                    <p className="text-[11px] text-white/40 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — tips */}
                    <div className="flex-1">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Dicas para Alunos</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight mb-10">
                            VEM <span className="text-[#c8ff00]">PREPARADO</span>
                        </h2>
                        <div className="flex flex-col gap-3">
                            {tips.map((tip, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-sm border border-white/10 bg-white/5 hover:border-[#c8ff00]/20 transition-colors duration-300">
                                    <CheckCircle2 size={16} className="text-[#c8ff00] shrink-0 mt-0.5" strokeWidth={1.5} />
                                    <p className="text-sm text-white/60 leading-relaxed">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="relative overflow-hidden pr-8 xl:pr-20 py-20">
                <div className="relative z-10 border border-white/10 bg-white/5 rounded-sm px-10 py-12 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
                    <div className="flex-1">
                                                <h2 className="font-black uppercase leading-none tracking-tight text-white"
                            style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
                            <span className="text-[#c8ff00]">DOIS</span> DIAS. <br />
                            <span className="text-[#c8ff00]">DEZENAS</span> PROJETOS.<br />
                            <span className="text-[#c8ff00]">INÚMERAS</span> OPORTUNIDADES.<br />
                        </h2>
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

export default SpeedHunting
