
import { CalendarDays, FolderOpen, Users, Star, Zap, Users2, Puzzle, Rocket, ChevronRight, ChevronDown, ArrowRight, Eye } from 'lucide-react'
import heroImg from '../assets/FUNDO.jpg'
import proj from '../assets/FUNDO.jpg'
import '../styles/leaves.css'
import StaticZigzagPath from '../components/core/StaticZigzagPath'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'


const metrics = [
    {
        icon: <CalendarDays size={38} strokeWidth={1.8} />,
        value: '1',
        label: 'SEMANA',
        desc: 'Uma semana intensiva de criação e colaboração.',
    },
    {
        icon: <FolderOpen size={38} strokeWidth={1.8} />,
        value: '12',
        label: 'PROJETOS',
        desc: 'Doze projetos desenvolvidos por equipas multidisciplinares.',
    },
    {
        icon: <Users size={38} strokeWidth={1.8} />,
        value: '104',
        label: 'FORMANDOS',
        desc: 'Cento e quatro formandos envolvidos no desafio.',
    },
    {
        icon: <Star size={38} strokeWidth={1.8} />,
        value: '',
        label: 'EQUIPAS MULTIDISCIPLINARES',
        desc: 'Aprendizagem em contexto real e fora da zona de conforto.',
    },
]

const projects = [
    { title: 'NARRATIVAS VISUAIS', image: proj },
    { title: 'EXPERIÊNCIA INTERATIVA', image: proj },
    { title: 'INSTALAÇÃO MULTIMÉDIA', image: proj },
    { title: 'PERFORMANCE HÍBRIDA', image: proj },
    { title: 'PROJETO COLABORATIVO', image: proj },
    { title: 'LABORATÓRIO CRIATIVO', image: proj },
    { title: 'LABORATÓRIO CRIATIVO', image: proj },
    { title: 'LABORATÓRIO CRIATIVO', image: proj },
    { title: 'LABORATÓRIO CRIATIVO', image: proj },
]

const reasons = [
    {
        icon: <Zap size={38} strokeWidth={1.8} className="text-[#c8ff00]" />,
        title: 'DESAFIO REAL',
        desc: 'Trabalhas em projetos com objetivos concretos e prazos reais, tal como na indústria.',
    },
    {
        icon: <Users2 size={38} strokeWidth={1.8} className="text-[#c8ff00]" />,
        title: 'TRABALHO EM EQUIPA',
        desc: 'Aprendes a colaborar com colegas de outras áreas e a comunicar de forma eficaz.',
    },
    {
        icon: <Puzzle size={38} strokeWidth={1.8} className="text-[#c8ff00]" />,
        title: 'PROJETOS MULTIDISCIPLINARES',
        desc: 'Combinas diferentes competências e linguagens para criar soluções inovadoras.',
    },
    {
        icon: <Rocket size={38} strokeWidth={1.8} className="text-[#c8ff00]" />,
        title: 'PREPARAÇÃO PARA A INDÚSTRIA',
        desc: 'Desenvolves competências essenciais para o teu futuro profissional nas indústrias criativas.',
    },
]

const processSteps = [
    { icon: <Users size={38} strokeWidth={1.8} />, label: 'Equipas mistas e multidisciplinares' },
    { icon: <FolderOpen size={38} strokeWidth={1.8} />, label: 'Tema proposto pela escola' },
    { icon: <Zap size={38} strokeWidth={1.8} />, label: 'Criação e colaboração intensa' },
    { icon: <Eye size={38} strokeWidth={1.8} />, label: 'Apresentação do projeto mais completo' },
]

const SemanaLabia = () => {
    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            {/* ── HERO ── */}
            <section className="relative h-[calc(100vh-66px)] flex items-stretch px-8 xl:px-20 overflow-hidden">
                {/* Glow blobs */}
                <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#c8ff00]/10 blur-3xl pointer-events-none" />
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#745ff2]/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-12">
                    {/* Left — text */}
                    <div className="flex-1 flex flex-col py-8">
                        {/* Title */}
                        <h1 className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}>
                            SEMANA<br />
                            <span className="text-[#c8ff00]">LÁBIA</span> 2026
                        </h1>

                        {/* Description */}
                        <p className="mb-8 max-w-md text-sm leading-relaxed text-white/50">
                            Uma secção dedicada aos projetos da Semana Lábia 2026,
                            a semana intensiva e multidisciplinar de criação e aprendizagem
                            em contexto real da ETIC_Algarve.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <PrimaryButton href="#sobre">
                                Saber mais
                                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </PrimaryButton>
                            <SecondaryButton href="#projetos">
                                Ver projetos
                                <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                            </SecondaryButton>
                        </div>
                    </div>

                    {/* Right — hero image */}
                    <div className="flex-1 relative overflow-hidden min-h-64 lg:min-h-0 -mr-8 xl:-mr-20">
                        <img src={heroImg} alt="Semana Lábia 2026" className="absolute inset-0 h-full w-full object-cover brightness-75" />
                        {/* Fade to black on all sides */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                        {/* Decorative zig-zag path over the image */}
                        <StaticZigzagPath
                            from={{ x: 70, y: 0 }}
                            to={{ x: 2, y: 100 }}
                            steps={1}
                            amplitude={10}
                            curve={0.6}
                            color="#c8ff00"
                            strokeWidth={5}
                            dashed
                            dashLength={18}
                            dashGap={12}
                            opacity={0.9}
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
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Sobre</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight mb-6">
                            O QUE É A<br /><span className="text-[#c8ff00]">SEMANA LÁBIA?</span>
                        </h2>
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
                                    {/* Step */}
                                    <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-1">
                                        <div className="w-18 h-18 rounded-full border-2 border-[#c8ff00]/80 flex items-center justify-center text-[#c8ff00] shrink-0">
                                            {step.icon}
                                        </div>
                                        <p className="text-[11px] text-white/50 leading-tight text-left sm:text-center max-w-[110px]">{step.label}</p>
                                    </div>
                                    {/* Arrow between steps */}
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
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Projetos em Análise</span>
                        </div>
                        <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                            PROJETOS PARTICIPANTES <span className="text-[#c8ff00]"> DA SEMANA LÁBIA 2026</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {projects.map((p, i) => (
                        <article key={i}
                            className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#111] aspect-[4/3] cursor-pointer">
                            <img src={p.image} alt={p.title}
                                className="h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-[0.65] group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c8ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Status badge */}
                            <div className="absolute top-4 left-4 bg-[#c8ff00] px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-black rounded-sm">
                                A Confirmar
                            </div>
                            {/* Title */}
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
                    <div className="mb-3 flex items-center gap-2">
                        <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                        <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Motivações</span>
                    </div>
                    <h2 className="font-black text-3xl xl:text-4xl uppercase leading-none tracking-tight">
                        PORQUÊ <span className="text-[#c8ff00]">PARTICIPAR?</span>
                    </h2>
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
            <section className="relative overflow-hidden pl-8 xl:pl-20 py-20">
                <div className="relative z-10 border border-white/10 bg-white/5 rounded-sm px-10 py-12 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
                    <div className="flex-1">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Semana Lábia 2026</span>
                        </div>
                        <h2 className="font-black uppercase leading-none tracking-tight text-white"
                            style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
                            <span className="text-[#c8ff00]">1</span> SEMANA. <br />
                            <span className="text-[#c8ff00]">12</span> PROJETOS.<br />
                            <span className="text-[#c8ff00]">104</span> FORMANDOS.<br />
                            <span className="text-[#c8ff00]">INÚMERAS</span> EXPERIÊNCIAS.
                        </h2>
                        <p className="mt-4 text-xs text-white/40">Criatividade, colaboração e aprendizagem em contexto real.</p>
                    </div>
                    <div className="shrink-0">
                        <PrimaryButton href="#projetos" size="lg">
                            Explorar Área Especial
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </PrimaryButton>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SemanaLabia