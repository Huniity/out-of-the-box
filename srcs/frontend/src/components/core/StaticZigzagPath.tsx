import { useId } from 'react'

/**
 * StaticZigzagPath
 *
 * A static (non-animated) SVG zig-zag path you can drop anywhere.
 *
 * Props
 * ─────
 * from       {x, y}   Start point in % of the container  (default: {x:50, y:0})
 * to         {x, y}   End point in % of the container    (default: {x:50, y:100})
 * steps      number   Zig-zag peaks between start & end  (default: 3)
 * amplitude  number   Side-swing width in %              (default: 25)
 * curve      number   0 = sharp corners · 1 = smooth S   (default: 0.35)
 * color      string   Stroke colour                      (default: '#c8ff00')
 * strokeWidth number  Stroke width in CSS px             (default: 2)
 * dashed     boolean  Dashed line?                       (default: true)
 * dashLength number   Length of each dash in px          (default: 8)
 * dashGap    number   Gap between dashes in px           (default: 6)
 * opacity    number   Overall opacity                    (default: 0.5)
 * fadeEnds   boolean  Fade stroke to transparent at both ends (default: true)
 * className  string   Extra classes on the <svg>
 * style      CSSProperties
 */

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
        // tension: 0 → straight lines, 1 → tight S-curves (mirrors original Path.tsx logic)
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
    // Build intermediate zig-zag waypoints
    const pts: Point[] = [from]
    for (let i = 1; i <= steps; i++) {
        const t = i / (steps + 1)
        const x = from.x + (to.x - from.x) * t
        const y = from.y + (to.y - from.y) * t
        // alternate left / right
        const swing = amplitude * (i % 2 === 0 ? 1 : -1)
        pts.push({ x: x + swing, y })
    }
    pts.push(to)

    const d = buildPath(pts, curve)
    const uid = useId().replace(/:/g, '')
    const gradId = `zzp-grad-${uid}`
    const maskId = `zzp-mask-${uid}`

    return (
        <svg
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            overflow="visible"
            style={{ opacity, ...style }}
        >
            <defs>
                {/* Gradient aligned from `from` → `to` so both ends fade out */}
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
            </defs>
            <path
                d={d}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                {...(fadeEnds ? { mask: `url(#${maskId})` } : {})}
                {...(dashed ? { strokeDasharray: `${dashLength} ${dashGap}` } : {})}
            />
        </svg>
    )
}

export default StaticZigzagPath
