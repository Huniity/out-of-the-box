import type { Variants } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

// Section / block fade-up (used with whileInView)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

// Stagger container — wraps a grid or list
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

// Individual card / list item inside a stagger container
export const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
}

// Hero children — staggered on mount (not whileInView)
export const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

// Shared viewport config used with whileInView
export const viewport = { once: true, margin: '-60px' } as const
