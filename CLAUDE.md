# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Restom Dental Clinic — a Russian-language dental clinic marketing website built with Next.js 14 (App Router), React 18, and TypeScript. Features 3D tooth model visualization, Framer Motion animations, and a glass-morphism dark UI theme.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint (extends next/core-web-vitals + next/typescript)

## Architecture

Single-page app using Next.js App Router. All UI lives under `src/app/page.tsx` which composes section components in order: Navbar → Hero → Services → Features → Contact → Footer.

**Path alias:** `@/*` maps to `src/*`

**Key directories:**
- `src/components/sections/` — Page sections (Hero, Services, Features, Contact)
- `src/components/` — Shared components (Navbar, Footer, Hero3D, ThreeScene)
- `src/utils/cn.ts` — `clsx` + `tailwind-merge` classname utility
- `public/models/teeth.glb` — 3D tooth model asset

**3D rendering stack:** Three.js via `@react-three/fiber` and `@react-three/drei`. The `Hero3D` component is dynamically imported with SSR disabled (WebGL requires browser). `ThreeScene` loads the GLB model, applies custom neon material, and uses OrbitControls with auto-rotation.

**Styling:** Tailwind CSS with custom brand color palette defined in `tailwind.config.ts`:
- `brand-900` (#0B192C) — primary background
- `brand-800` (#132743) — card/section backgrounds
- `brand-accent` (#38BDF8) — neon cyan accent
- `.glass` utility class in `globals.css` for backdrop-blur effects

**Animations:** Framer Motion used throughout section components for scroll-triggered reveals and hover effects.

## Important Notes

- All user-facing text is in **Russian**. Maintain Russian language for any UI strings.
- Contact form is a **frontend prototype only** — submissions log to console with no backend.
- The app uses Inter font with both `latin` and `cyrillic` subsets.
