# ScholarBridge

A responsive React front-end for **ScholarBridge**, a scholarship-matching platform, rebuilt to match the Figma design with the real image components (university crests, student photos, onboarding illustrations) wired into place.

Built with **Vite + React + React Router**. Client-side routing keeps navigation instant and smooth, with no full-page reloads.

## Screens

| Route | Screen |
|-------|--------|
| `/` | Landing (hero photo collage, trust crests, stats, how it works, featured scholarships, categories, testimonials, CTA) |
| `/signup` | 3-step onboarding wizard (Account → Profile → Preferences) with the purple illustrations |
| `/signin` | Sign in |
| `/dashboard` | Student dashboard (KPIs, recommendations, application progress, deadlines) |
| `/discover` | Browse with filter sidebar + category chips |
| `/scholarships` | Saved / Applied / Won tabs |
| `/scholarship/:id` | Scholarship detail (overview, benefits, AI match score, key info, eligibility) |
| `/profile` | Profile with completeness ring |
| `/notifications` | Notification feed with filters |

## Run locally

Requires Node 18+.

```bash
npm install
npm run dev      # http://localhost:5173
```

> Note: this is a Vite app, so it must be served (via `npm run dev`, `npm run preview`, or any static server after building). Opening `index.html` directly from the file system will show a blank page because browsers block ES-module scripts over `file://`. That is expected for every Vite/React project.

## Build for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Push to GitHub

```bash
git init
git add .
git commit -m "ScholarBridge React front-end"
git branch -M main
git remote add origin https://github.com/Emmanuellsensai/scholarbridge.git
git push -u origin main
```

## Deploy

- **Vercel / Netlify**: import the repo. Build command `npm run build`, output directory `dist`. Zero config otherwise.
- **GitHub Pages**: run `npm run build`, then publish the `dist/` folder. The app uses `HashRouter` and a relative `base`, so it works from any sub-path without server rewrites.

## Project structure

```
src/
├── main.jsx                 routes (HashRouter)
├── index.css                design system (tokens + components)
├── data.js                  scholarships, crest image map, notifications
├── assets/                  crests, student photos, onboarding illustrations
├── components/
│   ├── Navbar.jsx  Footer.jsx
│   ├── AppLayout.jsx        sidebar + topbar shell (mobile drawer)
│   ├── ScholarshipCard.jsx  reusable card + list row
│   ├── Icon.jsx  ScrollToTop.jsx
└── pages/                   one file per screen above
```

## Image components

Every provider crest is a real asset, mapped in `data.js`:

Ibadan · Ghana · Nairobi · Makerere · Rwanda · Melbourne · Oxford · Toronto.

Student photos power the hero collage and testimonials; the three purple onboarding
illustrations drive the sign-up steps. All images were compressed (crests as trimmed PNG,
photos as JPG, illustrations as WebP) so the whole asset set is under 1 MB.

## Design tokens

- Primary navy `#112566`, hover `#17338E`
- Accents `#8091C7`, `#D8DEF2`, `#EAECF7`
- Cream page background `#FAFAF7`, body text `#655B5B`
- Type: Poppins (display) + Inter (body)

## Notes

Content is placeholder data written to match each screen. Swap `src/data.js` for a real API
and wire the forms/buttons to your backend. Fully responsive down to mobile; the app pages
collapse the sidebar into a drawer with a scrim.
