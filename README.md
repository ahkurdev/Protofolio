# Ahmad Kurniawan Portfolio

A Dark Luminous portfolio built with Next.js App Router, React, strict TypeScript, Tailwind CSS, shadcn/ui, Motion and GSAP. Four selected projects are based on public project evidence. Supplied portraits retain their natural tones.

## Run

Requires Node.js 24 and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. For production use `pnpm build` then `pnpm start`.

## Validate

```sh
pnpm lint
pnpm typecheck
node --experimental-strip-types --test tests/github.test.ts
pnpm build
```

The data tests exercise successful responses, invalid counts, rate limiting, malformed JSON and offline fallback. See AUDIT.md for browser checks and remaining verification limits.

## Deployment

Deploy to a Node-compatible Next.js host. Set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS origin before building. This enables the canonical URL and sitemap and gives generated Open Graph images an absolute production URL. Without this setting, metadata uses localhost and the sitemap is empty; this is intended for local preview only. No private API token is required. Copy `.env.example` to `.env.local` for local configuration. This workspace has not been published.

## Edit content

- `data/portfolio.ts`: profile, contact details, project copy and technology groups.
- `components/sections.tsx`: section composition and copy.
- `app/globals.css`: responsive layout and luminous design tokens.
- `lib/github.ts`: cached public GitHub statistics, four-second timeout and dated fallback.
- `public/images/`: owner-provided portraits and the actual Sinar Mulyo capture.
- `research/`: source snapshots used to substantiate project descriptions.
- `DESIGN.md`: typography, palette, composition, motion and rationale.

Hikalist and Caloris use labelled architecture diagrams because no verified application screenshots were supplied. Sinar Mulyo's published example content is explicitly disclosed. Do not replace diagrams with invented interfaces or imply unverified adoption.

## Motion components

React Bits source is installed locally and adapted to this design:

| Component    | Purpose / adaptation                                                              |
| ------------ | --------------------------------------------------------------------------------- |
| SplitText    | One-time name introduction, visible server text, scoped GSAP cleanup              |
| BlurText     | Brief statement introduction; static under reduced motion                         |
| RotatingText | Short discipline sequence that settles, no endless hero carousel                  |
| GooeyNav     | Restrained animated active marker over native anchor links                        |
| ScrollFloat  | Small heading translation, no hidden headings                                     |
| ScrollReveal | Gentle reading entry, visible text without JavaScript                             |
| ScrollStack  | Native sticky desktop chapters; normal mobile/reduced-motion flow                 |
| LogoLoop     | Curated technology logos, pause control and static reduced-motion layout          |
| ClickSpark   | Short clipboard feedback; animation frames run only during a click                |
| Lanyard      | Opt-in lazy desktop 3D identity card; static mobile/reduced-motion/error fallback |

Motion Primitives AnimatedNumber introduces real repository/follower counts. Base UI-backed shadcn Button supplies shared action styling. Native anchors preserve keyboard navigation and browser scrolling. Clipboard failure produces actionable feedback; contact details remain selectable.

The full 3D dependency graph is dynamically imported only after the visitor requests the interactive card. Leaving the viewport unmounts the scene. No scroll replacement library runs globally. Local variable fonts avoid third-party font requests.

## Sources and attribution

See THIRD_PARTY_NOTICES.md. Personal photographs were supplied by the owner. Public GitHub data is fetched hourly on the server and falls back to the dated research snapshot.

## September 14 update

The owner requested motion to start automatically. The shared motion store now defaults to full motion and remembers an explicit pause with `portfolio-motion-v2`. The header exposes Motion on/off. The logo rail runs continuously, including while hovered; its dedicated pause button is still available. Old OS-level CSS overrides no longer cancel an explicit full-motion choice. GSAP headings, split text, Motion components and the logo loop share the same preference.

The technology selector now contains all 39 items in the owner's supplied image across Languages, Frameworks & Runtime, Data & Cloud, Security & Scripting, and Tools. Most items use Simple Icons brand marks; Java, VS Code and the scripting libraries use relevant Lucide symbols where that package has no corresponding brand mark. The strip remains a curated subset. Navigation follows Home, Work, About, Stack, Contact.

### Automatic motion, final owner preference

The header motion toggle has been removed. Animations start automatically after hydration, regardless of old local-storage preferences or OS motion settings. The logo rail's own pause button remains scoped to that rail. The root layout declares full motion; there is no global preference control or storage listener.

The owner also requested removal of the logo rail pause button. The rail now runs continuously with no hover, focus, or button pause behavior.

## Production project

Git remote: https://github.com/ahkurdev/Protofolio (main).
Vercel project: portofolio, team allans-projects-f2f44acb.
Production domain: https://ahkur.my.id. The existing Vercel project is connected to this repository so future main-branch pushes can deploy automatically. The site origin defaults to this domain and can be overridden with NEXT_PUBLIC_SITE_URL. Local .vercel metadata and authentication files are ignored.
