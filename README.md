# Elevate — Dark SaaS Landing Page Template

A premium, minimal dark-themed landing page template built with **Next.js 14 App Router**, and **Tailwind CSS**. Designed for SaaS products, developer tools, and modern startups.

---

## Preview

![Elevate Landing Page](/public/elevate.png)

![Elevate full UI](/public/elevate-fullUI.png)

---

## Tech Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — Utility-first styling
- **TypeScript** — Fully typed
- **Geist / DM Sans** — Typography

---

## Sections Included

| Section | Description |
|---|---|
| Navbar | Sticky nav with blur-on-scroll effect |
| Hero | Bold headline, dual CTAs, trusted-by logos |
| Logo Marquee | Scrolling company logos strip |
| Features | 6-feature grid with icons |
| Product Preview | Dashboard mockup with accent glow |
| How It Works | 3-step process layout |
| Testimonials | 3 quote cards with avatars |
| Pricing | 3-tier pricing with monthly/annual toggle |
| FAQ | Accordion with 6 questions |
| Final CTA | Full-width conversion section |
| Footer | Multi-column links layout |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run the development server

> **Note:** If the project is packaged as a zip file, unzip it before running the dev server:
```bash
unzip your-project.zip
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Customization Guide

### Brand Name
Search for `[BrandName]` across the project and replace with your product name. Key files:
- `app/layout.tsx` — Page title and meta tags
- `components/Navbar.tsx` — Logo text
- `components/Footer.tsx` — Brand name and tagline

### Colors
All accent colors are defined as CSS variables in `app/globals.css`:

```css
:root {
  --accent: #4f8ef7;        /* Primary accent — change this */
  --background: #0a0a0a;   /* Page background */
  --surface: #111111;      /* Card backgrounds */
  --border: rgba(255,255,255,0.06); /* Subtle borders */
  --text-primary: #ffffff;
  --text-muted: #888888;
}
```

### Typography
Fonts are loaded via `next/font` in `app/layout.tsx`. Replace `Geist` with any Google Font or local font of your choice.

### Content
Each section is a standalone component under `/components`. Edit the content directly inside each file:

```
components/
├── Navbar.tsx
├── Hero.tsx
├── LogoMarquee.tsx
├── Features.tsx
├── ProductPreview.tsx
├── HowItWorks.tsx
├── Testimonials.tsx
├── Pricing.tsx
├── FAQ.tsx
├── FinalCTA.tsx
└── Footer.tsx
```

### Images
Replace placeholder images in `/public/images/`:
- `dashboard-mockup.png` — Product preview screenshot
- `logo-*.svg` — Company logos in the marquee and hero

### Footer Links
Footer links are placeholders pointing to `href="#"`. Replace with your actual routes:

```tsx
// components/Footer.tsx
// Find the links arrays and update href values
const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  // ...
]
```

---

## GSAP Animations

Animations are handled in each component using `useGSAP` hook. To disable an animation, remove the `useGSAP` block from the relevant component. To adjust timing, modify the `duration` and `stagger` values.

Main animation file: `lib/animations.ts`

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

Push to GitHub and connect the repo in your Netlify dashboard. Build command: `npm run build`, publish directory: `.next`.

---

## Folder Structure

```
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Home page — assembles all sections
│   └── globals.css       # CSS variables, base styles
├── components/           # All section components
├── public/
│   └── images/           # Static images and logos
└── tailwind.config.ts    # Tailwind theme config
```

---

## License

This template is licensed for **single use**. You may use it for one end product (personal or client project). You may not resell, redistribute, or include it in another template or theme.

---

## Support

Found a bug or have a question? Reach out at **[your email]** or open an issue.

---

Built by [Your Name] · [your portfolio link]