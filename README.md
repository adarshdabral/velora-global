# Velora Global

A cinematic, interactive presentation site for Velora Global — built from the Velora launch deck as a digital product universe rather than a scrolling slide deck.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- `motion/react` (Framer Motion)
- `lucide-react`

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/` — Hero, Roadmap, Vision, ProductUniverse (and per-product reveals under `products/`), CoreTeam, EcosystemClimax, FinalCTA, Navbar, Cursor, ScrollProgress, InfinityMark
- `src/data/` — content model (roadmap stages, ecosystem nodes, product copy) sourced from the Velora Global deck
- `src/hooks/` — typewriter, mouse parallax, magnetic buttons, scroll progress
- `src/assets/images/` — art assets cropped from the source presentation
