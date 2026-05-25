
import doodleGreen from '../../assets/d_g.webp'
import doodlePurple from '../../assets/d_pu.webp'
import doodleOrange from '../../assets/d_o.webp'
import Youtube from './YoutubeFacade'
import { PrimaryButton } from '../buttons/MainButton'


const EticCTA = () => {
  return (
    <section className="border-t border-white/10 relative overflow-hidden bg-white/5 px-8 py-16 text-white xl:px-20">
      <img
                    src={doodleGreen}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '15%',
                        left: '41%',
                        width: '20%',
                        pointerEvents: 'none',
                        zIndex: 1,
                        userSelect: 'none',
                    }}
        />
        <img
                    src={doodlePurple}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '60%',
                        left: '25%',
                        width: '12%',
                        pointerEvents: 'none',
                        zIndex: 1,
                        userSelect: 'none',
                        transform: 'rotate(20deg)',
                    }}
        />
                <img
                    src={doodleOrange}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '60%',
                        left: '87%',
                        width: '15%',
                        pointerEvents: 'none',
                        zIndex: 1,
                        userSelect: 'none',
                        transform: 'rotate(150deg)',
                    }}
        />
      <div className="relative z-10 flex flex-col gap-12 md:flex-row md:items-center">

        {/* Left — text & CTA */}
        <div className="flex flex-1 flex-col">

          {/* Badge */}
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[#c8ff00] text-lg leading-none">✦</span>
            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">Junta-te à ETIC_</span>
          </div>

          {/* Heading */}
          <h2 className="text-left font-black text-4xl xl:text-5xl uppercase leading-none tracking-tight">
            <span className="text-white">Queres fazer parte da familia</span>
            <span className="text-[#c8ff00]">  ETIC?</span>
          </h2>

          <div className="my-5 h-[2px] w-16 bg-[#c8ff00] opacity-50" />

          <p className="mb-8 max-w-xs text-xs leading-relaxed text-white/40">
            Descobre os nossos cursos e começa a criar o teu futuro nas áreas de
            design, som, vídeo, fotografia e tecnologia.
          </p>

          <PrimaryButton href="/cursos" className="w-[300px] justify-center">
            Saber mais
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </PrimaryButton>
        </div>

        {/* Right — video */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
            <Youtube videoId="yNexikt6VsM" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default EticCTA;