import Design from '../assets/Design.webp'
import Photo from '../assets/foto.webp'
import Video from '../assets/video.webp'
import Game from '../assets/Jogos.webp'
import Marketing from '../assets/marketing.webp'
import Music from '../assets/somm.webp'
import Fundo from '../assets/FUNDO.jpg'

const colorMap: Record<string, string> = {
  pink:   '#f9a8d4',
  lime:   '#c8ff00',
  blue:   '#60a5fa',
  orange: '#fb923c',
  purple: '#a78bfa',
}

const projects = [
  {
    title: "Projeto em Destaque",
    category: "Design / Multimédia",
    image: Fundo,
    className: "col-span-2 md:col-span-6 md:row-span-2",
    color: "pink",
  },
  {
    title: "Fotografia",
    category: "Imagem",
    image: Fundo,
    className: "col-span-1 md:col-span-3",
    color: "lime",
  },
  {
    title: "Curta Experimental",
    category: "Vídeo",
    image: Fundo,
    className: "col-span-1 md:col-span-3",
    color: "blue",
  },
  {
    title: "Mundo Interativo",
    category: "Videojogos",
    image: Fundo,
    className: "col-span-1 md:col-span-4",
    color: "orange",
  },
  {
    title: "Identidade Visual",
    category: "Marketing",
    image: Fundo,
    className: "col-span-1 md:col-span-4",
    color: "purple",
  },
  {
    title: "Música ao Vivo",
    category: "Concertos",
    image: Fundo,
    className: "col-span-2 md:col-span-4",
    color: "lime",
  },
];

const BentoGallery = () => {
  return (
    <section className="bg-white/5 border-t border-white/10 px-8 xl:px-20 py-16 text-white">
      {/* Header */}
      <div className = "max-w-8xl mx-[10%] auto">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between text-left">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#c8ff00] text-lg leading-none">✦</span>
              <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Galeria · ETIC_Algarve</span>
            </div>
            <h2 className="font-black text-4xl xl:text-5xl uppercase leading-none tracking-tight">
              OUR STUDENT<span className="text-[#c8ff00]"> SHOWROOM</span>
            </h2>
          <p className="max-w-sm text-xs leading-relaxed text-white/40">
            Projetos finais, experiências visuais, fotografia, vídeo, design e
            videojogos criados pelos alunos da ETIC_Algarve.
          </p>
          </div>


          <a
            href="/galeria"
            className="inline-flex w-fit items-center gap-2 rounded-sm border-2 border-[#c8ff00] px-5 py-2 text-xs font-black uppercase tracking-widest text-[#c8ff00] transition-colors duration-200 hover:bg-[#c8ff00] hover:text-black"
          >
            Ver Galeria <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-12">
          {projects.map((project) => {
            const accent = colorMap[project.color] ?? '#c8ff00'
            return (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-sm border border-white/10 bg-[#111] ${project.className}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-[0.65] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Accent bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: accent }}
                />

                {/* Category badge */}
                <div
                  className="absolute left-4 top-4 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-black rounded-sm"
                  style={{ backgroundColor: accent }}
                >
                  {project.category}
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-5 left-4 right-4">
                  <h3 className="mb-2 text-base font-black uppercase leading-tight tracking-tight text-white">
                    {project.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest opacity-0 translate-y-1 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                    style={{ color: accent }}
                  >
                    Ver Projeto →
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default BentoGallery;