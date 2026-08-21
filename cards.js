// Forest Shuffle Card Catalog
// Cards with names, symbols, categories, zones, and scoring rules
//
// zone: 'general' | 'tops' | 'bottoms' | 'sides'
//   Determines which zone section the card appears in.
//
// Scoring rule types:
//   base          — fixed points per card (score: "per") or per tree ("perTree")
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
    zone: "general",
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
    zone: "general",
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
    zone: "general",
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
    zone: "general",
    symbols: ["tree", "oak"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "whenDifferentTreeCount", minimum: 8, points: 10, score: "per" }
    ]
  },
  {
    id: "sapling",
    names: { en: "Tree Sapling", nl: "Jong boompje" },
    category: "tree",
    zone: "general",
    symbols: ["tree"],
    positions: [],
    expansion: "base",
    scoring: []
  },
  {
    id: "linden",
    names: { en: "Linden", nl: "Linde" },
    category: "tree",
    zone: "general",
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
    zone: "general",
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
    zone: "general",
    symbols: ["tree", "silverFir"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "conditional", points: 2, score: "perConditionMet", condition: "perAttachedCard" }
    ]
  },
  {
    id: "sycamore",
    names: { en: "Sycamore", nl: "Esdoorn" },
    category: "tree",
    zone: "general",
    symbols: ["tree", "sycamore"],
    positions: [],
    expansion: "base",
    scoring: [
      { type: "base", points: 1, score: "perTree" }
    ]
  },
  {
    id: "tawnyOwl",
    names: { en: "Tawny Owl", nl: "Bosuil" },
    zone: "tops",
    category: "bird",
    symbols: ["bird"],
    expansion: "base",
    scoring: [
      { type: "base", points: 5 }
    ]
  },
  {
    id: "bullfinch",
    names: { en: "Bullfinch", nl: "Goudvink" },
    zone: "tops",
    category: "bird",
    symbols: ["bird"],
    expansion: "base",
    scoring: [
      { type: "perCategory", category: "insect", points: 2 }
    ]
  },
  {
    id: "greatSpottedWoodpecker",
    names: { en: "Great Spotted Woodpecker", nl: "Grote bonte specht" },
    zone: "tops",
    category: "bird",
    symbols: ["bird"],
    expansion: "base",
    scoring: [
      { type: "conditional", condition: "mostTreesNoTies", points: 10 }
    ]
  },
  {
    id: "goshawk",
    names: { en: "Goshawk", nl: "Havik" },
    zone: "tops",
    category: "bird",
    symbols: ["bird"],
    expansion: "base",
    scoring: [
      { type: "perCategory", category: "bird", points: 3 }
    ]
  },
  {
    id: "chaffinch",
    names: { en: "Chaffinch", nl: "Vink" },
    zone: "tops",
    category: "bird",
    symbols: ["bird"],
    expansion: "base",
    scoring: [
      { type: "conditional", condition: "perAttachedCard", points: 5 }
    ],
    attachedMax: "cardCount",
    attachedLabel: { en: "atop a beech", nl: "bovenop een beuk" }
  },
  {
    id: "eurasianJay",
    names: { en: "Eurasian Jay", nl: "Vlaamse gaai" },
    zone: "tops",
    category: "bird",
    symbols: ["bird"],
    expansion: "base",
    scoring: [
      { type: "base", points: 3 }
    ]
  },
  // ===== Butterflies =====
  {
    id: "peacockButterfly",
    names: { en: "Peacock Butterfly", nl: "Dagpauwoog" },
    zone: "tops",
    category: "butterfly",
    symbols: ["butterfly", "insect"],
    expansion: "base",
    scoring: [
      { type: "rangedCondition", condition: "differentTypes", points: [0, 3, 6, 12, 20, 35, 55] }
    ]
  },
  {
    id: "purpleEmperor",
    names: { en: "Purple Emperor", nl: "Grote weerschijnvlinder" },
    zone: "tops",
    category: "butterfly",
    symbols: ["butterfly", "insect"],
    expansion: "base",
    scoring: [
      { type: "rangedCondition", condition: "differentTypes", points: [0, 3, 6, 12, 20, 35, 55] }
    ]
  },
  {
    id: "largeTortoiseshell",
    names: { en: "Large Tortoiseshell", nl: "Grote vos" },
    zone: "tops",
    category: "butterfly",
    symbols: ["butterfly", "insect"],
    expansion: "base",
    scoring: [
      { type: "rangedCondition", condition: "differentTypes", points: [0, 3, 6, 12, 20, 35, 55] }
    ]
  },
  {
    id: "camberwellBeauty",
    names: { en: "Camberwell Beauty", nl: "Rouwmantel" },
    zone: "tops",
    category: "butterfly",
    symbols: ["butterfly", "insect"],
    expansion: "base",
    scoring: [
      { type: "rangedCondition", condition: "differentTypes", points: [0, 3, 6, 12, 20, 35, 55] }
    ]
  },
  {
    id: "silverWashedFritillary",
    names: { en: "Silver-Washed Fritillary", nl: "Keizersmantel" },
    zone: "tops",
    category: "butterfly",
    symbols: ["butterfly", "insect"],
    expansion: "base",
    scoring: [
      { type: "rangedCondition", condition: "differentTypes", points: [0, 3, 6, 12, 20, 35, 55] }
    ]
  },
  {
    id: "redSquirrel",
    names: { en: "Red Squirrel", nl: "Rode eekhoorn" },
    zone: "tops",
    category: "pawedAnimal",
    symbols: ["pawedAnimal"],
    expansion: "base",
    attachedLabel: { en: "atop an oak", nl: "bovenop een eik" },
    attachedMax: "cardCount",
    scoring: [
      { type: "conditional", condition: "perAttachedCard", points: 5 }
    ]
  },
  // ===== Plants =====
  {
    id: "treeFerns",
    names: { en: "Tree Ferns", nl: "Boomvarens" },
    zone: "bottoms",
    category: "plant",
    symbols: ["plant"],
    expansion: "base",
    scoring: [
      { type: "perCategory", category: "amphibian", points: 6 }
    ]
  },
  {
    id: "blackberries",
    names: { en: "Blackberries", nl: "Bramen" },
    zone: "bottoms",
    category: "plant",
    symbols: ["plant"],
    expansion: "base",
    scoring: [
      { type: "perCategory", category: "plant", points: 2 }
    ]
  },
  {
    id: "moss",
    names: { en: "Moss", nl: "Mos" },
    zone: "bottoms",
    category: "plant",
    symbols: ["plant"],
    expansion: "base",
    scoring: [
      { type: "whenCountMet", category: "tree", minimum: 10, points: 10 }
    ]
  },
  {
    id: "wildStrawberries",
    names: { en: "Wild Strawberries", nl: "Wilde aardbeien" },
    zone: "bottoms",
    category: "plant",
    symbols: ["plant"],
    expansion: "base",
    scoring: [
      { type: "whenDifferentTreeCount", minimum: 8, points: 10 }
    ]
  },
  // ===== Mushrooms =====
  {
    id: "chanterelle",
    names: { en: "Chanterelle", nl: "Chantarel" },
    zone: "bottoms",
    category: "mushroom",
    symbols: ["mushroom"],
    expansion: "base",
    scoring: []
  },
  {
    id: "flyAgaric",
    names: { en: "Fly Agaric", nl: "Vliegenzwam" },
    zone: "bottoms",
    category: "mushroom",
    symbols: ["mushroom"],
    expansion: "base",
    scoring: []
  },
  {
    id: "parasolMushroom",
    names: { en: "Parasol Mushroom", nl: "Grote parasolzwam" },
    zone: "bottoms",
    category: "mushroom",
    symbols: ["mushroom"],
    expansion: "base",
    scoring: []
  },
  {
    id: "pennyBun",
    names: { en: "Penny Bun", nl: "Eekhoorntjesbrood" },
    zone: "bottoms",
    category: "mushroom",
    symbols: ["mushroom"],
    expansion: "base",
    scoring: []
  }
];