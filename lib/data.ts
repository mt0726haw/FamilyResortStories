// lib/data.ts – Shared constants, types and data for Family Resort Stories

export const COLORS = {
  sand:      "#f5ecdc",
  sandLight: "#faf5ea",
  cream:     "#fdfaf3",
  paper:     "#fffdf8",
  ink:       "#1a2438",
  inkSoft:   "#2d3a52",
  ocean:     "#2c4a6e",
  oceanDeep: "#1b3354",
  gold:      "#c19a5b",
  goldDeep:  "#a8814a",
  beigeWarm: "#e8dcc4",
  beigeMap:  "#e6d8be",
} as const;

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export interface Resort {
  name:     string;
  location: string;
  rating:   number;
  image:    string;
  tags:     string[];
  topPick?: boolean;
  slug:     string;
}

export const RESORTS: Resort[] = [
  {
    name:     "Kos Neptune",
    location: "Kos, Greece",
    rating:   9.4,
    image:    img("1571896349842-33c89424de2d", 800),
    tags:     ["Beachfront", "Kids Club"],
    topPick:  true,
    slug:     "kos-neptune",
  },
  {
    name:     "Rixos Premium Tekirova",
    location: "Antalya, Turkey",
    rating:   9.3,
    image:    img("1602002418082-a4443e081dd1", 800),
    tags:     ["All Inclusive", "Kids Club"],
    slug:     "rixos-premium-tekirova",
  },
  {
    name:     "Rixos Sungate",
    location: "Antalya, Turkey",
    rating:   9.2,
    image:    img("1540541338287-41700207dee6", 800),
    tags:     ["All Inclusive", "Waterpark"],
    slug:     "rixos-sungate",
  },
  {
    name:     "Steigenberger Resort Ras Soma Bay",
    location: "Hurghada, Egypt",
    rating:   9.1,
    image:    img("1582719508461-905c673771fd", 800),
    tags:     ["Beachfront", "Kids Club"],
    slug:     "steigenberger-ras-soma-bay",
  },
];

export interface Region {
  id:        string;
  name:      string;
  resorts:   number;
  x:         number; // % left in SVG
  y:         number; // % top in SVG
  image:     string;
  highlight?: boolean;
}

export const REGIONS: Region[] = [
  { id:"na", name:"North America", resorts:48,  x:22, y:38, image:img("1530549387789-4c1017266635",240) },
  { id:"ca", name:"Caribbean",     resorts:53,  x:30, y:54, image:img("1559827260-dc66d52bef19",240) },
  { id:"eu", name:"Europe",        resorts:382, x:52, y:32, image:img("1533105079780-92b9be482077",240), highlight:true },
  { id:"me", name:"Middle East",   resorts:67,  x:60, y:47, image:img("1582719508461-905c673771fd",240) },
  { id:"af", name:"Africa",        resorts:41,  x:53, y:65, image:img("1507525428034-b723cf961d3e",240) },
  { id:"io", name:"Indian Ocean",  resorts:78,  x:67, y:66, image:img("1540541338287-41700207dee6",240) },
  { id:"as", name:"Asia",          resorts:124, x:78, y:42, image:img("1571003123894-1f0594d2b5d9",240) },
  { id:"oc", name:"Oceania",       resorts:36,  x:86, y:72, image:img("1559827260-dc66d52bef19",240) },
];

export const NAV_LINKS = [
  { label: "Destinations",   href: "/destinations" },
  { label: "Resort Reviews", href: "/resort-reviews" },
  { label: "Family Needs",   href: "/family-needs" },
  { label: "Roadtrips",      href: "/roadtrips" },
  { label: "Travel Tips",    href: "/travel-tips" },
  { label: "About Us",       href: "/about" },
];

export const MAP_FILTERS = [
  "All", "Baby Friendly", "Luxury", "Waterparks",
  "Beachfront", "Kids Clubs", "Winter Sun", "Roadtrips",
];

export const STORIES = [
  {
    label:   "Destination Guide",
    title:   "Best Family Resorts in Greece",
    excerpt: "Our handpicked favourites for every family.",
    image:   img("1533105079780-92b9be482077", 900),
    href:    "/destinations/greece",
  },
  {
    label:   "Travel Tips",
    title:   "Flying with a Baby: Our Best Tips",
    excerpt: "Everything you need to know for a stress-free flight.",
    image:   img("1519415510236-718bdfcd89c8", 900),
    href:    "/travel-tips/flying-with-baby",
  },
  {
    label:   "Roadtrips",
    title:   "The Best Roadtrips for Families",
    excerpt: "Scenic routes, kid-friendly stops and unforgettable memories.",
    image:   img("1469854523086-cc02fe5d8800", 900),
    href:    "/roadtrips",
  },
];

export const INSTAGRAM_IMAGES = [
  img("1530549387789-4c1017266635", 500),
  img("1559827260-dc66d52bef19",   500),
  img("1602002418082-a4443e081dd1",500),
  img("1571079570759-18bdbb8b9ff9",500),
  img("1507525428034-b723cf961d3e",500),
  img("1500995617113-cf789362a3e1",500),
  img("1582719508461-905c673771fd",500),
];

export const CATEGORIES = [
  { name:"Baby Friendly",    icon:"Baby",     image:img("1519415510236-718bdfcd89c8",400), href:"/family-needs/baby-friendly" },
  { name:"Toddler Approved", icon:"TeddyBear",image:img("1500995617113-cf789362a3e1",400), href:"/family-needs/toddler" },
  { name:"Beach Resorts",    icon:"TreePalm", image:img("1507525428034-b723cf961d3e",400), href:"/destinations?type=beach" },
  { name:"Kids Clubs",       icon:"Users",    image:img("1530549387789-4c1017266635",400), href:"/family-needs/kids-clubs" },
  { name:"Luxury Resorts",   icon:"Gem",      image:img("1571003123894-1f0594d2b5d9",400), href:"/destinations?type=luxury" },
  { name:"Waterparks",       icon:"Waves",    image:img("1582719508461-905c673771fd",400), href:"/destinations?type=waterpark" },
  { name:"Europe",           icon:"Globe",    image:img("1533105079780-92b9be482077",400), href:"/destinations/europe" },
  { name:"Winter Sun",       icon:"Sun",      image:img("1559827260-dc66d52bef19",400),    href:"/destinations?type=winter-sun" },
  { name:"Roadtrips",        icon:"Car",      image:img("1469854523086-cc02fe5d8800",400), href:"/roadtrips" },
];

export const TRUST_ITEMS = [
  {
    icon:  "Heart",
    title: "Real Family Experiences",
    text:  "We travel as a family and share our honest reviews.",
  },
  {
    icon:  "Award",
    title: "Carefully Selected",
    text:  "Only resorts that make the cut for families.",
  },
  {
    icon:  "Users",
    title: "Family Focused",
    text:  "From baby-friendly to teen-approved — we've got you.",
  },
  {
    icon:  "Briefcase",
    title: "Insider Tips",
    text:  "Practical tips & favourites from real trips.",
  },
];
