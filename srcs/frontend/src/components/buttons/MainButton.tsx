
import React from 'react'

interface CTAButtonProps {
    href?: string | null;
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
