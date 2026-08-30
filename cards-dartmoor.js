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
    { "en": "number of Black Alder symbols", "nl": "aantal zwarte elssymbolen", "target": "blackAlder", "symbols": ["blackAlder"], "relation": "oneToMany" }
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
    { "en": "number of Goat Willow symbols", "nl": "aantal boswilgsymbolen", "target": "goatWillow", "symbols": ["goatWillow"], "relation": "oneToMany" }
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "meadowPipit",
  "names": { "en": "Meadow Pipit", "nl": "Graspieper" },
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "peregrineFalcon",
  "names": { "en": "Peregrine Falcon", "nl": "Slechtvalk" },
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "piedFlycatcher",
  "names": { "en": "Pied Flycatcher", "nl": "Bonte vliegenvanger" },
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "expansion": "exmoor" }
  ]
},
{
  "id": "wheatear",
  "names": { "en": "Wheatear", "nl": "Tapuit" },
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
    { "en": "played at High Coastal Heath", "nl": "gespeeld bij kustheide", "target": "highCoastalHeath", "symbols": ["moor"], "exclusiveWith": "moorAttach", "expansion": "exmoor" },
    { "en": "played at a different moor", "nl": "gespeeld bij andere heide", "target": "moor", "symbols": ["moor"], "exclusiveWith": "moorAttach", "altNames": { "en": "played at a moor", "nl": "gespeeld bij een heide" }, "whenExpansionOff": "exmoor" }
  ]
},
{
  "id": "beautifulDemoiselle",
  "names": { "en": "Beautiful Demoiselle", "nl": "Bosbeekjuffer" },
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
  "names": { "en": "Emerald Damselfly", "nl": "Gewone pantserjuffer" },
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
  "names": { "en": "Golden-ringed Damselfly", "nl": "Gewone bronlibel" },
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
  "names": { "en": "Keeled Skimmer", "nl": "Beekoeverlibel" },
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
  "names": { "en": "Small Red Damselfly", "nl": "Koraaljuffer" },
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
  "names": { "en": "Southern Damselfly", "nl": "Mercuurwaterjuffer" },
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
  "names": { "en": "Harvest Mouse", "nl": "Dwergmuis" },
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
  "names": { "en": "Adder", "nl": "Adder" },
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
  "names": { "en": "Common Lizard", "nl": "Kleine hagedis" },
  "game": "dartmoor",
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": ["amphibian"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "amphibian" },
      "reward": { "mode": "lookup", "table": [0, 5, 5, 15], "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": []
},
{
  "id": "grassSnake",
  "names": { "en": "Grass Snake", "nl": "Ringslang" },
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
  "names": { "en": "Moor Frog", "nl": "Heikikker" },
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
  "names": { "en": "Natterjack Toad", "nl": "Rugstreeppad" },
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
  "names": { "en": "Smooth Snake", "nl": "Gladde slang" },
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
    { "en": "number of Moor Birch symbols", "nl": "aantal zachte berksymbolen", "target": "moorBirch", "symbols": ["moorBirch"], "relation": "oneToMany" }
  ]
},
{
  "id": "wartyNewt",
  "names": { "en": "Warty Newt", "nl": "Kamsalamander" },
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
  "names": { "en": "Adder's Tongue", "nl": "Addertong" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "blueBerry",
  "names": { "en": "Blueberry", "nl": "Blauwe bosbes" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "bogAsphodel",
  "names": { "en": "Bog Asphodel", "nl": "Beenbreek" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "commonTormentil",
  "names": { "en": "Common Tormentil", "nl": "Tormentil" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "greatButterflyOrchid",
  "names": { "en": "Great Butterfly Orchid", "nl": "Bergnachtorchis" },
  "game": "dartmoor",
  "category": "plant",
  "zone": "bottoms",
  "symbols": ["plant"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "distinct", "value": "plant" },
      "reward": { "mode": "lookup", "table": [0, 3, 3, 3, 3, 15] }
    },
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "multiply", "by": 2 }
    }
  ],
  "tags": [],
  "attachedCards": [
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "greaterWoodrush",
  "names": { "en": "Greater Wood-rush", "nl": "Grote veldbies" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "heather",
  "names": { "en": "Heather", "nl": "Struikhei" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "meadowsweet",
  "names": { "en": "Meadowsweet", "nl": "Moerasspirea" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"], "exclusiveWith": "moorAttach" },
    { "en": "played at a different moor", "nl": "gespeeld bij andere heide", "target": "moor", "symbols": ["moor"], "exclusiveWith": "moorAttach" }
  ]
},
{
  "id": "royalFern",
  "names": { "en": "Royal Fern", "nl": "Koningsvaren" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "sundew",
  "names": { "en": "Sundew", "nl": "Zonnedauw" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "waterSoldiers",
  "names": { "en": "Water Soldiers", "nl": "Krabbenscheer" },
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
    { "en": "played at Blanket Bog", "nl": "gespeeld bij dekenveen", "target": "blanketBog", "symbols": ["moor"] }
  ]
},
{
  "id": "bankVole",
  "names": { "en": "Bank Vole", "nl": "Rosse woelmuis" },
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
  "names": { "en": "Beaver", "nl": "Bever" },
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
  "names": { "en": "Otter", "nl": "Otter" },
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
  "names": { "en": "Blue Ground Beetle", "nl": "Blauwe schallebijter" },
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
  "names": { "en": "Brandt's Bat", "nl": "Brandts vleermuis" },
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
  "names": { "en": "Common Noctule", "nl": "Laatvlieger" },
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
  "names": { "en": "Daubenton's Bat", "nl": "Watervleermuis" },
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
  "names": { "en": "Serotine Bat", "nl": "Rosse vleermuis" },
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
  "names": { "en": "Whiskered Bat", "nl": "Baardvleermuis" },
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
  "names": { "en": "Capercaillie", "nl": "Auerhoen" },
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
  "names": { "en": "Common Pheasant", "nl": "Fazant" },
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
  "names": { "en": "Nuthatch", "nl": "Boomklever" },
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
    "en": "at fully occupied tree or shrub",
    "nl": "bij volledig bezette boom of struik"
  }
},
{
  "id": "treecreeper",
  "names": { "en": "Treecreeper", "nl": "Taigaboomkruiper" },
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
  "names": { "en": "Dartmoor Badger", "nl": "Dartmoordas" },
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
  "names": { "en": "Dartmoor Black Rabbit", "nl": "Dartmoorkonijn" },
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
  "names": { "en": "Dormouse", "nl": "Relmuis" },
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
    "en": "opposite bat",
    "nl": "tegenover vleermuis"
  }
},
{
  "id": "fieldVole",
  "names": { "en": "Field Vole", "nl": "Aardmuis" },
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
  "names": { "en": "Shrew", "nl": "Millers waterspitsmuis" },
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
  "names": { "en": "Wood Mouse", "nl": "Bosmuis" },
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
  "names": { "en": "Dartmoor Pony", "nl": "Dartmoorpony" },
  "game": "dartmoor",
  "category": "clovenHoofedAnimal",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "self", "when": "mostOfCategory", "value": "moor" },
      "reward": { "mode": "lookup", "table": [5, 15] }
    }
  ],
  "tags": ["pony"],
  "attachedCards": []
},
{
  "id": "dartmoorSheep",
  "names": { "en": "Dartmoor Sheep", "nl": "Dartmoorschaap" },
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
  "names": { "en": "Exmoor Pony", "nl": "Exmoorpony" },
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
  "names": { "en": "Exmoor Pony Foal", "nl": "Exmoorponyveulen" },
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
  "names": { "en": "Red Ruby Devons", "nl": "Devon rund" },
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
  "names": { "en": "Roe Deer", "nl": "Ree" },
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
    { "en": "number of Ash symbols", "nl": "aantal essymbolen", "target": "ash", "symbols": ["ash"], "relation": "oneToMany" }
  ]
},
{
  "id": "roeDeerBlackAlder",
  "names": { "en": "Roe Deer", "nl": "Ree" },
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
    { "en": "number of Black Alder symbols", "nl": "aantal zwarte elssymbolen", "target": "blackAlder", "symbols": ["blackAlder"], "relation": "oneToMany" }
  ]
},
{
  "id": "roeDeerCrabApple",
  "names": { "en": "Roe Deer", "nl": "Ree" },
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
    { "en": "number of Crab Apple symbols", "nl": "aantal wilde appelboomsymbolen", "target": "crabApple", "symbols": ["crabApple"], "relation": "oneToMany" }
  ]
},
{
  "id": "roeDeerMoorBirch",
  "names": { "en": "Roe Deer", "nl": "Ree" },
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
    { "en": "number of Moor Birch symbols", "nl": "aantal zachte berksymbolen", "target": "moorBirch", "symbols": ["moorBirch"], "relation": "oneToMany" }
  ]
},
{
  "id": "roeDeerSessileOak",
  "names": { "en": "Roe Deer", "nl": "Ree" },
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
    { "en": "number of Sessile Oak symbols", "nl": "aantal wintereiksymbolen", "target": "sessileOak", "symbols": ["sessileOak"], "relation": "oneToMany" }
  ]
},
{
  "id": "gnat",
  "names": { "en": "Gnat", "nl": "Mug" },
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
  "names": { "en": "Lake Fly", "nl": "Dansmug" },
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
  "names": { "en": "Mountain Bumblebee", "nl": "Berghommel" },
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
