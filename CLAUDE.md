> Always-in-context project DNA. Read this before any task. Decisions below override generic best-practice defaults.

# What this is

Paint Pal Plus is the residential + commercial painting site for Oscar's Yamhill County, Oregon business. Sister site PPP Construction comes later — this one is painting-only.

Source site (reference, not to clone): https://www.paintpalplus.com/

The aesthetic is **Pacific Northwest craft viewed through a Willamette Valley winery lens** — editorial pacing, restrained palette, place-named colors, hand-touched details. Not a contractor template.

# Stack

- **Framework:** Next.js 15 (App Router, TypeScript, strict mode)
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` directive — no `tailwind.config.js`)
- **Animation:** GSAP + ScrollTrigger (used sparingly — see motion principles)
- **Forms:** Ollin Lead Gateway, `tenantId: "paint-pal-plus"`
- **Hosting:** Cloudflare Pages
- **Node:** 20+

# Palette

Named colors. Use CSS variables, not raw hex in components.

| Name              | Hex       | CSS variable         | Role                                |
| ----------------- | --------- | -------------------- | ----------------------------------- |
| Willamette fog    | `#F5EFE3` | `--color-fog`        | Primary background                  |
| Evergreen         | `#1F2E25` | `--color-evergreen`  | Primary text, dark sections, footer |
| Yamhill sage      | `#94A48E` | `--color-sage`       | Accent — marquee, hover             |
| Coast Range ochre | `#B98839` | `--color-ochre`      | Accent — testimonial bg, CTAs       |
| Dundee clay       | `#A55E3F` | `--color-clay`       | Rare punctuation                    |
| Dark ochre        | `#3D2A0E` | `--color-ochre-text` | Text on ochre bg                    |
| Dark clay         | `#3D1E10` | `--color-clay-text`  | Text on clay bg                     |

# Typography

- **Display:** Fraunces (Google Fonts, variable, with SOFT + opsz axes) — headlines, pull quotes, big numerals
- **Body:** Hanken Grotesk (Google Fonts, variable) — body, nav, microcopy
- **Mono:** JetBrains Mono — captions, eyebrow text, color codes

Fluid type scale (use `clamp`):

- Hero headline: `clamp(40px, 6vw, 80px)`, line-height 1.05
- Section headings: `clamp(28px, 4vw, 48px)`, line-height 1.1
- Manifesto: `clamp(28px, 3vw, 44px)`, line-height 1.2
- Body: 16–18px, line-height 1.6
- Microcopy / mono: 12–13px

# Routes

- `/` — Home (10 sections + footer)
- `/painting` — Combined residential + commercial, with anchor links
- `/about` — Oscar's editorial story
- `/gallery` — Filterable project portfolio
- `/contact` — Form + service area
- `/legal` — Terms + privacy (single page)

# Critical rules

1. **No full-bleed hero video.** The hero video is a 16:9 framed element inside the cream. Never a background with overlaid text.
2. **No logo in footer.** The wordmark stays anchored to the nav only.
3. **Paper grain everywhere.** Subtle SVG noise overlay over the cream. Single biggest factor separating handmade from AI-generated feel. Opacity ~0.05, `mix-blend-mode: multiply`.
4. **Hand-drawn flourishes are punctuation, not decoration.** 3–4 total across the entire site.
5. **Editorial, not landing-page.** Asymmetric grids, generous whitespace, mono captions, drop caps on long-form. The site reads like an article, not a brochure.
6. **Cream dominates.** Color blooms (sage, ochre, clay, evergreen) are punctuation. Two colored sections per page maximum.
7. **Mobile + desktop equal priority.** Every section spec includes mobile behavior — implement both at once, not retrofitted.
8. **Reuse design system primitives.** PaintChip, ColorMarquee, ProcessStrip, PullQuote, HandDrawnUnderline — defined once, used everywhere.
9. **AI imagery for anonymous subjects only.** Rooms, exteriors, textures, tools. Never for Oscar, his team, or actual project photos.
10. **Wire forms to Ollin Lead Gateway.** `tenantId: "paint-pal-plus"`; the `source` field identifies which form (`home-contact`, `contact-page`, etc.).

# Anti-patterns (do not build)

- Diagonal split layouts (2018 contractor look)
- Gradient backgrounds
- Stocky AI imagery (smiling painter in white overalls = banned)
- "Why choose us" benefit grids
- Testimonial carousels
- Full-bleed hero video with overlaid headline
- Symmetric centered hero layouts
- Icon-only service cards
- Logo placement in the footer

# File structure

```
/app
  layout.tsx              # Root layout, fonts, metadata, paper grain
  globals.css             # Tailwind v4 + @theme tokens + base styles
  page.tsx                # Home
  /painting/page.tsx
  /about/page.tsx
  /gallery/page.tsx
  /contact/page.tsx
  /legal/page.tsx
/components
  /sections               # One file per home section (Hero, Manifesto, ServicesChips…)
  /ui                     # PaintChip, ColorMarquee, ProcessStrip, PullQuote, HandDrawnUnderline
  /global                 # Nav, Footer
  /forms                  # ContactForm
/lib
  projects.ts             # Gallery data (typed)
  copy.ts                 # Content imported from Notion (manifesto, about, services)
  leads.ts                # Ollin Lead Gateway client
/public
  /images                 # Real photos (Oscar, projects, team)
  /generated              # AI-generated images, prefixed `gen-`
  /textures               # Paper grain SVG, hand-drawn underlines
```

# Brand voice (writing tone)

- Short declarative sentences
- Specific over generic (`off-whites` not `colors`)
- Action-led verbs (`we mix`, `we treat`, not `we offer`)
- First-person plural (`we`, not `Paint Pal Plus`)
- Closes on the homeowner relationship
- Reads aloud naturally — say it before you write it

# Motion principles

- Sparingly editorial, not flashy
- Three earned interactions on the home page: hero video, color marquee scroll, featured testimonial pull-quote
- Text fades in slowly via GSAP ScrollTrigger
- Photos parallax inside their frames, not the entire page
- No `whileHover` springiness, no spring physics on scroll, no parallax mountain ranges

# Reference pages in Notion

- [Master](https://www.notion.so/Paint-Pal-Plus-Painting-Website-362419a6b51881fbb9f1d3239592de5b?pvs=21)
- [Brand & design system](https://www.notion.so/Brand-design-system-362419a6b518818da1bcd1267bc3023a?pvs=21)
- [Information architecture](https://www.notion.so/Information-architecture-362419a6b518816c9774cd51a661071d?pvs=21) (sitemap + all page wireframes)
- [Content](https://www.notion.so/Content-362419a6b518816fa022dbcf2b29bcdb?pvs=21) (manifesto, About story, services copy)
- [Asset library](https://www.notion.so/Asset-library-362419a6b5188135a48ef34b0b9db00c?pvs=21) (AI prompts, hero video specs, Oscar checklist)
