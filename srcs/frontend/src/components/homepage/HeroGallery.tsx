import { useState, useEffect } from 'react'
import Fundo from '../../assets/FUNDO2.webp'
import Fundo2 from '../../assets/FUNDO.webp'
import galleryDesign from '../../assets/Design.webp'
import galleryFoto from '../../assets/foto.webp'
import galleryVideo from '../../assets/video.webp'
import gallerySom from '../../assets/somm.webp'
import galleryMarketing from '../../assets/marketing.webp'
import galleryPrograma from '../../assets/programa.webp'
import galleryJogos from '../../assets/Jogos.webp'

const images = [
    { src: Fundo,            alt: 'Out of the Box 2026' },
    // { src: Fundo,    alt: 'Design' },
    // { src: Fundo,      alt: 'Fotografia' },
    // { src: Fundo,     alt: 'Vídeo' },
    // { src: Fundo,       alt: 'Som' },
    // { src: Fundo, alt: 'Marketing' },
    // { src: Fundo,  alt: 'Programa' },
    // { src: Fundo,     alt: 'Jogos' },
]

export default function HeroGallery({ className = '' }: { className?: string }) {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(i => (i + 1) % images.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className={`flex-1 relative overflow-hidden min-h-64 lg:min-h-0 ${className}`}>
            {images.map((img, i) => (
                <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 h-full w-full object-cover brightness-75 transition-opacity duration-1000 ${
                        i === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

            {/* Dot indicators */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Slide ${i + 1}`}
                        className={`w-1.5 rounded-full transition-all duration-300 ${
                            i === activeIndex ? 'bg-[#c8ff00] h-4' : 'bg-white/30 h-1.5'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
