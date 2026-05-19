# 🏖️ Family Resort Stories

> Honest family resort reviews for unforgettable holidays.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-c19a5b?style=for-the-badge)](https://mt0726haw.github.io/FamilyResortStories/)
[![GitHub Pages](https://img.shields.io/github/deployments/mt0726haw/FamilyResortStories/github-pages?label=GitHub%20Pages&style=for-the-badge)](https://mt0726haw.github.io/FamilyResortStories/)

## 🔗 Live Homepage
**[https://mt0726haw.github.io/FamilyResortStories/](https://mt0726haw.github.io/FamilyResortStories/)**

---

Premium family resort discovery platform and editorial travel magazine.

## Stack
- Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Lucide React

## Getting started
```bash
git clone https://github.com/mt0726haw/FamilyResortStories.git
cd FamilyResortStories
npm install
npm run dev
```

## GitHub Pages (live)
Every push to `main` auto-deploys via GitHub Actions.
Enable once in: **Settings → Pages → Source → GitHub Actions**

## Vercel (production alternative)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mt0726haw/FamilyResortStories)

For Vercel: remove `output`, `basePath`, `trailingSlash` from `next.config.ts`.

## Project structure
```
app/page.tsx              ← Homepage
components/               ← Nav, Hero, CategoryStrip, DestinationMap,
                             FeaturedResorts, StoriesGuides,
                             InstagramGallery, BottomSections
lib/data.ts               ← All content, types, color tokens
.github/workflows/        ← Auto-deploy to GitHub Pages
```
