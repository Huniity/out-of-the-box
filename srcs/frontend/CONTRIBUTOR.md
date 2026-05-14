# Frontend Contributors Guide

This file is the source of truth for frontend visual consistency.

## Stack and Styling Setup

- Framework: React + Vite.
- Utility styling: Tailwind CSS v4.
- Tailwind is integrated with `@tailwindcss/vite` in `vite.config.js`.
- Tailwind is loaded from `src/index.css` using `@import "tailwindcss";`.
- There is currently no `tailwind.config.*` file.

Implication:

- Theme and design tokens are currently managed with CSS variables in `src/index.css` and Tailwind arbitrary values in components.

## CSS Architecture

Primary style files:

- `src/index.css`: global defaults, root variables, base typography, utility layer.
- `src/styles/leaves.css`: decorative leaf motion keyframes.
- `src/styles/marquee.css`: marquee animation and separators.
- `src/styles/path.css`: area label accent color helpers.

Current custom utility:

- `.no-scrollbar` in `src/index.css` under `@layer utilities`.

Guidelines:

- Put reusable utility classes in `src/index.css` under `@layer utilities`.
- Keep section-specific animation in `src/styles/*.css`.
- Keep component inline styles for one-off visual behavior only.

## Current Global Tokens (`src/index.css`)

Current root token values:

- `--text: #fff`
- `--text-h: #08060d`
- `--bg: #000`
- `--sans: system-ui, 'Segoe UI', Roboto, sans-serif`
- `--heading: system-ui, 'Segoe UI', Roboto, sans-serif`
- `--mono: ui-monospace, Consolas, monospace`

Global type defaults:

- Root font shorthand: `font: 18px/145% var(--sans)`
- Letter spacing: `0.01rem`

Note:

- Older tokens like `--border`, `--accent-bg`, `--social-bg` are not present in the current `src/index.css` and should not be treated as active system tokens.

## Color System

### Primary visual language

- Base canvas: black / near-black surfaces.
- Primary interaction accent: `#c8ff00`.
- Primary contrast text: white.

### Secondary accents currently used in components

- Pink family: `#f9a8d4`, `#ec4899`, `#ff2f7e`, `#e8365d`
- Orange family: `#fb923c`, `#f97316`, `#f26a00`
- Blue family: `#60a5fa`, `#3b82f6`, `#2f70ff`, `#745ff2`
- Purple family: `#a78bfa`, `#a855f7`, `#9b4dff`
- Green/teal family: `#22c55e`, `#14b8a6`, `#00c58d`
- Yellow/lime family: `#eab308`, `#f4ff00`, `#b7ff00`
- Supporting card neutrals: `#f5f0e8`, `#e0d8c8`, `#111`

Guidelines:

- Use `#c8ff00` for primary actions and key highlights.
- Use secondary accents for category/event coding only.
- Keep dark base surfaces consistent across sections.

## Typography

Font stack in use:

- Sans/Heading: `system-ui, 'Segoe UI', Roboto, sans-serif`
- Mono: `ui-monospace, Consolas, monospace`

Current conventions:

- Section titles: `font-black`, uppercase, tight tracking.
- Metadata labels: small uppercase (`text-[10px]`) with extended tracking (`tracking-[0.2em]` or `tracking-widest`).
- CTA labels: bold/black uppercase with strong contrast.

Guidelines:

- Keep the current font stack unless a team decision introduces brand fonts.
- Preserve uppercase-heavy hierarchy for key headings and labels.

## Tailwind Usage Conventions

Common patterns:

- Section shells often use `bg-white/5 border-t border-white/10`.
- Accent text and borders frequently use `[#c8ff00]` arbitrary values.
- CTA hover style typically flips between lime and black.
- Layout uses responsive arbitrary values (`top-[..]`, `left-[..]`, `w-[..]`, `rotate-[..]`) in decorative compositions.

Guidelines:

- Reuse established class patterns before adding new visual systems.
- Keep transitions mostly in the `duration-200` to `duration-300` range.
- If an arbitrary value repeats in 3+ places, consider extracting a CSS variable or reusable class.

## Assets

Main directory:

- `src/assets/`

Asset groups currently used:

- Logos: `ootb_*.png`, `logo_etic_*.png`
- Decorative doodles/stars: `d_*.png`, `star_*.png`, `Artboard_*.png`
- Nature elements: `leaf*.png`, `bush.png`
- Photography/content media: `FUNDO.jpg`, `*.webp` section images

Guidelines:

- Prefer `webp` for large photographic content.
- Keep transparent decorative elements in `png`.
- Use short, descriptive names for newly added assets.

## Buttons and Interactions

Current shared button language (from `MainButton` usage):

- 2px bordered button silhouette.
- Primary variant: lime background + black text.
- Hover variant: black background + lime text/border.
- Small icon motion on hover.

Guidelines:

- Extend `src/components/buttons/MainButton.tsx` for new CTA variants where possible.
- Avoid introducing conflicting button systems in isolated sections.

## Contributor Checklist (Before PR)

- Colors follow the current palette and role usage.
- Typography follows the existing uppercase/weight hierarchy.
- Tailwind classes follow existing section patterns.
- Reusable styles are placed in global/style files where appropriate.
- New assets are stored in `src/assets/` with clear naming.
- Hover/focus states remain readable on dark backgrounds.

## PR Checklist Template

Copy this into PR descriptions for frontend visual changes:

- [ ] I used the current accent system (`#c8ff00` + contextual secondary accents).
- [ ] I followed current typography conventions (`font-black`, uppercase metadata labels).
- [ ] I avoided unnecessary new arbitrary Tailwind values.
- [ ] Repeated custom values were extracted when appropriate.
- [ ] New assets were added under `src/assets/` and optimized.
- [ ] Hover/focus/active states were checked on dark backgrounds.
- [ ] I updated `CONTRIBUTOR.md` if I changed visual conventions.

## Maintenance Notes

- Update this file in the same PR whenever frontend visual patterns change.
- If a Tailwind config file is introduced later, document token mapping and conventions here.
