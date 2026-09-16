export const siteConfig = {
  name: "Doorsteps",
  legalName: "Doorsteps Sandwich Bar",
  tagline: "Stainless counter. Kraft for the walk.",
  description:
    "Premium sandwich bar on Blandford Street — full breakfast, chicken escalope, baguettes, jacket potatoes, and proper coffee before the office.",
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
    label: "Very Good",
    date: "30 Apr 2024",
    url: "https://ratings.food.gov.uk/business/413595",
  },
  hours: {
    summary: [
      { days: "Mon–Fri", time: "≈07:30–15:30" },
      { days: "Saturday", time: "≈09:00–14:00" },
      { days: "Sunday", time: "Closed" },
    ],
    note: "Hours can vary — confirm on Google Maps or with a quick call before you set out.",
  },
  suggestedDomains: [
    "doorstepsmarylebone.co.uk",
    "doorstepssandwichbar.co.uk",
    "doorstepsw1.co.uk",
  ],
  menuNote: "Prices at the counter — the rail changes with the day.",
  menuSections: [
    {
      id: "breakfast",
      label: "Breakfast",
      eyebrow: "07:30 open",
      intro: "From toast and eggs to a proper full breakfast before Baker Street.",
      image: "/assets/doorsteps-eggmayo-coffee.jpg",
      imageAlt: "Egg mayo sandwich and coffee at Doorsteps outdoor table",
      items: [
        {
          name: "Toast with butter",
          blurb: "Two slices, simply done — the quiet start.",
        },
        {
          name: "Toast with preserve or Marmite",
          blurb: "Sweet or savoury, your call.",
        },
        {
          name: "Eggs on toast",
          blurb: "Two eggs — fried, scrambled, or poached — on two toast.",
        },
        {
          name: "Full breakfast",
          blurb:
            "Egg, bacon, sausage, tomato & beans with two toast. Pair with tea or coffee.",
        },
        {
          name: "Mushroom or hash brown",
          blurb: "Extra plate warmth on the side.",
        },
      ],
    },
    {
      id: "baguettes",
      label: "Baguettes & sandwiches",
      eyebrow: "Built to order",
      intro:
        "Roll or sandwich, French, bap, or ciabatta — assembled at the rail from today’s fillings.",
      image: "/assets/doorsteps-coffee-ciabatta.jpg",
      imageAlt: "Coffee and toasted ciabatta at Doorsteps patio seating",
      groups: [
        {
          title: "Hot fillings",
          items: [
            { name: "Bacon", blurb: "The Marylebone morning classic." },
            { name: "Egg & bacon", blurb: "Two early-doors staples in one wrap." },
            { name: "Bacon & sausage", blurb: "Stacked and ready for the office." },
            { name: "Fried egg", blurb: "Simple, hot, and generous." },
            { name: "Sausage", blurb: "Proper filling, no fuss." },
          ],
        },
        {
          title: "Specials of the day",
          items: [
            {
              name: "Chicken escalope",
              blurb:
                "Crisp cutlet with salad — add cheese, crispy bacon, or Valdostana.",
            },
            {
              name: "Grilled chicken",
              blurb:
                "Same build as the escalope — salad, cheese, bacon, or Valdostana.",
            },
            {
              name: "Fridge mixes",
              blurb: "Day’s specials inside the fridge — ask what’s on.",
            },
          ],
        },
        {
          title: "Cheeses",
          items: [
            { name: "Cheddar", blurb: "Sharp and straightforward." },
            { name: "Brie", blurb: "Soft, creamy, lunch-hour ready." },
            { name: "Mozzarella", blurb: "Clean and mild." },
            { name: "Tri colore", blurb: "The colourful cheese special." },
          ],
        },
        {
          title: "Egg",
          items: [
            { name: "Egg mayo", blurb: "Creamy classic in kraft or on the plate." },
            { name: "Boiled egg", blurb: "Simple, cold-counter comfort." },
          ],
        },
        {
          title: "Fish",
          items: [
            { name: "Tuna", blurb: "A steady lunch favourite." },
            { name: "Prawn", blurb: "Light and coastal." },
            { name: "Salmon", blurb: "Soft slices, deli-counter calm." },
            { name: "Red salmon", blurb: "The richer cut." },
          ],
        },
        {
          title: "Meats",
          items: [
            { name: "Chicken", blurb: "Everyday roast-style filling." },
            { name: "Turkey", blurb: "Lean and clean." },
            { name: "Ham", blurb: "Classic counter staple." },
            { name: "Beef", blurb: "Proper slices for a workday bite." },
            { name: "Corned beef", blurb: "Old-school London sandwich bar." },
            { name: "Salami", blurb: "A little spice on the rail." },
          ],
        },
      ],
      extras:
        "Extras: tomato, cucumber, onion, lettuce, slaw · bread upgrades: French, bap, ciabatta, toasted",
    },
    {
      id: "hot",
      label: "Hot specials",
      eyebrow: "Warm plates",
      intro: "When a baguette isn’t quite enough.",
      image: "/assets/doorsteps-deli-case.jpg",
      imageAlt: "Deli case with salads and jacket potatoes at Doorsteps",
      items: [
        {
          name: "Escalope & pasta",
          blurb: "The house hot plate — chicken escalope with pasta.",
        },
        { name: "Pasta", blurb: "Comforting, from the hot rail." },
        {
          name: "Jacket potato",
          blurb: "From the counter — toppings as available.",
        },
        { name: "Soup", blurb: "Ask what’s on today." },
      ],
    },
    {
      id: "drinks",
      label: "Drinks",
      eyebrow: "Cup in hand",
      intro: "Tea, coffee, and the small luxuries that keep Blandford moving.",
      image: "/assets/doorsteps-interior.jpg",
      imageAlt: "Doorsteps interior with counter and seating",
      items: [
        { name: "Coffee", blurb: "Americano pace for the morning queue." },
        { name: "Espresso", blurb: "Short and decisive." },
        { name: "Cappuccino", blurb: "Foam, warmth, a slower minute." },
        { name: "Tea", blurb: "The quiet companion." },
        { name: "Lemon tea", blurb: "Bright and light." },
        { name: "Hot chocolate", blurb: "For colder Marylebone mornings." },
      ],
    },
  ],
  specialties: [
    "Polished counter rail and kraft wrap for the office walk",
    "Chicken escalope specials as bap, sandwich, or ciabatta",
    "Full breakfast and proper coffee before Baker Street",
  ],
  reviews: [
    {
      quote:
        "Full English done properly — warm welcome, generous plate, and the kind of service that makes you feel looked after.",
      theme: "Breakfast",
      attribution: "Google review",
    },
    {
      quote:
        "Eggs, toast, bacon, and coffee without the matcha-and-sourdough theatre — rare on this street, and exactly right.",
      theme: "No fuss",
      attribution: "Google review",
    },
    {
      quote:
        "Porridge with honey and walnuts, friendly humour at the counter — a comforting Marylebone stop before the day starts.",
      theme: "Morning ritual",
      attribution: "Google review",
    },
    {
      quote:
        "Chicken escalope and salad roll praised again and again — crisp, generous, and worth the queue.",
      theme: "Escalope",
      attribution: "Google review",
    },
    {
      quote:
        "Cheerful owners, quick service, and outdoor seats when the sun hits Blandford — a proper local sandwich bar.",
      theme: "Service",
      attribution: "Google review",
    },
    {
      quote:
        "Sandwiches, bacon, and great coffee keep regulars coming — democratic prices, terrific service, cool little room.",
      theme: "Regulars",
      attribution: "Google review",
    },
  ],
} as const;

export type MenuSection = (typeof siteConfig.menuSections)[number];
