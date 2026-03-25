# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Restom Dental Clinic — a bilingual (Russian/Uzbek) dental clinic marketing website built with Next.js 14 (App Router), React 18, and TypeScript. Features Framer Motion animations and a glass-morphism dark UI theme. Deployed at restom-dental-clinic.uz.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint (extends next/core-web-vitals + next/typescript)

## Architecture

Single-page app using Next.js App Router. All UI lives under `src/app/page.tsx` which composes section components in order: Navbar → Hero → Services → Stats → Doctors → BeforeAfter → Media → Testimonials → Booking → FAQ → Footer → FloatingCTA.

Additional routes: `/offer` (promotional page), `/privacy` (privacy policy). A `sitemap.ts` generates the sitemap.

**Path alias:** `@/*` maps to `src/*`

**Key directories:**
- `src/components/sections/` — Page sections (Hero, Services, Stats, Doctors, BeforeAfter, Media, Testimonials, Booking, FAQ)
- `src/components/` — Shared components (Navbar, Footer, FloatingCTA, BackgroundPaths, Providers)
- `src/i18n/` — Internationalization system
- `src/utils/cn.ts` — `clsx` + `tailwind-merge` classname utility

**i18n system:** Custom React context-based language toggle (Russian/Uzbek). `LanguageProvider` wraps the app via `Providers` component. Translation dictionaries live in `src/i18n/locales/{ru,uz}.ts`. Use the `useLanguage()` hook to access `t()` for translations and `lang`/`setLang` for switching. Language preference is persisted in `localStorage` under `restom_lang`.

**Styling:** Tailwind CSS with custom brand color palette defined in `tailwind.config.ts`:
- `brand-900` (#0B192C) — primary background
- `brand-800` (#132743) — card/section backgrounds
- `brand-accent` (#38BDF8) — neon cyan accent
- `.glass` utility class in `globals.css` for backdrop-blur effects

**Animations:** Framer Motion used throughout section components for scroll-triggered reveals and hover effects.

## Important Notes

- All user-facing text must be in **both Russian and Uzbek**. When adding UI strings, add keys to both `src/i18n/locales/ru.ts` and `src/i18n/locales/uz.ts`.
- Booking/contact form is a **frontend prototype only** — submissions log to console with no backend.
- The app uses Inter font with both `latin` and `cyrillic` subsets.
