// Forest Shuffle Card Catalog
// Cards with names, symbols, categories, and scoring rules

const CARDS = [
  {
    id: "birch",
    names: {
      en: "Birch",
      nl: "Berk"
    },
    category: "tree",
    symbols: ["tree", "birch"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "base", points: 1 }
    ]
  },
  {
    id: "beech",
    names: {
      en: "Beech",
      nl: "Beuk"
    },
    category: "tree",
    symbols: ["tree", "beech"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "whenMinimumMet", minimum: 4, points: 5 }
    ]
  }
];