import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CalendarCheck, MapPin, Users, Star, Eye, Zap, MoveRight, MoveDown } from 'lucide-react'
import Fundo from '../assets/FUNDO.jpg'
import DesignImg from '../assets/Design.webp'
import FotoImg from '../assets/foto.webp'
import JogosImg from '../assets/Jogos.webp'
import doodleOrange from '../assets/d_o.png'
import doodleBlue from '../assets/d_blu.png'
import starPink from '../assets/star_p.png'
import starGreen from '../assets/star_g.png'
import leafImg from '../assets/leaf1.png'
import leafImg3 from '../assets/leaf3.png'
import '../styles/leaves.css'

type Area = 'Design' | 'Fotografia' | 'Videojogos'

const areaColors: Record<Area, string> = {
  Design: '#fb923c',
  Fotografia: '#60a5fa',
  Videojogos: '#c8ff00',
}

const destaques = [
  { id: 1, title: 'Identidades em Movimento', area: 'Design' as Area,      image: DesignImg, desc: 'Projetos de design gráfico que exploram identidade, cultura e comunicação visual.' },
  { id: 2, title: 'Olhares do Algarve',       area: 'Fotografia' as Area,  image: FotoImg,   desc: 'Fotografias que captam paisagens, pessoas e histórias que nos rodeiam.' },
  { id: 3, title: 'Mundos Interativos',        area: 'Videojogos' as Area,  image: JogosImg,  desc: 'Experiências de jogo desenvolvidas pelos alunos, da ideia ao protótipo.' },
  { id: 4, title: 'Narrativas Visuais',        area: 'Fotografia' as Area,  image: FotoImg,   desc: 'Projetos fotográficos que contam histórias através da luz e da composição.' },
  { id: 5, title: 'Exposição Final OOTB',      area: 'Design' as Area,      image: DesignImg, desc: 'Uma seleção dos melhores projetos do ano, reunidos numa exposição imperdível.' },
]

const galleryImages = [FotoImg, DesignImg, JogosImg, Fundo, FotoImg, DesignImg]

const DEST_CARD_W = 208
const GAL_CARD_W  = 208

const Exposicoes = () => {
  const [destOffset, setDestOffset] = useState(0)
  const [galOffset,  setGalOffset]  = useState(0)
  const [destMax,    setDestMax]    = useState(0)
  const [galMax,     setGalMax]     = useState(0)

  const destTrack = useRef<HTMLDivElement>(null)
  const destBox   = useRef<HTMLDivElement>(null)
  const galTrack  = useRef<HTMLDivElement>(null)
  const galBox    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const compute = () => {
      if (destTrack.current && destBox.current)
        setDestMax(Math.max(0, destTrack.current.scrollWidth - destBox.current.clientWidth))
      if (galTrack.current && galBox.current)
        setGalMax(Math.max(0, galTrack.current.scrollWidth - galBox.current.clientWidth))
    }
    const t = setTimeout(compute, 80)
    window.addEventListener('resize', compute)
    return () => { clearTimeout(t); window.removeEventListener('resize', compute) }
  }, [])

  const shiftDest = (dir: 1 | -1) =>
    setDestOffset(p => Math.max(0, Math.min(p + dir * DEST_CARD_W, destMax)))
  const shiftGal = (dir: 1 | -1) =>
    setGalOffset(p => Math.max(0, Math.min(p + dir * GAL_CARD_W, galMax)))

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── Hero + Info ── */}
      <section className="relative flex flex-col overflow-hidden" style={{ minHeight: 'calc(100vh - 66px)' }}>

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
        <img src={starGreen} alt="" aria-hidden
          className="absolute pointer-events-none select-none z-10 w-[3.5%]"
          style={{ top: '13%', right: '20%', transform: 'rotate(-10deg)' }} />
        <img src={starPink} alt="" aria-hidden
          className="absolute pointer-events-none select-none z-10 w-[2%]"
          style={{ top: '32%', right: '47%', transform: 'rotate(15deg)' }} />
        <img src={leafImg} alt="" aria-hidden
          className="leaf-1 absolute pointer-events-none select-none z-10 hidden md:block w-[16%] left-[-4%] top-[20%] rotate-[20deg]" />
        <img src={leafImg3} alt="" aria-hidden
          className="leaf-3 absolute pointer-events-none select-none z-10 hidden md:block w-[9%] left-[-2%] bottom-[8%] rotate-[55deg] opacity-80" />

        <div className="relative z-20 flex flex-col flex-1 justify-between px-8 xl:px-20 pt-16 pb-10">

          {/* Text block */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#fb923c] text-lg">✦</span>
              <span className="text-[#fb923c] text-xs font-black tracking-[0.22em] uppercase">Exposições</span>
            </div>

            <h1 className="font-black text-5xl sm:text-7xl xl:text-8xl uppercase leading-[0.92] tracking-tight mb-4 text-white">
              AS OBRAS<br />QUE GANHAM<br />VIDA
            </h1>

            <div className="h-[3px] w-20 bg-[#c8ff00] mb-6" />

            <p className="max-w-sm text-sm leading-relaxed text-white/55 mb-8">
              Descobre as exposições que revelam o talento e a criatividade dos alunos das áreas de Design, Fotografia e Videojogos.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#destaques"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest text-black transition-all duration-200 hover:brightness-90"
                style={{ backgroundColor: '#c8ff00' }}
              >
                Ver Exposições <MoveRight size={16} />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest text-white transition-all duration-200 hover:border-[#c8ff00] hover:text-[#c8ff00]"
                style={{ border: '2px solid rgba(255,255,255,0.25)' }}
              >
                Sobre a Área <MoveDown size={16} />
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 mb-12">
            {[
              { icon: <CalendarCheck size={20} />, title: '3 A 17 DE JULHO DE 2026', desc: 'Durante o Out of the Box 2026' },
              { icon: <MapPin size={20} />,         title: 'IPDJ, FARO',              desc: 'Espaço de Exposições e Auditório Principal' },
              { icon: <Users size={20} />,           title: 'DESIGN · FOTOGRAFIA · VIDEOJOGOS', desc: 'Trabalhos dos alunos em exposição para o público' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-black/60 backdrop-blur-sm border border-white/15 rounded-sm p-5">
                <span className="flex-none mt-0.5 text-[#c8ff00]">{item.icon}</span>
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-white mb-1">{item.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destaques carousel ── */}
      <section id="destaques" className="border-t border-white/10 px-8 xl:px-20 py-14 bg-white/5">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[#ec4899] text-xl">✦</span>
            <span className="text-white font-black text-sm uppercase tracking-widest">Destaques em Exposição</span>
          </div>
          <div className="flex gap-2">
            {([-1, 1] as const).map(dir => (
              <button
                key={dir}
                onClick={() => shiftDest(dir)}
                disabled={dir === -1 ? destOffset <= 0 : destOffset >= destMax}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-all duration-200 disabled:opacity-20 text-white/60"
              >
                {dir === -1 ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden" ref={destBox}>
          <div
            ref={destTrack}
            className="flex gap-4 transition-transform duration-[420ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{ transform: `translateX(-${destOffset}px)` }}
          >
            {destaques.map(d => {
              const accent = areaColors[d.area]
              return (
                <div key={d.id} className="flex-none w-[200px] group cursor-pointer">
                  <div className="relative overflow-hidden rounded-sm h-[300px]">
                    {/* Stacked date badge */}
                    <div className="absolute top-3 left-3 z-20 flex flex-col items-center w-[42px]">
                      <div className="bg-[#c8ff00] text-black text-center px-1 py-0.5 w-full leading-none">
                        <span className="block text-xl font-black leading-none">3</span>
                        <span className="text-[10px] font-black uppercase">JUL</span>
                      </div>
                      <div className="bg-[#c8ff00]/50 text-black text-center px-1 py-0.5 w-full leading-none">
                        <span className="block text-xl font-black leading-none">17</span>
                        <span className="text-[10px] font-black uppercase">JUL</span>
                      </div>
                    </div>
                    {/* Area badge */}
                    <div
                      className="absolute top-3 right-3 z-20 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-black rounded-sm"
                      style={{ backgroundColor: accent }}
                    >
                      {d.area}
                    </div>
                    <img
                      src={d.image}
                      alt={d.title}
                      className="w-full h-full object-cover brightness-55 group-hover:brightness-70 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>
                  <div className="pt-3 pb-1">
                    <h3 className="text-sm font-black uppercase leading-tight tracking-tight text-white mb-1">{d.title}</h3>
                    <p className="text-[11px] text-white/40 leading-relaxed mb-2">{d.desc}</p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-widest" style={{ color: accent }}>
                      Exposição <MoveRight size={11} />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Criatividade section ── */}
      <section id="sobre" className="border-t border-white/10 px-8 xl:px-20 py-16 relative overflow-hidden">
        <img src={doodleBlue} alt="" aria-hidden
          className="absolute top-8 left-8 w-[12%] opacity-55 pointer-events-none select-none" />

        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          <div className="flex-1">
            <h2 className="font-black text-4xl xl:text-6xl uppercase leading-none tracking-tight mb-4 text-white">
              CRIATIVIDADE<br />EM EXPOSIÇÃO
            </h2>
            <div className="h-[3px] w-20 bg-[#c8ff00]" />
          </div>
          <div className="flex-1 flex flex-col gap-4 lg:pt-2">
            <p className="text-sm leading-relaxed text-white/50">
              Nesta área apresentamos ao público os projetos finais dos alunos das áreas de Design, Fotografia e Videojogos.
            </p>
            <p className="text-sm leading-relaxed text-white/50">
              É o momento em que ideias, pesquisa e experimentação se transformam em obras que inspiram e surpreendem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/10 pt-12">
          {[
            { icon: <Star size={24} />, title: 'PROJETOS FINAIS', desc: 'Trabalhos originais desenvolvidos ao longo do curso, do conceito à apresentação final.' },
            { icon: <Eye size={24} />,  title: 'MOSTRA PÚBLICA',  desc: 'Aberta a todos, esta é uma oportunidade de conhecer e apoiar o talento emergente da ETIC_Algarve.' },
            { icon: <Zap size={24} />,  title: 'TALENTO MULTIDISCIPLINAR', desc: 'Três áreas criativas, múltiplas perspetivas e um mesmo objetivo: criar impacto.' },
          ].map((f, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="text-[#c8ff00]">{f.icon}</span>
              <p className="font-black text-sm uppercase tracking-wider text-white">{f.title}</p>
              <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery strip ── */}
      <section className="border-t border-white/10 px-8 xl:px-20 py-14 bg-white/5">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[#ec4899] text-xl">✦</span>
            <span className="text-white font-black text-sm uppercase tracking-widest">Um Olhar sobre as Exposições</span>
          </div>
          <div className="flex gap-2">
            {([-1, 1] as const).map(dir => (
              <button
                key={dir}
                onClick={() => shiftGal(dir)}
                disabled={dir === -1 ? galOffset <= 0 : galOffset >= galMax}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-all duration-200 disabled:opacity-20 text-white/60"
              >
                {dir === -1 ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-hidden" ref={galBox}>
          <div
            ref={galTrack}
            className="flex gap-3 transition-transform duration-[420ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{ transform: `translateX(-${galOffset}px)` }}
          >
            {galleryImages.map((img, i) => (
              <div key={i} className="flex-none w-[200px] h-[140px] overflow-hidden rounded-sm">
                <img
                  src={img} alt="" aria-hidden
                  className="w-full h-full object-cover brightness-75 hover:brightness-90 hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="border-t border-white/10 relative overflow-hidden px-8 xl:px-20 py-14 bg-[#0d0d0d] flex flex-col sm:flex-row items-center justify-between gap-6">
        <img src={doodleOrange} alt="" aria-hidden
          className="absolute right-0 top-0 w-[10%] opacity-60 pointer-events-none select-none" style={{ transform: 'rotate(15deg)' }} />
        <div>
          <p className="font-black text-2xl xl:text-3xl uppercase tracking-tight text-white mb-1">
            Vem ver o talento ao vivo.
          </p>
          <p className="text-sm text-white/40">Visita as exposições, inspira-te e apoia os criadores do futuro.</p>
        </div>
        <a
          href="/"
          className="relative z-10 flex-none inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest text-black transition-all duration-200 hover:brightness-90"
          style={{ backgroundColor: '#c8ff00' }}
        >
          Visitar Exposições <MoveRight size={16} />
        </a>
      </section>
    </main>
  )
}

export default Exposicoes
