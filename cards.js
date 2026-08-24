// Forest Shuffle Calculator - Card definitions
// Scoring rule format:
//   count: { of: "self" | "symbol", value: X | "attachedCards" | "distinct", value: X | "condition", value: X }
//   reward: { mode: "flat", points: X } | { mode: "perUnit", points: X } | { mode: "lookup", table: [...] }

const CARDS = [
{
  "id": "cave",
  "names": {
    "en": "Cards In Cave",
    "nl": "Kaarten in grot"
  },
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
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "birch",
  "names": {
    "en": "Birch",
    "nl": "Berk"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "birch"
  ],
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
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "beech",
  "names": {
    "en": "Beech",
    "nl": "Beuk"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "beech"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "threshold",
        "minimum": 4,
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "douglasFir",
  "names": {
    "en": "Douglas Fir",
    "nl": "Douglasspar"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "douglasFir"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "oak",
  "names": {
    "en": "Oak",
    "nl": "Eik"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "oak"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "tree"
      },
      "reward": {
        "mode": "threshold",
        "minimum": 8,
        "points": 10
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "sapling",
  "names": {
    "en": "Tree Sapling",
    "nl": "Jong boompje"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree"
  ],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "linden",
  "names": {
    "en": "Linden",
    "nl": "Linde"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "linden"
  ],
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
        "of": "self",
        "when": "mostOfType"
      },
      "reward": {
        "mode": "perUnit",
        "points": 2
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "horseChestnut",
  "names": {
    "en": "Horse Chestnut",
    "nl": "Paardenkastanje"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "horseChestnut"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          1,
          4,
          9,
          16,
          25,
          36,
          49
        ]
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "silverFir",
  "names": {
    "en": "Silver Fir",
    "nl": "Zilverspar"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "silverFir"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "attachedCards"
      },
      "reward": {
        "mode": "perUnit",
        "points": 2
      }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "attached cards",
    "nl": "aangelegde kaarten",
    "relation": "oneToMany"
  }
},
{
  "id": "sycamore",
  "names": {
    "en": "Sycamore",
    "nl": "Esdoorn"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "sycamore"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "tree"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "tawnyOwl",
  "names": {
    "en": "Tawny Owl",
    "nl": "Bosuil"
  },
  "zone": "tops",
  "category": "bird",
  "symbols": [
    "bird"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "bullfinch",
  "names": {
    "en": "Bullfinch",
    "nl": "Goudvink"
  },
  "zone": "tops",
  "category": "bird",
  "symbols": [
    "bird"
  ],
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
  "attachedCards": {}
},
{
  "id": "greatSpottedWoodpecker",
  "names": {
    "en": "Great Spotted Woodpecker",
    "nl": "Grote bonte specht"
  },
  "zone": "tops",
  "category": "bird",
  "symbols": [
    "bird"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "condition",
        "value": "mostTreesNoTies"
      },
      "reward": {
        "mode": "flat",
        "points": 10
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "goshawk",
  "names": {
    "en": "Goshawk",
    "nl": "Havik"
  },
  "zone": "tops",
  "category": "bird",
  "symbols": [
    "bird"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "bird"
      },
      "reward": {
        "mode": "perUnit",
        "points": 3,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "chaffinch",
  "names": {
    "en": "Chaffinch",
    "nl": "Vink"
  },
  "zone": "tops",
  "category": "bird",
  "symbols": [
    "bird"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "attachedCards"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "atop a beech",
    "nl": "bovenop een beuk"
  }
},
{
  "id": "eurasianJay",
  "names": {
    "en": "Eurasian Jay",
    "nl": "Vlaamse gaai"
  },
  "zone": "tops",
  "category": "bird",
  "symbols": [
    "bird"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 3
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "peacockButterfly",
  "names": {
    "en": "Peacock Butterfly",
    "nl": "Dagpauwoog"
  },
  "zone": "tops",
  "category": "butterfly",
  "symbols": [
    "butterfly",
    "insect"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "butterfly"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          0,
          3,
          6,
          12,
          20,
          35,
          55
        ],
        "repeated": true
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "purpleEmperor",
  "names": {
    "en": "Purple Emperor",
    "nl": "Grote weerschijnvlinder"
  },
  "zone": "tops",
  "category": "butterfly",
  "symbols": [
    "butterfly",
    "insect"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "butterfly"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          0,
          3,
          6,
          12,
          20,
          35,
          55
        ],
        "repeated": true
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "largeTortoiseshell",
  "names": {
    "en": "Large Tortoiseshell",
    "nl": "Grote vos"
  },
  "zone": "tops",
  "category": "butterfly",
  "symbols": [
    "butterfly",
    "insect"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "butterfly"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          0,
          3,
          6,
          12,
          20,
          35,
          55
        ],
        "repeated": true
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "camberwellBeauty",
  "names": {
    "en": "Camberwell Beauty",
    "nl": "Rouwmantel"
  },
  "zone": "tops",
  "category": "butterfly",
  "symbols": [
    "butterfly",
    "insect"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "butterfly"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          0,
          3,
          6,
          12,
          20,
          35,
          55
        ],
        "repeated": true
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "silverWashedFritillary",
  "names": {
    "en": "Silver-Washed Fritillary",
    "nl": "Keizersmantel"
  },
  "zone": "tops",
  "category": "butterfly",
  "symbols": [
    "butterfly",
    "insect"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "butterfly"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          0,
          3,
          6,
          12,
          20,
          35,
          55
        ],
        "repeated": true
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "redSquirrel",
  "names": {
    "en": "Red Squirrel",
    "nl": "Rode eekhoorn"
  },
  "zone": "tops",
  "category": "pawedAnimal",
  "symbols": [
    "pawedAnimal"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "attachedCards"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "atop an oak",
    "nl": "bovenop een eik"
  }
},
{
  "id": "treeFerns",
  "names": {
    "en": "Tree Ferns",
    "nl": "Boomvarens"
  },
  "zone": "bottoms",
  "category": "plant",
  "symbols": [
    "plant"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "amphibian"
      },
      "reward": {
        "mode": "perUnit",
        "points": 6,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "blackberries",
  "names": {
    "en": "Blackberries",
    "nl": "Bramen"
  },
  "zone": "bottoms",
  "category": "plant",
  "symbols": [
    "plant"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "plant"
      },
      "reward": {
        "mode": "perUnit",
        "points": 2,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "moss",
  "names": {
    "en": "Moss",
    "nl": "Mos"
  },
  "zone": "bottoms",
  "category": "plant",
  "symbols": [
    "plant"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "tree"
      },
      "reward": {
        "mode": "threshold",
        "minimum": 10,
        "points": 10
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "wildStrawberries",
  "names": {
    "en": "Wild Strawberries",
    "nl": "Wilde aardbeien"
  },
  "zone": "bottoms",
  "category": "plant",
  "symbols": [
    "plant"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "tree"
      },
      "reward": {
        "mode": "threshold",
        "minimum": 8,
        "points": 10
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "chanterelle",
  "names": {
    "en": "Chanterelle",
    "nl": "Chantarel"
  },
  "zone": "bottoms",
  "category": "mushroom",
  "symbols": [
    "mushroom"
  ],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "flyAgaric",
  "names": {
    "en": "Fly Agaric",
    "nl": "Vliegenzwam"
  },
  "zone": "bottoms",
  "category": "mushroom",
  "symbols": [
    "mushroom"
  ],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "parasolMushroom",
  "names": {
    "en": "Parasol Mushroom",
    "nl": "Grote parasolzwam"
  },
  "zone": "bottoms",
  "category": "mushroom",
  "symbols": [
    "mushroom"
  ],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "pennyBun",
  "names": {
    "en": "Penny Bun",
    "nl": "Eekhoorntjesbrood"
  },
  "zone": "bottoms",
  "category": "mushroom",
  "symbols": [
    "mushroom"
  ],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "treeFrog",
  "names": {
    "en": "Tree Frog",
    "nl": "Boomkikker"
  },
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": [
    "amphibian"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "tag",
        "value": "mosquito"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "commonToad",
  "names": {
    "en": "Common Toad",
    "nl": "Gewone pad"
  },
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": [
    "amphibian"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "attachedCards"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "shares position",
    "nl": "deelt positie"
  }
},
{
  "id": "pondTurtle",
  "names": {
    "en": "Pond Turtle",
    "nl": "Moerasschildpad"
  },
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": [
    "amphibian"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "fireSalamander",
  "names": {
    "en": "Fire Salamander",
    "nl": "Vuursalamander"
  },
  "category": "amphibian",
  "zone": "bottoms",
  "symbols": [
    "amphibian"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          5,
          15,
          25
        ],
        "repeated": true
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "woodAnt",
  "names": {
    "en": "Wood Ant",
    "nl": "Bosmier"
  },
  "category": "insect",
  "zone": "bottoms",
  "symbols": [
    "insect"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "zone",
        "value": "bottoms"
      },
      "reward": {
        "mode": "perUnit",
        "points": 2,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "stagBeetle",
  "names": {
    "en": "Stag Beetle",
    "nl": "Vliegend hert"
  },
  "category": "insect",
  "zone": "bottoms",
  "symbols": [
    "insect"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "pawedAnimal"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "fireFlies",
  "names": {
    "en": "Fire Flies",
    "nl": "Vuurvliegjes"
  },
  "category": "insect",
  "zone": "bottoms",
  "symbols": [
    "insect"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          0,
          10,
          15,
          20
        ],
        "repeated": true
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "hedgehog",
  "names": {
    "en": "Hedgehog",
    "nl": "Egel"
  },
  "category": "pawedAnimal",
  "zone": "bottoms",
  "symbols": [
    "pawedAnimal"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "butterfly"
      },
      "reward": {
        "mode": "perUnit",
        "points": 2,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "mole",
  "names": {
    "en": "Mole",
    "nl": "Mol"
  },
  "category": "pawedAnimal",
  "zone": "bottoms",
  "symbols": [
    "pawedAnimal"
  ],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "violetCarpenterBee",
  "names": {
    "en": "Violet Carpenter Bee",
    "nl": "Houtbij"
  },
  "category": "insect",
  "zone": "sides",
  "symbols": ["insect"],
  "expansion": "base",
  "scoring": [],
  "effect": { "type": "boostTree" },
  "tags": [],
  "attachedCards": [
    { "en": "at a Birch", "nl": "aan een berk", "target": "birch", "symbols": ["birch"] },
    { "en": "at a Beech", "nl": "aan een beuk", "target": "beech", "symbols": ["beech"] },
    { "en": "at a Douglas Fir", "nl": "aan een douglasspar", "target": "douglasFir", "symbols": ["douglasFir"] },
    { "en": "at an Oak", "nl": "aan een eik", "target": "oak", "symbols": ["oak"] },
    { "en": "at a Linden", "nl": "aan een linde", "target": "linden", "symbols": ["linden"] },
    { "en": "at a Horse Chestnut", "nl": "aan een paardenkastanje", "target": "horseChestnut", "symbols": ["horseChestnut"] },
    { "en": "at a Silver Fir", "nl": "aan een zilverspar", "target": "silverFir", "symbols": ["silverFir"] },
    { "en": "at a Sycamore", "nl": "aan een esdoorn", "target": "sycamore", "symbols": ["sycamore"] },
    { "en": "at a Tree Sapling", "nl": "aan een jong boompje", "target": "sapling", "symbols": ["sapling"] },
    { "en": "at a European Larch", "nl": "aan een Europese lariks", "target": "europeanLarch", "symbols": ["europeanLarch", "alpine"], "expansion": "alpine" },
    { "en": "at a Stone Pine", "nl": "aan een Alpenden", "target": "stonePine", "symbols": ["stonePine", "alpine"], "expansion": "alpine" }
  ]
},
{
  "id": "gnat",
  "names": {
    "en": "Gnat",
    "nl": "Mug"
  },
  "category": "insect",
  "zone": "sides",
  "symbols": [
    "insect"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "bat"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [
    "mosquito"
  ],
  "attachedCards": {}
},
{
  "id": "bechsteinsBat",
  "names": {
    "en": "Bechstein's Bat",
    "nl": "Bechsteins Vleermuis"
  },
  "category": "bat",
  "zone": "sides",
  "symbols": [
    "bat"
  ],
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
  "attachedCards": {}
},
{
  "id": "barbastelleBat",
  "names": {
    "en": "Barbastelle Bat",
    "nl": "Mopsvleermuis"
  },
  "category": "bat",
  "zone": "sides",
  "symbols": [
    "bat"
  ],
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
  "attachedCards": {}
},
{
  "id": "brownLongEaredBat",
  "names": {
    "en": "Brown Long-Eared Bat",
    "nl": "Bruine Grootoorvleermuis"
  },
  "category": "bat",
  "zone": "sides",
  "symbols": [
    "bat"
  ],
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
  "attachedCards": {}
},
{
  "id": "greaterHorseshoeBat",
  "names": {
    "en": "Greater Horseshoe Bat",
    "nl": "Grote hoefijzerneus"
  },
  "category": "bat",
  "zone": "sides",
  "symbols": [
    "bat"
  ],
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
  "attachedCards": {}
},
{
  "id": "beechMarten",
  "names": {
    "en": "Beech Marten",
    "nl": "Steenmarter"
  },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": [
    "pawedAnimal"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "attachedCards"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "fully occupied trees",
    "nl": "volledig bezette bomen",
    "relation": "oneToMany"
  }
},
{
  "id": "brownBear",
  "names": {
    "en": "Brown Bear",
    "nl": "Bruine beer"
  },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": [
    "pawedAnimal"
  ],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "europeanBadger",
  "names": {
    "en": "European Badger",
    "nl": "Europese das"
  },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": [
    "pawedAnimal"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 2
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "europeanFatDormouse",
  "names": {
    "en": "European Fat Dormouse",
    "nl": "Relmuis"
  },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": [
    "pawedAnimal"
  ],
  "expansion": "base",
  "scoring": [
    {
      "count": {
        "of": "attachedCards"
      },
      "reward": {
        "mode": "perUnit",
        "points": 15
      }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "opposite bat",
    "nl": "tegenover vleermuis"
  }
},
{
  "id": "europeanHare",
  "names": { "en": "European Hare", "nl": "Europese haas" },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "tag", "value": "hare" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": ["hare"],
  "attachedCards": {}
},
{
  "id": "lynx",
  "names": { "en": "Lynx", "nl": "Lynx" },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "tag", "value": "roe" },
      "reward": { "mode": "flat", "points": 10 }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "raccoon",
  "names": { "en": "Raccoon", "nl": "Wasbeer" },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal"],
  "expansion": "base",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "redFox",
  "names": { "en": "Red Fox", "nl": "Rode vos" },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "tag", "value": "hare" },
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "wolf",
  "names": { "en": "Wolf", "nl": "Wolf" },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": ["pawedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "deer" },
      "reward": { "mode": "perUnit", "points": 5, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "fallowDeer",
  "names": { "en": "Fallow Deer", "nl": "Damhert" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["deer", "clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "clovenHoofedAnimal" },
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" }
    }
  ],
  "tags": ["deer"],
  "attachedCards": {}
},
{
  "id": "redDeer",
  "names": { "en": "Red Deer", "nl": "Edelhert" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["deer", "clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "symbol", "value": "tree" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    },
    {
      "count": { "of": "symbol", "value": "plant" },
      "reward": { "mode": "perUnit", "points": 1, "multiply": "self" }
    }
  ],
  "tags": ["deer"],
  "attachedCards": {}
},
{
  "id": "roeDeerBeech",
  "names": { "en": "Roe Deer", "nl": "Ree" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["deer", "clovenHoofedAnimal", "beech"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": ["roe"],
  "attachedCards": { "en": "Beech symbols", "nl": "Beuksymbolen", "symbols": ["beech"], "relation": "oneToMany" }
},
{
  "id": "roeDeerLinden",
  "names": { "en": "Roe Deer", "nl": "Ree" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["deer", "clovenHoofedAnimal", "linden"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": ["roe"],
  "attachedCards": { "en": "Linden symbols", "nl": "Lindesymbolen", "symbols": ["linden"], "relation": "oneToMany" }
},
{
  "id": "roeDeerSilverFir",
  "names": { "en": "Roe Deer", "nl": "Ree" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["deer", "clovenHoofedAnimal", "silverFir"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": ["roe"],
  "attachedCards": { "en": "Silver Fir symbols", "nl": "Zilversparsymbolen", "symbols": ["silverFir"], "relation": "oneToMany" }
},
{
  "id": "roeDeerHorseChestnut",
  "names": { "en": "Roe Deer", "nl": "Ree" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["deer", "clovenHoofedAnimal", "horseChestnut"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": ["roe"],
  "attachedCards": { "en": "Horse Chestnut symbols", "nl": "Paardenkastanjesymbolen", "symbols": ["horseChestnut"], "relation": "oneToMany" }
},
{
  "id": "roeDeerBirch",
  "names": { "en": "Roe Deer", "nl": "Ree" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["deer", "clovenHoofedAnimal", "birch"],
  "expansion": "base",
  "scoring": [
    { 
      "count": { "of": "attachedCards" }, 
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" } 
    }
  ],
  "tags": ["roe"],
  "attachedCards": { "en": "Birch symbols", "nl": "Beuksymbolen", "symbols": ["birch"], "relation": "oneToMany" }
},
{
  "id": "squeeker",
  "names": { "en": "Squeeker", "nl": "Zwijnenbig" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "self" },
      "reward": { "mode": "perUnit", "points": 1 }
    }
  ],
  "tags": ["squeeker"],
  "attachedCards": {}
},
{
  "id": "wildBoar",
  "names": { "en": "Wild Boar", "nl": "Wild Zwijn" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal"],
  "expansion": "base",
  "scoring": [
    {
      "count": { "of": "tag", "value": "squeeker" },
      "reward": { "mode": "flat", "points": 10 }
    }
  ],
  "tags": [],
  "attachedCards": {}
},{
  "id": "europeanLarch",
  "names": {
    "en": "European Larch",
    "nl": "Europese lariks"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "europeanLarch",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 3
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "stonePine",
  "names": {
    "en": "Stone Pine",
    "nl": "Alpenden"
  },
  "category": "tree",
  "zone": "general",
  "symbols": [
    "tree",
    "stonePine",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "alpine"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "commonRaven",
  "names": {
    "en": "Common Raven",
    "nl": "Raaf"
  },
  "category": "bird",
  "zone": "tops",
  "symbols": [
    "bird",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "goldenEagle",
  "names": {
    "en": "Golden Eagle",
    "nl": "Steenarend"
  },
  "category": "bird",
  "zone": "tops",
  "symbols": [
    "bird",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "pawedAnimal"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    },
    {
      "count": {
        "of": "symbol",
        "value": "amphibian"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "beardedVulture",
  "names": {
    "en": "Bearded Vulture",
    "nl": "Lammergier"
  },
  "category": "bird",
  "zone": "tops",
  "symbols": [
    "bird",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "cave"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "phoebusApollo",
  "names": {
    "en": "Phoebus Apollo",
    "nl": "Kleine apollovlinder"
  },
  "zone": "tops",
  "category": "butterfly",
  "symbols": [
    "butterfly",
    "insect",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "butterfly"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          0,
          3,
          6,
          12,
          20,
          35,
          55
        ],
        "repeated": true
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "Blueberry",
  "names": {
    "en": "Blueberry",
    "nl": "Blauwe bosbes"
  },
  "zone": "bottoms",
  "category": "plant",
  "symbols": [
    "plant",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "bird"
      },
      "reward": {
        "mode": "perUnit",
        "points": 2,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "Gentian",
  "names": {
    "en": "Gentian",
    "nl": "Gentiaan"
  },
  "zone": "bottoms",
  "category": "plant",
  "symbols": [
    "plant",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "butterfly"
      },
      "reward": {
        "mode": "perUnit",
        "points": 3,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "Edelweiss",
  "names": {
    "en": "Edelweiss",
    "nl": "Edelweiss"
  },
  "zone": "bottoms",
  "category": "plant",
  "symbols": [
    "plant",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 3
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "blackTrumpet",
  "names": {
    "en": "Black Trumpet",
    "nl": "Hoorn-van-overvloed"
  },
  "zone": "bottoms",
  "category": "mushroom",
  "symbols": [
    "mushroom",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "alpineNewt",
  "names": {
    "en": "Alpine Newt",
    "nl": "Alpenwatersalamander"
  },
  "zone": "bottoms",
  "category": "amphibian",
  "symbols": [
    "amphibian",
    "alpine"
  ],
  "expansion": "alpine",
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
  "attachedCards": {}
},
{
  "id": "capercaillie",
  "names": {
    "en": "Capercaillie",
    "nl": "Auerhoen"
  },
  "zone": "sides",
  "category": "bird",
  "symbols": [
    "bird",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "plant"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "savisPipistrelle",
  "names": {
    "en": "Savi's Pipistrelle",
    "nl": "Savi's dwergvleermuis"
  },
  "category": "bat",
  "zone": "sides",
  "symbols": [
    "bat",
    "alpine"
  ],
  "expansion": "alpine",
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
  "attachedCards": {}
},
{
  "id": "alpineMarmot",
  "names": {
    "en": "Alpine Marmot",
    "nl": "Alpenmarmot"
  },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": [
    "pawedAnimal",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "plant"
      },
      "reward": {
        "mode": "perUnit",
        "points": 3,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "mountainHare",
  "names": {
    "en": "Mountain Hare",
    "nl": "Sneeuwhaas"
  },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": [
    "pawedAnimal",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "tag",
        "value": "hare"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": ["hare"],
  "attachedCards": {}
},
{
  "id": "steinbock",
  "names": {
    "en": "Steinbock",
    "nl": "Alpensteenbok"
  },
  "category": "deer",
  "zone": "sides",
  "symbols": [
    "clovenHoofedAnimal",
    "alpine"
  ],
  "expansion": "alpine",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 10
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "chamoisDouglasFir",
  "names": { "en": "Chamois", "nl": "Gems" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal", "alpine", "douglasFir"],
  "expansion": "alpine",
  "scoring": [
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": { "en": "Douglas Fir symbols", "nl": "Douglassparsymbolen", "symbols": ["douglasFir"], "relation": "oneToMany" }
},
{
  "id": "chamoisEuropeanLarch",
  "names": { "en": "Chamois", "nl": "Gems" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal", "alpine", "europeanLarch"],
  "expansion": "alpine",
  "scoring": [
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": { "en": "European Larch symbols", "nl": "Europese larikssymbolen", "symbols": ["europeanLarch"], "relation": "oneToMany" }
},
{
  "id": "chamoisStonePine",
  "names": { "en": "Chamois", "nl": "Gems" },
  "category": "deer",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal", "alpine", "stonePine"],
  "expansion": "alpine",
  "scoring": [
    {
      "count": { "of": "attachedCards" },
      "reward": { "mode": "perUnit", "points": 3, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": { "en": "Stone Pine symbols", "nl": "Alpendensymbolen", "symbols": ["stonePine"], "relation": "oneToMany" }
},
{
  "id": "blackthorn",
  "names": {
    "en": "Blackthorn",
    "nl": "Sleedoorn"
  },
  "category": "shrub",
  "zone": "general",
  "symbols": [
    "shrub",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "commonHazel",
  "names": {
    "en": "Common Hazel",
    "nl": "Hazelaar"
  },
  "category": "shrub",
  "zone": "general",
  "symbols": [
    "shrub",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "elderberry",
  "names": {
    "en": "Elderberry",
    "nl": "Gewone vlier"
  },
  "category": "shrub",
  "zone": "general",
  "symbols": [
    "shrub",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
}
,
{
  "id": "nightingale",
  "names": {
    "en": "Nightingale",
    "nl": "Nachtegaal"
  },
  "zone": "tops",
  "category": "bird",
  "symbols": [
    "bird",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "attachedCards"
      },
      "reward": {
        "mode": "perUnit",
        "points": 5
      }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "atop a shrub",
    "nl": "bovenop een struik"
  }
},
{
  "id": "barnOwl",
  "names": {
    "en": "Barn Owl",
    "nl": "Kerkuil"
  },
  "zone": "tops",
  "category": "bird",
  "symbols": [
    "bird",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "bat"
      },
      "reward": {
        "mode": "perUnit",
        "points": 3,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "eurasianMagpie",
  "names": {
    "en": "Eurasian Magpie",
    "nl": "Ekster"
  },
  "zone": "tops",
  "category": "bird",
  "symbols": [
    "bird",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "self"
      },
      "reward": {
        "mode": "perUnit",
        "points": 3
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "mapButterfly",
  "names": {
    "en": "Map Butterfly",
    "nl": "Landkaartje"
  },
  "zone": "tops",
  "category": "butterfly",
  "symbols": [
    "butterfly",
    "insect",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "butterfly"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          0,
          3,
          6,
          12,
          20,
          35,
          55
        ],
        "repeated": true
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "digitalis",
  "names": {
    "en": "Digitalis",
    "nl": "Vingerhoedskruid"
  },
  "category": "plant",
  "zone": "bottoms",
  "symbols": [
    "plant",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "distinct",
        "value": "plant"
      },
      "reward": {
        "mode": "lookup",
        "table": [
          1,
          3,
          6,
          10,
          15
        ],
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "stingingNettle",
  "names": {
    "en": "Stinging Nettle",
    "nl": "Grote brandnetel"
  },
  "category": "plant",
  "zone": "bottoms",
  "symbols": [
    "plant",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "bat"
      },
      "reward": {
        "mode": "perUnit",
        "points": 2,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "greatGreenBushCricket",
  "names": {
    "en": "Great Green Bush Cricket",
    "nl": "Grote groene sabelsprinkhaan"
  },
  "category": "insect",
  "zone": "bottoms",
  "symbols": [
    "insect",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "insect"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "waterVole",
  "names": {
    "en": "Water Vole",
    "nl": "Woelrat"
  },
  "category": "pawedAnimal",
  "zone": "bottoms",
  "symbols": [
    "pawedAnimal",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "craneFly",
  "names": {
    "en": "Crane Fly",
    "nl": "Vliegende hooiwagen"
  },
  "category": "insect",
  "zone": "sides",
  "symbols": [
    "insect",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "bat"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "beeSwarm",
  "names": {
    "en": "Bee Swarm",
    "nl": "Zwerm honingbijen"
  },
  "category": "insect",
  "zone": "sides",
  "symbols": [
    "insect",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "plant"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "commonPipistrelle",
  "names": {
    "en": "Common Pipistrelle",
    "nl": "Gewone dwergvleermuis"
  },
  "category": "bat",
  "zone": "sides",
  "symbols": [
    "bat",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
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
  "attachedCards": {}
},
{
  "id": "europeanPolecat",
  "names": {
    "en": "European Polecat",
    "nl": "Bunzing"
  },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": [
    "pawedAnimal",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "attachedCards"
      },
      "reward": {
        "mode": "perUnit",
        "points": 10
      }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "alone at tree or shrub",
    "nl": "als enige bij boom of struik"
  }
},
{
  "id": "europeanWildcat",
  "names": {
    "en": "European Wildcat",
    "nl": "Wilde kat"
  },
  "category": "pawedAnimal",
  "zone": "sides",
  "symbols": [
    "pawedAnimal",
    "woodlandEdge"
  ],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": {
        "of": "symbol",
        "value": "woodlandEdge"
      },
      "reward": {
        "mode": "perUnit",
        "points": 1,
        "multiply": "self"
      }
    }
  ],
  "tags": [],
  "attachedCards": {}
}
];

