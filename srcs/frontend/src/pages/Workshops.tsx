

import { useState } from 'react'
import { CalendarDays, MapPin, Ticket, ArrowRight, ChevronDown, Clock, Zap, Camera, Film, Music2, Code2, Megaphone, Gamepad2, Tv2, X } from 'lucide-react'
import heroImg from '../assets/FUNDO.jpg'
import StaticZigzagPath from '../components/core/StaticZigzagPath'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'

const areas = [
    { icon: <Zap      size={26} strokeWidth={1.5} />, name: 'DESIGN',       color: '#c8ff00', desc: 'Comunicação visual, branding e design de experiências.' },
    { icon: <Camera   size={26} strokeWidth={1.5} />, name: 'FOTOGRAFIA',   color: '#f97316', desc: 'Imagem, luz e composição para contar histórias.' },
    { icon: <Film     size={26} strokeWidth={1.5} />, name: 'VÍDEO',        color: '#ec4899', desc: 'Realização, edição e produção audiovisual e cinematográfica.' },
    { icon: <Music2   size={26} strokeWidth={1.5} />, name: 'SOM',          color: '#a855f7', desc: 'Captação, edição e produção de som profissional.' },
    { icon: <Code2    size={26} strokeWidth={1.5} />, name: 'PROGRAMAÇÃO',  color: '#22c55e', desc: 'Desenvolvimento criativo, interativo e tecnológico.' },
    { icon: <Megaphone size={26} strokeWidth={1.5} />, name: 'MARKETING',   color: '#f97316', desc: 'Estratégia, conteúdo e comunicação de impacto.' },
    { icon: <Gamepad2 size={26} strokeWidth={1.5} />, name: 'VIDEOJOGOS',   color: '#3b82f6', desc: 'Design, narrativa e prototipagem de jogos.' },
    { icon: <Tv2      size={26} strokeWidth={1.5} />, name: 'CINEMA / TV',  color: '#ec4899', desc: 'Escrita, produção e linguagens para ecrã e televisão.' },
]

const areaColor: Record<string, string> = {
    'DESIGN':       '#c8ff00',
    'FOTOGRAFIA':   '#f97316',
    'VÍDEO':        '#ec4899',
    'SOM':          '#a855f7',
    'PROGRAMAÇÃO':  '#22c55e',
    'MARKETING':    '#f97316',
    'VIDEOJOGOS':   '#3b82f6',
    'CINEMA/TV':    '#ec4899',
}

const workshops = [
    { num: '01', area: 'DESIGN',      title: 'DESIGN QUE COMUNICA',   desc: 'Do briefing ao conceito final',         team: 'EQUIPA DESIGN',    day: '04', month: 'JUL', time: '10:00 – 13:00' },
    { num: '02', area: 'VÍDEO',       title: 'LUZ, CÂMARA, AÇÃO!',    desc: 'Realização de vídeo na prática',        team: 'EQUIPA VÍDEO',     day: '05', month: 'JUL', time: '14:00 – 17:00' },
    { num: '03', area: 'SOM',         title: 'SOM EM DETALHE',         desc: 'Gravação, edição e mixagem',           team: 'EQUIPA SOM',       day: '06', month: 'JUL', time: '10:00 – 13:00' },
    { num: '04', area: 'FOTOGRAFIA',  title: 'FOTOGRAFIA CRIATIVA',   desc: 'Composição e narrativa visual',         team: 'EQUIPA FOTO',      day: '08', month: 'JUL', time: '14:00 – 17:00' },
    { num: '05', area: 'PROGRAMAÇÃO', title: 'CÓDIGO CRIATIVO',        desc: 'Interatividade com Javascript',         team: 'EQUIPA DEV',       day: '11', month: 'JUL', time: '14:00 – 17:00' },
    { num: '06', area: 'MARKETING',   title: 'CONTEÚDO QUE MARCA',    desc: 'Estratégia e criação de campanhas',     team: 'EQUIPA MARKETING', day: '12', month: 'JUL', time: '10:00 – 13:00' },
    { num: '07', area: 'VIDEOJOGOS',  title: 'CRIAR PARA JOGAR',       desc: 'Design e prototipagem de jogos',        team: 'EQUIPA GAMES',     day: '15', month: 'JUL', time: '14:00 – 17:00' },
    { num: '08', area: 'CINEMA/TV',   title: 'DO GUIÃO AO ECRÃ',      desc: 'Escrita e produção para TV/Cinema',     team: 'EQUIPA CINEMA',    day: '17', month: 'JUL', time: '10:00 – 13:00' },
]

const metrics = [
    { icon: <CalendarDays size={38} strokeWidth={1.8} />, value: '8',  label: 'WORKSHOPS',      desc: 'Oito workshops práticos, um por área formativa.' },
    { icon: <MapPin       size={38} strokeWidth={1.8} />, value: '',   label: 'IPDJ, FARO',     desc: 'Instalações do IPDJ — Instituto Português do Desporto e Juventude.' },
    { icon: <Clock        size={38} strokeWidth={1.8} />, value: '3H', label: 'POR SESSÃO',     desc: 'Sessões intensivas de 3 horas cada, totalmente práticas.' },
    { icon: <Ticket       size={38} strokeWidth={1.8} />, value: '',   label: 'ENTRADA GRÁTIS', desc: 'Participação gratuita para todos os formandos da ETIC_Algarve.' },
]

const filterAreas = ['TODAS', 'DESIGN', 'FOTOGRAFIA', 'VÍDEO', 'SOM', 'PROGRAMAÇÃO', 'MARKETING', 'VIDEOJOGOS', 'CINEMA/TV']

const Workshops = () => {
    const [activeArea, setActiveArea] = useState('TODAS')

    const filtered = activeArea === 'TODAS'
        ? workshops
        : workshops.filter(w => w.area === activeArea)

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative h-[calc(100vh-66px)] flex items-stretch px-8 xl:px-20 overflow-hidden">
                <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#c8ff00]/10 blur-3xl pointer-events-none" />
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#745ff2]/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-12">
                    {/* Left — text */}
                    <div className="flex-1 flex flex-col py-8">
                        <p className="text-[#c8ff00] text-[10px] font-black uppercase tracking-[0.25em] mb-4">
                            Sessões Práticas
                        </p>
                        <h1 className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
                            WORK
                            <span className="text-[#c8ff00]">SHOPS</span>
                        </h1>

                        <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">
                            Descobre as sessões práticas da Out of the Box – Faro 2026.
                            Explora workshops por área formativa e conhece as equipas
                            que vão desafiar-te a aprender, criar e experimentar.
                        </p>

                        {/* Info pills */}
                        <div className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
                            <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> 3 a 17 de Julho de 2026</span>
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
                    <div className="flex-1 relative overflow-hidden min-h-64 lg:min-h-0 -mr-8 xl:-mr-20">
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
                            className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-sm border transition-colors duration-200 ${
                                activeArea === area
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
                        <span className="text-[#c8ff00] text-2xl leading-none">✳</span>
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
                    {filtered.map((w, i) => {
                        const color = areaColor[w.area] ?? '#c8ff00'
                        const areaObj = areas.find(a => a.name === w.area || w.area.startsWith(a.name.split(' ')[0]))
                        return (
                            <div
                                key={i}
                                className="group flex items-center gap-4 p-5 rounded-sm border bg-white/[0.02] hover:bg-white/5 transition-all duration-300 cursor-pointer"
                                style={{ borderColor: `${color}30` }}
                            >
                                {/* Number + Icon */}
                                <div className="shrink-0 flex flex-col items-center gap-1">
                                    <span className="text-[10px] font-black text-white/25 leading-none tabular-nums">{w.num}</span>
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
                                    <p className="text-xs text-white/40 mb-2">{w.desc}</p>
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        <span
                                            className="px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm"
                                            style={{ background: `${color}25`, color }}
                                        >{w.area}</span>
                                        <span className="px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm bg-white/10 text-white/50">{w.team}</span>
                                    </div>
                                </div>

                                {/* Date + Time */}
                                <div className="shrink-0 flex flex-col items-end gap-1.5 text-right">
                                    <span className="flex items-center gap-1 text-[11px] text-white/60">
                                        <CalendarDays size={11} className="text-[#c8ff00]" /> {w.day} {w.month}
                                    </span>
                                    <span className="flex items-center gap-1 text-[11px] text-white/60">
                                        <Clock size={11} className="text-[#c8ff00]" /> {w.time}
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
                    <span className="text-[#c8ff00] text-2xl leading-none">✳</span>
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
            <section className="relative overflow-hidden px-8 xl:px-20 py-24">
                <div className="absolute inset-0 z-0">
                    <img src={heroImg} alt="" className="w-full h-full object-cover brightness-[0.2]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
                    <div className="flex-1">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="text-[#c8ff00] text-2xl leading-none">✳</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Workshops 2026</span>
                        </div>
                        <h2 className="font-black uppercase leading-none tracking-tight text-white"
                            style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
                            APRENDE COM AS EQUIPAS.<br />
                            CRIA <span className="text-[#c8ff00]">SEM LIMITES.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col gap-5 max-w-xs">
                        <p className="text-sm text-white/50 leading-relaxed">
                            Workshops intensivos para desafiar ideias, ganhar novas skills
                            e transformar criatividade em ação.
                        </p>
                        <PrimaryButton href="#programa" size="lg" className="self-start">
                            Garantir Lugar
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </PrimaryButton>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Workshops
