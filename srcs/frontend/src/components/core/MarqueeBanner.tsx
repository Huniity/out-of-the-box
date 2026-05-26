import { useEffect, useRef, useState } from 'react'
import '../../styles/marquee.css'

const COPIES = 4 // enough to always fill any screen width

const iconStyle: React.CSSProperties = {
    filter: 'drop-shadow(0 0 1px black) drop-shadow(0 0 2px black)',
    flexShrink: 0,
}

const textStyle: React.CSSProperties = {
    color: '#c8ff00',
    WebkitTextStroke: '2px black',
    paintOrder: 'stroke fill',
    fontWeight: 900,
    textTransform: 'uppercase',
    lineHeight: 1.1,
    fontSize: '0.85rem',
    letterSpacing: '0.05em',
}

const TARGET = new Date('2026-07-03T00:00:00')

function getTimeLeft() {
    const diff = TARGET.getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    }
}

function pad(n: number) { return String(n).padStart(2, '0') }

function InlineCountdown() {
    const [time, setTime] = useState(getTimeLeft)
    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000)
        return () => clearInterval(id)
    }, [])

    const units = [
        { label: 'D', value: pad(time.days) },
        { label: 'H', value: pad(time.hours) },
        { label: 'M', value: pad(time.minutes) },
        { label: 'S', value: pad(time.seconds) },
    ]

    return (
        <span className="marquee-item">
            {units.map(({ label, value }, i) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.15rem' }}>
                    <span style={{ ...textStyle, display: 'inline-block', width: '2ch', textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontFamily: 'monospace' }}>
                        {value}
                    </span>
                    <span style={{ ...textStyle, fontSize: '0.7rem' }}>{label}</span>
                    {i < units.length - 1 && <span style={{ ...textStyle, margin: '0 0.2rem' }}>:</span>}
                </span>
            ))}
        </span>
    )
}

function BannerContent() {
    return (
        <>
            <span className="marquee-item">
                <span style={textStyle}>3 A 17 JULHO DE 2026</span>
            </span>
            <span className="marquee-separator">✦</span>
            <span className="marquee-item">
                <span style={textStyle}>IPDJ, FARO</span>
            </span>
            <span className="marquee-separator">✦</span>
            <InlineCountdown />
            <span className="marquee-separator">✦</span>
            <span className="marquee-item">
                <span style={textStyle}>ENTRADA GRÁTIS</span>
            </span>
            <span className="marquee-separator">✦</span>
        </>
    )
}

export default function MarqueeBanner() {
    const trackRef = useRef<HTMLDivElement>(null)
    const halfRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const track = trackRef.current
        const half = halfRef.current
        if (!track || !half) return

        // Shift by exactly one copy width so the loop is pixel-perfect
        const oneCopyWidth = half.getBoundingClientRect().width
        track.style.setProperty('--marquee-shift', `-${oneCopyWidth}px`)
    }, [])

    return (
        <div className="marquee-banner z-[1] relative">
            <div className="marquee-track" ref={trackRef}>
                {Array.from({ length: COPIES }).map((_, i) => (
                    <span
                        className="marquee-half"
                        key={i}
                        ref={i === 0 ? halfRef : undefined}
                    >
                        <BannerContent />
                    </span>
                ))}
            </div>
        </div>
    )
}