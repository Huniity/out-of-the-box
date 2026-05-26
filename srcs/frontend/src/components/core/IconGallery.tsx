import { useState, useEffect, useMemo } from 'react'

import designR  from '../../assets/icons/design_rosa.webp'
import designV  from '../../assets/icons/design_verde.webp'
import fotoR    from '../../assets/icons/foto_rosa.webp'
import fotoV    from '../../assets/icons/foto_verde.webp'
import mktR     from '../../assets/icons/marketing_rosa.webp'
import mktV     from '../../assets/icons/marketing_verde.webp'
import pwR      from '../../assets/icons/pw_rosa.webp'
import pwV      from '../../assets/icons/pw_verde.webp'
import somR     from '../../assets/icons/som_rosa.webp'
import somV     from '../../assets/icons/som_verde.webp'
import jogosR   from '../../assets/icons/video_jogos_rosa.webp'
import jogosV   from '../../assets/icons/video_jogos_verde.webp'
import videoR   from '../../assets/icons/video_rosa.webp'
import videoV   from '../../assets/icons/video_verde.webp'

const ICONS: Record<string, string> = {
  design_rosa: designR,
  design_verde: designV,
  foto_rosa: fotoR,
  foto_verde: fotoV,
  marketing_rosa: mktR,
  marketing_verde: mktV,
  pw_rosa: pwR,
  pw_verde: pwV,
  som_rosa: somR,
  som_verde: somV,
  video_jogos_rosa: jogosR,
  video_jogos_verde: jogosV,
  video_rosa: videoR,
  video_verde: videoV,
}

interface Props {
  images: string[]
  interval?: number
  size?: number
  className?: string
}

export default function IconGallery({ images, interval = 3000, size = 92, className = '' }: Props) {
  const srcs = useMemo(
    () => images.map(name => ICONS[name]).filter(Boolean),
    [images.join(',')]
  )
  const [index, setIndex] = useState(() => Math.floor(Math.random() * Math.max(srcs.length, 1)))

  useEffect(() => {
    if (srcs.length <= 1) return
    const id = setInterval(() => setIndex(i => (i + 1) % srcs.length), interval)
    return () => clearInterval(id)
  }, [srcs, interval])

  if (!srcs.length) return null

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {srcs.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  )
}
