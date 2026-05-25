import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import EticWhite from '../../assets/Asset5.svg'
import leafImg from '../../assets/Artboard_4.webp'
import leafImg2 from '../../assets/Artboard_13.webp'
import leafImg3 from '../../assets/Artboard_12.webp'
import '../../styles/leaves.css'


export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-white/5 px-6 py-12 text-white md:px-16">
      <img
        src={leafImg2}
        alt=""
        aria-hidden="true"
        className="
          leaf-2 absolute pointer-events-none select-none z-50
          w-[60%] left-[90%] top-[-5%] -translate-y-1/2 rotate-[235deg]
          sm:w-[30%] sm:right-[5%] sm:top-[35%] sm:rotate-[295deg]
          md:w-[20%] md:left-[33%] md:top-[90%] md:rotate-[295deg]
          lg:w-[25%] lg:left-[90%] lg:top-[90%] lg:rotate-[315deg]
        "
      />

      <img
        src={leafImg3}
        alt=""
        aria-hidden="true"
        className="
          leaf-3 absolute pointer-events-none select-none z-50
          w-[40%] right-[-12%] top-[88%] -translate-y-1/2 rotate-[265deg]
          sm:w-[30%] sm:right-[-5%] sm:top-[88%]
          md:w-[20%] md:right-[5%] md:top-[120%]
          lg:w-[20%] lg:right-[10%] lg:top-[115%]
        "
      />

      <img
        src={leafImg}
        alt=""
        aria-hidden="true"
        className="
          leaf-3 absolute pointer-events-none select-none z-50
          w-[38%] left-[50%] top-[92%] -translate-y-1/2 rotate-[85deg] hidden
          sm:w-[30%] sm:left-[78%] sm:top-[88%] sm:block
          md:w-[20%] md:left-[82%] md:top-[105%] md:block
          lg:w-[20%] lg:left-[20%] lg:top-[100%] lg:block
        "
      />
      <div className="relative z-10 grid gap-10 md:grid-cols-12 md:items-start">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="mb-5 flex items-center gap-3">
            <img src={EticWhite} alt="ETIC Algarve Logo" className="w-60 shrink-0" />
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
              href="mailto:secretaria@eticalgarve.pt"
              className="mt-4 block transition hover:text-[#c8ff00]"
            >
              secretaria@eticalgarve.pt
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