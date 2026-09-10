# Dev Neon — Portfolio Website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS marketing site for Dev Neon.

## Pages

- `/` — home
- `/services` — services + pricing packages
- `/work` — case study grid
- `/work/[slug]` — individual case study
- `/about`
- `/contact` — contact form (UI only, see below)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

All copy for services, case studies, and pricing packages lives in one file:
`lib/data.ts`. Edit the objects there and every page that uses them updates
automatically — no need to touch component files for text changes.

The case studies are currently labeled as Dev Neon concept/demo projects
(per the brand guideline of not claiming client work you haven't done yet).
Once you have real client projects, add a `concept: false` case study to
`lib/data.ts` with real details, screenshots, and results.

## Wiring up the contact form

`components/ContactForm.tsx` currently just shows a "message received" state
on submit — it doesn't send anywhere yet. Pick one:

- **Formspree / Basin** (fastest): point the form's `action` at your
  Formspree endpoint, or POST the form data with `fetch` in `handleSubmit`.
- **Resend + a Next.js API route**: create `app/api/contact/route.ts` that
  accepts a POST and sends an email via Resend, then call it from
  `handleSubmit`.
- **A no-code form service**: swap the form markup for an embed.

## Brand tokens

Colors, fonts, and spacing live in `tailwind.config.ts`:

- `green` (#0E6B55) — primary brand color, from the logo
- `rust` (#D9622B) — accent, from the logo's dot
- `paper` / `ink` — background / text
- Fonts: Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono
  (tags, code-style labels — the `<tag>` motif used throughout)

## Deploying

The fastest path is [Vercel](https://vercel.com): push this to a GitHub repo
and import it — zero config needed for a standard Next.js app. Set your
domain (e.g. `devneon.com`) in the Vercel project settings once you've
registered it.
