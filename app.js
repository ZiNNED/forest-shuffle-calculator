// ============================================
// Forest Calculator - Exact original replica
// ============================================

const CARDS = {
    // === TREES ===
    silverFir:       { name: 'Silver Fir', symbol: 'tree', points: 6 },
    europeanLarch:   { name: 'European Larch', symbol: 'tree', points: 8 },
    stonePine:       { name: 'Stone Pine', symbol: 'tree', points: 10 },
    sessileOak:      { name: 'Sessile Oak', symbol: 'tree', points: 12 },
    commonBeech:     { name: 'Common Beech', symbol: 'tree', points: 18 },
    commonLime:      { name: 'Common Lime', symbol: 'tree', points: 20 },
    silverBirch:     { name: 'Silver Birch', symbol: 'tree', points: 4 },
    rowan:           { name: 'Rowan', symbol: 'tree', points: 6 },
    hornbeam:        { name: 'Hornbeam', symbol: 'tree', points: 10 },

    // === SHRUBS ===
    blackthorn:      { name: 'Blackthorn', symbol: 'shrub', points: 4 },
    commonHazel:     { name: 'Common Hazel', symbol: 'shrub', points: 4 },
    bramble:         { name: 'Bramble', symbol: 'shrub', points: 4 },
    dogwood:         { name: 'Dogwood', symbol: 'shrub', points: 4 },

    // === BIRDS (Top) ===
    coalTit:         { name: 'Coal Tit', symbol: 'bird', points: 3 },
    blueTit:         { name: 'Blue Tit', symbol: 'bird', points: 4 },
    greatTit:        { name: 'Great Tit', symbol: 'bird', points: 5 },
    goldcrest:       { name: 'Goldcrest', symbol: 'bird', points: 7 },
    nuthatch:        { name: 'Nuthatch', symbol: 'bird', points: 8 },
    shortToedTreecreeper: { name: 'Short-toed Treecreeper', symbol: 'bird', points: 3 },

    // === BUTTERFLIES ===
    camberwellBeauty:   { name: 'Camberwell Beauty', symbol: 'butterfly', points: 4 },
    purpleEmperor:      { name: 'Purple Emperor', symbol: 'butterfly', points: 4 },
    smallTortoiseshell: { name: 'Small Tortoiseshell', symbol: 'butterfly', points: 3 },

    // === PAWED ANIMALS ===
    redSquirrel:     { name: 'Red Squirrel', symbol: 'pawed', points: 5 },
    yellowNeckedMouse: { name: 'Yellow-necked Mouse', symbol: 'pawed', points: 3 },
    wildBoar:        { name: 'Wild Boar', symbol: 'pawed', points: 8 },

    // === PLANTS ===
    woodSorrel:      { name: 'Wood Sorrel', symbol: 'plant', points: 3 },
    commonNettle:    { name: 'Common Nettle', symbol: 'plant', points: 5 },

    // === MUSHROOMS ===
    blackTrumpet:    { name: 'Black Trumpet', symbol: 'mushroom', points: 3 },
    commonMorel:     { name: 'Common Morel', symbol: 'mushroom', points: 4 },
    cèpe:            { name: 'Cèpe', symbol: 'mushroom', points: 5 },
    chanterelle:     { name: 'Chanterelle', symbol: 'mushroom', points: 6 },

    // === AMPHIBIANS ===
    commonFrog:      { name: 'Common Frog', symbol: 'amphibian', points: 4 },
    fireSalamander:  { name: 'Fire Salamander', symbol: 'amphibian', points: 5 },

    // === INSECTS ===
    stagBeetle:      { name: 'Stag Beetle', symbol: 'insect', points: 3 },
    woodAnt:         { name: 'Wood Ant', symbol: 'insect', points: 5 },

    // === BATS ===
    commonPipistrelle: { name: 'Common Pipistrelle', symbol: 'bat', points: 4 },
    brownLongEaredBat: { name: 'Brown Long-eared Bat', symbol: 'bat', points: 5 },
    barbastelleBat:    { name: 'Barbastelle Bat', symbol: 'bat', points: 6 },

    // === DEER ===
    redDeer:         { name: 'Red Deer', symbol: 'deer', points: 12 },
    roeDeer:         { name: 'Roe Deer', symbol: 'deer', points: 8 },
    chamois:         { name: 'Chamois', symbol: 'deer', points: 10 },

    // === CAVE CARDS ===
    batCave:         { name: 'Bat Cave', symbol: 'cave', points: 0 },
    collectorsCave:  { name: "Collector's Cave", symbol: 'cave', points: 0 },
};

// ===== State =====
let state = {
    currentPlayer: 0,
    players: [{ name: 'Player 1', cards: {}, caveCards: [] }],
    game: 'forest',
};

// ===== Render a single card row =====
function renderCardRow(container, cardKey) {
    const card = CARDS[cardKey];
    if (!card) return;

    const row = document.createElement('div');
    row.className = 'card-row';
    row.dataset.cardKey = cardKey;

    const count = document.createElement('span');
    count.className = 'card-count';
    count.textContent = '0×';
    count.id = 'count-' + cardKey;
    row.appendChild(count);

    const btn = document.createElement('button');
    btn.className = 'card-btn';

    const icon = document.createElement('img');
    icon.className = 'symbol-img';
    icon.src = 'assets/symbols/' + card.symbol + '.png';
    icon.alt = card.symbol;
    btn.appendChild(icon);

    const name = document.createElement('span');
    name.className = 'card-name';
    name.textContent = card.name;
    btn.appendChild(name);

    btn.onclick = function() { addCard(cardKey); };
    row.appendChild(btn);

    const remove = document.createElement('button');
    remove.className = 'card-remove';
    remove.textContent = '×';
    remove.onclick = function(e) {
        e.stopPropagation();
        removeCard(cardKey);
    };
    row.appendChild(remove);

    const pts = document.createElement('span');
    pts.className = 'card-points';
    pts.textContent = card.points;
    row.appendChild(pts);

    container.appendChild(row);
}

// ===== Cave card renderer =====
function renderCaveCard(cardKey) {
    const container = document.getElementById('caveCards');
    const card = CARDS[cardKey] || { name: cardKey, points: 0 };

    const row = document.createElement('div');
    row.className = 'cave-card-row';

    const count = document.createElement('span');
    count.className = 'cave-card-count';
    count.textContent = '1×';
    row.appendChild(count);

    const name = document.createElement('span');
    name.className = 'cave-card-name';
    name.textContent = card.name;
    row.appendChild(name);

    const remove = document.createElement('button');
    remove.className = 'cave-card-remove';
    remove.textContent = '×';
    remove.onclick = function() { removeCaveCard(cardKey); };
    row.appendChild(remove);

    const pts = document.createElement('span');
    pts.className = 'cave-card-points';
    pts.textContent = card.points;
    row.appendChild(pts);

    container.appendChild(row);
    updateCaveUI();
}

function updateCaveUI() {
    const count = state.players[state.currentPlayer].caveCards.length;
    document.getElementById('caveCount').textContent = count + '×';
}

// ===== Card Actions =====
function addCard(cardKey) {
    const p = state.players[state.currentPlayer];
    p.cards[cardKey] = (p.cards[cardKey] || 0) + 1;
    updateCardCount(cardKey);
}

function removeCard(cardKey) {
    const p = state.players[state.currentPlayer];
    if (p.cards[cardKey] > 0) {
        p.cards[cardKey]--;
        updateCardCount(cardKey);
    }
}

function updateCardCount(cardKey) {
    const el = document.getElementById('count-' + cardKey);
    if (!el) return;
    const count = state.players[state.currentPlayer].cards[cardKey] || 0;
    el.textContent = count + '×';
}

function addCaveCard() {
    const p = state.players[state.currentPlayer];
    const caveKeys = ['batCave', 'collectorsCave'];
    const nextIdx = p.caveCards.length % caveKeys.length;
    p.caveCards.push(caveKeys[nextIdx]);
    renderCaveCard(caveKeys[nextIdx]);
}

function removeCaveCard(cardKey) {
    const p = state.players[state.currentPlayer];
    const idx = p.caveCards.lastIndexOf(cardKey);
    if (idx !== -1) p.caveCards.splice(idx, 1);
    rebuildCaveUI();
    updateCaveUI();
}

function removeAllCaveCards() {
    state.players[state.currentPlayer].caveCards = [];
    rebuildCaveUI();
    updateCaveUI();
}

function rebuildCaveUI() {
    const container = document.getElementById('caveCards');
    container.innerHTML = '';
    const p = state.players[state.currentPlayer];
    p.caveCards.forEach(k => renderCaveCard(k));
}

// ===== Player Management =====
function addPlayer() {
    if (state.players.length >= 5) return;
    const idx = state.players.length + 1;
    state.players.push({ name: 'Player ' + idx, cards: {}, caveCards: [] });
    rebuildPlayerSelector();
    switchPlayer(state.players.length - 1);
}

function removePlayer(idx) {
    if (state.players.length <= 1) return;
    if (idx < 0 || idx >= state.players.length) return;

    state.players.splice(idx, 1);

    if (state.currentPlayer >= state.players.length) {
        state.currentPlayer = state.players.length - 1;
    } else if (state.currentPlayer > idx) {
        state.currentPlayer--;
    }

    rebuildPlayerSelector();
    switchPlayer(state.currentPlayer);
}

function editPlayerName(idx) {
    const btn = document.querySelectorAll('.player-btn')[idx];
    if (!btn) return;
    const span = btn.querySelector('.player-name-span');
    if (!span) return;

    const current = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = current;
    input.style.background = '#212529';
    input.style.color = '#dee2e6';
    input.style.border = '1px solid #274e37';
    input.style.borderRadius = '4px';
    input.style.padding = '2px 6px';
    input.style.fontSize = '0.8rem';
    input.style.fontFamily = 'inherit';
    input.style.width = '90px';
    input.style.outline = 'none';

    span.style.display = 'none';
    span.parentNode.insertBefore(input, span.nextSibling);
    input.focus();
    input.select();

    function save() {
        const val = input.value.trim() || 'Player ' + (idx + 1);
        span.textContent = val;
        state.players[idx].name = val;
        input.remove();
        span.style.display = '';
    }

    input.onblur = save;
    input.onkeydown = function(e) {
        if (e.key === 'Enter') { save(); }
        if (e.key === 'Escape') { span.style.display = ''; input.remove(); }
    };
}

function rebuildPlayerSelector() {
    const sel = document.getElementById('playerSelector');
    const list = document.getElementById('playerList');
    list.innerHTML = '';

    state.players.forEach((p, i) => {
        const btn = document.createElement('button');
        btn.className = 'player-btn' + (i === state.currentPlayer ? ' active' : '');
        btn.dataset.player = i + 1;

        const nameSpan = document.createElement('span');
        nameSpan.className = 'player-name-span';
        nameSpan.textContent = p.name;
        btn.appendChild(nameSpan);

        const editIcon = document.createElement('span');
        editIcon.className = 'player-edit-btn';
        editIcon.textContent = '✎';
        editIcon.onclick = function(e) {
            e.stopPropagation();
            editPlayerName(i);
        };
        btn.appendChild(editIcon);

        if (state.players.length > 1) {
            const removeIcon = document.createElement('span');
            removeIcon.className = 'player-remove-btn';
            removeIcon.textContent = '×';
            removeIcon.onclick = function(e) {
                e.stopPropagation();
                removePlayer(i);
            };
            btn.appendChild(removeIcon);
        }

        btn.onclick = function() { switchPlayer(i); };
        list.appendChild(btn);
    });
}

function switchPlayer(idx) {
    state.currentPlayer = idx;
    document.querySelectorAll('.player-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.player-btn')[idx].classList.add('active');
    rebuildCaveUI();
    updateCaveUI();
    Object.keys(CARDS).forEach(k => updateCardCount(k));
}

// ===== Game Selection =====
function selectGame(game) {
    state.game = game;
    document.querySelectorAll('.settings-row .radio').forEach(r => r.classList.remove('checked'));
    if (game === 'forest') {
        document.querySelectorAll('.settings-row')[0].querySelector('.radio').classList.add('checked');
    } else {
        document.querySelectorAll('.settings-row')[1].querySelector('.radio').classList.add('checked');
    }
}

// ===== Settings =====
function openSettings() {
    document.getElementById('settingsOverlay').classList.add('open');
    document.getElementById('settingsPanel').classList.add('open');
}

function closeSettings() {
    document.getElementById('settingsOverlay').classList.remove('open');
    document.getElementById('settingsPanel').classList.remove('open');
}

// ===== Export / New Game =====
function exportGame() {
    console.log('Export');
}

function newGame() {
    if (confirm('Start a new game? This will reset all scores.')) {
        state.players.forEach(p => { p.cards = {}; p.caveCards = []; });
        rebuildCaveUI();
        updateCaveUI();
        Object.keys(CARDS).forEach(k => updateCardCount(k));
        closeSettings();
    }
}

// ===== Populate Cards =====
window.addEventListener('DOMContentLoaded', function() {
    const sections = {
        treeCards: ['silverFir','europeanLarch','stonePine','sessileOak','commonBeech','commonLime','silverBirch','rowan','hornbeam'],
        shrubCards: ['blackthorn','commonHazel','bramble','dogwood'],
        birdTopCards: ['coalTit','blueTit','greatTit','goldcrest','nuthatch','shortToedTreecreeper'],
        butterflyCards: ['camberwellBeauty','purpleEmperor','smallTortoiseshell'],
        pawedTopCards: ['redSquirrel'],
        plantTopCards: ['woodSorrel'],
        plantBottomCards: ['commonNettle'],
        mushroomCards: ['blackTrumpet','commonMorel','cèpe','chanterelle'],
        amphibianCards: ['commonFrog','fireSalamander'],
        insectBottomCards: ['stagBeetle'],
        pawedBottomCards: ['wildBoar'],
        insectSideCards: ['woodAnt'],
        batCards: ['commonPipistrelle','brownLongEaredBat','barbastelleBat'],
        deerCards: ['redDeer','roeDeer','chamois'],
        pawedSideCards: ['yellowNeckedMouse'],
    };

    Object.entries(sections).forEach(([id, keys]) => {
        const container = document.getElementById(id);
        if (container) {
            keys.forEach(k => renderCardRow(container, k));
        }
    });
});