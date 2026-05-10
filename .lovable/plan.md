## Plan: Build the Premium Data Analyst Portfolio

The home page is still the blank placeholder — assets are prepared (your real photo, 5 dashboard images, resume PDF in /public, framer-motion installed), but no portfolio code exists yet. I'll build the full single-page portfolio per the PRD.

### Design system (`src/styles.css`)
- Light professional palette in `oklch`: deep royal blue, light sky blue, cyan accent, white, dark slate text, soft gray border.
- Heading font: Times New Roman serif. Body font: Inter (system fallback).
- Tokens for: gradient hero bg, glass card, blue glow shadow, soft card shadow, animated progress fill.
- Keyframes: fade-in, fade-in-up, scale-in, float, glow-pulse, gradient-shift, progress-fill, typing.
- Utility classes: `.glass-card`, `.dashboard-card`, `.timeline-line`, `.glow-border`, `.hover-lift`, `.cursor-glow`.

### Page structure (single scrolling page at `/`)
Single-route portfolio with smooth-scroll hash anchors (acceptable per PRD — recruiters expect one resume-style page). Per-page `head()` SEO with title "Yogesh Gadekar — Data Analyst Portfolio", description, og tags, JSON-LD Person schema.

### Components (`src/components/portfolio/`)
1. **Navbar.tsx** — sticky glass nav with logo, anchor links, Resume CTA.
2. **Hero.tsx** — gradient bg + floating particles, circular profile (your real photo) with glowing blue ring, animated name (typing effect), subtitle, summary, social/resume/contact buttons, 3 stat cards (11+ Projects, 14 Certifications, 3.4+ yrs Experience).
3. **CoreExpertise.tsx** — 3 dashboard cards (Programming & Analytics, Data & AI, Soft Skills) with animated progress bars (in-view triggered).
4. **DashboardSamples.tsx** — responsive grid of the 5 real dashboard screenshots with hover zoom + blur overlay showing title.
5. **FeaturedProjects.tsx** — 6 project cards with blue left border, tech badges, GitHub + Live demo buttons. Pulled from resume: HireSafe AI Job Scam Detection, AI Resume Analyzer, Smart Dashboard Analytics, Certificate Automation (VBA), Python Sales EDA, SQL Online Bookstore.
6. **Experience.tsx** — vertical timeline with dots/connector: Admin Executive @ MindSpark, Asst. Professor @ NACS, Freelance Analytics.
7. **Education.tsx** — 3 cards: B.Ed (Vidya Pratishthan, 75.35%), M.Sc Zoology (NACS, 76.04%), B.Sc Zoology (79.31%).
8. **Certifications.tsx** — 2-col responsive grid of 14 certs from resume with Lucide icons.
9. **ContactCTA.tsx** — deep blue gradient band with "Let's Build Something Amazing" + Email / LinkedIn / GitHub / WhatsApp buttons (real links: email yogeshgadekar141@gmail.com, phone 9096846550, linkedin/yogesh-gadekar, github.com/GADEKAR328).
10. **ContactForm.tsx** — validated form (zod): name, email, phone, subject, message; submit shows toast (no backend — mailto fallback or just local toast).
11. **Footer.tsx** — copyright, quick links, socials.
12. **Particles.tsx** — lightweight floating data-dot particle background using framer-motion.

### Animations (framer-motion)
- Section fade-in-up on scroll (`whileInView`).
- Hero typing effect for subtitle.
- Hover lift + glow on cards.
- Progress bars animate on view.
- Floating particles in hero.

### Mobile responsiveness
- Single-column < 768px, 2-col tablet, full grid desktop.
- Mobile hamburger nav.

### Files to create/modify
- Modify: `src/styles.css`, `src/routes/index.tsx`, `src/routes/__root.tsx` (root meta).
- Create: 12 component files in `src/components/portfolio/`.

### Tech notes
- All colors via semantic tokens — no inline hex in components.
- Form validation with `zod` (already in stack).
- No backend; form submit = sonner toast + reset.
- Resume button links to `/Yogesh_Gadekar_Resume.pdf` (already in public).