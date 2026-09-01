# 🌲 Forest Shuffle Calculator

An interactive scoring calculator for the award-winning board game [Forest Shuffle](https://boardgamegeek.com/boardgame/391163/forest-shuffle), [Forest Shuffle: Dartmoor](https://boardgamegeek.com/boardgame/438402/forest-shuffle-dartmoor) and its expansions. Track scores, attached cards, and player totals — all from your browser.

🌐 **[forest.boardbuddy.games](https://forest.boardbuddy.games)**

## Features

- **Real-time Scoring** — Add cards to your forest and see your score update instantly
- **Three Games** — Supports base Forest Shuffle, Dartmoor, and Exmoor expansions
- **Attached Cards** — Toggle attached tokens (cave bonus, bird eggs, tree hollow dwellers, etc.)
- **Multi-player** — Track scores for up to 6 players
- **Expansion Toggles** — Turn expansions on/off per game
- **Bilingual** — Supports English and Dutch (Nederlands)
- **Mobile Friendly** — Works on phones and tablets
- **Installable PWA** — Add it to your home screen for an app-like experience
- **Works Offline** — Service worker caching lets you use it without an internet connection
- **Open Data** — All card scoring rules are in `cards-forest.js` and `cards-dartmoor.js` — easy to verify, extend, or port

## Supported Expansions

| Game | Cards | Status |
|---|---|---|
| Forest Shuffle (base) | 101 | ✅ Complete |
| Dartmoor | 96 | ✅ Complete |
| Exmoor | 16 | ✅ Supported |

## How to Use

1. Open the app in your browser
2. Select a game (Forest / Dartmoor)
3. Add players
4. Click card icons to add them to your forest
5. Toggle attached cards where applicable
6. Score updates automatically

## Development

This is a static web app with no build step required. To run it locally:

```bash
# Clone the repo
git clone https://github.com/ZiNNED/forest-shuffle-calculator.git
cd forest-shuffle-calculator

# Serve with any static file server
python3 -m http.server 8000
# or
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Project Structure

```
├── index.html          — Main entry point
├── app.js              — Scoring engine and UI logic
├── cards-forest.js     — Base game card definitions (101 cards)
├── cards-dartmoor.js   — Dartmoor/Exmoor card definitions (112 cards)
├── style.css           — Styles
├── sw.js               — Service worker for offline PWA support
├── manifest.json       — PWA manifest
└── assets/             — Icons and images
```

## Card Data

Card definitions are data-driven JSON objects. Each card specifies:

- **Category** (bird, tree, plant, mushroom, etc.)
- **Zone** (top, bottom, side, general, cave)
- **Scoring rules** using a flexible engine (lookup tables, per-unit, thresholds, conditional bonuses)
- **Attached card relationships** (eggs on birds, tree hollow dwellers, cave bonuses)
- **Symbol bonuses** for species-specific counts

See `cards-forest.js` and `cards-dartmoor.js` for the complete card data.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to submit changes.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

## Credits

Inspired by [ForestShuffle.app](https://forestshuffle.app).
