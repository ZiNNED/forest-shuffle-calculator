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
},
{
  "id": "blanketBog",
  "names": {
    "en": "Blanket Bog",
    "nl": "Dekenveen"
  },
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
  "names": {
    "en": "Tor",
    "nl": "Rotsheuvel"
  },
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
  "names": {
    "en": "Valley Mire",
    "nl": "Dalveen"
  },
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
  "names": {
    "en": "Waxcap Grassland",
    "nl": "Wasplatengrasland"
  },
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
  "names": {
    "en": "Wet Woodland",
    "nl": "Vochtig veen"
  },
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
  "names": {
    "en": "Fountainhead",
    "nl": "Bron"
  },
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
  "names": {
    "en": "Lowland Heath",
    "nl": "Laaglandheide"
  },
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
  "names": {
    "en": "Ring Cairn",
    "nl": "Steencirkelheide"
  },
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
  "names": {
    "en": "Warrens",
    "nl": "Konijnenhol"
  },
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
  "names": {
    "en": "High Coastal Heath",
    "nl": "Kustheide"
  },
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
  "names": {
    "en": "Rhôs Pasture",
    "nl": "Grasland"
  },
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
  "names": {
    "en": "Tarr Steps",
    "nl": "Klepelbrug"
  },
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
  "names": {
    "en": "Rivulet",
    "nl": "Beek"
  },
  "game": "dartmoor",
  "category": "moor",
  "zone": "general",
  "symbols": ["moor"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards", "target": "goatWillow" }, 
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": [
    { "en": "Goat Willow symbols", "nl": "Boswilgsymbolen", "target": "goatWillow", "symbols": ["goatWillow"], "relation": "oneToMany" }
  ]
},
{
  "id": "universalMoor",
  "names": {
    "en": "Universal Moor",
    "nl": "Universele heide"
  },
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
  "names": {
    "en": "Barn Owl",
    "nl": "Kerkuil"
  },
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
    { "en": "Played in High Coastal Heath", "nl": "Gespeeld in kustheide", "target": "highCoastalHeath", "symbols": ["moor"] }
  ]
},
{
  "id": "alcathoeBat",
  "names": {
    "en": "Alcathoe Bat",
    "nl": "Nimfvleermuis"
  },
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
  "names": { "en": "Black-Tailed Godwit", "nl": "Grutto" },
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
    { "en": "Played in High Coastal Heath", "nl": "Gespeeld in kustheide", "target": "highCoastalHeath", "symbols": ["moor"] }
  ]
},
{
  "id": "buzzard",
  "names": { "en": "Buzzard", "nl": "Buizerd" },
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
    { "en": "Played in High Coastal Heath", "nl": "Gespeeld in kustheide", "target": "highCoastalHeath", "symbols": ["moor"] }
  ]
},
{
  "id": "commonMoorhen",
  "names": { "en": "Common Moorhen", "nl": "Waterhoen" },
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
    { "en": "Played in High Coastal Heath", "nl": "Gespeeld in kustheide", "target": "highCoastalHeath", "symbols": ["moor"] }
  ]
},
{
  "id": "cuckoo",
  "names": { "en": "Cuckoo", "nl": "Koekoek" },
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
  "names": { "en": "Curlew", "nl": "Wulp" },
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
    { "en": "Played in High Coastal Heath", "nl": "Gespeeld in kustheide", "target": "highCoastalHeath", "symbols": ["moor"] }
  ]
},
{
  "id": "dartfordWarbler",
  "names": { "en": "Dartford Warbler", "nl": "Provençaalse grasmus" },
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
    { "en": "Played in High Coastal Heath", "nl": "Gespeeld in kustheide", "target": "highCoastalHeath", "symbols": ["moor"] }
  ]
},
{
  "id": "greyHeron",
  "names": { "en": "Grey Heron", "nl": "Blauwe reiger" },
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
    { "en": "Played in High Coastal Heath", "nl": "Gespeeld in kustheide", "target": "highCoastalHeath", "symbols": ["moor"] }
  ]
},
{
  "id": "greyWagtail",
  "names": { "en": "Grey Wagtail", "nl": "Grote gele kwikstaart" },
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
    { "en": "Played in High Coastal Heath", "nl": "Gespeeld in kustheide", "target": "highCoastalHeath", "symbols": ["moor"] }
  ]
}
];