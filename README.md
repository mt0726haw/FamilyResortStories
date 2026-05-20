# 🏖️ Family Resort Stories

> Honest family resort reviews for unforgettable holidays.

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-familyresortstories.de-c19a5b?style=for-the-badge)](https://familyresortstories.de)
[![GitHub Pages](https://img.shields.io/github/deployments/mt0726haw/FamilyResortStories/github-pages?label=GitHub%20Pages&style=for-the-badge)](https://familyresortstories.de)

## 🔗 Live Site
**[https://familyresortstories.de](https://familyresortstories.de)**

---

Premium family resort discovery platform and editorial travel magazine.

## Stack
- Next.js 14 (App Router, static export) · TypeScript · Tailwind CSS · Framer Motion · Lucide React

## Pages
- `/` — Homepage with hero, categories, world map, featured resorts, stories, Instagram, trust, newsletter
- `/resort-reviews` — All resort reviews
- `/resort-reviews/[slug]` — Detail page per resort (template-based, pre-rendered)
  - `/resort-reviews/kos-neptune`
  - `/resort-reviews/rixos-premium-tekirova`
  - `/resort-reviews/rixos-sungate`
  - `/resort-reviews/steigenberger-ras-soma-bay`
- `/destinations/{greece,turkey,egypt}` · `/family-needs/baby-friendly` · `/roadtrips` (stubs)

## Getting started
```bash
git clone https://github.com/mt0726haw/FamilyResortStories.git
cd FamilyResortStories
npm install
npm run dev
```

## Deployment
Every push to `main` auto-deploys via GitHub Actions to `familyresortstories.de`.

### Required GitHub setup (one-time):
1. **Settings → Pages**:
   - Source: **GitHub Actions**
   - Custom domain: **familyresortstories.de**
   - Enforce HTTPS: ✓
2. **DNS** (at your domain registrar — IONOS, GoDaddy, etc.):
   - `A` records for apex `familyresortstories.de` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www.familyresortstories.de` → `mt0726haw.github.io`

The `public/CNAME` file is committed to the repo so it's always included in every deployment. `public/.nojekyll` ensures GitHub Pages doesn't strip the Next.js `_next/` bundles.

## Project structure
```
app/
  page.tsx                                 ← Homepage
  resort-reviews/
    page.tsx                               ← Reviews listing
    [slug]/page.tsx                        ← Dynamic detail (generateStaticParams)
components/
  ResortTemplate.tsx                       ← Reusable resort detail template
  Nav, Hero, CategoryStrip, DestinationMap,
  FeaturedResorts, StoriesGuides,
  InstagramGallery, BottomSections
hooks/
  useDevice.ts                             ← Device auto-detection
lib/
  data.ts                                  ← Shared content + color tokens
  resorts.ts                               ← Full resort detail data
public/
  CNAME                                    ← Custom domain
  .nojekyll                                ← Pages config
```
