# Blue Dragonfly Health & Wellness

Multi-page practitioner website for a Calgary, Alberta health & wellness clinic run by Cheryl Hathaway, NWP — showcasing five regenerative therapy services with consultation intake and contact forms.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/blue-dragonfly/` — the website (React + Vite, wouter routing, served at `/`)
- `artifacts/blue-dragonfly/src/pages/` — Home, About, Blog, Contact, 404, and 5 service pages
- `artifacts/blue-dragonfly/src/components/SEO.tsx` — per-page titles, meta, OG tags, JSON-LD (react-helmet-async)
- `attached_assets/` — source content brief, both logos, Cheryl's photo (imported via `@assets` alias)
- `artifacts/blue-dragonfly/src/index.css` — brand theme (blues + gold palette)

## Architecture decisions

- Frontend-only site: no backend/database. Both forms (contact + Perfect Day intake) POST client-side to Web3Forms using `VITE_WEB3FORMS_ACCESS_KEY`; if the key is unset, forms show a graceful "being set up" message instead of failing.
- Absolute medical claims from the source copy were softened for Google/YMYL safety; a wellness disclaimer lives in the footer.
- Bone Density Scanning copy was rewritten patient-facing (source copy was device-sales oriented).

## Product

- Home with services-at-a-glance and a reserved "more practitioners coming soon" placeholder (also on About)
- Service pages: Wolfe Non Surgical, Perfect Day Consultations (multi-step quiz intake form), Cardio MedBed EECP, CellSonic Regeneration ESWT, Advanced Bone Density Scanning
- About (Cheryl Hathaway, NWP), Contact (Web3Forms)
- Blog: 10 articles in `src/content/blogPosts.ts` (structured data, claims softened for YMYL); listing at `/blog` with featured hero (Ultimate Regeneration Protocol, tagged all 3 categories) + filter pills (Wolfe / CellSonic / Cardio); posts at `/blog/:slug` with Article JSON-LD, per-post canonical URL, contact CTA + service link, educational disclaimer
- Unlisted `/consultation-intake` page (not in nav, meta noindex, intentionally NOT in robots.txt to avoid advertising the URL): full 8-step post-booking consultation form mirroring the Consult Form PDF; data-driven config in `src/components/consult/consultConfig.ts`; localStorage draft autosave with option-validated restore; only name/email/phone/purpose required; delivers via Web3Forms. Workflow: client books → Cheryl sends the link → email arrives.
- SEO/AEO: unique per-page titles/descriptions, Open Graph, JSON-LD LocalBusiness + Service schema, Calgary-focused keywords
- Legal: `/privacy-policy` and `/terms` (Terms of Use + medical disclaimer, Alberta/PIPA-oriented boilerplate, not lawyer-reviewed); linked in footer "Clinic" column; in sitemap

## User preferences

- Keep all service and practitioner names complete and exact
- Keep the powerful sales language, but soften claims that could get penalized by Google
- Exact brand palette: #173B8F, #2F68C6, #62B6F3, #D8B55A, #FBFAF7
- More real photos coming later — swap out generated/stock imagery when provided

## Gotchas

- Confirmed custom domain: `bluedragonflyhealthandwellness.com` (with the "e" in blue) — used in SEO canonical URLs, `public/sitemap.xml`, and `public/robots.txt`

- `VITE_WEB3FORMS_ACCESS_KEY` is set (shared env) and confirmed working on the live Cloudflare site. Web3Forms blocks submissions from dev/preview domains (localhost, Replit preview), so forms show "Submission failed" in the workspace preview — this is expected; production and `pages.dev` domains work.
- Home page reserves a blank practitioner section (image + bio) for content coming soon

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
