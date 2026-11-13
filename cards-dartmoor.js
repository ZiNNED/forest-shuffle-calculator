// Dartmoor Calculator - Card definitions
// Display names and attached-card labels live in i18n/<lang>.js (keyed by card id).
// Scoring rule format:
//   count: { of: "self" | "symbol", value: X | "attachedCards" | "distinct", value: X | "condition", value: X }
//   reward: { mode: "flat", points: X } | { mode: "perUnit", points: X } | { mode: "lookup", table: [...] }

const CARDS_DARTMOOR = [
{
  "id": "cave",
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
    "relation": "oneToOne"
  }
},
{
  "id": "ash",
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
    { "target": "blackAlder", "symbols": ["blackAlder"], "relation": "oneToMany" }
  ]
},
{
  "id": "goatWillow",
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
    "relation": "oneToOne"
  }
},
{
  "id": "blackAlder",
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
  "id": "blanketBog",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "tor",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "valleyMire",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [
    {
        "count": {
            "of": "symbol",
            "value": "insect"
        },
        "reward": {
            "mode": "perUnit",
            "points": 2,
            "multiply": "self"
        }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "waxcapGrassland",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor", "exmoor"],
  "expansion": "exmoor",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "wetWoodland",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [
    {
        "count": {
            "of": "symbol",
            "value": "moor"
        },
        "reward": {
            "mode": "perUnit",
            "points": 2,
            "multiply": "self"
        }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "fountainhead",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "lowlandHeath",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [
    {
        "count": {
            "of": "symbol",
            "value": "amphibian"
        },
        "reward": {
            "mode": "perUnit",
            "points": 2,
            "multiply": "self"
        }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "ringCairn",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor", "exmoor"],
  "expansion": "exmoor",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "warrens",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [
    {
        "count": {
            "of": "symbol",
            "value": "pawedAnimal"
        },
        "reward": {
            "mode": "perUnit",
            "points": 2,
            "multiply": "self"
        }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "highCoastalHeath",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor", "exmoor"],
  "expansion": "exmoor",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "rhosPasture",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [
    {
        "count": {
            "of": "symbol",
            "value": "clovenHoofedAnimal"
        },
        "reward": {
            "mode": "perUnit",
            "points": 2,
            "multiply": "self"
        }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "tarrSteps",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor","exmoor"],
  "expansion": "exmoor",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "rivulet",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards", "target": "goatWillow" }, 
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "goatWillow", "symbols": ["goatWillow"], "relation": "oneToMany" }
  ]
},
{
  "id": "universalMoor",
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": []
},
{
  "id": "barnOwl",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "bat" },
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "alcathoeBat",
  "game": "dartmoor",
  "category": "bat",
  "zone": "sides",
  "symbols": ["bat"],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "bat"
      },
      "reward": {
        "mode": "threshold",
        "minimum": 3,
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "blackTailedGodwit",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "self", "when": "mostOfCategory", "value": "moor" },
      "reward": { "mode": "perUnit", "points": 10 }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "buzzard",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "mouse" },
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "commonMoorhen",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "dragonfly" },
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "cuckoo",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 7 }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "curlew",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 3 }
    },
    {
      "count": { "of": "symbol", "value": "insect" },
      "reward": { "mode": "threshold", "minimum": 5, "points": 7 }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "dartfordWarbler",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 1 }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "greyHeron",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 8 }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "greyWagtail",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "exmoor" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "meadowPipit",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "bird" },
      "reward": { "mode": "lookup", "table": [1, 3, 3, 6, 6, 10], "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "peregrineFalcon",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "mouse" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "piedFlycatcher",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 4 }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "wheatear",
  "game": "dartmoor",
  "category": "bird",
  "zone": "tops",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "attachedCards", "target": "moor" },
      "reward": { "mode": "perUnit", "points": 5 }
    },
    {
      "count": { "of": "attachedCards", "target": "highCoastalHeath" },
      "reward": { "mode": "perUnit", "points": 10 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "highCoastalHeath", "symbols": ["moor"], "exclusiveWith": "moorAttach", "expansion": "exmoor" },
    { "target": "moor", "symbols": ["moor"], "exclusiveWith": "moorAttach", "whenExpansionOff": "exmoor" }
  ]
},
{
  "id": "beautifulDemoiselle",
  "game": "dartmoor",
  "category": "dragonfly",
  "zone": "tops",
  "symbols": ["dragonfly", "insect"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "dragonfly" },
      "reward": { "mode": "lookup", "table": [0, 5, 10, 15, 30, 50], "repeated": true }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "emeraldDamselfly",
  "game": "dartmoor",
  "category": "dragonfly",
  "zone": "tops",
  "symbols": ["dragonfly", "insect"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "dragonfly" },
      "reward": { "mode": "lookup", "table": [0, 5, 10, 15, 30, 50], "repeated": true }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "goldenRingedDamselfly",
  "game": "dartmoor",
  "category": "dragonfly",
  "zone": "tops",
  "symbols": ["dragonfly", "insect", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "dragonfly" },
      "reward": { "mode": "lookup", "table": [0, 5, 10, 15, 30, 50], "repeated": true }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "keeledSkimmer",
  "game": "dartmoor",
  "category": "dragonfly",
  "zone": "tops",
  "symbols": ["dragonfly", "insect"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "dragonfly" },
      "reward": { "mode": "lookup", "table": [0, 5, 10, 15, 30, 50], "repeated": true }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "smallRedDamselfly",
  "game": "dartmoor",
  "category": "dragonfly",
  "zone": "tops",
  "symbols": ["dragonfly", "insect"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "dragonfly" },
      "reward": { "mode": "lookup", "table": [0, 5, 10, 15, 30, 50], "repeated": true }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "southernDamselfly",
  "game": "dartmoor",
  "category": "dragonfly",
  "zone": "tops",
  "symbols": ["dragonfly", "insect"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "dragonfly" },
      "reward": { "mode": "lookup", "table": [0, 5, 10, 15, 30, 50], "repeated": true }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "harvestMouse",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "tops",
  "symbols": ["pawedAnimal", "mouse", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "bird" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "adder",
  "game": "dartmoor",
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": ["amphibian"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "amphibian" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    },
    {
      "count": { "of": "symbol", "value": "mouse" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "commonLizard",
  "game": "dartmoor",
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": ["amphibian"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "amphibian" },
      "reward": { "mode": "lookup", "table": [5, 5, 15], "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "grassSnake",
  "game": "dartmoor",
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": ["amphibian"],
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
  "id": "moorFrog",
  "game": "dartmoor",
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": ["amphibian"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "moor" },
      "reward": { "mode": "threshold", "minimum": 5, "points": 8, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "natterjackToad",
  "game": "dartmoor",
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": ["amphibian", "exmoor"],
  "expansion": "exmoor",
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
  "id": "smoothSnake",
  "game": "dartmoor",
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": ["amphibian", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "attachedCards", "target": "moorBirch" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "moorBirch", "symbols": ["moorBirch"], "relation": "oneToMany" }
  ]
},
{
  "id": "wartyNewt",
  "game": "dartmoor",
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": ["amphibian"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "lookup", "table": [5, 15, 25], "repeated": true }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "addersTongue",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 3 }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "blueBerry",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "bird" },
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "bogAsphodel",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "moor" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "commonTormentil",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 5 }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "greatButterflyOrchid",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "plant" },
      "reward": { "mode": "lookup", "table": [3, 3, 3, 3, 15] }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "greaterWoodrush",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 3 }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "heather",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "insect" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "meadowsweet",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "attachedCards", "target": "moor" },
      "reward": { "mode": "perUnit", "points": 5 }
    },
    {
      "count": { "of": "attachedCards", "target": "blanketBog" },
      "reward": { "mode": "perUnit", "points": 10 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"], "exclusiveWith": "moorAttach" },
    { "target": "moor", "symbols": ["moor"], "exclusiveWith": "moorAttach" }
  ]
},
{
  "id": "royalFern",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "plant" },
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "sundew",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "insect" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "waterSoldiers",
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "dragonfly" },
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "bankVole",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "bottoms",
  "symbols": ["pawedAnimal", "mouse", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 3 }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "beaver",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "bottoms",
  "symbols": ["pawedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "cave" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "otter",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "bottoms",
  "symbols": ["pawedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "amphibian" },
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "blueGroundBeetle",
  "game": "dartmoor",
  "category": "insect",
  "zone": "bottoms",
  "symbols": ["insect"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "zone", "value": "bottoms" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "brandtsBat",
  "game": "dartmoor",
  "category": "bat",
  "zone": "sides",
  "symbols": ["bat"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "bat" },
      "reward": { "mode": "threshold", "minimum": 3, "points": 5 }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "commonNoctule",
  "game": "dartmoor",
  "category": "bat",
  "zone": "sides",
  "symbols": ["bat"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "bat" },
      "reward": { "mode": "threshold", "minimum": 3, "points": 5 }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "daubentonsBat",
  "game": "dartmoor",
  "category": "bat",
  "zone": "sides",
  "symbols": ["bat"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "bat" },
      "reward": { "mode": "threshold", "minimum": 3, "points": 5 }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "serotineBat",
  "game": "dartmoor",
  "category": "bat",
  "zone": "sides",
  "symbols": ["bat"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "bat" },
      "reward": { "mode": "threshold", "minimum": 3, "points": 5 }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "whiskeredBat",
  "game": "dartmoor",
  "category": "bat",
  "zone": "sides",
  "symbols": ["bat", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "bat" },
      "reward": { "mode": "threshold", "minimum": 3, "points": 5 }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "capercaillie",
  "game": "dartmoor",
  "category": "bird",
  "zone": "sides",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "plant" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "commonPheasant",
  "game": "dartmoor",
  "category": "bird",
  "zone": "sides",
  "symbols": ["bird"],
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
  "id": "nuthatch",
  "game": "dartmoor",
  "category": "bird",
  "zone": "sides",
  "symbols": ["bird"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "perUnit", "points": 10 }
    }
  ],
  "tags": [],
  "attachedCards": {
    "relation": "oneToOne"
  }
},
{
  "id": "treecreeper",
  "game": "dartmoor",
  "category": "bird",
  "zone": "sides",
  "symbols": ["bird"],
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
  "id": "dartmoorBadger",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "pawedAnimal" },
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "dartmoorBlackRabbit",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "tag", "value": "rabbit" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": ["rabbit"],
  "attachedCards": []
},
{
  "id": "dormouse",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "perUnit", "points": 15 }
    }
  ],
  "tags": [],
  "attachedCards": {
    "relation": "oneToOne"
  }
},
{
  "id": "fieldVole",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal", "mouse"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "mouse" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "shrew",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal", "mouse"],
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
  "id": "woodMouse",
  "game": "dartmoor",
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal", "mouse"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "mouse" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "dartmoorPony",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 5 }
    },
    {
      "count": { "of": "self", "when": "mostOfCategory", "value": "moor" },
      "reward": { "mode": "perUnit", "points": 10 }
    }
  ],
  "tags": ["pony"],
  "attachedCards": []
},
{
  "id": "dartmoorSheep",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "clovenHoofedAnimal" },
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "exmoorPony",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "tag", "value": "pony" },
      "reward": { "mode": "perUnit", "points": 10, "multiply": "self" }
    }
  ],
  "tags": ["pony"],
  "attachedCards": []
},
{
  "id": "exmoorPonyFoal",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 1 }
    }
  ],
  "tags": ["pony"],
  "attachedCards": []
},
{
  "id": "redRubyDevons",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "plant" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "roeDeerAsh",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards", "target": "ash" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "ash", "symbols": ["ash"], "relation": "oneToMany" }
  ]
},
{
  "id": "roeDeerBlackAlder",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards", "target": "blackAlder" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "blackAlder", "symbols": ["blackAlder"], "relation": "oneToMany" }
  ]
},
{
  "id": "roeDeerCrabApple",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards", "target": "crabApple" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "crabApple", "symbols": ["crabApple"], "relation": "oneToMany" }
  ]
},
{
  "id": "roeDeerMoorBirch",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards", "target": "moorBirch" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "moorBirch", "symbols": ["moorBirch"], "relation": "oneToMany" }
  ]
},
{
  "id": "roeDeerSessileOak",
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards", "target": "sessileOak" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "sessileOak", "symbols": ["sessileOak"], "relation": "oneToMany" }
  ]
},
{
  "id": "gnat",
  "game": "dartmoor",
  "category": "insect",
  "zone": "sides",
  "symbols": ["insect"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "bat" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "lakeFly",
  "game": "dartmoor",
  "category": "insect",
  "zone": "sides",
  "symbols": ["insect"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "bat" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "mountainBumblebee",
  "game": "dartmoor",
  "category": "insect",
  "zone": "sides",
  "symbols": ["insect", "exmoor"],
  "expansion": "exmoor",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "shrub" },
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
}
];
