// lib/resorts.ts — Full detailed data for each resort review page.
// One source of truth, consumed by app/resort-reviews/[slug]/page.tsx
// via the shared ResortTemplate component.

import { img } from "./data";

export interface ResortDetail {
  slug: string;
  name: string;
  city: string;
  country: string;
  region: string;
  breadcrumb: { label: string; href: string }[];

  rating: number;
  ratingLabel: string;
  reviewCount: number;

  heroImage: string;
  shortDescription: string;
  highlights: { icon: "beach" | "all-inclusive" | "kids-club" | "waterpark" | "luxury" | "spa"; label: string }[];

  quickFacts: {
    location: string;
    airportTransfer: string;
    bestFor: string;
    resortSize: string;
    ourRating: string;
  };

  bestFor: {
    babies: number;     // out of 5
    toddlers: number;
    kids: number;
    teens: number;
  };

  honestReview: {
    paragraphs: string[];
    authorImage: string;
  };

  reviewSummary: {
    kidsFacilities: number;  // 0–10
    cleanliness:    number;
    food:           number;
    location:       number;
    rooms:          number;
    valueForMoney:  number;
  };

  rooms: { name: string; description: string; sleeps: string; size: string; image: string; ourPick?: boolean }[];
  pools: { name: string; description: string; image: string }[];

  kidsClub:  { image: string; description: string; ageRange: string };
  waterpark?:{ image: string; description: string; ageRange: string };

  food: { name: string; description: string; image: string }[];

  loved:    string[];
  notPerfect: string[];

  goodToKnow: {
    checkIn: string;
    checkOut: string;
    allInclusive: "Yes" | "No" | "Optional";
    freeWifi: "Yes" | "No";
    airConditioning: "Yes" | "No";
    bestTravelTime: string;
  };

  coordinates: { lat: number; lng: number };
  similarResortSlugs: string[];
}

// ─── Resort data ────────────────────────────────────────────────────────────

const KOS_NEPTUNE: ResortDetail = {
  slug: "kos-neptune",
  name: "Kos Neptune Resort",
  city: "Kos",
  country: "Greece",
  region: "Europe",
  breadcrumb: [
    { label: "Home",   href: "/" },
    { label: "Europe", href: "/destinations/europe" },
    { label: "Greece", href: "/destinations/greece" },
    { label: "Kos",    href: "/destinations/greece/kos" },
    { label: "Kos Neptune Resort Review", href: "/resort-reviews/kos-neptune" },
  ],

  rating: 9.4, ratingLabel: "Exceptional", reviewCount: 235,
  heroImage: img("1571896349842-33c89424de2d", 1800),
  shortDescription: "A luxurious beachfront resort with incredible facilities for families. Perfect for babies, toddlers and teens.",
  highlights: [
    { icon: "beach",         label: "Beachfront"   },
    { icon: "all-inclusive", label: "All Inclusive"},
    { icon: "kids-club",     label: "Kids Club"    },
    { icon: "waterpark",     label: "Waterpark"    },
  ],

  quickFacts: {
    location: "Kos, Greece",
    airportTransfer: "30 min",
    bestFor: "Babies, Toddlers, Families",
    resortSize: "Large",
    ourRating: "9.4 / 10",
  },

  bestFor: { babies: 5, toddlers: 5, kids: 5, teens: 4 },

  honestReview: {
    authorImage: img("1581579438747-104c53e7f0c2", 200),
    paragraphs: [
      "We spent a week at Kos Neptune with our 2-year-old and 5-year-old and had an amazing time. The resort is immaculately maintained, the staff are incredibly kind and the kids facilities are some of the best we've ever seen.",
      "The toddler pool and the kids club were absolute highlights. Everything is within walking distance which makes it super easy with little ones.",
    ],
  },

  reviewSummary: {
    kidsFacilities: 9.7, cleanliness: 9.6, food: 9.1,
    location: 9.2, rooms: 9.3, valueForMoney: 8.9,
  },

  rooms: [
    { name: "Family Room Garden View", description: "Spacious and comfortable with bunk beds for the kids.",   sleeps: "Sleeps 4", size: "35 m²", image: img("1631049307264-da0ec9d70304", 700) },
    { name: "Family Suite Sea View",   description: "Our top pick! Separate bedroom and stunning sea views.",  sleeps: "Sleeps 4", size: "45 m²", image: img("1566073771259-6a8506099945", 700), ourPick: true },
    { name: "Two Bedroom Suite",       description: "Perfect for larger families. Plenty of space for everyone.", sleeps: "Sleeps 6", size: "65 m²", image: img("1582719478250-c89cae4dc85b", 700) },
  ],

  pools: [
    { name: "Main Pool",    description: "Large infinity pool with sea view.",       image: img("1540541338287-41700207dee6", 500) },
    { name: "Kids Pool",    description: "Shallow pool perfect for younger kids.",   image: img("1582719508461-905c673771fd", 500) },
    { name: "Toddler Pool", description: "Heated pool with shade and toys.",         image: img("1571896349842-33c89424de2d", 500) },
    { name: "Indoor Pool",  description: "Heated indoor pool for cooler days.",      image: img("1571003123894-1f0594d2b5d9", 500) },
  ],

  kidsClub:  { image: img("1530549387789-4c1017266635", 800), description: "Amazing kids club for ages 4-12 with daily activities and caring staff.", ageRange: "4-12 years" },
  waterpark: { image: img("1582719508461-905c673771fd", 800), description: "Multiple slides for all ages and a fun splash area for little ones.",   ageRange: "All ages"   },

  food: [
    { name: "Main Buffet Restaurant", description: "Wide selection with kids corner.",        image: img("1414235077428-338989a2e8c0", 500) },
    { name: "Asian Restaurant",       description: "Our favorite à-la-carte experience.",     image: img("1546069901-ba9599a7e63c", 500) },
    { name: "Beach Restaurant",       description: "Fresh, tasty and relaxed atmosphere.",    image: img("1559339352-11d035aa65de", 500) },
    { name: "Ice Cream Corner",       description: "A daily highlight for the kids!",         image: img("1488900128323-21503983a07e", 500) },
  ],

  loved: [
    "Incredible kids club",
    "Toddler-friendly facilities",
    "Beautiful sandy beach",
    "Great food quality",
    "Super kind and attentive staff",
  ],
  notPerfect: [
    "Sunbeds can be hard to get in peak season",
    "Some rooms a bit far from the beach",
    "Waterpark closes between 12-2pm",
  ],

  goodToKnow: { checkIn: "15:00", checkOut: "11:00", allInclusive: "Yes", freeWifi: "Yes", airConditioning: "Yes", bestTravelTime: "May – Oct" },
  coordinates: { lat: 36.8938, lng: 27.2877 },
  similarResortSlugs: ["rixos-premium-tekirova", "rixos-sungate", "steigenberger-ras-soma-bay"],
};

const RIXOS_PREMIUM_TEKIROVA: ResortDetail = {
  slug: "rixos-premium-tekirova",
  name: "Rixos Premium Tekirova",
  city: "Antalya",
  country: "Turkey",
  region: "Europe",
  breadcrumb: [
    { label: "Home",   href: "/" },
    { label: "Europe", href: "/destinations/europe" },
    { label: "Turkey", href: "/destinations/turkey" },
    { label: "Antalya", href: "/destinations/turkey/antalya" },
    { label: "Rixos Premium Tekirova Review", href: "/resort-reviews/rixos-premium-tekirova" },
  ],

  rating: 9.3, ratingLabel: "Exceptional", reviewCount: 412,
  heroImage: img("1602002418082-a4443e081dd1", 1800),
  shortDescription: "A premium all-inclusive resort tucked between pine forests and the Mediterranean — endless dining options and a huge kids club.",
  highlights: [
    { icon: "all-inclusive", label: "All Inclusive" },
    { icon: "kids-club",     label: "Kids Club"     },
    { icon: "beach",         label: "Beachfront"    },
    { icon: "luxury",        label: "Luxury"        },
  ],

  quickFacts: {
    location: "Tekirova, Antalya, Turkey",
    airportTransfer: "55 min",
    bestFor: "Toddlers, Kids, Teens",
    resortSize: "Very Large",
    ourRating: "9.3 / 10",
  },

  bestFor: { babies: 4, toddlers: 5, kids: 5, teens: 5 },

  honestReview: {
    authorImage: img("1581579438747-104c53e7f0c2", 200),
    paragraphs: [
      "Rixos Premium Tekirova surprised us with the sheer scale of what's on offer. With 12+ restaurants, multiple pools and one of the best kids clubs we've experienced, there's never a dull moment.",
      "The setting — pine forest meeting turquoise sea — is genuinely beautiful, and the all-inclusive concept is generous and high-quality.",
    ],
  },

  reviewSummary: {
    kidsFacilities: 9.5, cleanliness: 9.6, food: 9.4,
    location: 9.0, rooms: 9.3, valueForMoney: 9.0,
  },

  rooms: [
    { name: "Deluxe Family Room", description: "Bright family room with sea or garden view.",      sleeps: "Sleeps 4", size: "40 m²", image: img("1631049307264-da0ec9d70304", 700) },
    { name: "Premium Family Suite", description: "Our pick — separate kids area and balcony.",     sleeps: "Sleeps 4", size: "55 m²", image: img("1566073771259-6a8506099945", 700), ourPick: true },
    { name: "King Suite Sea View",   description: "Premium suite with panoramic Mediterranean views.", sleeps: "Sleeps 3", size: "60 m²", image: img("1582719478250-c89cae4dc85b", 700) },
  ],

  pools: [
    { name: "Main Pool",          description: "Olympic-sized pool with sun terrace.",       image: img("1540541338287-41700207dee6", 500) },
    { name: "Children's Pool",    description: "Themed pool with splash features.",          image: img("1582719508461-905c673771fd", 500) },
    { name: "Lagoon Pool",        description: "Tranquil pool surrounded by gardens.",       image: img("1571896349842-33c89424de2d", 500) },
    { name: "Indoor Pool",        description: "Heated indoor pool, open year-round.",       image: img("1571003123894-1f0594d2b5d9", 500) },
  ],

  kidsClub: { image: img("1530549387789-4c1017266635", 800), description: "Rixy Kids Club with daily programmes for ages 4-12. Professional, kind staff.", ageRange: "4-12 years" },

  food: [
    { name: "Main Buffet",      description: "Huge variety with live cooking stations.", image: img("1414235077428-338989a2e8c0", 500) },
    { name: "Turkish Restaurant", description: "Authentic local dishes by the sea.",      image: img("1546069901-ba9599a7e63c", 500) },
    { name: "Italian Restaurant", description: "Wood-fired pizza and homemade pasta.",    image: img("1559339352-11d035aa65de", 500) },
    { name: "Sushi Bar",        description: "Fresh sushi made to order.",                image: img("1488900128323-21503983a07e", 500) },
  ],

  loved: [
    "Massive variety of restaurants",
    "Kids club open until late",
    "Beautiful pine-meets-beach setting",
    "Excellent à-la-carte options",
  ],
  notPerfect: [
    "The resort is very spread out — a lot of walking",
    "Some buffet stations crowded at peak times",
    "Beach is small for such a big resort",
  ],

  goodToKnow: { checkIn: "14:00", checkOut: "12:00", allInclusive: "Yes", freeWifi: "Yes", airConditioning: "Yes", bestTravelTime: "May – Oct" },
  coordinates: { lat: 36.5042, lng: 30.5083 },
  similarResortSlugs: ["rixos-sungate", "kos-neptune", "steigenberger-ras-soma-bay"],
};

const RIXOS_SUNGATE: ResortDetail = {
  slug: "rixos-sungate",
  name: "Rixos Sungate",
  city: "Antalya",
  country: "Turkey",
  region: "Europe",
  breadcrumb: [
    { label: "Home",   href: "/" },
    { label: "Europe", href: "/destinations/europe" },
    { label: "Turkey", href: "/destinations/turkey" },
    { label: "Antalya", href: "/destinations/turkey/antalya" },
    { label: "Rixos Sungate Review", href: "/resort-reviews/rixos-sungate" },
  ],

  rating: 9.2, ratingLabel: "Excellent", reviewCount: 678,
  heroImage: img("1540541338287-41700207dee6", 1800),
  shortDescription: "Resort-meets-theme-park: enormous waterpark, dedicated kids' world and a private beach. Pure entertainment for active families.",
  highlights: [
    { icon: "all-inclusive", label: "All Inclusive" },
    { icon: "waterpark",     label: "Waterpark"     },
    { icon: "kids-club",     label: "Kids Club"     },
    { icon: "beach",         label: "Beachfront"    },
  ],

  quickFacts: {
    location: "Beldibi, Antalya, Turkey",
    airportTransfer: "35 min",
    bestFor: "Kids, Teens",
    resortSize: "Very Large",
    ourRating: "9.2 / 10",
  },

  bestFor: { babies: 3, toddlers: 4, kids: 5, teens: 5 },

  honestReview: {
    authorImage: img("1581579438747-104c53e7f0c2", 200),
    paragraphs: [
      "If your kids love waterparks, this is their dream. The aqua park is huge — slides for all ages, a dedicated toddler area and a wave pool that kept ours busy all week.",
      "It's bigger and more 'entertainment-park' in feel than other resorts, which is exactly what some families want. We loved that everything is included.",
    ],
  },

  reviewSummary: {
    kidsFacilities: 9.8, cleanliness: 9.4, food: 9.0,
    location: 9.1, rooms: 9.0, valueForMoney: 9.2,
  },

  rooms: [
    { name: "Family Room",          description: "Comfortable room with bunk-bed area for kids.",    sleeps: "Sleeps 4", size: "38 m²", image: img("1631049307264-da0ec9d70304", 700) },
    { name: "Family Suite Sea View", description: "Our pick — separate kids' bedroom and balcony.",  sleeps: "Sleeps 5", size: "55 m²", image: img("1566073771259-6a8506099945", 700), ourPick: true },
    { name: "Two-Bedroom Apartment", description: "Spacious option for larger or multi-gen families.", sleeps: "Sleeps 6", size: "75 m²", image: img("1582719478250-c89cae4dc85b", 700) },
  ],

  pools: [
    { name: "Main Pool",         description: "Big freeform pool by the beach.",        image: img("1540541338287-41700207dee6", 500) },
    { name: "Wave Pool",         description: "A real ocean feel — kids love it.",      image: img("1582719508461-905c673771fd", 500) },
    { name: "Lazy River",        description: "Float around the whole resort.",         image: img("1571896349842-33c89424de2d", 500) },
    { name: "Toddler Splash",    description: "Shallow zone with mini slides.",         image: img("1571003123894-1f0594d2b5d9", 500) },
  ],

  kidsClub:  { image: img("1530549387789-4c1017266635", 800), description: "Multi-zone kids world: arts, sports, mini-disco and dedicated baby room.", ageRange: "0-12 years" },
  waterpark: { image: img("1582719508461-905c673771fd", 800), description: "One of the largest in the region — 40+ slides, wave pool and lazy river.", ageRange: "All ages" },

  food: [
    { name: "Mediterranean Buffet", description: "Everyday favourites done well.",       image: img("1414235077428-338989a2e8c0", 500) },
    { name: "Asian Fusion",         description: "Wok, sushi and ramen station.",        image: img("1546069901-ba9599a7e63c", 500) },
    { name: "Steakhouse",           description: "Adults-leaning à-la-carte.",           image: img("1559339352-11d035aa65de", 500) },
    { name: "Pool Snacks",          description: "Pizza, burgers and ice cream all day.", image: img("1488900128323-21503983a07e", 500) },
  ],

  loved: [
    "Spectacular waterpark",
    "Genuinely all-inclusive — even premium drinks",
    "Lots for tweens and teens",
    "Mini-disco and evening shows are a hit",
  ],
  notPerfect: [
    "Can feel busy in school holidays",
    "Less suited to babies than other Rixos resorts",
    "Long queues at peak slide times",
  ],

  goodToKnow: { checkIn: "14:00", checkOut: "12:00", allInclusive: "Yes", freeWifi: "Yes", airConditioning: "Yes", bestTravelTime: "May – Oct" },
  coordinates: { lat: 36.7833, lng: 30.5500 },
  similarResortSlugs: ["rixos-premium-tekirova", "kos-neptune", "steigenberger-ras-soma-bay"],
};

const STEIGENBERGER_RAS_SOMA: ResortDetail = {
  slug: "steigenberger-ras-soma-bay",
  name: "Steigenberger Resort Ras Soma Bay",
  city: "Hurghada",
  country: "Egypt",
  region: "Middle East",
  breadcrumb: [
    { label: "Home",      href: "/" },
    { label: "Middle East", href: "/destinations/middle-east" },
    { label: "Egypt",     href: "/destinations/egypt" },
    { label: "Hurghada",  href: "/destinations/egypt/hurghada" },
    { label: "Steigenberger Resort Ras Soma Bay Review", href: "/resort-reviews/steigenberger-ras-soma-bay" },
  ],

  rating: 9.1, ratingLabel: "Excellent", reviewCount: 519,
  heroImage: img("1582719508461-905c673771fd", 1800),
  shortDescription: "A calm Red Sea retreat with a private beach, fantastic reef snorkelling and a dedicated baby pool. Reliable winter sun for families.",
  highlights: [
    { icon: "beach",     label: "Beachfront" },
    { icon: "kids-club", label: "Kids Club"  },
    { icon: "luxury",    label: "Luxury"     },
    { icon: "spa",       label: "Spa"        },
  ],

  quickFacts: {
    location: "Soma Bay, Hurghada, Egypt",
    airportTransfer: "45 min",
    bestFor: "Babies, Toddlers, Families",
    resortSize: "Medium",
    ourRating: "9.1 / 10",
  },

  bestFor: { babies: 5, toddlers: 4, kids: 4, teens: 3 },

  honestReview: {
    authorImage: img("1581579438747-104c53e7f0c2", 200),
    paragraphs: [
      "Soma Bay is the kind of place where the whole family relaxes. The beach is gorgeous, the reef snorkelling right off the jetty is some of the best in the world, and the resort feels calm rather than crowded.",
      "We loved the dedicated baby pool and the fact that everything is well thought through for families with very young children.",
    ],
  },

  reviewSummary: {
    kidsFacilities: 9.0, cleanliness: 9.5, food: 9.0,
    location: 9.4, rooms: 9.1, valueForMoney: 9.3,
  },

  rooms: [
    { name: "Family Room Sea View",    description: "Bright, modern room with two queen beds.",       sleeps: "Sleeps 4", size: "42 m²", image: img("1631049307264-da0ec9d70304", 700) },
    { name: "Family Suite",            description: "Our pick — connecting kids' room with toys.",    sleeps: "Sleeps 5", size: "60 m²", image: img("1566073771259-6a8506099945", 700), ourPick: true },
    { name: "Beachfront Junior Suite", description: "Steps from the sand with a private terrace.",    sleeps: "Sleeps 3", size: "50 m²", image: img("1582719478250-c89cae4dc85b", 700) },
  ],

  pools: [
    { name: "Main Pool",   description: "Generous pool with sun terrace.",       image: img("1540541338287-41700207dee6", 500) },
    { name: "Kids Pool",   description: "Shallow zone with rope bridges.",       image: img("1582719508461-905c673771fd", 500) },
    { name: "Baby Pool",   description: "Tiny heated pool, just for the littles.", image: img("1571896349842-33c89424de2d", 500) },
    { name: "Quiet Pool",  description: "Adults-only — a parental escape.",       image: img("1571003123894-1f0594d2b5d9", 500) },
  ],

  kidsClub: { image: img("1530549387789-4c1017266635", 800), description: "Friendly kids club with daily programme, art corner and outdoor games.", ageRange: "3-12 years" },

  food: [
    { name: "Main Buffet",     description: "Excellent variety with Egyptian specialties.", image: img("1414235077428-338989a2e8c0", 500) },
    { name: "Beach Grill",     description: "Lunch with toes in the sand.",                 image: img("1546069901-ba9599a7e63c", 500) },
    { name: "Italian Trattoria", description: "Cosy à-la-carte with sea views.",            image: img("1559339352-11d035aa65de", 500) },
    { name: "Ice Cream Hut",   description: "Daily highlight after the pool.",              image: img("1488900128323-21503983a07e", 500) },
  ],

  loved: [
    "World-class reef snorkelling",
    "Dedicated baby pool and facilities",
    "Calm, uncrowded feel",
    "Reliable winter sun",
  ],
  notPerfect: [
    "Less for teens than larger resorts",
    "Long flight + transfer for some Europeans",
    "Sea can be windy in winter — pick rooms accordingly",
  ],

  goodToKnow: { checkIn: "15:00", checkOut: "11:00", allInclusive: "Optional", freeWifi: "Yes", airConditioning: "Yes", bestTravelTime: "Oct – Apr" },
  coordinates: { lat: 26.8413, lng: 33.9886 },
  similarResortSlugs: ["kos-neptune", "rixos-premium-tekirova", "rixos-sungate"],
};

export const RESORTS_DETAIL: ResortDetail[] = [
  KOS_NEPTUNE,
  RIXOS_PREMIUM_TEKIROVA,
  RIXOS_SUNGATE,
  STEIGENBERGER_RAS_SOMA,
];

export function getResortBySlug(slug: string): ResortDetail | undefined {
  return RESORTS_DETAIL.find((r) => r.slug === slug);
}

export function getResortSummary(slug: string) {
  const r = getResortBySlug(slug);
  if (!r) return undefined;
  return {
    slug: r.slug,
    name: r.name,
    location: `${r.city}, ${r.country}`,
    rating: r.rating,
    ratingLabel: r.ratingLabel,
    image: r.heroImage,
  };
}
