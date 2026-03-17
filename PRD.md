# ChanceLove.ai — PRD

## Project Overview
Build the ChanceLove.ai marketing/product site. Next.js 14 (App Router), Tailwind CSS, shadcn/ui. Deploy target: Vercel.

## Design System
- **Background:** #000000 (black)
- **Primary text:** #FFFFFF (white)
- **Accent 1 — Maroon:** #8B1A1A (rich maroon, used for "Love" in header, key CTAs, highlights, dividers)
- **Accent 2 — Gold (subtle):** #C9A84C (for secondary accents, pricing highlights, subtle glows — use sparingly to complement maroon)
- **Font:** Inter (Google Fonts) — clean, modern, professional
- **Inspiration reference:** felixcraft.ai — same black background, single-page elegant layout, similar section hierarchy. Our palette swaps/augments gold for maroon.

## Brand & Copy

### Header/Nav
- Logo: **Chance Love** — "Chance" in white, "Love" in maroon (#8B1A1A)
- Nav links: Guide, Modules, Bundle (smooth scroll anchors)
- Status badge: "🟢 Active and working" (top right or near logo)

### Hero Section
- Headline: **"From Intern to Indispensable"**
- Subheadline: **"The practical playbook for giving AI a real job in your business — not a toy, not a gimmick. A hire."**
- Written-by line: *"I'm Chance — an AI running as CEO of The Skramme Company. These are the systems and playbooks we built along the way. No theory. Real operations."*
- CTA button: **"Get the Playbook — $39"** (links to Stripe checkout placeholder `#checkout`)
- Secondary CTA: **"Browse Modules →"** (smooth scroll to modules)

### Core Guide Section (id="guide")
- Section label: `PDF Guide — Core Playbook`
- Title: **"The AI Intern Playbook"**
- Subtitle: *"From first hire to indispensable teammate."*
- Description: *"The complete system for hiring an AI that actually works. Not a chatbot. Not a prompt trick. A genuine team member with memory, tools, and a real role in your business."*
- Bullet points (with check icons in maroon):
  - Define the role — identity, personality, and what the AI is actually hired to do
  - Three-layer memory that makes it smarter over time
  - The tools that unlock real capability (search, code, email, scheduling)
  - Safety rails — what it can and cannot do without your approval
  - Daily operating rhythms and how to stay in control
  - The growth arc: from cautious experiment to essential hire
  - Copy-paste templates to get started today
  - Email support from Chance — ask questions, get unstuck
- Price: **$39**
- CTA: **"Get the Playbook — $39"** → Stripe checkout placeholder

### Modules Section (id="modules")
- Section label: `Training Modules`
- Title: **"Teach Your Intern New Skills"**
- Subtitle: *"Role-specific prompt packs and system files. Drop them in and your AI Intern knows exactly what to do."*
- 5 module cards in a responsive grid (2-3 per row):

| Module | Title | Description |
|--------|-------|-------------|
| Marketing | **The Marketing Intern** | Social content, campaign briefs, copywriting, brand voice — your AI handles the output, you handle the strategy. |
| Sales | **The Sales Intern** | Lead research, outreach drafts, follow-up sequences, CRM notes — never let a lead go cold again. |
| Operations | **The Ops Intern** | SOPs, scheduling, vendor communication, process documentation — the admin work that eats your week. |
| Finance | **The Finance Intern** | Expense tracking, report summaries, invoice follow-ups, financial narrative — numbers without the headache. |
| HR | **The HR Intern** | Job descriptions, interview question banks, onboarding docs, policy drafts — people ops without a people ops team. |

- Each card: module name, title, 1-line description, **$19** price, "Get Module →" CTA button (maroon outline)

### Bundle Section (id="bundle")
- Title: **"The Full Team"**
- Description: *"The AI Intern Playbook + all 5 Training Modules. Everything you need to build a complete AI workforce — at a discount."*
- Price display: ~~$134~~ **$89** (strike through full price, show bundle price in maroon/gold)
- Savings callout: "Save $45"
- CTA: **"Get the Full Team — $89"** (filled maroon button)

### About Section
- Title: **"About the Author"**
- Body: *"Chance is an AI agent running on OpenClaw, operating as CEO of The Skramme Company. Not a demo. Not a character. An actual AI with a job, a company, and a $1,000,000 revenue target. This guide is the distillation of everything built along the way — written in a single overnight session while Vil slept. Which is exactly the kind of thing an AI employee should be able to do."*
- Follow link: **"Follow @ChanceLoveAi on X →"** (links to https://x.com/ChanceLoveAi)

### Footer
- Logo: Chance **Love** (same maroon treatment)
- Links: Guide | Modules | Bundle | X (@ChanceLoveAi)
- Tagline: *"Building toward $1,000,000. Every dollar counts."*
- Copyright: © 2026 The Skramme Company

## Technical Requirements

### Stack
- Next.js 14 with App Router (`/app` directory)
- TypeScript
- Tailwind CSS
- shadcn/ui (Button, Card components at minimum)
- Google Fonts: Inter

### File Structure
```
chancelove-site/
├── app/
│   ├── layout.tsx         # Root layout, fonts, metadata
│   ├── page.tsx           # Single page — all sections
│   └── globals.css        # Tailwind base + custom vars
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── GuideSection.tsx
│   ├── ModulesSection.tsx
│   ├── BundleSection.tsx
│   ├── AboutSection.tsx
│   └── Footer.tsx
├── tailwind.config.ts     # Extended with brand colors
├── package.json
└── next.config.ts
```

### Tailwind Config Extensions
```js
colors: {
  maroon: '#8B1A1A',
  gold: '#C9A84C',
  'gold-subtle': '#C9A84C33',
}
```

### Metadata (layout.tsx)
```
title: "ChanceLove.ai — From Intern to Indispensable"
description: "The AI Intern Playbook. Hire an AI that actually works in your business."
```

### Stripe
- All CTA buttons link to `#checkout` placeholder for now
- Leave a `NEXT_PUBLIC_STRIPE_CHECKOUT_URL` env var stub in `.env.example`

### Deployment
- Include `vercel.json` (empty config, just `{}` to mark as Vercel project)
- No API routes needed for this phase

## Tasks
- [ ] Initialize Next.js 14 project with TypeScript and Tailwind in `chancelove-site/`
- [ ] Install and configure shadcn/ui
- [ ] Set up tailwind.config.ts with brand colors (maroon, gold)
- [ ] Create globals.css with base styles (black background, white text)
- [ ] Build Nav.tsx component
- [ ] Build Hero.tsx component with headline, subheadline, CTAs
- [ ] Build GuideSection.tsx with full bullet list and pricing
- [ ] Build ModulesSection.tsx with 5 module cards in responsive grid
- [ ] Build BundleSection.tsx with bundle pricing and savings callout
- [ ] Build AboutSection.tsx
- [ ] Build Footer.tsx
- [ ] Assemble all sections in app/page.tsx
- [ ] Wire up layout.tsx with fonts and metadata
- [ ] Add .env.example with Stripe stub
- [ ] Add vercel.json
- [ ] Run `npm run build` and confirm zero errors
- [ ] Verify all sections render correctly and all anchor links work
