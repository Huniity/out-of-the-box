# Frontend Contributor Guide

This document defines the visual system currently used in the frontend so new sections stay consistent.

## 1) Core Design Principles

- Base mood: dark-first UI (`black` backgrounds) with high-contrast neon accents.
- Main accent: lime green (`#c8ff00`) used for highlights, buttons, and interactive states.
- Supporting accents: pink, orange, blue, purple, teal for category/event differentiation.
- Most layout and typography is done with Tailwind utility classes.

## 2) Colors

### Primary and Neutral Colors

| Token / Purpose | Value | Where it appears |
|---|---|---|
| Main page background | `#000000` / `black` | Hero, navbar, many section backgrounds |
| Main text on dark | `#ffffff` / `white` | Headings and labels |
| Primary accent (brand action) | `#c8ff00` | Buttons, hover states, stars, highlighted words |
| Border neutral (light mode tokenized) | `#e5e4e7` | Root border token in `index.css` |
| Border neutral (dark mode tokenized) | `#2e303a` | Dark token in `index.css` |

### Tokenized Global Colors (`src/index.css`)

Light mode tokens:

- `--text: #6b6375`
- `--text-h: #08060d`
- `--bg: #fff`
- `--border: #e5e4e7`
- `--code-bg: #f4f3ec`
- `--accent: #aa3bff`

Dark mode tokens:

- `--text: #9ca3af`
- `--text-h: #f3f4f6`
- `--bg: #000`
- `--border: #2e303a`
- `--code-bg: #1f2028`
- `--accent: #c084fc`

### Secondary Accent Palette (used by cards/areas/categories)

- Lime: `#c8ff00`
- Pink: `#f9a8d4` / `#ff2f7e` / `#ec4899`
- Orange: `#fb923c` / `#f97316` / `#f26a00`
- Blue: `#60a5fa` / `#3b82f6` / `#2f70ff`
- Purple: `#a78bfa` / `#a855f7` / `#9b4dff`
- Teal/Green: `#14b8a6` / `#00c58d` / `#22c55e`
- Yellow variant: `#eab308` / `#f4ff00`

### Color Usage Rules for New Work

- Use `#c8ff00` for primary CTA/background accent and key hover highlights.
- Keep dark surfaces (`black`, `white/5`, `white/10`) as the base canvas.
- Use secondary colors for categorization (events, area cards, badges), not for primary actions.
- If adding reusable styles, prefer CSS variables/tokens first; hardcoded hex should be for contextual accents.

## 3) Typography

## Current Font Stack

Defined in `src/index.css`:

- Sans: `system-ui, 'Segoe UI', Roboto, sans-serif`
- Heading: `system-ui, 'Segoe UI', Roboto, sans-serif`
- Mono: `ui-monospace, Consolas, monospace`

No custom webfont is currently loaded from Google/Adobe/local files.

## Type Style Pattern in Components

- Heavy uppercase headings: classes like `font-black uppercase tracking-tight`.
- Small metadata labels: classes like `text-[10px] font-bold tracking-[0.2em] uppercase`.
- CTA buttons: compact, bold uppercase with wider tracking (`tracking-widest`).

## Typography Rules for New Work

- Follow existing utility pattern (`font-black` for section headings, `font-bold` for metadata).
- Keep uppercase + letter-spacing style for labels and CTA text.
- Do not introduce a new font family unless the team agrees and updates this guide.

## 4) Asset System

## Asset Location

Primary location:

- `src/assets/`

Current asset types used:

- Logos: `ootb_*.png`, `logo_etic_*.png`
- Doodles/shapes: `d_*.png`, stars (`star_*.png`)
- Leaves/plants: `leaf*.png`, `Artboard_*.png`, `bush.png`
- Photography backgrounds/content: `.jpg`, `.webp` files such as `FUNDO.jpg`, `Design.webp`, `Jogos.webp`, etc.

## Naming Pattern (already present)

- Doodles: short prefixed names (`d_o.png`, `d_pu.png`, `d_blu.png`, etc.)
- Series exports: `Artboard_#.png`
- Semantic media names for feature cards: `Design.webp`, `marketing.webp`, etc.

## Asset Usage Rules for New Work

- Prefer `webp` for large photos/content cards when possible.
- Keep transparent decorative assets as `png`.
- Keep naming short but meaningful; if the asset is for a section, include section prefix (example: `carousel_ticket_bg.webp`).
- Reuse existing decorative families (doodles/leaves/stars) before adding new visual styles.

## 5) Repeating UI Patterns

## Buttons

Primary button style pattern:

- Background: lime (`#c8ff00`) or white
- Text: black
- Hover: black background + lime text/border
- Border: 2px solid

When possible, use/extend the shared button component (`src/components/buttons/MainButton.tsx`) instead of creating one-off button implementations.

## Section Shell

Many sections use:

- `bg-white/5`
- `border-t border-white/10`
- white text with lime highlights

Use this shell for visual continuity unless a section intentionally differs.

## 6) Consistency Checklist (Before PR)

- Colors follow this palette (especially primary lime + dark base).
- Typography uses existing utility conventions (heavy uppercase hierarchy).
- Assets are placed in `src/assets/` with clear naming.
- Decorative elements (doodles/leaves/stars) match current style language.
- CTA and hover states keep the same contrast behavior.

## 7) Recommended Improvement (Team TODO)

Some components currently import assets using relative paths that look inconsistent with the real folder structure. As a team, consider normalizing imports to avoid confusion (for example via a shared alias like `@/assets/...`).

This guide should be updated whenever the design system changes.
