import { useState, useEffect, useMemo } from 'react'

interface Props {
  images: string[]
  interval?: number
  size?: number
  className?: string
}

export default function IconGallery({ images, interval = 3000, size = 92, className = '' }: Props) {
  const srcs = useMemo(() => images.filter(Boolean), [images.join(',')])
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
