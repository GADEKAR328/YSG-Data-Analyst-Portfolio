## Plan

### 1. Remove 3D tilt effect on project cards
- In `src/components/portfolio/FeaturedProjects.tsx`: remove `Tilt3D` import and unwrap both `DashboardCard` and `CompactCard` — replace `<Tilt3D ...>...</Tilt3D>` with a plain `<div>` keeping the same classes (`group dashboard-card relative overflow-hidden rounded-[var(--radius-xl)]`). Drop `shine` and `perspective-1000` since those were paired with the tilt.
- Delete `src/components/portfolio/Tilt3D.tsx`.
- Clean up tilt/shine related CSS in `src/styles.css` (`.perspective-1000`, `.preserve-3d`, `.shine`, `.float-3d`, shimmer/tilt-float keyframes). Keep `ScrollProgress` (user only complained about tilt).

### 2. Fix LinkedIn URL everywhere
Update to `https://www.linkedin.com/in/yogesh-gadekar-a1231b189/` in:
- `src/components/portfolio/Hero.tsx` (line 115)
- `src/components/portfolio/Footer.tsx` (line 21)
- `src/components/portfolio/ContactCTA.tsx` (already correct, just add trailing slash for consistency)

### 3. Verify email
Email `yogeshgadekar141@gmail.com` is already correct in ContactCTA, ContactForm, and Footer — confirm no changes needed.

### 4. Update content from new resume
From the uploaded ATS resume:
- **Experience timeline** in `src/components/portfolio/Experience.tsx`: add real dates ("2025 – 2026" for MindSpark, "2021 – 2023" for NACS College Parner). Refresh bullets to match resume wording (transport for 214+ students, 200+ lectures, etc.).
- **Project metrics** in `src/components/portfolio/FeaturedProjects.tsx`: enhance descriptions/insights with the concrete numbers from the resume:
  - Food Delivery: 15.1K+ orders, 2.7K+ transactions, AOV 5.5
  - HR Analytics: 572 employees, 17.31% attrition
  - Grocery Store: 1.20M+ sales, 9K+ orders, avg sales 141.01
  - Excel Sales: 58.2L+ sales, 9,994+ transactions
- **Hero stats** stay (`11+ Projects`, `14 Certifications`, `3.4+ Years`).
- Replace `public/Yogesh_Gadekar_Resume.pdf` with the newly uploaded PDF.

### 5. Verify
Visually scan the preview and confirm LinkedIn/email links open correctly; ensure no leftover Tilt3D imports break the build.

No backend or routing changes.