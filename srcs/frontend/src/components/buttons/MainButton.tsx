
import React, { useState } from 'react'

export interface ButtonProps {
    children?: React.ReactNode;
    name?: string;
    leftName?: string;
    rightName?: string;
    bgColor?: string;
    borderColor?: string;
    borderWidth?: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
    hoverBorderColor?: string;
    width: string;
    height: string;
    textSize: string;
    fontSize?: string;
    textColor?: string;
    svgLeft?: string | React.ReactNode;
    svgRight?: string | React.ReactNode;
}

function Maintbutton({ children, name, leftName, rightName, bgColor, borderColor, borderWidth, hoverBgColor, hoverTextColor, hoverBorderColor, width, height, textSize, fontSize, textColor, svgLeft, svgRight }: ButtonProps) {
    const [hovered, setHovered] = useState(false)

    const resolvedFontSize = textSize?.replace('text-', '') === 'base' ? '1rem'
        : textSize?.replace('text-', '') === 'sm' ? '0.875rem'
        : textSize?.replace('text-', '') === 'lg' ? '1.125rem'
        : textSize?.replace('text-', '') === 'xl' ? '1.25rem'
        : undefined

    return (
        <button
            className={`group flex items-center justify-center gap-2 rounded-sm px-4 py-2 ${fontSize ? `font-${fontSize}` : ''}`}
            style={{
                backgroundColor: hovered ? (hoverBgColor ?? 'transparent') : (bgColor ?? undefined),
                color: hovered ? (hoverTextColor ?? (bgColor ?? textColor)) : (textColor ?? undefined),
                borderColor: hovered ? (hoverBorderColor ?? borderColor) : (borderColor ?? undefined),
                borderWidth: borderWidth ? `${borderWidth}px` : undefined,
                borderStyle: borderColor ? 'solid' : undefined,
                width: width ? `${width === '52' ? '13rem' : width}` : undefined,
                height: height ? `${height === '8' ? '2.5rem' : height}` : undefined,
                fontSize: resolvedFontSize,
                transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {svgLeft && <span className="transition-transform duration-200 group-hover:-translate-x-0.5">{svgLeft}</span>}
            {name || children}
            {svgRight && <span className="transition-transform duration-200 group-hover:translate-x-1">{svgRight}</span>}
        </button>
    );
}


export default Maintbutton

// ── Shared hero / CTA button props ──────────────────────────────────────────
interface CTAButtonProps {
    href?: string;
    children: React.ReactNode;
    /** 'sm' = px-5 py-2.5 (default), 'lg' = px-6 py-3 */
    size?: 'sm' | 'lg';
    className?: string;
    onClick?: React.MouseEventHandler;
}

const ctaBase = 'group inline-flex items-center gap-2 rounded-sm border-2 text-xs font-black uppercase tracking-widest transition-colors duration-200'

export function PrimaryButton({ href, children, size = 'sm', className, onClick }: CTAButtonProps) {
    const sizeClass = size === 'lg' ? 'px-6 py-3' : 'px-5 py-2.5'
    const cls = `${ctaBase} border-[#c8ff00] bg-[#c8ff00] text-black hover:bg-transparent hover:text-[#c8ff00] ${sizeClass}${className ? ` ${className}` : ''}`
    if (href) return <a href={href} className={cls}>{children}</a>
    return <button className={cls} onClick={onClick}>{children}</button>
}

export function SecondaryButton({ href, children, size = 'sm', className, onClick }: CTAButtonProps) {
    const sizeClass = size === 'lg' ? 'px-6 py-3' : 'px-5 py-2.5'
    const cls = `${ctaBase} border-white/20 text-white/70 hover:border-white/40 hover:text-white ${sizeClass}${className ? ` ${className}` : ''}`
    if (href) return <a href={href} className={cls}>{children}</a>
    return <button className={cls} onClick={onClick}>{children}</button>
}