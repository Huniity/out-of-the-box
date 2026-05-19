
import { CalendarDays, MapPin, Users, Play, Star, ChevronDown, ArrowRight, Clock, Mic } from 'lucide-react'
import heroImg from '../assets/FUNDO.jpg'
import StaticZigzagPath from '../components/core/StaticZigzagPath'

const metrics = [
    {
        icon: <CalendarDays size={38} strokeWidth={1.8} />,
        value: '9→16',
        label: 'JULHO',
        desc: 'Durante o Out of the Box 2026 — uma semana de cinema.',
    },
    {
        icon: <MapPin size={38} strokeWidth={1.8} />,
        value: '',
        label: 'IPDJ, FARO',
        desc: 'Auditório Principal — exibições públicas e gratuitas.',
    },
    {
        icon: <Users size={38} strokeWidth={1.8} />,
        value: '5',
        label: 'SESSÕES',
        desc: 'Cinco sessões temáticas ao longo do festival.',
    },
    {
        icon: <Star size={38} strokeWidth={1.8} />,
        value: '',
        label: 'ENTRADA LIVRE',
        desc: 'Abertas ao público. A tua presença faz a diferença.',
    },
]

const sessions = [
    {
        day: '9',
        month: 'JUL',
        tag: 'REALIZAÇÃO',
        tagColor: '#ec4899',
        title: 'NARRATIVAS DO REAL',
        desc: 'Curtas-metragens de ficção e documentário.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
    {
        day: '10',
        month: 'JUL',
        tag: 'CINEMA',
        tagColor: '#3b82f6',
        title: 'OLHARES DO AMANHÃ',
        desc: 'Histórias, personagens e novas formas de ver o mundo.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
    {
        day: '11',
        month: 'JUL',
        tag: 'TV',
        tagColor: '#22c55e',
        title: 'DE ATRÁS DAS CÂMARAS',
        desc: 'Projetos de reportagem, entretenimento e formatos TV.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
    {
        day: '12',
        month: 'JUL',
        tag: 'REALIZAÇÃO',
        tagColor: '#ec4899',
        title: 'EXPERIMENTAR É CRIAR',
        desc: 'Trabalhos experimentais e autorais dos alunos.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
    {
        day: '16',
        month: 'JUL',
        tag: 'SESSÃO ESPECIAL',
        tagColor: '#a855f7',
        title: 'BEST OF OUT OF THE BOX',
        desc: 'Seleção dos melhores projetos do festival.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
]

const features = [
    {
        icon: <Play size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'PROJETOS FINAIS',
        desc: 'Trabalhos originais de alunos das áreas de Realização, Cinema e TV.',
    },
    {
        icon: <Users size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'SESSÕES PÚBLICAS',
        desc: 'Exibição em auditório, abertas ao público durante o festival.',
    },
    {
        icon: <Star size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'CRIATIVIDADE SEM LIMITES',
        desc: 'Ficção, documentário, experimental, reportagem e muito mais.',
    },
]

const Projecoes = () => {
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
                            O CINEMA<br />
                            <span className="text-[#c8ff00]">QUE CRIAMOS</span>
                        </h1>

                        <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">
                            Apresentação dos projetos finais das turmas de Realização,
                            Cinema e TV da ETIC_Algarve. Sessões abertas ao público,
                            entrada livre.
                        </p>

                        {/* Info pills */}
                        <div className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
                            <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#c8ff00]" /> 9 a 16 de Julho</span>
                            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro</span>
                            <span className="flex items-center gap-1.5"><Mic size={14} className="text-[#c8ff00]" /> Entrada Livre</span>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <a href="#programa"
                                className="group inline-flex items-center gap-2 rounded-sm border-2 border-[#c8ff00] bg-[#c8ff00] px-5 py-2.5 text-xs font-black uppercase tracking-widest text-black transition-colors duration-200 hover:bg-transparent hover:text-[#c8ff00]">
                                Ver Programa
                                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </a>
                            <a href="#sobre"
                                className="group inline-flex items-center gap-2 rounded-sm border-2 border-white/20 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white/70 transition-colors duration-200 hover:border-white/40 hover:text-white">
                                Sobre as Projeções
                                <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                            </a>
                        </div>
                    </div>

                    {/* Right — hero image */}
                    <div className="flex-1 relative overflow-hidden min-h-64 lg:min-h-0 -mr-8 xl:-mr-20">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                    {sessions.map((s, i) => (
                        <div key={i} className="group flex flex-col p-5 rounded-sm border border-white/10 bg-black hover:border-white/20 transition-colors duration-300 cursor-pointer">
                            {/* Date badge */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="bg-[#c8ff00] text-black px-2 py-1 text-center min-w-[48px]">
                                    <span className="block text-xl font-black leading-none">{s.day}</span>
                                    <span className="block text-[9px] font-black uppercase tracking-widest">{s.month}</span>
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-sm"
                                    style={{ backgroundColor: s.tagColor + '22', color: s.tagColor }}>
                                    {s.tag}
                                </span>
                            </div>

                            {/* Image placeholder */}
                            <div className="relative overflow-hidden rounded-sm aspect-video mb-4 bg-white/5">
                                <img src={heroImg} alt={s.title}
                                    className="absolute inset-0 h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-[0.65] group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            <h3 className="font-black text-sm uppercase leading-tight tracking-wide text-white mb-2">
                                {s.title}
                            </h3>
                            <p className="text-xs text-white/40 leading-relaxed mb-4 flex-1">{s.desc}</p>

                            <div className="flex items-center gap-3 text-[10px] text-white/30 border-t border-white/10 pt-3">
                                <span className="flex items-center gap-1"><Clock size={10} className="text-[#c8ff00]" /> {s.time}</span>
                                <span className="text-white/20">•</span>
                                <span>{s.venue}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <a href="#sobre"
                        className="group inline-flex items-center gap-2 rounded-sm border border-white/20 px-8 py-3 text-xs font-black uppercase tracking-widest text-white/60 transition-colors duration-200 hover:border-white/40 hover:text-white">
                        Ver Programa Completo
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
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
            <section className="relative overflow-hidden px-8 xl:px-20 py-20">
                <div className="relative z-10 border border-white/10 bg-white/5 rounded-sm px-10 py-12 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
                    <div className="flex-1">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Projeções Vídeo 2026</span>
                        </div>
                        <h2 className="font-black uppercase leading-none tracking-tight text-white"
                            style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
                            APOIA O TALENTO.<br />
                            <span className="text-[#c8ff00]">VEM VER.</span>
                        </h2>
                        <p className="mt-4 text-xs text-white/40">A tua presença inspira o futuro do cinema e da televisão.</p>
                    </div>
                    <div className="shrink-0">
                        <a href="#programa"
                            className="group inline-flex items-center gap-2 rounded-sm border-2 border-[#c8ff00] bg-[#c8ff00] px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition-colors duration-200 hover:bg-transparent hover:text-[#c8ff00]">
                            Saber Mais
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Projecoes