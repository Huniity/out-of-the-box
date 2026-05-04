import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import EticWhite from '../assets/logo_etic_white.png'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-12 text-white md:px-16">
      {/* subtle background glow */}
      {/* <div className="absolute -left-24 bottom-0 h-52 w-52 rounded-full bg-[#c8ff00]/10 blur-3xl" />
      <div className="absolute -right-24 top-0 h-52 w-52 rounded-full bg-[#745ff2]/10 blur-3xl" /> */}

      <div className="relative z-10 grid gap-10 md:grid-cols-12 md:items-start">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="mb-5 flex items-center gap-3">
            <img src={EticWhite} alt="ETIC Algarve Logo" className="w-12 shrink-0" />
            <p className="max-w-[220px] text-sm text-left font-bold uppercase leading-tight text-white/80">
              Escola de Tecnologias, Inovação e Criação do Algarve
            </p>
          </div>


          <p className="mt-8 text-xs text-left text-white/45">
            © 2026 ETIC_Algarve — Todos os direitos reservados.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2 text-left">
          <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-white">
            Navegação
          </h3>

          <nav className="flex flex-col gap-2 text-sm text-white/65">
            <a href="/" className="transition hover:text-[#c8ff00]">
              Início
            </a>
            <a href="/programacao" className="transition hover:text-[#c8ff00]">
              Programação
            </a>
            <a href="/areas" className="transition hover:text-[#c8ff00]">
              Áreas
            </a>
            <a href="/sobre" className="transition hover:text-[#c8ff00]">
              Sobre
            </a>
            <a href="/parceiros" className="transition hover:text-[#c8ff00]">
              Parceiros
            </a>
            <a href="/contactos" className="transition hover:text-[#c8ff00]">
              Contactos
            </a>
          </nav>
        </div>

        {/* Info */}
        <div className="md:col-span-3 text-left">
          <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-white">
            Informações
          </h3>

          <div className="space-y-1 text-sm text-white/65">
            <p>3 a 17 de Julho de 2026</p>
            <p>IPDJ, Faro</p>
            <p className="font-black text-[#c8ff00]">Entrada Livre</p>
            <a
              href="mailto:geral@etic-algarve.pt"
              className="mt-4 block transition hover:text-[#c8ff00]"
            >
              geral@etic-algarve.pt
            </a>
          </div>
        </div>
        {/* Socials */}
        <div className="md:col-span-3">
          <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-left text-white">
            Segue-nos
          </h3>

          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:border-[#c8ff00] hover:bg-[#c8ff00] hover:text-black"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:border-[#c8ff00] hover:bg-[#c8ff00] hover:text-black"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:border-[#c8ff00] hover:bg-[#c8ff00] hover:text-black"
            >
              <FaYoutube size={20} />
            </a>

            <a
              href="#"
              aria-label="Official Website"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-sm font-black text-white transition hover:border-[#c8ff00] hover:bg-[#c8ff00] hover:text-black"
            >
              <FaGlobeEurope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}