// Forest Shuffle Calculator - Card definitions
// Display names and attached-card labels live in i18n/<lang>.js (keyed by card id).
// Scoring rule format:
//   count: { of: "self" | "symbol", value: X | "attachedCards" | "distinct", value: X | "condition", value: X }
//   reward: { mode: "flat", points: X } | { mode: "perUnit", points: X } | { mode: "lookup", table: [...] }

const CARDS_FOREST = [
{
  "id": "cave",
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
    "relation": "oneToMany"
  }
},
{
  "id": "sycamore",
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
    "relation": "oneToOne"
  }
},
{
  "id": "eurasianJay",
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
    "relation": "oneToOne"
  }
},
{
  "id": "treeFerns",
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
    "relation": "oneToOne"
  }
},
{
  "id": "pondTurtle",
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
  "category": "insect",
  "zone": "sides",
  "symbols": ["insect"],
  "expansion": "base",
  "scoring": [],
  "effect": { "type": "boostTree" },
  "tags": [],
  "attachedCards": [
    { "target": "birch", "symbols": ["birch"] },
    { "target": "beech", "symbols": ["beech"] },
    { "target": "douglasFir", "symbols": ["douglasFir"] },
    { "target": "oak", "symbols": ["oak"] },
    { "target": "linden", "symbols": ["linden"] },
    { "target": "horseChestnut", "symbols": ["horseChestnut"] },
    { "target": "silverFir", "symbols": ["silverFir"] },
    { "target": "sycamore", "symbols": ["sycamore"] },
    { "target": "sapling", "symbols": ["sapling"] },
    { "target": "europeanLarch", "symbols": ["europeanLarch", "alpine"], "expansion": "alpine" },
    { "target": "stonePine", "symbols": ["stonePine", "alpine"], "expansion": "alpine" }
  ]
},
{
  "id": "gnat",
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
    "relation": "oneToMany"
  }
},
{
  "id": "brownBear",
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
    "relation": "oneToOne"
  }
},
{
  "id": "europeanHare",
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
  "attachedCards": { "symbols": ["beech"], "relation": "oneToMany" }
},
{
  "id": "roeDeerLinden",
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
  "attachedCards": { "symbols": ["linden"], "relation": "oneToMany" }
},
{
  "id": "roeDeerSilverFir",
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
  "attachedCards": { "symbols": ["silverFir"], "relation": "oneToMany" }
},
{
  "id": "roeDeerHorseChestnut",
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
  "attachedCards": { "symbols": ["horseChestnut"], "relation": "oneToMany" }
},
{
  "id": "roeDeerBirch",
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
  "attachedCards": { "symbols": ["birch"], "relation": "oneToMany" }
},
{
  "id": "squeeker",
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
  "attachedCards": { "symbols": ["douglasFir"], "relation": "oneToMany" }
},
{
  "id": "chamoisEuropeanLarch",
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
  "attachedCards": { "symbols": ["europeanLarch"], "relation": "oneToMany" }
},
{
  "id": "chamoisStonePine",
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
  "attachedCards": { "symbols": ["stonePine"], "relation": "oneToMany" }
},
{
  "id": "blackthorn",
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
    "relation": "oneToOne"
  }
},
{
  "id": "barnOwl",
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
  "id": "greatGreenBushCricket",
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
    "relation": "oneToOne"
  }
},
{
  "id": "europeanWildcat",
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
},
{
  "id": "wildBoarFemale",
  "category": "deer",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal", "woodlandEdge"],
  "expansion": "woodlandEdge",
  "scoring": [
    {
      "count": { "of": "tag", "value": "squeeker" },
      "reward": { "mode": "perUnit", "points": 10, "multiply": "self" }
    }
  ],
  "tags": [],
  "attachedCards": {}
},
{
  "id": "squeekerWoodlandEdge",
  "category": "deer",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal","woodlandEdge"],
  "expansion": "woodlandEdge",
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
  "id": "europeanBison",
  "category": "deer",
  "zone": "sides",
  "symbols": ["clovenHoofedAnimal", "woodlandEdge"],
  "expansion": "woodlandEdge",
  "scoring": [
    { 
      "count": { "of": "attachedCards", "target": "beech" }, 
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" } 
    },
    { 
      "count": { "of": "attachedCards", "target": "oak" }, 
      "reward": { "mode": "perUnit", "points": 2, "multiply": "self" } 
    }
  ],
  "tags": [],
  "attachedCards": [
    { "target": "beech", "symbols": ["beech"], "relation": "oneToMany" },
    { "target": "oak", "symbols": ["oak"], "relation": "oneToMany" }
  ]
}
];

