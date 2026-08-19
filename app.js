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
        soon: 'Soon',
        treePoints: 'Tree Points',
        topPoints: 'Top Points',
        bottomPoints: 'Bottom Points',
        sidePoints: 'Side Points',
        total: 'Total',
        confirmNewGame: 'Start a new game? This will reset all scores.',
        player: 'Player',
        categories: {
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
        },
    },
    nl: {
        menu: 'Menu',
        game: 'Spel',
        players: 'Spelers',
        addPlayer: 'Speler toevoegen',
        newGame: 'Nieuw spel',
        language: 'Taal',
        soon: 'Binnenkort',
        treePoints: 'Boompunten',
        topPoints: 'Bovenpunten',
        bottomPoints: 'Onderpunten',
        sidePoints: 'Zijpunten',
        total: 'Totaal',
        confirmNewGame: 'Nieuw spel starten? Dit reset alle scores.',
        player: 'Speler',
        categories: {
            tree: 'BOMEN',
            shrub: 'STRUIKEN',
            bird: 'VOGELS',
            butterfly: 'VLINDERS',
            pawedAnimal: 'POOTDIEREN',
            plant: 'PLANTEN',
            mushroom: 'PADDENSTOELEN',
            insect: 'INSECTEN',
            amphibian: 'AMFIBIEËN',
            bat: 'VLEERMUIZEN',
            deer: 'HERTEN & KLAUWDragers',
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
    players: [{ name: defaultPlayerName(0), cards: {} }],
    game: 'forest',
};

// Load saved state from localStorage
function loadState() {
    try {
        const saved = localStorage.getItem('forestState');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.players && parsed.players.length > 0) {
                state.players = parsed.players;
                state.currentPlayer = parsed.currentPlayer || 0;
                state.game = parsed.game || 'forest';
            }
        }
    } catch (e) { /* ignore corrupt data */ }
}

function saveState() {
    try {
        localStorage.setItem('forestState', JSON.stringify({
            players: state.players,
            currentPlayer: state.currentPlayer,
            game: state.game,
        }));
    } catch (e) { /* storage full, ignore */ }
}

loadState();

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

    Object.entries(groups).forEach(([cat, cards]) => {
        const label = catLabel(cat);

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
    saveState();
}

function removeCard(cardId) {
    const p = state.players[state.currentPlayer];
    if (p.cards[cardId] > 0) {
        p.cards[cardId]--;
        updateCount(cardId);
        updateAllScores();
        saveState();
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
    const idx = state.players.length;
    state.players.push({ name: defaultPlayerName(idx), cards: {} });
    rebuildPlayerList();
    switchPlayer(state.players.length - 1);
    updatePlusButton();
    saveState();
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
    saveState();
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
        saveState();
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
    saveState();
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
    buildCardSections();
    updateAllScores();
    translateUI();
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
        state.players.forEach(p => { p.cards = {}; });
        CARDS.forEach(c => updateCount(c.id));
        updateAllScores();
        closeSettings();
        saveState();
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