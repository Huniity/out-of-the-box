
import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import logo_etic from '../../assets/Asset5.svg'
import MarqueeBanner from './MarqueeBanner'

const NAV_LINKS = [
    { label: 'Exposições',     href: '/exposicoes',     is_live: true  },
    { label: 'Sunset Talks',      href: '/sunset-talks',      is_live: true  },
    { label: 'Workshops',      href: '/workshops',      is_live: true  },
    { label: 'Cinema',      href: '/cinema',      is_live: true  },
    { label: 'Concertos',      href: '/concertos',      is_live: true  },
    { label: 'Speed Hunting',  href: '/speed-hunting',  is_live: true  },
    // { label: 'Semana Lábia',   href: '/semana-labia',   is_live: true  },
]

const visibleLinks = NAV_LINKS.filter(l => l.is_live)

function Navbar() {
    const [open, setOpen] = useState(false)
    const [marqueeVisible, setMarqueeVisible] = useState(true)
    const [navHeight, setNavHeight] = useState(0)
    const lastScrollY = useRef(0)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const el = wrapperRef.current
        if (!el) return
        setNavHeight(el.offsetHeight)
        lastScrollY.current = window.scrollY
        const ro = new ResizeObserver(() => setNavHeight(el.offsetHeight))
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setMarqueeVisible(currentY < lastScrollY.current || currentY === 0)
            lastScrollY.current = currentY
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
        <div
            ref={wrapperRef}
            className="fixed top-0 left-0 right-0 z-[300]"
        >
            <nav className="w-full flex items-center bg-black pl-4 p-4 relative">
                {/* Logo — left */}
                <div className="flex items-center w-[125px]">
                    <a href="/">
                        <img src={logo_etic} alt="Logo" width={250} height={250} />
                    </a>
                </div>

                {/* Desktop links — centered */}
                <div className="hidden lg:flex flex-1 justify-center items-center">
                    <ul className="flex space-x-6 text-white font-semibold">
                        {visibleLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#c8ff00] after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.label.toUpperCase()}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Spacer to balance logo on desktop */}
                <div className="hidden lg:block w-[125px]" />

                {/* Burger button — mobile + tablet */}
                <button
                    className="lg:hidden ml-auto flex items-center justify-center p-2 text-white"
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile / tablet dropdown */}
                {open && (
                    <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 lg:hidden z-50">
                        <ul className="flex flex-col text-white font-semibold">
                            {visibleLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="block px-6 py-3 border-b border-white/5 hover:text-[#c8ff00] transition-colors"
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label.toUpperCase()}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
            <MarqueeBanner />
        </div>
        <div style={{ height: navHeight }} />
        </>
    )
}

export default Navbar
