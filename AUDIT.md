# Verification record

## Current revision, September 14, 2026

- Build: PASS, Next.js compiled and generated seven static routes.
- ESLint: PASS.
- Strict TypeScript: PASS.
- GitHub fallback tests: three passing tests covering success, malformed responses, rate limiting, invalid counts and offline behavior.
- Content: 39 technologies transcribed from the owner's screenshot, across five categories.
- Motion source check: automatic full-motion default, persisted explicit pause, shared preference used by GSAP and Motion; no OS reduced-motion CSS block cancels the logo rail. Hover no longer pauses the logo rail. Duplicate loop groups cover wide displays.
- Navigation: Home, Work, About, Stack, Contact; each target exists in page composition.

Current browser verification is unavailable: the Codex browser kernel fails before startup with `helper_sandbox_lock_failed` / `SetNamedSecurityInfoW` error 5. The latest selector, motion override, and header changes have therefore been build-checked but not visually rechecked in this environment. No Lighthouse score is claimed.

## Earlier production browser checks, September 13

These results apply to the previous visual revision, not a full regression test of the September 14 changes.

- Widths 375, 390, 430, 768, 1024, 1280, 1440, 1920: document scroll width matched available client width, no horizontal overflow.
- Mobile menu opened; Escape closed it and returned focus to Menu. Contact anchor closed the menu.
- Email and Discord copy controls returned Copied feedback.
- One h1; all internal anchor targets existed; all three content images loaded.
- Production console: no errors or warnings during the tested static/reduced-motion path.
- Home, robots, sitemap, Open Graph image and Lanyard asset URLs returned 200; unknown page returned 404.
- Sinar Mulyo, GitHub profile, Hikalist, Calories, TaskFlow and Instagram returned 200. LinkedIn returned 999 (automated access restriction), so its live destination remains unverified.
- Isolated optional 3D smoke check produced a blank canvas and dependency warnings. Interactive rendering/dragging is not signed off; the static identity card remains the reliable fallback.

## Design review

The supplied portraits, real village capture, labelled architecture diagrams, sourced GitHub counts and owner-specified technology list avoid invented evidence. DESIGN.md records the palette, typography, hierarchy and white-light treatment. The current changes require a fresh visual and keyboard pass once browser tooling is available; this record does not claim a complete accessibility or anti-slop delivery gate.
