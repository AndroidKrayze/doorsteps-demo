export const siteConfig = {
  name: "Doorsteps",
  legalName: "Doorsteps Sandwich Bar",
  tagline: "Marylebone’s doorstep lunch.",
  description:
    "Workday baguettes on Blandford Street — escalope, piri-piri, coronation chicken, bacon rolls, and proper coffee before the office.",
  seoTitle: "Doorsteps | Sandwich Bar · Blandford Street Marylebone W1",
  address: {
    line1: "48 Blandford Street",
    line2: "Marylebone, London W1U 7HU",
    streetAddress: "48 Blandford Street",
    addressLocality: "Marylebone",
    addressRegion: "London",
    postalCode: "W1U 7HU",
    addressCountry: "GB",
  },
  phoneDisplay: "020 7935 3213",
  phoneTel: "+442079353213",
  mapsUrl:
    "https://www.google.com/maps/place/Doorsteps/@51.518474,-0.1542891",
  geo: {
    latitude: 51.518474,
    longitude: -0.1542891,
  },
  rating: {
    value: 4.8,
    count: 65,
    source: "Google",
  },
  hygiene: {
    rating: "5/5",
    date: "30 Apr 2024",
    url: "https://ratings.food.gov.uk/business/413595",
  },
  hours: {
    summary: [
      { days: "Mon–Fri", time: "≈07:30–15:30" },
      { days: "Saturday", time: "≈09:00–14:00" },
      { days: "Sunday", time: "Closed" },
    ],
    note: "Hours can vary — worth a quick call before you set out.",
  },
  suggestedDomains: [
    "doorstepsmarylebone.co.uk",
    "doorstepssandwichbar.co.uk",
    "doorstepsw1.co.uk",
  ],
  baguettes: [
    {
      name: "Escalope",
      note: "Crisp cutlet, soft baguette — the weekday staple.",
    },
    {
      name: "Piri-piri chicken",
      note: "Warm spice, lunch-hour pace.",
    },
    {
      name: "Coronation chicken",
      note: "Mild curry cream, proper filling.",
    },
    {
      name: "Bacon roll",
      note: "Early doors, with the coffee.",
    },
  ],
  specialties: [
    "Blackboard specials that change with the day",
    "Stacked baguettes wrapped in kraft",
    "Coffee that keeps the Marylebone morning moving",
  ],
  reviews: [
    {
      quote:
        "Proper baguettes and a blackboard that always has something worth ordering — quick, friendly, and exactly what you want before the office.",
      attribution: "Google review",
    },
    {
      quote:
        "Been coming for years. Escalope and coffee, takeaway in kraft — Marylebone lunch sorted.",
      attribution: "Google review",
    },
    {
      quote:
        "Small counter, big sandwiches. Hygiene rating is spot on and the staff keep the queue moving.",
      attribution: "Google review",
    },
  ],
} as const;
