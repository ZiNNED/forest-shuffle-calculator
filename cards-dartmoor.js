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
            "mode": "flat",
            "points": 5
        }
    }
  ],
  "tags": [],
  "attachedCards": {
    "en": "5 points at end of game",
    "nl": "5 punten aan het einde van het spel"
  }
}
];