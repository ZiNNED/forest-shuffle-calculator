// Forest Shuffle Card Catalog
// Cards with names, symbols, categories, and scoring rules
//
// Scoring rule types:
//   base          — fixed points per card (score: "per")
//   whenMinimumMet — points per card when ≥minimum owned (score: "per")
//   whenDifferentTreeCount — points per card when ≥minimum unique tree species (score: "per")
//   mostOfType    — bonus points per card when player has the most of this type (score: "per")
//   range         — total points looked up from array by count (score: "total")
//   conditional   — points × condition count (score: "perConditionMet")
//
// Default score type when omitted: "per"

const CARDS = [
  {
    id: "birch",
    names: { en: "Birch", nl: "Berk" },
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
    names: { en: "Beech", nl: "Beuk" },
    category: "tree",
    symbols: ["tree", "beech"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "whenMinimumMet", minimum: 4, points: 5 }
    ]
  },
  {
    id: "douglasFir",
    names: { en: "Douglas Fir", nl: "Douglasspar" },
    category: "tree",
    symbols: ["tree", "douglasFir"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "base", points: 5, score: "per" }
    ]
  },
  {
    id: "oak",
    names: { en: "Oak", nl: "Eik" },
    category: "tree",
    symbols: ["tree", "oak"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "whenDifferentTreeCount", minimum: 8, points: 10, score: "per" }
    ]
  },
  {
    id: "sapling",
    names: { en: "Tree sapling", nl: "Jong boompje" },
    category: "tree",
    symbols: ["tree"],
    positions: [],
    expansion: "base",
    scoring: []
  },
  {
    id: "linden",
    names: { en: "Linden", nl: "Linde" },
    category: "tree",
    symbols: ["tree", "linden"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "base", points: 1, score: "per" },
      { type: "mostOfType", points: 2, score: "per" }
    ]
  },
  {
    id: "horseChestnut",
    names: { en: "Horse Chestnut", nl: "Paardenkastanje" },
    category: "tree",
    symbols: ["tree", "horseChestnut"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "range", points: [1, 4, 9, 16, 25, 36, 49], score: "total" }
    ]
  },
  {
    id: "silverFir",
    names: { en: "Silver Fir", nl: "Zilverspar" },
    category: "tree",
    symbols: ["tree", "silverFir"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "conditional", points: 2, score: "perConditionMet", condition: "perAttachedCard" }
    ]
  }
];