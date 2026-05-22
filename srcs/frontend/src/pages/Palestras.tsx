import { useState, useRef } from 'react'
import { MoveRight, MoveDown, RefreshCw } from 'lucide-react'
import Fundo from '../assets/FUNDO.jpg'
import DesignImg from '../assets/Design.webp'
import FotoImg from '../assets/foto.webp'
import JogosImg from '../assets/Jogos.webp'
import VideoImg from '../assets/video.webp'
import MarketingImg from '../assets/marketing.webp'
import SommImg from '../assets/somm.webp'
import doodleOrange from '../assets/d_o.png'
import doodlePink from '../assets/d_p.png'
import starPink from '../assets/star_p.png'
import starGreen from '../assets/star_g.png'
import leafImg from '../assets/leaf1.png'
import leafImg2 from '../assets/leaf2.png'
import '../styles/leaves.css'

type SessionType = 'PALESTRA' | 'WORKSHOP' | 'MESA REDONDA'
type Sala = 'SALA LIME' | 'SALA BLUE' | 'SALA ORANGE' | 'SALA PURPLE'

const salaColors: Record<Sala, string> = {
  'SALA LIME':   '#c8ff00',
  'SALA BLUE':   '#60a5fa',
  'SALA ORANGE': '#fb923c',
  'SALA PURPLE': '#a855f7',
}

const typeColors: Record<SessionType, string> = {
  'PALESTRA':     '#ec4899',
  'WORKSHOP':     '#60a5fa',
  'MESA REDONDA': '#a855f7',
}

type Speaker = { name: string; color: string }

type Session = {
  id: number
  day: number
  time: string
  sala: Sala
  type: SessionType
  title: string
  speakers: Speaker[]
  moderator?: string
  role: string
  desc: string
  image: string
}

const sessions: Session[] = [
  // ── 3 Jul ──
  { id: 1,  day: 3,  time: '10:00', sala: 'SALA LIME',   type: 'PALESTRA',     title: 'O Futuro do Design é Humano',       speakers: [{ name: 'Inês Almeida', color: '#ec4899' }],  role: 'Designer & Art Director',   desc: 'Uma reflexão sobre o papel do design num mundo cada vez mais tecnológico e sobre como a empatia e a criatividade continuam a ser essenciais.', image: DesignImg },
  { id: 2,  day: 3,  time: '11:30', sala: 'SALA BLUE',   type: 'WORKSHOP',     title: 'Motion Design com Propósito',       speakers: [{ name: 'Rui Tomás', color: '#60a5fa' }],     role: 'Motion Designer',           desc: 'Workshop prático sobre storytelling visual, animação e ferramentas para criar impacto.',                                                    image: VideoImg },
  { id: 3,  day: 3,  time: '14:00', sala: 'SALA ORANGE', type: 'PALESTRA',     title: 'Criar Marcas que Ficam',            speakers: [{ name: 'Tiago Gouveia', color: '#fb923c' }], role: 'Brand Strategist',          desc: 'Como construir identidades visuais com significado e fazer marcas que deixam marca.',                                                       image: MarketingImg },
  { id: 4,  day: 3,  time: '15:45', sala: 'SALA PURPLE', type: 'MESA REDONDA', title: 'Criatividade sem Fronteiras',       speakers: [{ name: 'Marta Nunes', color: '#a855f7' }, { name: 'João Correia', color: '#a855f7' }, { name: 'Inês Lopes', color: '#a855f7' }], moderator: 'Pedro Fernandes', role: 'Mesa Redonda', desc: 'Uma conversa sobre processos criativos, colaboração e o impacto da educação no futuro.', image: Fundo },
  // ── 4 Jul ──
  { id: 5,  day: 4,  time: '10:00', sala: 'SALA BLUE',   type: 'WORKSHOP',     title: 'Fotografia de Produto',             speakers: [{ name: 'Ana Sofia Ferreira', color: '#60a5fa' }], role: 'Fotógrafa Comercial', desc: 'Técnicas e setup para fotografar produtos de forma profissional com equipamento acessível.', image: FotoImg },
  { id: 6,  day: 4,  time: '14:30', sala: 'SALA LIME',   type: 'PALESTRA',     title: 'Do Algarve para o Mundo',           speakers: [{ name: 'Carlos Nobre', color: '#c8ff00' }],  role: 'Empreendedor Digital',      desc: 'Como construir uma carreira criativa internacional sem sair do Algarve.', image: Fundo },
  // ── 5 Jul ──
  { id: 7,  day: 5,  time: '11:00', sala: 'SALA ORANGE', type: 'PALESTRA',     title: 'Game Design do Zero',               speakers: [{ name: 'Filipe Guerreiro', color: '#fb923c' }], role: 'Game Designer',          desc: 'O processo de criação de um videojogo, desde o conceito inicial até ao lançamento.', image: JogosImg },
  { id: 8,  day: 5,  time: '15:00', sala: 'SALA PURPLE', type: 'WORKSHOP',     title: 'Som e Identidade de Marca',         speakers: [{ name: 'Luísa Marques', color: '#a855f7' }], role: 'Sound Designer',            desc: 'Como o som define marcas, emoções e experiências. Workshop prático com ferramentas básicas.', image: SommImg },
  // ── 6 Jul ──
  { id: 9,  day: 6,  time: '10:30', sala: 'SALA LIME',   type: 'PALESTRA',     title: 'Ilustração e Mercado Editorial',    speakers: [{ name: 'Beatriz Cruz', color: '#c8ff00' }],  role: 'Ilustradora',               desc: 'Percurso na ilustração editorial e como chegar ao mercado de livros e revistas.', image: DesignImg },
  { id: 10, day: 6,  time: '14:00', sala: 'SALA BLUE',   type: 'WORKSHOP',     title: 'Edição de Vídeo Avançada',          speakers: [{ name: 'Marco Faria', color: '#60a5fa' }],   role: 'Editor de Vídeo',           desc: 'Fluxos de trabalho profissionais em DaVinci Resolve e After Effects.', image: VideoImg },
  // ── 7 Jul ──
  { id: 11, day: 7,  time: '10:00', sala: 'SALA ORANGE', type: 'PALESTRA',     title: 'UX/UI no Mercado Real',             speakers: [{ name: 'Vanessa Monteiro', color: '#fb923c' }], role: 'Product Designer',      desc: 'Da teoria ao projeto: como funciona o processo de design de produto em empresas tech.', image: DesignImg },
  { id: 12, day: 7,  time: '15:30', sala: 'SALA PURPLE', type: 'MESA REDONDA', title: 'O Futuro das Profissões Criativas', speakers: [{ name: 'Ricardo Santos', color: '#a855f7' }, { name: 'Cláudia Leal', color: '#a855f7' }], moderator: 'Ana Costa', role: 'Mesa Redonda', desc: 'Debate sobre as tendências do mercado e as competências que as empresas procuram.', image: Fundo },
  // ── 8 Jul ──
  { id: 13, day: 8,  time: '11:00', sala: 'SALA LIME',   type: 'WORKSHOP',     title: 'Produção Musical para Imagem',      speakers: [{ name: 'DJ Marcos', color: '#c8ff00' }],     role: 'Produtor Musical',          desc: 'Criação de trilhas sonoras e sound design para vídeo, publicidade e experiências.', image: SommImg },
  { id: 14, day: 8,  time: '16:00', sala: 'SALA BLUE',   type: 'PALESTRA',     title: 'Arquitectura de Marca Digital',     speakers: [{ name: 'Joana Pereira', color: '#60a5fa' }], role: 'Brand Strategist',         desc: 'Como as marcas se constroem no digital e o papel do design em cada ponto de contacto.', image: MarketingImg },
  // ── 9 & 10 Jul (Speed Hunting) — sem palestras ──
  // ── 11 Jul ──
  { id: 15, day: 11, time: '10:00', sala: 'SALA ORANGE', type: 'PALESTRA',     title: 'Fotografia Documental',             speakers: [{ name: 'Pedro Tavares', color: '#fb923c' }], role: 'Fotógrafo Documental',      desc: 'Ética, técnica e oportunidades na fotografia documental e reportagem.', image: FotoImg },
  { id: 16, day: 11, time: '14:30', sala: 'SALA PURPLE', type: 'WORKSHOP',     title: 'Narrativa Visual em Banda Desenhada', speakers: [{ name: 'Sofia Matos', color: '#a855f7' }], role: 'Ilustradora & BD',         desc: 'Estrutura narrativa, storyboard e composição visual na banda desenhada.', image: DesignImg },
]

const eventDays = [
  { day: 3,  weekday: 'SEX' }, { day: 4,  weekday: 'SÁB' }, { day: 5,  weekday: 'DOM' },
  { day: 6,  weekday: 'SEG' }, { day: 7,  weekday: 'TER' }, { day: 8,  weekday: 'QUA' },
  { day: 9,  weekday: 'QUI' }, { day: 10, weekday: 'SEX' }, { day: 11, weekday: 'SÁB' },
  { day: 12, weekday: 'DOM' }, { day: 13, weekday: 'SEG' }, { day: 14, weekday: 'TER' },
  { day: 15, weekday: 'QUA' }, { day: 16, weekday: 'QUI' }, { day: 17, weekday: 'SEX' },
]

const allTypes  = ['TODAS', 'PALESTRA', 'WORKSHOP', 'MESA REDONDA'] as const
const allSalas  = ['TODAS', 'SALA LIME', 'SALA BLUE', 'SALA ORANGE', 'SALA PURPLE'] as const
const PAGE_SIZE = 4

const starColors = ['#ec4899', '#60a5fa', '#fb923c', '#a855f7', '#c8ff00']

const Palestras = () => {
  const [selectedDay,  setSelectedDay]  = useState<number | null>(null)
  const [selectedType, setSelectedType] = useState<string>('TODAS')
  const [selectedSala, setSelectedSala] = useState<string>('TODAS')
  const [shown, setShown] = useState(PAGE_SIZE)
  const daysRef = useRef<HTMLDivElement>(null)

  const clearFilters = () => {
    setSelectedDay(null)
    setSelectedType('TODAS')
    setSelectedSala('TODAS')
    setShown(PAGE_SIZE)
  }

  const filtered = sessions.filter(s => {
    const matchDay  = selectedDay  === null          || s.day  === selectedDay
    const matchType = selectedType === 'TODAS'       || s.type === selectedType
    const matchSala = selectedSala === 'TODAS'       || s.sala === selectedSala
    return matchDay && matchType && matchSala
  })

  const visible = filtered.slice(0, shown)

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative flex flex-col overflow-hidden" style={{ minHeight: 'calc(100vh - 66px)' }}>

        {/* Full-bleed background */}
        <div className="absolute inset-0 z-0">
          <img src={Fundo} alt="" aria-hidden className="w-full h-full object-cover brightness-50" />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Decoratives */}
        <img src={doodleOrange} alt="" aria-hidden
          className="absolute top-0 right-0 w-[18%] pointer-events-none select-none z-10 opacity-90" />
        <img src={doodlePink} alt="" aria-hidden
          className="absolute pointer-events-none select-none z-10 w-[10%] opacity-50"
          style={{ top: '8%', right: '38%', transform: 'rotate(-12deg)' }} />
        <img src={starGreen} alt="" aria-hidden
          className="absolute pointer-events-none select-none z-10 w-[3.5%]"
          style={{ top: '14%', right: '21%', transform: 'rotate(10deg)' }} />
        <img src={starPink} alt="" aria-hidden
          className="absolute pointer-events-none select-none z-10 w-[2%]"
          style={{ bottom: '20%', right: '48%' }} />
        <img src={leafImg} alt="" aria-hidden
          className="leaf-1 absolute pointer-events-none select-none z-10 hidden md:block w-[15%] left-[-4%] top-[20%] rotate-[22deg]" />
        <img src={leafImg2} alt="" aria-hidden
          className="leaf-2 absolute pointer-events-none select-none z-10 hidden md:block w-[9%] left-[-2%] bottom-[8%] rotate-[10deg] opacity-70" />

        {/* Content */}
        <div className="relative z-20 flex-1 flex items-center px-8 xl:px-20 py-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#fb923c] text-lg">✦</span>
              <span className="text-[#fb923c] text-xs font-black tracking-[0.22em] uppercase">Programação</span>
            </div>

            <h1 className="font-black text-5xl sm:text-7xl xl:text-8xl uppercase leading-[0.92] tracking-tight mb-4 text-white">
              TODAS AS<br />PALESTRAS
            </h1>

            <div className="h-[3px] w-20 bg-[#c8ff00] mb-6" />

            <p className="max-w-sm text-sm leading-relaxed text-white/55 mb-8">
              Descobre todas as conversas, workshops e apresentações que vão acontecer no Out of the Box 2026.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#sessoes"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest text-black transition-all duration-200 hover:brightness-90"
                style={{ backgroundColor: '#c8ff00' }}
              >
                Ver Sessões <MoveRight size={16} />
              </a>
              <a
                href="#filtros"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest text-white transition-all duration-200 hover:border-[#c8ff00] hover:text-[#c8ff00]"
                style={{ border: '2px solid rgba(255,255,255,0.25)' }}
              >
                Filtrar <MoveDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter box ── */}
      <section id="filtros" className="px-8 xl:px-20 pb-8">
        <div className="bg-[#0d0d0d] border border-white/10 rounded-sm p-5">
          <div className="flex flex-wrap items-end gap-4">

            {/* CATEGORIA */}
            <div className="flex flex-col gap-1.5 min-w-[140px]">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Categoria</label>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={e => { setSelectedType(e.target.value); setShown(PAGE_SIZE) }}
                  className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                >
                  {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
              </div>
            </div>

            {/* DIA */}
            <div className="flex flex-col gap-1.5 min-w-[120px]">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Dia</label>
              <div className="relative">
                <select
                  value={selectedDay ?? ''}
                  onChange={e => { setSelectedDay(e.target.value === '' ? null : Number(e.target.value)); setShown(PAGE_SIZE) }}
                  className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                >
                  <option value="">TODAS</option>
                  {eventDays.map(d => <option key={d.day} value={d.day}>{d.day} JUL</option>)}
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
              </div>
            </div>

            {/* SALA */}
            <div className="flex flex-col gap-1.5 min-w-[140px]">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Sala</label>
              <div className="relative">
                <select
                  value={selectedSala}
                  onChange={e => { setSelectedSala(e.target.value); setShown(PAGE_SIZE) }}
                  className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                >
                  {allSalas.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
              </div>
            </div>

            {/* Clear */}
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#c8ff00] hover:opacity-70 transition-opacity pb-2.5"
            >
              <RefreshCw size={13} /> Limpar Filtros
            </button>
          </div>
        </div>
      </section>

      {/* ── Date tabs ── */}
      <section className="px-8 xl:px-20 pb-8">
        <div ref={daysRef} className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {eventDays.map(d => {
            const isActive = selectedDay === d.day
            const hasSession = sessions.some(s => s.day === d.day)
            return (
              <button
                key={d.day}
                onClick={() => { setSelectedDay(isActive ? null : d.day); setShown(PAGE_SIZE) }}
                className="flex-none flex flex-col items-center px-4 py-2.5 rounded-sm transition-all duration-200 min-w-[64px]"
                style={{
                  backgroundColor: isActive ? '#c8ff00' : 'transparent',
                  border: `2px solid ${isActive ? '#c8ff00' : 'rgba(255,255,255,0.12)'}`,
                  opacity: hasSession ? 1 : 0.35,
                }}
              >
                <span
                  className="text-xl font-black leading-none"
                  style={{ color: isActive ? '#000' : '#fff' }}
                >
                  {d.day}
                </span>
                <span
                  className="text-[10px] font-black uppercase tracking-wide"
                  style={{ color: isActive ? '#000' : 'rgba(255,255,255,0.5)' }}
                >
                  JUL
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: isActive ? '#000' : 'rgba(255,255,255,0.3)' }}
                >
                  {d.weekday}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Session list ── */}
      <section id="sessoes" className="px-8 xl:px-20 pb-16 flex flex-col gap-4">
        {visible.length === 0 && (
          <div className="py-20 text-center text-white/30 text-sm font-bold uppercase tracking-widest">
            Sem sessões para os filtros selecionados.
          </div>
        )}

        {visible.map((s, idx) => {
          const salaColor = salaColors[s.sala]
          const typeColor = typeColors[s.type]
          const starColor = starColors[idx % starColors.length]
          const speakersLabel = s.speakers.map(sp => sp.name).join(' · ')
          const speakerColor = s.speakers[0]?.color ?? '#c8ff00'

          return (
            <div
              key={s.id}
              className="flex flex-col sm:flex-row overflow-hidden rounded-sm border border-white/10 bg-[#0d0d0d] hover:border-white/20 transition-all duration-200 group"
            >
              {/* Left — time + sala + type */}
              <div className="flex-none sm:w-28 flex flex-row sm:flex-col justify-start sm:justify-center gap-3 sm:gap-2 px-4 pt-4 sm:pt-0 sm:border-r border-white/10 sm:items-start">
                <p
                  className="font-black text-2xl sm:text-3xl leading-none"
                  style={{ color: salaColor }}
                >
                  {s.time}
                </p>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[10px] text-white/35 font-bold uppercase tracking-widest">{s.sala}</p>
                  <span
                    className="inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-black rounded-sm w-fit"
                    style={{ backgroundColor: typeColor }}
                  >
                    {s.type}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="flex-none sm:w-52 h-36 sm:h-auto overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover brightness-60 group-hover:brightness-75 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 px-5 py-4 flex flex-col justify-center gap-1 min-w-0">
                <h3 className="font-black text-base sm:text-lg uppercase leading-tight tracking-tight text-white">
                  {s.title}
                </h3>
                <p
                  className="text-xs font-black uppercase tracking-wide"
                  style={{ color: speakerColor }}
                >
                  {speakersLabel}
                </p>
                {s.moderator && (
                  <p className="text-[11px] text-white/30">Moderador: {s.moderator}</p>
                )}
                <p className="text-xs text-white/40 mt-0.5">{s.role}</p>
                <p className="text-xs text-white/35 leading-relaxed mt-1 line-clamp-2">{s.desc}</p>
              </div>

              {/* Right — star + button */}
              <div className="flex-none flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 px-4 pb-4 sm:pb-0 sm:pr-5">
                <span className="text-2xl" style={{ color: starColor }}>✳</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-200 whitespace-nowrap"
                  style={{ borderColor: 'rgba(255,255,255,0.25)' }}
                >
                  Ver Mais <MoveRight size={12} />
                </a>
              </div>
            </div>
          )
        })}

        {/* Load more */}
        {shown < filtered.length && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShown(n => n + PAGE_SIZE)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest text-white transition-all duration-200 hover:border-[#c8ff00] hover:text-[#c8ff00]"
              style={{ border: '2px solid rgba(255,255,255,0.2)' }}
            >
              Carregar Mais <MoveDown size={16} />
            </button>
          </div>
        )}
      </section>

      {/* ── Footer CTA ── */}
      <section className="border-t border-white/10 relative overflow-hidden px-8 xl:px-20 py-14 bg-[#0d0d0d] flex flex-col sm:flex-row items-center justify-between gap-6">
        <img src={doodleOrange} alt="" aria-hidden
          className="absolute right-0 top-0 w-[10%] opacity-60 pointer-events-none select-none" style={{ transform: 'rotate(15deg)' }} />
        <div>
          <p className="font-black text-2xl xl:text-3xl uppercase tracking-tight text-white mb-1">
            {sessions.length} oradores. Conversas que inspiram.
          </p>
          <p className="text-sm text-white/40">Entrada livre em todas as sessões no IPDJ, Faro.</p>
        </div>
        <a
          href="/"
          className="relative z-10 flex-none inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest text-black transition-all duration-200 hover:brightness-90"
          style={{ backgroundColor: '#c8ff00' }}
        >
          Saber mais sobre o OOTB <MoveRight size={16} />
        </a>
      </section>
    </main>
  )
}

export default Palestras
