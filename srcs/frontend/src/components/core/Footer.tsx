import { FaInstagram, FaYoutube, FaLinkedin, FaGlobeEurope } from "react-icons/fa";
import { FaTiktok, FaFacebook, FaThreads, FaBandcamp } from "react-icons/fa6";
import { CalendarDays, MapPin, Ticket, Mail } from "lucide-react";
import EticWhite from '../../assets/etic_algarve/etic_algarve.svg'
import leafImg from '../../assets/doodles/Artboard_4.webp'
import leafImg2 from '../../assets/doodles/Artboard_13.webp'
import leafImg3 from '../../assets/doodles/Artboard_12.webp'
import '../../styles/leaves.css'

import adobe from '../../assets/supports/adobe.png'
import ipdj from '../../assets/partners/ipdj_faro.png'
import republica from '../../assets/partners/republica_pt.png'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-white/5 px-6 pb-28 py-12 text-white md:px-16">
      <img
        src={leafImg2}
        alt=""
        aria-hidden="true"
        className="
          leaf-2 absolute pointer-events-none select-none z-50
          w-[60%] left-[90%] top-[-5%] -translate-y-1/2 rotate-[235deg]
          sm:w-[30%] sm:right-[5%] sm:top-[35%] sm:rotate-[225deg]
          md:w-[20%] md:left-[33%] md:top-[90%] md:rotate-[295deg]
          lg:w-[20%] lg:left-[27%] lg:top-[105%] lg:rotate-[315deg]
          xl:w-[20%] xl:left-[15%] xl:top-[120%] xl:rotate-[335deg]
        "
      />

      <img
        src={leafImg3}
        alt=""
        aria-hidden="true"
        className="
          leaf-3 absolute pointer-events-none select-none z-50
          w-[40%] right-[-12%] top-[88%] -translate-y-1/2 rotate-[265deg]
          sm:w-[30%] sm:right-[-5%] sm:top-[100%]
          md:w-[20%] md:left-[70%] md:top-[120%]
          lg:w-[20%] lg:left-[10%] lg:top-[135%]
          xl:w-[20%] xl:left-[5%] xl:top-[130%] xl:rotate-[235deg]
        "
      />

      <img
        src={leafImg}
        alt=""
        aria-hidden="true"
        className="
          leaf-3 absolute pointer-events-none select-none z-10
          w-[38%] left-[50%] top-[92%] -translate-y-1/2 rotate-[85deg] hidden
          sm:w-[30%] sm:left-[78%] sm:top-[88%] sm:hidden
          md:w-[20%] md:left-[80%] md:top-[105%] md:block
          lg:w-[15%] lg:left-[60%] lg:top-[110%] lg:block lg:rotate-[100deg]
        "
      />
      <div className="relative z-10 grid gap-1 md:grid-cols-12 md:items-start">
        {/* Brand */}
        <div className="md:col-span-5 flex flex-col gap-1 mb-12 md:mb-0">
          {/* 1. Bloco do Logo + Copyright */}
          <div className="flex flex-col gap-1">
            <img src={EticWhite} alt="ETIC_Algarve Logo" className="w-60 shrink-0" />
            <p className="text-xs text-left text-white/45 lg:mt-4">
              © 2026 ETIC_Algarve — Todos os direitos reservados.
            </p>
          </div>

          {/* 2. Bloco dos Logótipos com Alturas Iguais */}
          {/* O 'items-stretch' força todas as colunas a terem a mesma altura máxima */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 items-stretch mt-4">
            
            {/* Parceria: República Portuguesa */}
            <div className="flex flex-col justify-between gap-3 h-full border-b border-white/5 pb-4 md:border-none md:pb-0">
              <div className="flex flex-col gap-2">
                <p className="text-[12px] text-left text-white/45 font-medium">
                  Parceria:
                </p>
                <img src={republica} alt="República Portuguesa Logo" className="w-28 shrink-0 object-contain" />
              </div>
            </div>

            {/* IPDJ */}
            {/* Usamos 'justify-center' para centralizar o logo verticalmente, alinhando visualmente com a República */}
            <div className="flex flex-col justify-center gap-2 h-full pb-4 md:pb-0">
              <img src={ipdj} alt="IPDJ Logo" className="w-24 shrink-0 object-contain" />
            </div>

            {/* Apoio: Adobe */}
            {/* No mobile ocupa a largura total por baixo, mas mantém a estrutura flexível interna limpa */}
            <div className="col-span-2 md:col-span-1 flex flex-col justify-between gap-2 h-full pt-2 md:pt-0">
              <div className="flex flex-col gap-2">
                <p className="text-[12px] text-left text-white/45 font-medium">
                  Apoio:
                </p>
                <img src={adobe} alt="Adobe Logo" className="w-24 shrink-0 object-contain" />
              </div>
            </div>

          </div>
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
            <a href="/sunset-talks" className="transition hover:text-[#c8ff00]">
              Sunset Talks
            </a>
            <a href="/exposicoes" className="transition hover:text-[#c8ff00]">
              Exposições
            </a>
            <a href="/workshops" className="transition hover:text-[#c8ff00]">
              Workshops
            </a>
            <a href="/cinema" className="transition hover:text-[#c8ff00]">
              Cinema
            </a>
            <a href="/concertos" className="transition hover:text-[#c8ff00]">
              Concertos
            </a>
            <a href="/speed-hunting" className="transition hover:text-[#c8ff00]">
              Speed Hunting
            </a>
          </nav>
        </div>

        {/* Info */}
        <div className="md:col-span-3 text-left">
          <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-white">
            Informações
          </h3>

          <div className="space-y-3 text-sm text-white/65">
            <p className="flex items-center gap-2">
              <CalendarDays size={14} className="shrink-0 text-[#c8ff00]" />
              3 a 17 de julho de 2026
            </p>
            <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd0552dcd3e61689:0x2e5fb82fa85b7d34?sa=X&ved=1t:8290&ictx=111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-[#c8ff00]">
              <MapPin size={14} className="shrink-0 text-[#c8ff00]" />
              <span>IPDJ, Faro<br />Rua da Polícia da Segurança Pública, 1<br />8000-408 Faro</span>
            </a>
            <p className="flex items-center gap-2 font-black text-[#c8ff00]">
              <Ticket size={14} className="shrink-0" />
              Entrada Livre
            </p>
            <a href="mailto:secretaria@eticalgarve.pt" className="flex items-center gap-2 transition hover:text-[#c8ff00]">
              <Mail size={14} className="shrink-0 text-[#c8ff00]" />
              secretaria@eticalgarve.com
            </a>
          </div>
        </div>
        {/* Socials */}
        <div className="md:col-span-2">
          <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-left text-white">
            Segue-nos
          </h3>

          <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 lg:gap-x-12 lg:gap-y-2 md:gap-x-8 max-w-max">
            {[
              { href: 'https://www.instagram.com/etic_algarve', icon: <FaInstagram size={18} />, label: 'Instagram' },
              { href: 'https://www.facebook.com/ETICAlgarveEscolaTecnica', icon: <FaFacebook size={18} />, label: 'Facebook' },
              { href: 'https://www.tiktok.com/@etic_algarve', icon: <FaTiktok size={18} />, label: 'TikTok' },
              { href: 'https://www.threads.com/@etic_algarve', icon: <FaThreads size={18} />, label: 'Threads' },
              { href: 'https://eticalgarve.bandcamp.com', icon: <FaBandcamp size={18} />, label: 'Bandcamp' },
              { href: 'https://www.linkedin.com/school/etic_algarve/posts/?feedView=all', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
              { href: 'https://www.youtube.com/user/eticalgarve', icon: <FaYoutube size={18} />, label: 'YouTube' },
              { href: 'https://www.eticalgarve.com/', icon: <FaGlobeEurope size={18} />, label: 'ETIC_Algarve' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/65 text-sm transition hover:text-[#c8ff00] group"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/30 text-[#c8ff00] transition group-hover:border-[#c8ff00] group-hover:bg-[#c8ff00] group-hover:text-black">
                  {icon}
                </span>
                <span className="hidden lg:inline">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}