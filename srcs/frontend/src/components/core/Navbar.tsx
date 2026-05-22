
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo_etic from '../../assets/logo_etic_white.png'

var pages = [
    { name: "HOME", path: "/" },
    { name: "EXPOSIÇÕES", path: "/exposicoes" },
    { name: "PALESTRAS", path: "/palestras" },
    { name: "WORKSHOPS", path: "/workshops" },
    { name: "PROJEÇÕES", path: "/projecoes" },
    { name: "CONCERTOS", path: "/concertos" },
    { name: "SPEED HUNTING", path: "/speed-hunting" },
    { name: "SEMANA LÁBIA", path: "/semana-labia" },
]

function Navbar(){
    const [open, setOpen] = useState(false)

    return (
        <nav className="w-full flex items-center md:p-2 bg-black md:pl-2 pl-4 p-4 relative z-[300]">
            {/* Logo — left */}
            <div className="flex items-center w-[50px]">
                <img src={logo_etic} alt="Logo" width={50} height={50} />
            </div>

            {/* Desktop links — centered */}
            <div className="hidden md:flex flex-1 justify-center items-center">
                <ul className="flex space-x-6 text-white font-semibold">
                    {pages.map((page) => (
                        <li key={page.name}>
                            <a href={page.path} className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#c8ff00] after:transition-all after:duration-300 hover:after:w-full">
                                {page.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Spacer to balance logo on desktop */}
            <div className="hidden md:block w-[50px]" />

            {/* Burger button — mobile only */}
            <button
                className="md:hidden ml-auto flex items-center justify-center p-2 text-white"
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu"
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile dropdown */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 md:hidden z-50">
                    <ul className="flex flex-col text-white font-semibold">
                        {pages.map((page) => (
                            <li key={page.name}>
                                <a
                                    href={page.path}
                                    className="block px-6 py-3 border-b border-white/5 hover:text-[#c8ff00] transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    {page.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )

}

export default Navbar