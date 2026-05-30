import { useId } from 'react'
import { motion } from 'framer-motion'

interface Point { x: number; y: number }

interface StaticZigzagPathProps {
    from?: Point
    to?: Point
    steps?: number
    amplitude?: number
    curve?: number
    color?: string
    strokeWidth?: number
    dashed?: boolean
    dashLength?: number
    dashGap?: number
    opacity?: number
    fadeEnds?: boolean
    className?: string
    style?: React.CSSProperties
}

function buildPath(pts: Point[], curve: number): string {
    if (pts.length < 2) return ''
    let d = `M ${pts[0].x} ${pts[0].y}`
    for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1]
        const midY = (a.y + b.y) / 2
        const t = curve * 0.5
        d += ` C ${a.x} ${midY + (b.y - a.y) * t},`
           + ` ${b.x} ${midY - (b.y - a.y) * t},`
           + ` ${b.x} ${b.y}`
    }
    return d
}

export function StaticZigzagPath({
    from       = { x: 50, y: 0 },
    to         = { x: 50, y: 100 },
    steps      = 3,
    amplitude  = 25,
    curve      = 0.35,
    color      = '#c8ff00',
    strokeWidth = 2,
    dashed     = true,
    dashLength = 8,
    dashGap    = 6,
    opacity    = 0.5,
    fadeEnds   = true,
    className  = '',
    style,
}: StaticZigzagPathProps) {
    const pts: Point[] = [from]
    for (let i = 1; i <= steps; i++) {
        const t = i / (steps + 1)
        const x = from.x + (to.x - from.x) * t
        const y = from.y + (to.y - from.y) * t
        const swing = amplitude * (i % 2 === 0 ? 1 : -1)
        pts.push({ x: x + swing, y })
    }
    pts.push(to)

    const d = buildPath(pts, curve)
    const uid = useId().replace(/:/g, '')
    const gradId  = `zzp-grad-${uid}`
    const maskId  = `zzp-mask-${uid}`
    const clipId  = `zzp-clip-${uid}`

    // Animate the clip rect from the top of the path downward so the path
    // appears to draw itself from start → finish on mount.
    const startY = Math.min(from.y, to.y) - 10
    const endH   = Math.abs(to.y - from.y) + 20   // full span + padding

    return (
        <svg
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            overflow="visible"
            style={{ opacity, ...style }}
        >
            <defs>
                <linearGradient
                    id={gradId}
                    gradientUnits="userSpaceOnUse"
                    x1={from.x} y1={from.y}
                    x2={to.x}   y2={to.y}
                >
                    <stop offset="0%"   stopColor="white" stopOpacity="0" />
                    <stop offset="12%"  stopColor="white" stopOpacity="1" />
                    <stop offset="88%"  stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>

                {fadeEnds && (
                    <mask id={maskId}>
                        <rect x="-50" y="-50" width="200" height="200" fill={`url(#${gradId})`} />
                    </mask>
                )}

                {/* Reveal clip — rect grows from start-y downward on mount */}
                <clipPath id={clipId}>
                    <motion.rect
                        x="-50"
                        y={startY}
                        width="200"
                        initial={{ height: 0 }}
                        animate={{ height: endH }}
                        transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                    />
                </clipPath>
            </defs>

            <path
                d={d}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                clipPath={`url(#${clipId})`}
                {...(fadeEnds ? { mask: `url(#${maskId})` } : {})}
                {...(dashed ? { strokeDasharray: `${dashLength} ${dashGap}` } : {})}
            />
        </svg>
    )
}

export default StaticZigzagPath
