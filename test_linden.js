
const fs = require('fs');
const appJs = fs.readFileSync('/home/dennis/forest-calc/app.js', 'utf8');
const cardsJs = fs.readFileSync('/home/dennis/forest-calc/cards.js', 'utf8');

// Extract CARDS
const cardsMatch = cardsJs.match(/const\s+CARDS\s*=\s*(\[[\s\S]*?\]);/);
const CARDS = eval('(' + cardsMatch[1] + ')');

// Set up minimal state
const state = {
  players: [
    { cards: {}, attached: {} },
    { cards: {}, attached: {} }
  ],
  currentPlayer: 0
};

// Give player 0: 3 lindens, player 1: 2 lindens
state.players[0].cards['linden'] = 3;
state.players[1].cards['linden'] = 2;

// Extract and run the scoring functions
// First getEffectiveCount
function getEffectiveCount(cardId, playerIdx) {
    const p = state.players[playerIdx];
    const base = p.cards[cardId] || 0;
    let boost = 0;
    CARDS.forEach(card => {
        if (card.effect && card.effect.type === 'boostTree') {
            const att = p.attached && p.attached[card.id];
            if (att && typeof att === 'object') {
                boost += att[cardId] || 0;
            }
        }
    });
    return base + boost;
}

function hasMostOfType(cardId, playerIdx) {
    const myCount = getEffectiveCount(cardId, playerIdx);
    for (let i = 0; i < state.players.length; i++) {
        if (i === playerIdx) continue;
        if (getEffectiveCount(cardId, i) > myCount) return false;
    }
    return true;
}

function getBoostForTree(treeId) {
    const p = state.players[state.currentPlayer];
    let boost = 0;
    CARDS.forEach(card => {
        if (card.effect && card.effect.type === 'boostTree') {
            const att = p.attached && p.attached[card.id];
            if (att && typeof att === 'object') {
                boost += att[treeId] || 0;
            }
        }
    });
    return boost;
}

function computeCardTotal(cardId) {
    const card = CARDS.find(c => c.id === cardId);
    if (!card) return 0;
    const p = state.players[state.currentPlayer];
    const selfCount = p.cards[cardId] || 0;
    if (selfCount === 0) return 0;
    const boost = getBoostForTree(cardId);
    const effectiveSelf = selfCount + boost;
    let total = 0;

    for (const rule of card.scoring) {
        const c = rule.count;
        const r = rule.reward;

        let count = 0;
        const countOf = c && c.of;
        const countValue = c && c.value;

        if (countOf === 'self') {
            count = effectiveSelf;
        } else if (countOf === 'symbol') {
            CARDS.forEach(card => {
                if (card.symbols.includes(countValue)) {
                    count += p.cards[card.id] || 0;
                }
            });
        } else if (countOf === 'distinct') {
            const species = new Set();
            CARDS.forEach(card => {
                if (card.symbols.includes(countValue) && (p.cards[card.id] || 0) > 0) {
                    species.add(card.id);
                }
            });
            count = species.size;
        } else if (countOf === 'attachedCards') {
            count = (p.attached && p.attached[cardId]) || 0;
        } else if (countOf === 'condition') {
            if (countValue === 'mostTreesNoTies') {
                count = hasMostTreesNoTies(state.currentPlayer) ? 1 : 0;
            }
        } else if (countOf === 'tag') {
            CARDS.forEach(c => {
                if (c.tags && c.tags.includes(countValue)) {
                    count += p.cards[c.id] || 0;
                }
            });
        } else if (countOf === 'zone') {
            CARDS.forEach(c => {
                if (c.zone === countValue) {
                    count += p.cards[c.id] || 0;
                }
            });
        }

        if (c && c.when === 'mostOfType') {
            if (!hasMostOfType(cardId, state.currentPlayer)) {
                count = 0;
            }
        }

        if (count === 0) continue;

        let points = 0;

        if (r.mode === 'flat') {
            if (count > 0) points = r.points * selfCount;
        } else if (r.mode === 'perUnit') {
            const ptsCount = (countOf === 'self') ? selfCount : count;
            points = r.points * ptsCount;
        } else if (r.mode === 'threshold') {
            if (count >= r.minimum) {
                points = r.points * selfCount;
            }
        } else if (r.mode === 'lookup') {
            if (count > 0) {
                if (r.repeated && countOf === 'distinct') {
                    const ts = categoryTotals && categoryTotals[countValue];
                    if (ts !== undefined) points = ts;
                } else if (r.repeated && countOf === 'self') {
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
        }

        if (r.multiply === 'self') {
            points *= selfCount;
        }

        total += points;
    }
    return total;
}

// Test: Player 0 has 3 lindens, Player 1 has 2 → P0 has most
console.log('=== Player 0: 3 lindens, Player 1: 2 lindens ===');
console.log('P0 hasMostOfType(linden):', hasMostOfType('linden', 0));
console.log('P0 total:', computeCardTotal('linden'));
console.log('P1 hasMostOfType(linden):', hasMostOfType('linden', 1));
state.currentPlayer = 1;
console.log('P1 total:', computeCardTotal('linden'));
state.currentPlayer = 0;

// Test: P0 has 1 linden, P1 has 2 → P0 does NOT have most
state.players[0].cards['linden'] = 1;
console.log('\n=== Player 0: 1 linden, Player 1: 2 lindens ===');
console.log('P0 hasMostOfType(linden):', hasMostOfType('linden', 0));
console.log('P0 total:', computeCardTotal('linden'));

// Test: P0 has 3 lindens, P1 has 3 → tie, hasMost should be true
state.players[0].cards['linden'] = 3;
state.players[1].cards['linden'] = 3;
console.log('\n=== Player 0: 3 lindens, Player 1: 3 lindens (tie) ===');
console.log('P0 hasMostOfType(linden):', hasMostOfType('linden', 0));
console.log('P0 total:', computeCardTotal('linden'));

// Test: single player — should always have most
state.players = [{ cards: { 'linden': 1 }, attached: {} }];
console.log('\n=== Single player with 1 linden ===');
console.log('P0 hasMostOfType(linden):', hasMostOfType('linden', 0));
console.log('P0 total:', computeCardTotal('linden'));
