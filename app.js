// ============================================
// Forest Calculator - Data-driven scoring app
// ============================================

// Language for display names
let LANG = localStorage.getItem('forestLang') || 'en';

// Translations for static UI elements
const TRANSLATIONS = {
  'Menu': { en: 'Menu', nl: 'Menu' },
  'Game': { en: 'Game', nl: 'Spel' },
  'Players': { en: 'Players', nl: 'Spelers' },
  'Add Player': { en: 'Add Player', nl: 'Speler toevoegen' },
  'New Game': { en: 'New Game', nl: 'Nieuw spel' },
  'Language': { en: 'Language', nl: 'Taal' },
  'Soon': { en: 'Soon', nl: 'Binnenkort' },
  'Tree Points': { en: 'Tree Points', nl: 'Boompunten' },
  'Top Points': { en: 'Top Points', nl: 'Bovenpunten' },
  'Bottom Points': { en: 'Bottom Points', nl: 'Onderpunten' },
  'Side Points': { en: 'Side Points', nl: 'Zijpunten' },
  'Total': { en: 'Total', nl: 'Totaal' },
};

// Player colors
const PLAYER_COLORS = ['#274e37', '#547AA5', '#EC9A29', '#A8201A', '#9eb9a6'];

// ===== State =====
let state = {
    currentPlayer: 0,
    players: [{ name: 'Player 1', cards: {} }],
    game: 'forest',
};

// ===== Scoring Engine =====
function computeCardPoints(cardId, ownedCount) {
    const card = CARDS.find(c => c.id === cardId);
    if (!card) return 0;
    let total = 0;
    for (const rule of card.scoring) {
        if (rule.type === 'base') {
            total += rule.points;
        } else if (rule.type === 'whenMinimumMet') {
            if (ownedCount >= rule.minimum) {
                total += rule.points;
            }
        }
    }
    return total;
}

function computeCardTotal(cardId, ownedCount) {
    return computeCardPoints(cardId, ownedCount) * ownedCount;
}

// ===== Build sections from catalog =====
function buildCardSections() {
    const container = document.getElementById('cardSections');
    container.innerHTML = '';

    // Group cards by category
    const groups = {};
    CARDS.forEach(card => {
        if (!groups[card.category]) groups[card.category] = [];
        groups[card.category].push(card);
    });

    // Define display labels for categories
    const catLabels = {
        tree: { en: 'TREES', nl: 'BOMEN' },
        shrub: { en: 'SHRUBS', nl: 'STRUIKEN' },
        bird: { en: 'BIRDS', nl: 'VOGELS' },
        butterfly: { en: 'BUTTERFLIES', nl: 'VLINDERS' },
        pawedAnimal: { en: 'PAWED ANIMALS', nl: 'POOTDIEREN' },
        plant: { en: 'PLANTS', nl: 'PLANTEN' },
        mushroom: { en: 'MUSHROOMS', nl: 'PADDENSTOELEN' },
        insect: { en: 'INSECTS', nl: 'INSECTEN' },
        amphibian: { en: 'AMPHIBIANS', nl: 'AMFIBIEËN' },
        bat: { en: 'BATS', nl: 'VLEERMUIZEN' },
        deer: { en: 'DEER & CLOVEN-HOOFED', nl: 'HERTEN & KLAUWDragers' },
    };

    Object.entries(groups).forEach(([cat, cards]) => {
        const label = (catLabels[cat] && catLabels[cat][LANG]) || cat.toUpperCase();

        // Section header
        const header = document.createElement('div');
        header.className = 'section-header';
        const img = document.createElement('img');
        img.className = 'symbol-icon';
        img.src = 'assets/symbols/' + cat + '.png';
        img.alt = cat;
        header.appendChild(img);
        const span = document.createElement('span');
        span.textContent = label;
        header.appendChild(span);
        container.appendChild(header);

        // Card container
        const cardContainer = document.createElement('div');
        cardContainer.id = cat + 'Cards';
        cards.forEach(card => renderCardRow(cardContainer, card));
        container.appendChild(cardContainer);
    });
}

// ===== Render a single card row =====
function renderCardRow(container, card) {
    const row = document.createElement('div');
    row.className = 'card-row';
    row.dataset.cardKey = card.id;

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
}

// ===== Score update =====
function updateAllScores() {
    const p = state.players[state.currentPlayer];
    let treePoints = 0;
    let topPoints = 0;
    let bottomPoints = 0;
    let sidePoints = 0;
    let total = 0;

    CARDS.forEach(card => {
        const owned = p.cards[card.id] || 0;
        const perCard = computeCardPoints(card.id, owned);
        const totalPts = perCard * owned;

        // Update per-card display — show total for this card type
        const ptsEl = document.getElementById('pts-' + card.id);
        if (ptsEl) ptsEl.textContent = totalPts;

        // Category-based totals
        if (card.category === 'tree') {
            treePoints += totalPts;
        }
        // For now everything is tree; as positions get added, split top/bottom/side
        topPoints += totalPts;
        total += totalPts;
    });

    document.getElementById('treePoints').textContent = treePoints;
    document.getElementById('topPoints').textContent = topPoints;
    document.getElementById('bottomPoints').textContent = bottomPoints;
    document.getElementById('sidePoints').textContent = sidePoints;
    document.getElementById('totalPoints').textContent = total;
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

// ===== Player Management =====
function addPlayer() {
    if (state.players.length >= 5) return;
    const idx = state.players.length + 1;
    state.players.push({ name: 'Player ' + idx, cards: {} });
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
        const val = input.value.trim() || 'Player ' + (idx + 1);
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
    CARDS.forEach(c => updateCount(c.id));
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
    if (game === 'dartmoor') return;
    state.game = game;
    document.querySelectorAll('.settings-row .radio').forEach(r => r.classList.remove('checked'));
    const forestRow = document.getElementById('gameForest');
    if (forestRow) forestRow.querySelector('.radio').classList.add('checked');
}

// ===== Language Toggle =====
function setLanguage(lang) {
    LANG = lang;
    localStorage.setItem('forestLang', lang);
    // Rebuild card sections with new language
    buildCardSections();
    updateAllScores();
    translateUI();
    updateLangButtons();
}

function translateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (TRANSLATIONS[key] && TRANSLATIONS[key][LANG]) {
            el.textContent = TRANSLATIONS[key][LANG];
        }
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
    if (confirm('Start a new game? This will reset all scores.')) {
        state.players.forEach(p => { p.cards = {}; });
        CARDS.forEach(c => updateCount(c.id));
        updateAllScores();
        closeSettings();
    }
}

// ===== Init =====
window.addEventListener('DOMContentLoaded', function() {
    buildCardSections();
    updateAllScores();
    rebuildPlayerList();
    updateHeaderPlayerName();
    translateUI();
    updateLangButtons();
});