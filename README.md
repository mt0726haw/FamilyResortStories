# Family Resort Stories

Premium family resort discovery platform and editorial travel magazine.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (icons)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx                    ← Homepage
  layout.tsx                  ← Root layout + metadata
  destinations/
    greece/page.tsx
    turkey/page.tsx
    egypt/page.tsx
  family-needs/
    baby-friendly/page.tsx
  roadtrips/page.tsx
  resort-reviews/page.tsx

components/
  Nav.tsx                     ← Sticky navigation
  Hero.tsx                    ← Cinematic hero with search
  CategoryStrip.tsx           ← 9 category cards
  DestinationMap.tsx          ← Illustrated world map with markers
  FeaturedResorts.tsx         ← Resort cards carousel
  StoriesGuides.tsx           ← Editorial magazine cards
  InstagramGallery.tsx        ← Social proof gallery
  BottomSections.tsx          ← TrustRow + Newsletter + Footer
  SectionHeader.tsx           ← Shared section eyebrow

lib/
  data.ts                     ← All content, types, color tokens
```

## Deployment

Deploy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mt0726haw/FamilyResortStories)

## Adding resorts

Edit `lib/data.ts` — the `RESORTS` array. Each resort needs a `slug` that matches the route under `/resort-reviews/[slug]`.

## Map regions

Edit the `REGIONS` array in `lib/data.ts`. `x` and `y` are percentage positions within the SVG viewBox (1000×500).
