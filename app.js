// ============================================
// Forest Calculator - Data-driven scoring app
// ============================================

// ===== Localization (i18n) =====
// Add a new language by adding a block with ALL keys below.
let LANG = localStorage.getItem('forestLang') || 'en';

const L10N = {
    en: {
        menu: 'Menu',
        game: 'Game',
        players: 'Players',
        addPlayer: 'Add Player',
        newGame: 'New Game',
        language: 'Language',
        expansions: 'Expansions',
        leaderboard: 'Leaderboard',
        soon: 'Soon',
        treePoints: 'General Points',
        topPoints: 'Top Points',
        bottomPoints: 'Bottom Points',
        sidePoints: 'Side Points',
        total: 'Total',
        confirmNewGame: 'Start a new game? This will reset all scores.',
        player: 'Player',
        attachedCards: 'attached cards',
        tops: 'Tops',
        sides: 'Sides',
        general: 'General',
        categories: {
            cave: 'CAVE',
            tree: 'TREES',
            shrub: 'SHRUBS',
            bird: 'BIRDS',
            butterfly: 'BUTTERFLIES',
            pawedAnimal: 'PAWED ANIMALS',
            plant: 'PLANTS',
            mushroom: 'MUSHROOMS',
            insect: 'INSECTS',
            amphibian: 'AMPHIBIANS',
            bat: 'BATS',
            deer: 'DEER & CLOVEN-HOOFED',
            moor: 'MOORS',
        },
    },
    nl: {
        menu: 'Menu',
        game: 'Spel',
        players: 'Spelers',
        addPlayer: 'Speler toevoegen',
        newGame: 'Nieuw spel',
        language: 'Taal',
        expansions: 'Uitbreidingen',
        leaderboard: 'Scorebord',
        soon: 'Binnenkort',
        treePoints: 'Generieke punten',
        topPoints: 'Bovenpunten',
        bottomPoints: 'Onderpunten',
        sidePoints: 'Zijpunten',
        total: 'Totaal',
        confirmNewGame: 'Nieuw spel starten? Dit reset alle scores.',
        player: 'Speler',
        attachedCards: 'aangelegde kaarten',
        tops: 'Bovenkanten',
        bottoms: 'Onderkanten',
        sides: 'Zijkanten',
        general: 'Generiek',
        categories: {
            cave: 'GROT',
            tree: 'BOMEN',
            shrub: 'STRUIKEN',
            bird: 'VOGELS',
            butterfly: 'VLINDERS',
            pawedAnimal: 'POOTDIEREN',
            plant: 'PLANTEN',
            moor: 'HEIDES',
            mushroom: 'PADDENSTOELEN',
            insect: 'INSECTEN',
            amphibian: 'AMFIBIEËN',
            bat: 'VLEERMUIZEN',
            deer: 'HERTEN & EENHOEVIGE DIEREN',
        },
    },
};

function t(key) {
    const lang = L10N[LANG];
    if (lang && lang[key] !== undefined) return lang[key];
    const fallback = L10N['en'];
    return (fallback && fallback[key] !== undefined) ? fallback[key] : key;
}

function catLabel(cat) {
    const lang = L10N[LANG];
    if (lang && lang.categories && lang.categories[cat] !== undefined) return lang.categories[cat];
    const fallback = L10N['en'];
    if (fallback && fallback.categories && fallback.categories[cat] !== undefined) return fallback.categories[cat];
    return cat.toUpperCase();
}

// ===== Player name helpers =====
function defaultPlayerName(idx) {
    return t('player') + ' ' + (idx + 1);
}

// Player colors
const PLAYER_COLORS = ['#274e37', '#547AA5', '#EC9A29', '#A8201A', '#9eb9a6'];

// ===== State =====
let state = {
    currentPlayer: 0,
    players: [{ name: defaultPlayerName(0), cards: {}, attached: {} }],
    game: 'forest',
    expansions: { alpine: false, woodlandEdge: false, exmoor: false },
};

// Clean up any old persisted state
try { localStorage.removeItem('forestState'); } catch (e) { /* ignore */ }

// ===== Zone definitions =====
let currentCards = CARDS_FOREST;
const ZONES = [
    { id: 'general', color: 'var(--green)', categories: ['cave', 'tree', 'shrub', 'moor'] },
    { id: 'tops', color: '#547AA5', categories: ['bird', 'butterfly', 'pawedAnimal'] },
    { id: 'bottoms', color: '#A8201A', categories: ['plant', 'mushroom', 'amphibian', 'insect', 'pawedAnimal'] },
    { id: 'sides', color: '#EC9A29', categories: ['bird', 'insect', 'bat', 'pawedAnimal', 'deer'] }
];

// ===== Category Colors =====
const CATEGORY_COLORS = {
    tree: { bg: '#c2c82a', border: '#a8ae1e' },
    bird: { bg: '#639ac3', border: '#4d7da0' },
    butterfly: { bg: '#7f2a87', border: '#65206b' },
    pawedAnimal: { bg: '#82412f', border: '#683425' },
    plant: { bg: '#758e4d', border: '#5d723e' },
    mushroom: { bg: '#783e32', border: '#5f3127' },
    amphibian: { bg: '#ad9895', border: '#8b7a78' },
    insect: { bg: '#608780', border: '#4d6c66' },
    bat: { bg: '#1f1b18', border: '#151210' },
    deer: { bg: '#cbac40', border: '#a38c33' },
    clovenHoofedAnimal: { bg: '#7e5541', border: '#654435' },
    cave: { bg: '#4a4a4a', border: '#3a3a3a' },
    shrub: { bg: '#5d8a4f', border: '#4a7040' },
    moor: { bg: '#8b6f47', border: '#6f5938' }
};

// ===== Scoring Engine =====
// Count unique tree species owned by a player
function countUniqueTreeSpecies(player) {
    const species = new Set();
    currentCards.forEach(card => {
        const cExp = card.expansion || 'base';
        if (cExp !== 'base' && !state.expansions[cExp]) return;
        if (card.zone === 'general' && player.cards[card.id] > 0) {
            species.add(card.id);
        }
    });
    return species.size;
}

// Get effective count for a card (cards owned + boosts from boostTree effects)
function getEffectiveCount(cardId, playerIdx) {
    const p = state.players[playerIdx];
    const base = p.cards[cardId] || 0;
    let boost = 0;
    currentCards.forEach(card => {
        const cExp = card.expansion || 'base';
        if (cExp !== 'base' && !state.expansions[cExp]) return;
        if (card.effect && card.effect.type === 'boostTree') {
            const att = p.attached && p.attached[card.id];
            if (att && typeof att === 'object') {
                boost += att[cardId] || 0;
            }
        }
    });
    return base + boost;
}

// Check if player has the most of a given card type (ties are "most")
function hasMostOfType(cardId, playerIdx) {
    const myCount = getEffectiveCount(cardId, playerIdx);
    for (let i = 0; i < state.players.length; i++) {
        if (i === playerIdx) continue;
        if (getEffectiveCount(cardId, i) > myCount) return false;
    }
    return true;
}

// Check if player has the most cards in a given category (ties are "most")
function hasMostOfCategory(category, playerIdx) {
    function countCategory(idx) {
        let total = 0;
        currentCards.forEach(c => {
            const cExp = c.expansion || 'base';
            if (cExp !== 'base' && !state.expansions[cExp]) return;
            if (c.category === category) {
                total += state.players[idx].cards[c.id] || 0;
            }
        });
        return total;
    }
    const myCount = countCategory(playerIdx);
    for (let i = 0; i < state.players.length; i++) {
        if (i === playerIdx) continue;
        if (countCategory(i) > myCount) return false;
    }
    return true;
}

// Check if player has strictly the most trees (no ties allowed)
function hasMostTreesNoTies(playerIdx) {
    let myTrees = 0;
    currentCards.forEach(c => {
        const cExp = c.expansion || 'base';
        if (cExp !== 'base' && !state.expansions[cExp]) return;
        if (c.zone === 'general') {
            myTrees += getEffectiveCount(c.id, playerIdx);
        }
    });
    for (let i = 0; i < state.players.length; i++) {
        if (i === playerIdx) continue;
        let theirTrees = 0;
        currentCards.forEach(c => {
            const cExp = c.expansion || 'base';
            if (cExp !== 'base' && !state.expansions[cExp]) return;
            if (c.zone === 'general') {
                theirTrees += getEffectiveCount(c.id, i);
            }
        });
        if (theirTrees >= myTrees) return false;
    }
    return true;
}

// Get boost count for a tree card from all boostTree effect cards
function getBoostForTree(treeId) {
    const p = state.players[state.currentPlayer];
    let boost = 0;
    currentCards.forEach(card => {
        const cExp = card.expansion || 'base';
        if (cExp !== 'base' && !state.expansions[cExp]) return;
        if (card.effect && card.effect.type === 'boostTree') {
            const att = p.attached && p.attached[card.id];
            if (att && typeof att === 'object') {
                boost += att[treeId] || 0;
            }
        }
    });
    return boost;
}

// Get total attached count across all targets for an array-based attachedCards card
function getTotalAttachedCount(cardId, targetId) {
    const p = state.players[state.currentPlayer];
    if (!p.attached || !p.attached[cardId]) return 0;
    const att = p.attached[cardId];
    if (typeof att === 'number') return att;
    if (targetId) return att[targetId] || 0;
    return Object.values(att).reduce((sum, v) => sum + v, 0);
}

// ===== Scoring Engine =====

function computeCardTotal(cardId) {
    const card = currentCards.find(c => c.id === cardId);
    if (!card) return 0;
    const p = state.players[state.currentPlayer];
    const selfCount = p.cards[cardId] || 0;
    if (selfCount === 0) return 0;
    // Boost from boostTree effect cards (e.g. Violet Carpenter Bee)
    const boost = getBoostForTree(cardId);
    const effectiveSelf = selfCount + boost;
    let total = 0;

    for (const rule of card.scoring) {
        const c = rule.count;
        const r = rule.reward;

        // ---- Step 1: Compute the count ----
        let count = 0;
        const countOf = c && c.of;
        const countValue = c && c.value;

        if (countOf === 'self') {
            count = effectiveSelf;
        } else if (countOf === 'symbol') {
            const useBoost = r.mode === 'threshold';
            currentCards.forEach(card => {
                const cExp = card.expansion || 'base';
                if (cExp !== 'base' && !state.expansions[cExp]) return;
                if (card.symbols.includes(countValue)) {
                    count += useBoost ? getEffectiveCount(card.id, state.currentPlayer) : (p.cards[card.id] || 0);
                }
            });
        } else if (countOf === 'distinct') {
            const species = new Set();
            currentCards.forEach(card => {
                const cExp = card.expansion || 'base';
                if (cExp !== 'base' && !state.expansions[cExp]) return;
                if (card.symbols.includes(countValue) && (p.cards[card.id] || 0) > 0) {
                    species.add(card.id);
                }
            });
            count = species.size;
        } else if (countOf === 'attachedCards') {
            count = getTotalAttachedCount(cardId, c.target);
        } else if (countOf === 'condition') {
            if (countValue === 'mostTreesNoTies') {
                count = hasMostTreesNoTies(state.currentPlayer) ? 1 : 0;
            }
        } else if (countOf === 'tag') {
            // Count cards owned that have the specified tag in tags[]
            currentCards.forEach(c => {
                const cExp = c.expansion || 'base';
                if (cExp !== 'base' && !state.expansions[cExp]) return;
                if (c.tags && c.tags.includes(countValue)) {
                    count += p.cards[c.id] || 0;
                }
            });
        } else if (countOf === 'zone') {
            // Count all cards owned in the specified zone
            currentCards.forEach(c => {
                const cExp = c.expansion || 'base';
                if (cExp !== 'base' && !state.expansions[cExp]) return;
                if (c.zone === countValue) {
                    count += p.cards[c.id] || 0;
                }
            });
        }

        // ---- Step 2: Apply 'when' modifier ----
        if (c && c.when === 'mostOfType') {
            if (!hasMostOfType(cardId, state.currentPlayer)) {
                count = 0;
            }
        }
        if (c && c.when === 'mostOfCategory') {
            const targetCat = c.value || card.category;
            if (!hasMostOfCategory(targetCat, state.currentPlayer)) {
                count = 0;
            }
        }

        // If a when-condition nullified the count, skip this rule entirely
        if (count === 0) continue;

        // ---- Step 3: Compute points from count ----
        let points = 0;

        if (r.mode === 'flat') {
            if (count > 0) points = r.points * selfCount;
        } else if (r.mode === 'flatTotal') {
            if (count > 0) points = r.points;
        } else if (r.mode === 'perUnit') {
            // For self-count rules, use actual selfCount (exclude boost)
            const ptsCount = (countOf === 'self') ? selfCount : count;
            points = r.points * ptsCount;
        } else if (r.mode === 'threshold') {
            if (count >= r.minimum) {
                points = r.points * selfCount;
            }
        } else if (r.mode === 'lookup') {
            if (count > 0) {
                if (r.repeated && countOf === 'distinct') {
                    // Multi-set repeated — read from precomputed categoryTotals
                    const ts = categoryTotals && categoryTotals[countValue];
                    if (ts !== undefined) points = ts;
                } else if (r.repeated && countOf === 'self') {
                    // Repeated set: group into sets of table.length, score each set by its size
                    let remaining = count;
                    let setTotal = 0;
                    while (remaining > 0) {
                        const setSize = Math.min(r.table.length, remaining);
                        setTotal += r.table[setSize - 1];
                        remaining -= setSize;
                    }
                    points = setTotal;
                } else {
                    const idx = Math.min(count - 1, r.table.length - 1);
                    points = r.table[idx];
                }
            }
        } else if (r.mode === 'multiply') {
            if (count > 0 && selfCount > 0) {
                // Multiply: adds (by - 1) × per-instance base points per attached copy
                // This correctly handles partial attachment (e.g. 2 owls, 1 in heath)
                const perInstance = total / selfCount;
                points = perInstance * (r.by - 1) * count;
            }
        }

        // ---- Step 4: Apply self multiplier ----
        if (r.multiply === 'self' && r.mode !== 'multiply') {
            points *= selfCount;
        }

        total += points;
    }
    return total;
}

// ===== Build sections from catalog =====
function buildCardSections() {
    const container = document.getElementById('cardSections');
    container.innerHTML = '';

    // Group cards by zone, filtering by expansion
    const byZone = {};
    currentCards.forEach(card => {
        const exp = card.expansion || 'base';
        if (exp !== 'base' && !state.expansions[exp]) return;
        if (!byZone[card.zone]) byZone[card.zone] = [];
        byZone[card.zone].push(card);
    });

    // Group cards by category for sorting
    function byCategory(cards) {
        const groups = {};
        cards.forEach(c => {
            if (!groups[c.category]) groups[c.category] = [];
            groups[c.category].push(c);
        });
        return groups;
    }

    // Sort cards by current language name
    function sortCards(cards) {
        return cards.slice().sort((a, b) => {
            const nA = (a.names[LANG] || a.names.en || a.id).toLowerCase();
            const nB = (b.names[LANG] || b.names.en || b.id).toLowerCase();
            return nA.localeCompare(nB);
        });
    }

    // Render a category <details> with cards inside
    function buildCategoryDetails(cat, cards, zoneId) {
        const details = document.createElement('details');
        details.className = 'cat-details';

        const summary = document.createElement('summary');
        summary.className = 'cat-summary';

        const img = document.createElement('img');
        img.className = 'symbol-icon';
        img.src = 'assets/symbols/' + cat + '.png';
        img.alt = cat;
        summary.appendChild(img);
        if (cat === 'deer') {
            const img2 = document.createElement('img');
            img2.className = 'symbol-icon';
            img2.src = 'assets/symbols/clovenHoofedAnimal.png';
            img2.alt = 'clovenHoofedAnimal';
            summary.appendChild(img2);
        }

        const span = document.createElement('span');
        span.textContent = catLabel(cat);
        summary.appendChild(span);

        // Category-level score display
        const catScore = document.createElement('span');
        catScore.className = 'cat-score';
        catScore.id = 'catScore-' + zoneId + '-' + cat;
        catScore.textContent = '0';
        summary.appendChild(catScore);

        details.appendChild(summary);

        const cardContainer = document.createElement('div');
        cardContainer.id = cat + 'Cards';
        sortCards(cards).forEach(crd => renderCardRow(cardContainer, crd));
        details.appendChild(cardContainer);

        details.setAttribute('open', '');
        return details;
    }

    // Render a zone <details>
    function buildZone(zone, cards) {
        const details = document.createElement('details');
        details.className = 'zone-details';

        const summary = document.createElement('summary');
        summary.className = 'zone-summary';

        // Zone icon: empty colored square
        const icon = document.createElement('span');
        icon.className = 'zone-icon';
        icon.style.background = zone.color;
        summary.appendChild(icon);

        const label = document.createElement('span');
        label.textContent = t(zone.id);
        summary.appendChild(label);
        details.appendChild(summary);

        // All zones use category details nesting
        const catGroups = byCategory(cards);
        (zone.categories || []).forEach(cat => {
            const catCards = catGroups[cat] || [];
            if (catCards.length === 0) return;
            details.appendChild(buildCategoryDetails(cat, catCards, zone.id));
        });

        details.setAttribute('open', '');
        return details;
    }

    // Build all zones in ZONES order
    ZONES.forEach(zone => {
        const cards = byZone[zone.id] || [];
        container.appendChild(buildZone(zone, cards));
    });
}

// ===== Render a single card row =====
function renderCardRow(container, card) {
    const row = document.createElement('div');
    row.className = 'card-row';
    row.dataset.cardKey = card.id;
    // Set category colors as CSS vars
    let catKey = card.category;
    if (card.id === 'squeeker' || card.id === 'wildBoar' || card.id === 'steinbock' || card.id === 'chamoisDouglasFir' || card.id === 'chamoisEuropeanLarch' || card.id === 'chamoisStonePine' || card.id === 'wildBoarFemale' || card.id === 'squeekerWoodlandEdge' || card.id === 'europeanBison') catKey = 'clovenHoofedAnimal';
    const cc = CATEGORY_COLORS[catKey];
    if (cc) {
        row.style.setProperty('--cat-bg', cc.bg);
        row.style.setProperty('--cat-border', cc.border);
    }

    // Count display
    const count = document.createElement('span');
    count.className = 'card-count';
    count.textContent = '0×';
    count.id = 'count-' + card.id;
    row.appendChild(count);

    // Card button
    const btn = document.createElement('button');
    btn.className = 'card-btn';

    // Symbols (each symbol gets an icon)
    card.symbols.forEach((sym, idx) => {
        const icon = document.createElement('img');
        icon.className = 'symbol-img';
        if (idx > 0) icon.style.marginLeft = '2px';
        icon.src = 'assets/symbols/' + sym + '.png';
        icon.alt = sym;
        icon.onerror = function() { this.style.display = 'none'; };
        btn.appendChild(icon);
    });

    // Name
    const name = document.createElement('span');
    name.className = 'card-name';
    name.textContent = card.names[LANG] || card.names.en || card.id;
    btn.appendChild(name);

    btn.onclick = function() { addCard(card.id); };
    row.appendChild(btn);

    // Remove button
    const remove = document.createElement('button');
    remove.className = 'card-remove';
    remove.textContent = '×';
    remove.onclick = function(e) {
        e.stopPropagation();
        removeCard(card.id);
    };
    row.appendChild(remove);

    // Points display
    const pts = document.createElement('span');
    pts.className = 'card-points';
    pts.textContent = '0';
    pts.id = 'pts-' + card.id;
    row.appendChild(pts);

    container.appendChild(row);

    // === Attached sub-rows ===
    if (card.attachedCards && Object.keys(card.attachedCards).length > 0) {
        if (Array.isArray(card.attachedCards)) {
            // Array-based: one button per target (e.g. Violet Carpenter Bee)
            // Sort by the current language's display name
            const sorted = [...card.attachedCards].sort((a, b) => {
                const nameA = a[LANG] || a.en || a.target;
                const nameB = b[LANG] || b.en || b.target;
                return nameA.localeCompare(nameB, LANG);
            });
            sorted.forEach(entry => {
                // Skip attachment entries that belong to a disabled expansion
                const aExp = entry.expansion || 'base';
                if (aExp !== 'base' && !state.expansions[aExp]) return;
                const aRow = document.createElement('div');
                aRow.className = 'attached-row';
                aRow.dataset.cardKey = card.id + '-attached-' + entry.target;

                const spacer = document.createElement('span');
                spacer.className = 'attached-spacer';
                aRow.appendChild(spacer);

                const aCount = document.createElement('span');
                aCount.className = 'card-count';
                aCount.textContent = '0×';
                aCount.id = 'attached-count-' + card.id + '-' + entry.target;
                aRow.appendChild(aCount);

                const aBtn = document.createElement('button');
                aBtn.className = 'card-btn attached-btn';
                // Symbols from entry
                if (entry.symbols && entry.symbols.length) {
                    entry.symbols.forEach((sym, idx) => {
                        const icon = document.createElement('img');
                        icon.className = 'symbol-img';
                        if (idx > 0) icon.style.marginLeft = '2px';
                        icon.src = 'assets/symbols/' + sym + '.png';
                        icon.alt = sym;
                        icon.onerror = function() { this.style.display = 'none'; };
                        aBtn.appendChild(icon);
                    });
                }
                const aName = document.createElement('span');
                aName.className = 'card-name';
                aName.textContent = entry[LANG] || entry.en || entry.target;
                aBtn.appendChild(aName);
                const target = entry.target;
                aBtn.onclick = function() { addAttachedCard(card.id, target); };
                aRow.appendChild(aBtn);

                const aRemove = document.createElement('button');
                aRemove.className = 'card-remove';
                aRemove.textContent = '×';
                aRemove.onclick = function(e) {
                    e.stopPropagation();
                    removeAttachedCard(card.id, target);
                };
                aRow.appendChild(aRemove);

                const aPts = document.createElement('span');
                aPts.className = 'card-points';
                aPts.textContent = '';
                aRow.appendChild(aPts);

                container.appendChild(aRow);
            });
        } else {
            // Simple (object-form) attachedCards: single button
            const aRow = document.createElement('div');
            aRow.className = 'attached-row';
            aRow.dataset.cardKey = card.id + '-attached';

            const spacer = document.createElement('span');
            spacer.className = 'attached-spacer';
            aRow.appendChild(spacer);

            const aCount = document.createElement('span');
            aCount.className = 'card-count';
            aCount.textContent = '0×';
            aCount.id = 'attached-count-' + card.id;
            aRow.appendChild(aCount);

            const aBtn = document.createElement('button');
            aBtn.className = 'card-btn attached-btn';
            // Symbols from attachedCards
            if (card.attachedCards.symbols && card.attachedCards.symbols.length) {
                card.attachedCards.symbols.forEach((sym, idx) => {
                    const icon = document.createElement('img');
                    icon.className = 'symbol-img';
                    if (idx > 0) icon.style.marginLeft = '2px';
                    icon.src = 'assets/symbols/' + sym + '.png';
                    icon.alt = sym;
                    icon.onerror = function() { this.style.display = 'none'; };
                    aBtn.appendChild(icon);
                });
            }
            const aName = document.createElement('span');
            aName.className = 'card-name';
            if (card.attachedCards[LANG]) {
                aName.textContent = card.attachedCards[LANG];
            } else if (card.attachedCards.en) {
                aName.textContent = card.attachedCards.en;
            } else {
                aName.textContent = t('attachedCards');
            }
            aBtn.appendChild(aName);
            aBtn.onclick = function() { addAttachedCard(card.id); };
            aRow.appendChild(aBtn);

            const aRemove = document.createElement('button');
            aRemove.className = 'card-remove';
            aRemove.textContent = '×';
            aRemove.onclick = function(e) {
                e.stopPropagation();
                removeAttachedCard(card.id);
            };
            aRow.appendChild(aRemove);

            const aPts = document.createElement('span');
            aPts.className = 'card-points';
            aPts.textContent = '';
            aRow.appendChild(aPts);

            container.appendChild(aRow);
        }
    }
}

// ===== Score update =====
function updateAllScores() {
    // Clamp attached counts: can never exceed the parent card count
    const p = state.players[state.currentPlayer];
    if (p.attached) {
        Object.keys(p.attached).forEach(cardId => {
            const card = currentCards.find(c => c.id === cardId);
            // oneToMany cards (Silver Fir, European Bison) have no cap
            if (card && card.attachedCards) {
                const isOneToMany = Array.isArray(card.attachedCards)
                    ? card.attachedCards.some(a => a.relation === 'oneToMany')
                    : card.attachedCards.relation === 'oneToMany';
                if (isOneToMany) return;
            }
            const max = p.cards[cardId] || 0;
            const att = p.attached[cardId];
            if (typeof att === 'number') {
                // Simple (object-form) attachedCards
                const maxAtt = card && card.maxAttached ? card.maxAttached : max;
                if (att > maxAtt) p.attached[cardId] = maxAtt;
            } else if (typeof att === 'object') {
                // Array-based attachedCards: clamp per-target and total
                let total = 0;
                Object.keys(att).forEach(targetId => {
                    if (att[targetId] < 0) att[targetId] = 0;
                    total += att[targetId];
                });
                // If total exceeds max, reduce in some order (last key first for fairness)
                if (total > max) {
                    const keys = Object.keys(att);
                    let excess = total - max;
                    for (let i = keys.length - 1; i >= 0 && excess > 0; i--) {
                        const reduce = Math.min(att[keys[i]], excess);
                        att[keys[i]] -= reduce;
                        excess -= reduce;
                    }
                }
            }
        });
    }

    // Precompute category-scoped totals (butterfly multi-set, etc.)
    computeCategoryTotals();

    let treePoints = 0;
    let topPoints = 0;
    let bottomPoints = 0;
    let sidePoints = 0;
    let total = 0;

    // Track per-card and per-category scores
    let catScores = {};

    currentCards.forEach(card => {
        // Skip cards from disabled expansions
        const exp = card.expansion || 'base';
        if (exp !== 'base' && !state.expansions[exp]) return;

        const totalPts = computeCardTotal(card.id);

        // Update per-card display
        const ptsEl = document.getElementById('pts-' + card.id);
        if (ptsEl) {
            // For multi-set butterfly lookup (distinct + repeated), hide individual score
            const isMultiSet = card.scoring.some(r => r.reward && r.reward.mode === 'lookup' && r.reward.repeated === true && r.count && r.count.of === 'distinct');
            if (isMultiSet) {
                ptsEl.textContent = '';
            } else {
                ptsEl.textContent = totalPts;
            }
        }
        // Also update attached count display
        updateAttachedDisplay(card.id);

        // Accumulate category totals (scoped by zone)
        const cat = card.category;
        const zk = card.zone + '-' + cat;
        if (!catScores[zk]) catScores[zk] = 0;
        catScores[zk] += totalPts;

        // Route points to correct zone — skip differentTypes categories
        // (added separately below)
        if (categoryTotals[cat] !== undefined) return;

        if (card.zone === 'general') treePoints += totalPts;
        else if (card.zone === 'tops') topPoints += totalPts;
        else if (card.zone === 'bottoms') bottomPoints += totalPts;
        else if (card.zone === 'sides') sidePoints += totalPts;
        total += totalPts;
    });

    // Add repeated-lookup category totals to zones once
    for (let cat in categoryTotals) {
        const val = categoryTotals[cat];
        const sampleCard = currentCards.find(c => c.category === cat);
        if (sampleCard) {
            // Use the category total as the catScore for this category (zone-scoped)
            const zk = sampleCard.zone + '-' + cat;
            catScores[zk] = val;
            if (sampleCard.zone === 'general') treePoints += val;
            else if (sampleCard.zone === 'tops') topPoints += val;
            else if (sampleCard.zone === 'bottoms') bottomPoints += val;
            else if (sampleCard.zone === 'sides') sidePoints += val;
            total += val;
        }
    }

    // Update category-level score displays (zone-scoped)
    for (let zk in catScores) {
        const el = document.getElementById('catScore-' + zk);
        if (el) el.textContent = catScores[zk];
    }

    document.getElementById('treePoints').textContent = treePoints;
    document.getElementById('topPoints').textContent = topPoints;
    document.getElementById('bottomPoints').textContent = bottomPoints;
    document.getElementById('sidePoints').textContent = sidePoints;
    document.getElementById('totalPoints').textContent = total;

    renderLeaderboard();
}

// ===== Leaderboard =====
function computePlayerTotal(playerIdx) {
    const saved = state.currentPlayer;
    state.currentPlayer = playerIdx;
    computeCategoryTotals();

    const p = state.players[playerIdx];
    let total = 0;

    currentCards.forEach(card => {
        const exp = card.expansion || 'base';
        if (exp !== 'base' && !state.expansions[exp]) return;
        const pts = computeCardTotal(card.id);
        // Skip repeated-lookup categories (added separately below)
        if (categoryTotals[card.category] !== undefined) return;
        total += pts;
    });

    // Add repeated-lookup category totals
    for (const cat in categoryTotals) {
        total += categoryTotals[cat];
    }

    state.currentPlayer = saved;
    return total;
}

function renderLeaderboard() {
    const container = document.getElementById('leaderboardList');
    if (!container) return;

    const scores = state.players.map((p, i) => ({
        name: p.name,
        score: computePlayerTotal(i),
        idx: i,
        isActive: i === state.currentPlayer,
    }));

    scores.sort((a, b) => b.score - a.score);

    container.innerHTML = '';
    scores.forEach((s, rank) => {
        const row = document.createElement('div');
        row.className = 'lb-row' + (s.isActive ? ' lb-active' : '');
        const crown = rank === 0 && scores.length > 1 ? '👑 ' : '';
        const nameEl = document.createElement('span');
        nameEl.className = 'lb-name';
        nameEl.textContent = crown + s.name;
        const scoreEl = document.createElement('span');
        scoreEl.className = 'lb-score';
        scoreEl.textContent = s.score;
        row.appendChild(nameEl);
        row.appendChild(scoreEl);
        container.appendChild(row);
    });
}

// ===== Card Actions =====
function addCard(cardId) {
    const p = state.players[state.currentPlayer];
    p.cards[cardId] = (p.cards[cardId] || 0) + 1;
    updateCount(cardId);
    updateAllScores();
}

function removeCard(cardId) {
    const p = state.players[state.currentPlayer];
    if (p.cards[cardId] > 0) {
        p.cards[cardId]--;
        updateCount(cardId);
        updateAllScores();
    }
}

function updateCount(cardId) {
    const el = document.getElementById('count-' + cardId);
    if (!el) return;
    const count = state.players[state.currentPlayer].cards[cardId] || 0;
    el.textContent = count + '×';
}

// ===== Attached Card Actions =====
function addAttachedCard(cardId, targetId) {
    const p = state.players[state.currentPlayer];
    const card = currentCards.find(c => c.id === cardId);
    if (!p.cards[cardId] || p.cards[cardId] < 1) return;
    if (!p.attached) p.attached = {};

    if (targetId && card && Array.isArray(card.attachedCards)) {
        // Array-based attachedCards: store per-target
        if (!p.attached[cardId] || typeof p.attached[cardId] !== 'object') {
            p.attached[cardId] = {};
        }
        const oneToMany = card.attachedCards.some(a => a.relation === 'oneToMany');
        if (!oneToMany) {
            const total = getTotalAttachedCount(cardId);
            const max = p.cards[cardId] || 0;
            if (total >= max) return;
        }
        p.attached[cardId][targetId] = (p.attached[cardId][targetId] || 0) + 1;
        updateAttachedDisplay(cardId, targetId);
        updateAllScores();
        return;
    }

    // Simple (object-form) attachedCards
    const isOneToMany = card && card.attachedCards && card.attachedCards.relation === 'oneToMany';
    if (!isOneToMany) {
        const maxPerSelf = (p.cards[cardId] || 0);
        const hardCap = card && card.maxAttached ? card.maxAttached : Infinity;
        if ((p.attached[cardId] || 0) >= Math.min(maxPerSelf, hardCap)) return;
    }
    p.attached[cardId] = (p.attached[cardId] || 0) + 1;
    updateAttachedDisplay(cardId);
    updateAllScores();
}

function removeAttachedCard(cardId, targetId) {
    const p = state.players[state.currentPlayer];
    if (!p.attached) p.attached = {};
    const card = currentCards.find(c => c.id === cardId);

    if (targetId && card && Array.isArray(card.attachedCards)) {
        // Array-based: remove from specific target
        if (p.attached[cardId] && p.attached[cardId][targetId] > 0) {
            p.attached[cardId][targetId]--;
            updateAttachedDisplay(cardId, targetId);
            updateAllScores();
        }
        return;
    }

    // Simple (object-form)
    if (p.attached[cardId] > 0) {
        p.attached[cardId]--;
        updateAttachedDisplay(cardId);
        updateAllScores();
    }
}

function updateAttachedDisplay(cardId, targetId) {
    const p = state.players[state.currentPlayer];
    const card = currentCards.find(c => c.id === cardId);
    if (targetId) {
        // Per-target display
        const el = document.getElementById('attached-count-' + cardId + '-' + targetId);
        if (!el) return;
        const count = (p.attached && p.attached[cardId] && p.attached[cardId][targetId]) || 0;
        el.textContent = count + '×';
        return;
    }
    // If card has array-based attachedCards, update all targets
    if (card && Array.isArray(card.attachedCards)) {
        card.attachedCards.forEach(entry => {
            if (!entry.target) return;
            updateAttachedDisplay(cardId, entry.target);
        });
        return;
    }
    // Simple display (single button)
    const el = document.getElementById('attached-count-' + cardId);
    if (!el) return;
    const count = (p.attached && p.attached[cardId]) || 0;
    el.textContent = count + '×';
}

// ===== Player Management =====
function addPlayer() {
    if (state.players.length >= 5) return;
    const idx = state.players.length;
    state.players.push({ name: defaultPlayerName(idx), cards: {}, attached: {} });
    rebuildPlayerList();
    switchPlayer(state.players.length - 1);
    updatePlusButton();
}

function removePlayer(idx) {
    if (state.players.length <= 1) return;
    if (idx <= 0) return;
    if (idx >= state.players.length) return;

    state.players.splice(idx, 1);

    if (state.currentPlayer >= state.players.length) {
        state.currentPlayer = state.players.length - 1;
    } else if (state.currentPlayer > idx) {
        state.currentPlayer--;
    }

    rebuildPlayerList();
    switchPlayer(state.currentPlayer);
    updatePlusButton();
}

// ===== Category total cache (for multi-set repeated lookup rules) =====
let categoryTotals = {};

// Compute category-scoped total scores (called once per updateAllScores)
// Handles 'repeated: true' lookup rules like butterfly differentTypes
function computeCategoryTotals() {
    categoryTotals = {};
    const p = state.players[state.currentPlayer];
    currentCards.forEach(card => {
        card.scoring.forEach(rule => {
            const r = rule.reward;
            if (r && r.mode === 'lookup' && r.repeated === true) {
                const sym = rule.count.value;
                if (categoryTotals[sym] === undefined) {
                    // Collect counts per species
                    const counts = {};
                    currentCards.forEach(c => {
                        // Skip cards from disabled expansions
                        const cExp = c.expansion || 'base';
                        if (cExp !== 'base' && !state.expansions[cExp]) return;
                        if (c.symbols.includes(sym) && (p.cards[c.id] || 0) > 0) {
                            counts[c.id] = p.cards[c.id] || 0;
                        }
                    });
                    // Multi-set scoring: repeatedly take one card from each available species
                    let total = 0;
                    const ids = Object.keys(counts);
                    while (ids.length > 0) {
                        const k = ids.length;
                        const idx = Math.min(k - 1, r.table.length - 1);
                        total += r.table[idx];
                        for (let i = ids.length - 1; i >= 0; i--) {
                            counts[ids[i]]--;
                            if (counts[ids[i]] <= 0) ids.splice(i, 1);
                        }
                    }
                    categoryTotals[sym] = total;
                }
            }
        });
    });
}

function editPlayerName(idx) {
    const rows = document.querySelectorAll('.settings-player-row');
    if (idx >= rows.length) return;
    const row = rows[idx];
    const nameSpan = row.querySelector('.settings-player-name');
    if (!nameSpan) return;

    const current = nameSpan.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = current;
    input.style.width = '100%';
    input.style.background = 'white';
    input.style.color = '#212529';
    input.style.border = '1px solid var(--green)';
    input.style.borderRadius = '4px';
    input.style.padding = '2px 6px';
    input.style.fontSize = '0.85rem';
    input.style.fontFamily = 'inherit';
    input.style.outline = 'none';

    nameSpan.style.display = 'none';
    nameSpan.parentNode.insertBefore(input, nameSpan.nextSibling);
    input.focus();
    input.select();

    function save() {
        const val = input.value.trim() || defaultPlayerName(idx);
        nameSpan.textContent = val;
        state.players[idx].name = val;
        input.remove();
        nameSpan.style.display = '';
        updateHeaderPlayerName();
    }

    input.onblur = save;
    input.onkeydown = function(e) {
        if (e.key === 'Enter') { save(); }
        if (e.key === 'Escape') { nameSpan.style.display = ''; input.remove(); }
    };
}

function rebuildPlayerList() {
    const list = document.getElementById('settingsPlayerList');
    if (!list) return;
    list.innerHTML = '';

    state.players.forEach((p, i) => {
        const row = document.createElement('div');
        row.className = 'settings-player-row' + (i === state.currentPlayer ? ' active' : '');
        row.dataset.player = i + 1;

        const color = document.createElement('span');
        color.className = 'settings-player-color';
        color.style.background = PLAYER_COLORS[i % PLAYER_COLORS.length];
        row.appendChild(color);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'settings-player-name';
        nameSpan.textContent = p.name;
        nameSpan.onclick = function(e) {
            e.stopPropagation();
            editPlayerName(i);
        };
        nameSpan.style.cursor = 'text';
        row.appendChild(nameSpan);

        if (i > 0) {
            const removeIcon = document.createElement('button');
            removeIcon.className = 'settings-player-remove';
            removeIcon.textContent = '×';
            removeIcon.onclick = function(e) {
                e.stopPropagation();
                removePlayer(i);
            };
            row.appendChild(removeIcon);
        }

        row.onclick = function() { switchPlayer(i); };
        list.appendChild(row);
    });

    updatePlusButton();
    updateHeaderPlayerName();
}

function switchPlayer(idx) {
    state.currentPlayer = idx;
    document.querySelectorAll('.settings-player-row').forEach(r => r.classList.remove('active'));
    const rows = document.querySelectorAll('.settings-player-row');
    if (rows[idx]) rows[idx].classList.add('active');
    updateHeaderPlayerName();
    currentCards.forEach(c => updateCount(c.id));
    updateAllScores();
}

function updateHeaderPlayerName() {
    const el = document.getElementById('currentPlayerName');
    if (!el) return;
    const p = state.players[state.currentPlayer];
    if (p) el.textContent = p.name;
}

function updatePlusButton() {
    const plus = document.getElementById('settingsAddPlayer');
    if (!plus) return;
    plus.classList.toggle('disabled', state.players.length >= 5);
}

// ===== Game Selection =====
function selectGame(game) {
    if (state.game === game) return;
    state.game = game;
    document.querySelectorAll('.settings-row .radio').forEach(r => r.classList.remove('checked'));
    const row = document.getElementById('game' + game.charAt(0).toUpperCase() + game.slice(1));
    if (row) row.querySelector('.radio').classList.add('checked');

    // Swap card data
    currentCards = game === 'forest' ? CARDS_FOREST : CARDS_DARTMOOR;

    // Reset current player state
    const p = state.players[state.currentPlayer];
    p.cards = {};
    p.attached = {};

    // Show/hide expansion toggles per game
    document.querySelectorAll('[data-game]').forEach(el => {
        el.style.display = el.dataset.game === game ? '' : 'none';
    });

    // Reset all card counts display
    document.querySelectorAll('.card-count').forEach(el => el.textContent = '0×');
    document.querySelectorAll('.card-points').forEach(el => el.textContent = '0');

    saveSettings();
    updateGameTitle();
    buildCardSections();
    updateAllScores();
    updateCountDisplay();
}

function updateCountDisplay() {
    currentCards.forEach(c => updateCount(c.id));
}

function updateGameTitle() {
    const el = document.getElementById('navTitle');
    if (!el) return;
    el.textContent = state.game === 'dartmoor'
        ? 'Forest Calculator | Forest Shuffle: Dartmoor'
        : 'Forest Calculator | Forest Shuffle';
}

// ===== Expansion Toggle =====
function toggleExpansion(key) {
    state.expansions[key] = !state.expansions[key];
    const row = document.getElementById('exp' + key.charAt(0).toUpperCase() + key.slice(1));
    if (row) {
        row.querySelector('.toggle').classList.toggle('on', state.expansions[key]);
    }
    saveSettings();
    buildCardSections();
    updateAllScores();
}

// ===== Persist Settings =====
function saveSettings() {
    localStorage.setItem('forestSettings', JSON.stringify({
        game: state.game,
        expansions: state.expansions,
        lang: LANG,
    }));
}

// ===== Restore Expansion Toggles =====
function restoreExpansionToggles() {
    for (const key in state.expansions) {
        if (state.expansions[key]) {
            const row = document.getElementById('exp' + key.charAt(0).toUpperCase() + key.slice(1));
            if (row) row.querySelector('.toggle').classList.add('on');
        }
    }
}

// ===== Language Toggle =====
function setLanguage(lang) {
    LANG = lang;
    localStorage.setItem('forestLang', lang);
    saveSettings();
    // Translate UI and buttons FIRST — before any rebuild that might throw
    translateUI();
    updateLangButtons();
    // Now rebuild cards and scores
    buildCardSections();
    updateAllScores();
    // Update dynamically generated player names if unchanged from default
    state.players.forEach((p, i) => {
        const defaultEn = 'Player ' + (i + 1);
        const defaultNl = 'Speler ' + (i + 1);
        // Only rename if the current name matches either default
        if (p.name === defaultEn || p.name === defaultNl) {
            p.name = defaultPlayerName(i);
        }
    });
    rebuildPlayerList();
    updateLangButtons();
}

function translateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = t(key);
    });
}

function updateLangButtons() {
    document.getElementById('langEn').classList.toggle('active', LANG === 'en');
    document.getElementById('langNl').classList.toggle('active', LANG === 'nl');
}

// ===== Settings =====
function openSettings() {
    rebuildPlayerList();
    document.getElementById('settingsOverlay').classList.add('open');
    document.getElementById('settingsPanel').classList.add('open');
}

function closeSettings() {
    document.getElementById('settingsOverlay').classList.remove('open');
    document.getElementById('settingsPanel').classList.remove('open');
}

function newGame() {
    if (confirm(t('confirmNewGame'))) {
        state.players.forEach(p => { p.cards = {}; p.attached = {}; });
        currentCards.forEach(c => updateCount(c.id));
        updateAllScores();
        closeSettings();
    }
}

// ===== Summary Toggle (native <details>, click-outside to close) =====

// ===== Init =====
window.addEventListener('DOMContentLoaded', function() {
    // Load persisted settings
    try {
        const saved = JSON.parse(localStorage.getItem('forestSettings'));
        if (saved) {
            if (saved.game) state.game = saved.game;
            if (saved.expansions) state.expansions = saved.expansions;
            if (saved.lang) {
                LANG = saved.lang;
                localStorage.setItem('forestLang', saved.lang);
            }
        }
    } catch (e) { /* ignore */ }

    // Apply game state: swap currentCards and show/hide expansion toggles
    currentCards = state.game === 'forest' ? CARDS_FOREST : CARDS_DARTMOOR;
    document.querySelectorAll('[data-game]').forEach(el => {
        el.style.display = el.dataset.game === state.game ? '' : 'none';
    });
    // Update radio buttons to match saved game
    document.querySelectorAll('.settings-row .radio').forEach(r => r.classList.remove('checked'));
    const gameRow = document.getElementById('game' + state.game.charAt(0).toUpperCase() + state.game.slice(1));
    if (gameRow) gameRow.querySelector('.radio').classList.add('checked');

    updateGameTitle();
    translateUI();
    updateLangButtons();

    try {
        buildCardSections();
        updateAllScores();
        rebuildPlayerList();
        updateHeaderPlayerName();
        restoreExpansionToggles();
    } catch (e) {
        console.error('Init error:', e);
    }

    // Click outside the summary closes the details
    document.addEventListener('click', function(e) {
        const summary = document.getElementById('forestSummary');
        if (!summary.contains(e.target)) {
            document.getElementById('summaryDetails').removeAttribute('open');
        }
    });

    // Dynamic scroll height when details open/close
    document.getElementById('summaryDetails').addEventListener('toggle', function() {
        document.getElementById('forestScroll').classList.toggle('summary-open', this.open);
    });
});