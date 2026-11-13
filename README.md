# 🌲 Forest Shuffle Calculator

An interactive scoring calculator for the award-winning board game [Forest Shuffle](https://boardgamegeek.com/boardgame/391163/forest-shuffle), [Forest Shuffle: Dartmoor](https://boardgamegeek.com/boardgame/438402/forest-shuffle-dartmoor) and its expansions. Track scores, attached cards, and player totals — all from your browser.

🌐 **[forest.boardbuddy.games](https://forest.boardbuddy.games)**

## Features

- **Real-time Scoring** — Add cards to your forest and see your score update instantly
- **Two Games** — Supports both base Forest Shuffle and Forest Shuffle: Dartmoor, plus expansions
- **Multi-player** — Track scores for up to 6 players
- **Expansion Toggles** — Turn expansions on/off per game
- **Multilingual** — Supports English, Dutch (Nederlands) and Polish (Polski)
- **Mobile Friendly** — Works on phones and tablets
- **Installable PWA** — Add it to your home screen for an app-like experience
- **Works Offline** — Service worker caching lets you use it without an internet connection
- **Open Data** — All card scoring rules are in `cards-forest.js` and `cards-dartmoor.js` — easy to verify, extend, or port

## Supported Games and expansions

| Game | Type | Status |
|---|---|---|
| Forest Shuffle | base | ✅ Supported |
| Alpine | expansion | ✅ Supported |
| Woodland Edge | expansion | ✅ Supported |
| Exploration | expansion | ❌ Unsupported |
| Promo cards | expansion | ❌ Unsupported |
|---|---|---|
| Forest Shuffle: Dartmoor | base | ✅ Supported |
| Exmoor | expansion | ✅ Supported |
| Promo cards | expansion | ❌ Unsupported |

## How to Use

1. Open the app in your browser
2. Select a game (Forest Shuffle / Forest Shuffle: Dartmoor)
3. Select any expansions to use
4. Add players
5. Click card icons to add them to your forest
6. Toggle attached cards where applicable
7. Score updates automatically

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
├── i18n/               — Translations, one file per language (en.js, nl.js)
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
- **Attached card relationships** (number of symbols, fulfilled conditions)
- **Symbol bonuses** for species-specific counts

See `cards-forest.js` and `cards-dartmoor.js` for the complete card data. Card names and
attached-card labels are not part of the card data; they live in `i18n/<lang>.js`, keyed by card id.

## Translations

All user-facing text lives in `i18n/<lang>.js` — UI strings, category labels, card names and
attached-card labels. Each file registers itself on `window.I18N`; the language buttons in the
settings panel are generated from the registered languages. Missing keys fall back to English.

Card names and attached-card labels are grouped per game into Cave, Trees, Shrubs, Moors and
"Animals, mushrooms, plants" (cards played onto trees, shrubs and moors), sorted alphabetically
by key (case-insensitive) within each group. Keep the same order in every language file.

To add a language:

1. Copy `i18n/en.js` to `i18n/<code>.js` (e.g. `i18n/pl.js`), change `I18N.en` to `I18N.<code>`,
   set `name` and `flag`, and translate every value (keep the keys).
2. Add `<script src="i18n/<code>.js?v=…"></script>` to `index.html`, before `app.js`.
3. Add `/i18n/<code>.js?v=…` to `PRECACHE_URLS` in `sw.js` and bump the version.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to submit changes.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

## Credits

Inspired by [ForestShuffle.app](https://forestshuffle.app).
