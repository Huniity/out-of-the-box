
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import logo_etic from '../../assets/Asset5.svg'
import MarqueeBanner from './MarqueeBanner'
import type { ApiPage } from '../../types/dashboard'
import { PAGE_SLUG_MAP } from '../../utils/dashboard'

function Navbar(){
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    const [navHeight, setNavHeight] = useState(0)
    const [pages, setPages] = useState<ApiPage[]>([])
    const lastScrollY = useRef(0)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const navHeightRef = useRef(0)

    useEffect(() => {
        const ctrl = new AbortController()
        fetch('/api/pages/', { signal: ctrl.signal })
            .then(r => r.json())
            .then((data: ApiPage[]) => setPages(data.filter(p => p.is_live)))
            .catch(err => { if (err.name !== 'AbortError') setPages([]) })
        return () => ctrl.abort()
    }, [])

    useLayoutEffect(() => {
        const el = wrapperRef.current
        if (!el) return
        const h = el.offsetHeight
        navHeightRef.current = h
        setNavHeight(h)
        // Seed lastScrollY with the current position so the scroll handler
        // never misreads direction on the very first event after mount.
        lastScrollY.current = window.scrollY
        // If the browser restores scroll past the navbar (e.g. history.back()),
        // start hidden immediately — before first paint, so no CSS transition fires.
        if (window.scrollY > h) setVisible(false)
        const ro = new ResizeObserver(() => {
            navHeightRef.current = el.offsetHeight
            setNavHeight(el.offsetHeight)
        })
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setVisible(currentY < lastScrollY.current || currentY < navHeightRef.current)
            lastScrollY.current = currentY
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
        <div
            ref={wrapperRef}
            className={`fixed top-0 left-0 right-0 z-[300] transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        >
        <nav className="w-full flex items-center md:p-4 bg-black md:pl-4 pl-4 p-4 relative">
            {/* Logo — left */}
            <div className="flex items-center w-[125px]">
                <a href="/">
                    <img src={logo_etic} alt="Logo" width={250} height={250} />
                </a>
            </div>

            {/* Desktop links — centered */}
            <div className="hidden md:flex flex-1 justify-center items-center">
                <ul className="flex space-x-6 text-white font-semibold">
                    {pages.map((page) => (
                        <li key={page.id}>
                            <a href={`/${PAGE_SLUG_MAP[page.name] ?? ''}`} className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#c8ff00] after:transition-all after:duration-300 hover:after:w-full">
                                {page.name.toUpperCase()}
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
                            <li key={page.id}>
                                <a
                                    href={`/${PAGE_SLUG_MAP[page.name] ?? ''}`}
                                    className="block px-6 py-3 border-b border-white/5 hover:text-[#c8ff00] transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    {page.name.toUpperCase()}
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