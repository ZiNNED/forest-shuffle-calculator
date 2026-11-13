// Forest Shuffle Calculator — Polski (Polish) translations
// Polish edition: "Leśne Rozdanie" (Rebel). Sources for card names:
//   - Dartmoor (base, Exmoor): official Rebel card appendix "Objaśnienia kart" and Exmoor rulebook;
//     verified against a physical copy of the game
//   - Forest Shuffle base / Alpine / Woodland Edge: community translation from ForestShuffle.app
//     (github.com/glaures/forestshuffle, Apache-2.0), partly checked against the official
//     base and Alpine rulebooks; NOT verified against a physical copy
//   - UI strings and attached-card labels: own translation
// To add a language: copy i18n/en.js to i18n/<code>.js, translate every value (keep the keys),
// then add a <script> tag in index.html (before app.js) and the file to PRECACHE_URLS in sw.js.
// Missing keys fall back to English.

window.I18N = window.I18N || {};

I18N.pl = {
    name: 'Polski',
    flag: '🇵🇱',
    ui: {
        menu: 'Menu',
        game: 'Gra',
        players: 'Gracze',
        addPlayer: 'Dodaj gracza',
        newGame: 'Nowa gra',
        language: 'Język',
        expansions: 'Dodatki',
        leaderboard: 'Ranking',
        soon: 'Wkrótce',
        treePoints: 'Punkty ogólne',
        topPoints: 'Punkty (góra)',
        bottomPoints: 'Punkty (dół)',
        sidePoints: 'Punkty (boki)',
        total: 'Suma',
        confirmNewGame: 'Rozpocząć nową grę? Wszystkie wyniki zostaną wyzerowane.',
        installApp: 'Zainstaluj aplikację',
        darkTheme: 'Ciemny motyw',
        player: 'Gracz',
        attachedCards: 'dołączone karty',
        tops: 'Góra',
        bottoms: 'Dół',
        sides: 'Boki',
        general: 'Ogólne',
        inspiredBy: 'zainspirowane przez',
    },
    categories: {
        cave: 'JASKINIA',
        tree: 'DRZEWA',
        shrub: 'KRZEWY',
        bird: 'PTAKI',
        butterfly: 'MOTYLE',
        pawedAnimal: 'ZWIERZĘTA Z ŁAPAMI',
        plant: 'ROŚLINY',
        mushroom: 'GRZYBY',
        insect: 'OWADY',
        amphibian: 'PŁAZY',
        bat: 'NIETOPERZE',
        deer: 'JELENIOWATE I PARZYSTOKOPYTNE',
        moor: 'WRZOSOWISKA',
        dragonfly: 'WAŻKI',
    },
    // Category labels that differ in Forest Shuffle: Dartmoor
    dartmoorCategories: {
        amphibian: 'PŁAZY I GADY',
        clovenHoofedAnimal: 'PARZYSTOKOPYTNE',
    },
    // Card names, per game, keyed by card id (see cards-*.js)
    cards: {
        // Forest Shuffle (base, Alpine, Woodland Edge) — not verified against a physical copy
        forest: {
            // Cave
            cave: 'Karty w jaskini',

            // Trees
            beech: 'Buk pospolity',
            birch: 'Brzoza zwisła',
            douglasFir: 'Daglezja zielona',
            europeanLarch: 'Modrzew europejski',
            horseChestnut: 'Kasztanowiec',
            linden: 'Lipa',
            oak: 'Dąb szypułkowy',
            sapling: 'Sadzonki drzew',
            silverFir: 'Jodła pospolita',
            stonePine: 'Sosna limba',
            sycamore: 'Platan zachodni',

            // Shrubs
            blackthorn: 'Śliwa tarnina',
            commonHazel: 'Leszczyna pospolita',
            elderberry: 'Bez czarny',

            // Animals, mushrooms, plants — cards played onto trees, shrubs and moors
            alpineMarmot: 'Świstak alpejski',
            alpineNewt: 'Traszka górska',
            barbastelleBat: 'Mopek zachodni',
            barnOwl: 'Płomykówka',
            beardedVulture: 'Orłosęp',
            bechsteinsBat: 'Nocek Bechsteina',
            beechMarten: 'Kuna domowa',
            beeSwarm: 'Rój pszczół miodnych',
            blackberries: 'Jeżyna fałdowana',
            blackTrumpet: 'Lejkowiec dęty',
            Blueberry: 'Borówka czarna',
            brownBear: 'Niedźwiedź brunatny',
            brownLongEaredBat: 'Gacek brunatny',
            bullfinch: 'Gil zwyczajny',
            camberwellBeauty: 'Rusałka żałobnik',
            capercaillie: 'Głuszec zwyczajny',
            chaffinch: 'Zięba zwyczajna',
            chamoisDouglasFir: 'Kozica północna',
            chamoisEuropeanLarch: 'Kozica północna',
            chamoisStonePine: 'Kozica północna',
            chanterelle: 'Pieprznik jadalny',
            commonPipistrelle: 'Karlik malutki',
            commonRaven: 'Kruk zwyczajny',
            commonToad: 'Ropucha szara',
            craneFly: 'Komarnica',
            digitalis: 'Naparstnica purpurowa',
            Edelweiss: 'Szarotka alpejska',
            eurasianJay: 'Sójka zwyczajna',
            eurasianMagpie: 'Sroka zwyczajna',
            europeanBadger: 'Borsuk europejski',
            europeanBison: 'Żubr europejski',
            europeanFatDormouse: 'Popielica szara',
            europeanHare: 'Zając szarak',
            europeanPolecat: 'Tchórz zwyczajny',
            europeanWildcat: 'Żbik europejski',
            fallowDeer: 'Daniel zwyczajny',
            fireFlies: 'Świetlik świętojański',
            fireSalamander: 'Salamandra plamista',
            flyAgaric: 'Muchomor czerwony',
            Gentian: 'Goryczka',
            gnat: 'Komar pospolity',
            goldenEagle: 'Orzeł przedni',
            goshawk: 'Jastrząb zwyczajny',
            greaterHorseshoeBat: 'Podkowiec duży',
            greatGreenBushCricket: 'Pasikonik zielony',
            greatSpottedWoodpecker: 'Dzięcioł duży',
            hedgehog: 'Jeż zachodni',
            largeTortoiseshell: 'Rusałka wierzbowiec',
            lynx: 'Ryś euroazjatycki',
            mapButterfly: 'Rusałka kratkowiec',
            mole: 'Kret europejski',
            moss: 'Mech',
            mountainHare: 'Zając bielak',
            nightingale: 'Słowik rdzawy',
            parasolMushroom: 'Czubajka kania',
            peacockButterfly: 'Rusałka pawik',
            pennyBun: 'Borowik szlachetny',
            phoebusApollo: 'Parnassius phoebus',
            pondTurtle: 'Żółw błotny',
            purpleEmperor: 'Mieniak tęczowiec',
            raccoon: 'Szop pracz',
            redDeer: 'Jeleń szlachetny',
            redFox: 'Lis rudy',
            redSquirrel: 'Wiewiórka pospolita',
            roeDeerBeech: 'Sarna europejska',
            roeDeerBirch: 'Sarna europejska',
            roeDeerHorseChestnut: 'Sarna europejska',
            roeDeerLinden: 'Sarna europejska',
            roeDeerSilverFir: 'Sarna europejska',
            savisPipistrelle: 'Przymroczek Saviego',
            silverWashedFritillary: 'Dostojka malinowiec',
            squeeker: 'Warchlak',
            squeekerWoodlandEdge: 'Warchlak',
            stagBeetle: 'Jelonek rogacz',
            steinbock: 'Koziorożec alpejski',
            stingingNettle: 'Pokrzywa zwyczajna',
            tawnyOwl: 'Puszczyk zwyczajny',
            treeFerns: 'Orlica pospolita',
            treeFrog: 'Rzekotka drzewna',
            violetCarpenterBee: 'Zadrzechnia fioletowa',
            waterVole: 'Karczownik ziemnowodny',
            wildBoar: 'Dzik euroazjatycki',
            wildBoarFemale: 'Dzik euroazjatycki (locha)',
            wildStrawberries: 'Poziomka pospolita',
            wolf: 'Wilk szary',
            woodAnt: 'Mrówka rudnica',
        },
        // Forest Shuffle: Dartmoor (base, Exmoor)
        dartmoor: {
            // Cave
            cave: 'Karty w jaskini',

            // Trees
            ash: 'Jesion wyniosły',
            blackAlder: 'Olsza czarna',
            crabApple: 'Jabłoń dzika',
            goatWillow: 'Wierzba iwa',
            moorBirch: 'Brzoza omszona',
            sessileOak: 'Dąb bezszypułkowy',

            // Shrubs
            commonGorse: 'Kolcolist zachodni',
            commonHazel: 'Leszczyna pospolita',
            commonHolly: 'Ostrokrzew kolczasty',
            elderBerry: 'Bez czarny',

            // Moors
            blanketBog: 'Torfowisko',
            fountainhead: 'Kaskada',
            highCoastalHeath: 'Wrzosowisko przybrzeżne',
            lowlandHeath: 'Wrzosowisko nizinne',
            rhosPasture: 'Pastwisko torfowe',
            ringCairn: 'Kurhan pierścieniowy',
            rivulet: 'Strumyk',
            tarrSteps: 'Tarr Steps',
            tor: 'Tor',
            universalMoor: 'Uniwersalne wrzosowisko',
            valleyMire: 'Bagno dolinowe',
            warrens: 'Nora',
            waxcapGrassland: 'Murawa wilgotnicowa',
            wetWoodland: 'Podmokłe tereny leśne',

            // Animals, mushrooms, plants — cards played onto trees, shrubs and moors
            adder: 'Żmija zygzakowata',
            addersTongue: 'Nasięźrzał pospolity',
            alcathoeBat: 'Nocek Alkatoe',
            bankVole: 'Nornica ruda',
            barnOwl: 'Płomykówka zwyczajna',
            beautifulDemoiselle: 'Świtezianka dziewica',
            beaver: 'Bóbr europejski',
            blackTailedGodwit: 'Rycyk',
            blueBerry: 'Borówka czarna',
            blueGroundBeetle: 'Biegacz pomarszczony',
            bogAsphodel: 'Łomka zachodnia',
            brandtsBat: 'Nocek Brandta',
            buzzard: 'Myszołów zwyczajny',
            capercaillie: 'Głuszec zwyczajny',
            commonLizard: 'Jaszczurka żyworodna',
            commonMoorhen: 'Kokoszka zwyczajna',
            commonNoctule: 'Borowiec wielki',
            commonPheasant: 'Bażant zwyczajny',
            commonTormentil: 'Pięciornik kurze ziele',
            cuckoo: 'Kukułka zwyczajna',
            curlew: 'Kulik wielki',
            dartfordWarbler: 'Pokrzewka kasztanowata',
            dartmoorBadger: 'Borsuk europejski z Dartmoor',
            dartmoorBlackRabbit: 'Królik europejski z Dartmoor',
            dartmoorPony: 'Koń domowy z Dartmoor',
            dartmoorSheep: 'Owca domowa z Dartmoor',
            daubentonsBat: 'Nocek rudy',
            dormouse: 'Popielica szara',
            emeraldDamselfly: 'Pałątka pospolita',
            exmoorPony: 'Kuc Exmoor',
            exmoorPonyFoal: 'Źrebak kuca Exmoor',
            fieldVole: 'Nornik bury',
            gnat: 'Komar',
            goldenRingedDamselfly: 'Szklarnik leśny',
            grassSnake: 'Zaskroniec zwyczajny',
            greatButterflyOrchid: 'Podkolan zielonawy',
            greaterWoodrush: 'Kosmatka olbrzymia',
            greyHeron: 'Czapla siwa',
            greyWagtail: 'Pliszka górska',
            harvestMouse: 'Badylarka pospolita',
            heather: 'Wrzos zwyczajny',
            keeledSkimmer: 'Lecicha mała',
            lakeFly: 'Ochotkowate',
            meadowPipit: 'Świergotek łąkowy',
            meadowsweet: 'Wiązówka błotna',
            moorFrog: 'Żaba moczarowa',
            mountainBumblebee: 'Bombus monticola',
            natterjackToad: 'Ropucha paskówka',
            nuthatch: 'Kowalik zwyczajny',
            otter: 'Wydra europejska',
            peregrineFalcon: 'Sokół wędrowny',
            piedFlycatcher: 'Muchołówka żałobna',
            redRubyDevons: 'Brytyjskie czerwone bydło domowe',
            roeDeerAsh: 'Sarna europejska',
            roeDeerBlackAlder: 'Sarna europejska',
            roeDeerCrabApple: 'Sarna europejska',
            roeDeerMoorBirch: 'Sarna europejska',
            roeDeerSessileOak: 'Sarna europejska',
            royalFern: 'Długosz królewski',
            serotineBat: 'Mroczek późny',
            shrew: 'Rzęsorek mniejszy',
            smallRedDamselfly: 'Ceriagrion tenellum',
            smoothSnake: 'Gniewosz plamisty',
            southernDamselfly: 'Coenagrion Mercuriale',
            sundew: 'Rosiczka',
            treecreeper: 'Pełzacz leśny',
            wartyNewt: 'Traszka grzebieniasta',
            waterSoldiers: 'Osoka aloesowata',
            wheatear: 'Białorzytka',
            whiskeredBat: 'Nocek wąsatek',
            woodMouse: 'Myszarka zaroślowa',
        },
    },
    // Attached-card labels, per game, keyed by card id.
    // A string is the single label; an object is keyed by attachedCards[].target,
    // where '<target>.alt' is used when the entry's whenExpansionOff expansion is disabled.
    attached: {
        forest: {
            // Trees
            silverFir: 'karty przy jodle',

            // Animals, mushrooms, plants — cards played onto trees, shrubs and moors
            beechMarten: 'w pełni zajęte drzewa',
            chaffinch: 'na buku',
            chamoisDouglasFir: 'symbole daglezji',
            chamoisEuropeanLarch: 'symbole modrzewia',
            chamoisStonePine: 'symbole limby',
            commonToad: 'dzieli miejsce',
            europeanBison: {
                beech: 'symbole buka',
                oak: 'symbole dębu',
            },
            europeanFatDormouse: 'naprzeciw nietoperza',
            europeanPolecat: 'sam przy drzewie lub krzewie',
            nightingale: 'na krzewie',
            redSquirrel: 'na dębie',
            roeDeerBeech: 'liczba symboli buka',
            roeDeerBirch: 'liczba symboli brzozy',
            roeDeerHorseChestnut: 'liczba symboli kasztanowca',
            roeDeerLinden: 'liczba symboli lipy',
            roeDeerSilverFir: 'liczba symboli jodły',
            violetCarpenterBee: {
                birch: 'przy brzozie',
                beech: 'przy buku',
                douglasFir: 'przy daglezji',
                oak: 'przy dębie',
                linden: 'przy lipie',
                horseChestnut: 'przy kasztanowcu',
                silverFir: 'przy jodle',
                sycamore: 'przy platanie',
                sapling: 'przy sadzonce',
                europeanLarch: 'przy modrzewiu',
                stonePine: 'przy limbie',
            },
        },
        dartmoor: {
            // Cave
            cave: '5 punktów na koniec gry',

            // Trees
            ash: {
                blackAlder: 'liczba symboli olszy czarnej',
            },
            crabApple: 'w pełni zajęta',

            // Moors
            rivulet: {
                goatWillow: 'liczba symboli wierzby iwy',
            },

            // Animals, mushrooms, plants — cards played onto trees, shrubs and moors
            addersTongue: {
                blanketBog: 'pod torfowiskiem',
            },
            barnOwl: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            blackTailedGodwit: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            blueBerry: {
                blanketBog: 'pod torfowiskiem',
            },
            bogAsphodel: {
                blanketBog: 'pod torfowiskiem',
            },
            buzzard: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            commonMoorhen: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            commonTormentil: {
                blanketBog: 'pod torfowiskiem',
            },
            curlew: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            dartfordWarbler: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            dormouse: 'naprzeciw nietoperza',
            greatButterflyOrchid: {
                blanketBog: 'pod torfowiskiem',
            },
            greaterWoodrush: {
                blanketBog: 'pod torfowiskiem',
            },
            greyHeron: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            greyWagtail: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            heather: {
                blanketBog: 'pod torfowiskiem',
            },
            meadowPipit: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            meadowsweet: {
                blanketBog: 'pod torfowiskiem',
                moor: 'pod innym wrzosowiskiem',
            },
            nuthatch: 'przy w pełni zajętym drzewie lub krzewie',
            peregrineFalcon: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            piedFlycatcher: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
            },
            roeDeerAsh: {
                ash: 'liczba symboli jesionu',
            },
            roeDeerBlackAlder: {
                blackAlder: 'liczba symboli olszy czarnej',
            },
            roeDeerCrabApple: {
                crabApple: 'liczba symboli jabłoni dzikiej',
            },
            roeDeerMoorBirch: {
                moorBirch: 'liczba symboli brzozy omszonej',
            },
            roeDeerSessileOak: {
                sessileOak: 'liczba symboli dębu bezszypułkowego',
            },
            royalFern: {
                blanketBog: 'pod torfowiskiem',
            },
            smoothSnake: {
                moorBirch: 'liczba symboli brzozy omszonej',
            },
            sundew: {
                blanketBog: 'pod torfowiskiem',
            },
            waterSoldiers: {
                blanketBog: 'pod torfowiskiem',
            },
            wheatear: {
                highCoastalHeath: 'na wrzosowisku przybrzeżnym',
                moor: 'na innym wrzosowisku',
                'moor.alt': 'na wrzosowisku',
            },
        },
    },
};
