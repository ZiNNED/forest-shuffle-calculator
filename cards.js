// Forest Shuffle Calculator - Card definitions
// Scoring rule format:
//   count: { of: "self" | "symbol", value: X | "attachedCards" | "distinct", value: X | "condition", value: X }
//   reward: { mode: "flat", points: X } | { mode: "perUnit", points: X } | { mode: "lookup", table: [...] }

const CARDS = [
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
        "points": 2
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
        "points": 3
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
        "points": 6
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
        "points": 2
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
  "symbols": [
    "insect"
  ],
  "expansion": "base",
  "scoring": [],
  "effect": {
    "type": "boostTree"
  },
  "tags": [],
  "attachedCards": [
    {
      "en": "at a Birch",
      "nl": "aan een berk",
      "target": "birch"
    },
    {
      "en": "at a Beech",
      "nl": "aan een beuk",
      "target": "beech"
    },
    {
      "en": "at a Douglas Fir",
      "nl": "aan een douglasspar",
      "target": "douglasFir"
    },
    {
      "en": "at an Oak",
      "nl": "aan een eik",
      "target": "oak"
    },
    {
      "en": "at a Linden",
      "nl": "aan een linde",
      "target": "linden"
    },
    {
      "en": "at a Horse Chestnut",
      "nl": "aan een paardenkastanje",
      "target": "horseChestnut"
    },
    {
      "en": "at a Silver Fir",
      "nl": "aan een zilverspar",
      "target": "silverFir"
    },
    {
      "en": "at a Sycamore",
      "nl": "aan een esdoorn",
      "target": "sycamore"
    },
    {
      "en": "at a Tree Sapling",
      "nl": "aan een jong boompje",
      "target": "sapling"
    }
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
        "points": 5
      },
      "multiply": "self"
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
}
];
