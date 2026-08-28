// Dartmoor Calculator - Card definitions
// Scoring rule format:
//   count: { of: "self" | "symbol", value: X | "attachedCards" | "distinct", value: X | "condition", value: X }
//   reward: { mode: "flat", points: X } | { mode: "perUnit", points: X } | { mode: "lookup", table: [...] }

const CARDS_DARTMOOR = [
{
  "id": "cave",
  "names": {
    "en": "Cards In Cave",
    "nl": "Kaarten in grot"
  },
  "game": "dartmoor",
  "category": "cave",
  "zone": "general",
  "symbols": ["cave"],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1
      }
    },
    {
        "count": {
            "of": "attachedCards"
        },
        "reward": {
            "mode": "flatTotal",
            "points": 5
        }
    }
  ],
  "tags": [],
  "maxAttached": 1,
  "attachedCards": {
    "en": "5 points at end of game",
    "nl": "5 punten aan het einde van het spel"
  }
},
{
  "id": "ash",
  "names": {
    "en": "Ash",
    "nl": "Es"
  },
  "game": "dartmoor",
  "category": "tree",
  "zone": "general",
  "symbols": ["tree", "ash"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards", "target": "blackAlder" }, 
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" } 
    },
    { 
      "count": { "of": "symbol", "value": "plant" }, 
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": [
    { "en": "Black Alder symbols", "nl": "Zwarte elssymbolen", "target": "blackAlder", "symbols": ["blackAlder"], "relation": "oneToMany" }
  ]
},
{
  "id": "goatWillow",
  "names": {
    "en": "Goat Willow",
    "nl": "Boswilg"
  },
  "game": "dartmoor",
  "category": "tree",
  "zone": "general",
  "symbols": ["tree", "goatWillow"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "symbol", "value": "moor" }, 
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "crabApple",
  "names": {
    "en": "Crab Apple",
    "nl": "Wilde appelboom"
  },
  "game": "dartmoor",
  "category": "tree",
  "zone": "general",
  "symbols": ["tree", "crabApple"],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "attachedCards"
      },
      "reward": {
        "mode": "perUnit",
        "points": 8
      }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "fully occupied",
    "nl": "volledig bewoond"
  }
},
{
  "id": "blackAlder",
  "names": {
    "en": "Black Alder",
    "nl": "Zwarte els"
  },
  "game": "dartmoor",
  "category": "tree",
  "zone": "general",
  "symbols": ["tree", "blackAlder"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "self" }, 
      "reward": { "mode": "perUnit", "points": 5 } 
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "moorBirch",
  "names": {
    "en": "Moor Birch",
    "nl": "Zachte berk"
  },
  "game": "dartmoor",
  "category": "tree",
  "zone": "general",
  "symbols": ["tree", "moorBirch"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "self" }, 
      "reward": { "mode": "perUnit", "points": 1 } 
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "sessileOak",
  "names": {
    "en": "Sessile Oak",
    "nl": "Wintereik"
  },
  "game": "dartmoor",
  "category": "tree",
  "zone": "general",
  "symbols": ["tree", "sessileOak"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "symbol", "value": "tree" }, 
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" } 
    },
    { 
      "count": { "of": "symbol", "value": "shrub" }, 
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "commonGorse",
  "names": {
    "en": "Common Gorse",
    "nl": "Gaspeldoorn"
  },
  "game": "dartmoor",
  "category": "shrub",
  "zone": "general",
  "symbols": ["shrub", "exmoor"],
  "expansion": "exmoor",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "commonHolly",
  "names": {
    "en": "Common Holly",
    "nl": "Hulst"
  },
  "game": "dartmoor",
  "category": "shrub",
  "zone": "general",
  "symbols": ["shrub", "exmoor"],
  "expansion": "exmoor",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "commonHazel",
  "names": {
    "en": "Common Hazel",
    "nl": "Hazelaar"
  },
  "game": "dartmoor",
  "category": "shrub",
  "zone": "general",
  "symbols": ["shrub"],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "elderBerry",
  "names": {
    "en": "Elder Berry",
    "nl": "Gewone vlier"
  },
  "game": "dartmoor",
  "category": "shrub",
  "zone": "general",
  "symbols": ["shrub"],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": []
}
];