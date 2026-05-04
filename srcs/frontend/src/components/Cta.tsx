const EticCTA = () => {
  return (
    <section className="border-t border-white/10 rounded-2xl relative overflow-hidden bg-black px-8 py-16 text-white xl:px-20">

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

          <a
            href="/cursos"
            className="mt-24 group inline-flex w-fit items-center gap-2 rounded-sm border-2 border-[#c8ff00] bg-[#c8ff00] px-5 py-2 text-xs font-black uppercase tracking-widest text-black transition-colors duration-200 hover:bg-transparent hover:text-[#c8ff00]"
          >
            Saber mais
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Right — video */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/yNexikt6VsM?si=mN7FEu5BO3HI_yiS"
              title="ETIC Algarve"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default EticCTA;