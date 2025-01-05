const lecciones = [];

const leccion1 = [
    { phoneme: 'a', hiragana: 'あ' },
    { phoneme: 'i', hiragana: 'い' },
    { phoneme: 'u', hiragana: 'う' },
    { phoneme: 'e', hiragana: 'え' },
    { phoneme: 'o', hiragana: 'お' },

    { phoneme: 'ka', hiragana: 'か' },
    { phoneme: 'ki', hiragana: 'き' },
    { phoneme: 'ku', hiragana: 'く' },
    { phoneme: 'ke', hiragana: 'け' },
    { phoneme: 'ko', hiragana: 'こ' },

    { phoneme: 'ga', hiragana: 'が' },
    { phoneme: 'gi', hiragana: 'ぎ' },
    { phoneme: 'gu', hiragana: 'ぐ' },
    { phoneme: 'ge', hiragana: 'げ' },
    { phoneme: 'go', hiragana: 'ご' },

    { phoneme: 'sa', hiragana: 'さ' },
    { phoneme: 'shi', hiragana: 'し' },
    { phoneme: 'su', hiragana: 'す' },
    { phoneme: 'se', hiragana: 'せ' },
    { phoneme: 'so', hiragana: 'そ' },

    { phoneme: 'za', hiragana: 'ざ' },
    { phoneme: 'ji', hiragana: 'じ' },
    { phoneme: 'zu', hiragana: 'ず' },
    { phoneme: 'ze', hiragana: 'ぜ' },
    { phoneme: 'zo', hiragana: 'ぞ' },
];

const leccion2 = [
    { phoneme: 'ta', hiragana: 'た' },
    { phoneme: 'ti', hiragana: 'ち' },
    { phoneme: 'tu', hiragana: 'つ' },
    { phoneme: 'te', hiragana: 'て' },
    { phoneme: 'to', hiragana: 'と' },

    { phoneme: 'na', hiragana: 'な' },
    { phoneme: 'ni', hiragana: 'に' },
    { phoneme: 'nu', hiragana: 'ぬ' },
    { phoneme: 'ne', hiragana: 'ね' },
    { phoneme: 'no', hiragana: 'の' },

    { phoneme: 'ha', hiragana: 'は' },
    { phoneme: 'hi', hiragana: 'ひ' },
    { phoneme: 'fu', hiragana: 'ふ' },
    { phoneme: 'he', hiragana: 'へ' },
    { phoneme: 'ho', hiragana: 'ほ' },
];

const leccion3 = [
    { phoneme: 'ma', hiragana: 'ま' },
    { phoneme: 'mi', hiragana: 'み' },
    { phoneme: 'mu', hiragana: 'む' },
    { phoneme: 'me', hiragana: 'め' },
    { phoneme: 'mo', hiragana: 'も' },

    { phoneme: 'ya', hiragana: 'や' },
    { phoneme: 'yu', hiragana: 'ゆ' },
    { phoneme: 'yo', hiragana: 'よ' },

    { phoneme: 'ra', hiragana: 'ら' },
    { phoneme: 'ri', hiragana: 'り' },
    { phoneme: 'ru', hiragana: 'る' },
    { phoneme: 're', hiragana: 'れ' },
    { phoneme: 'ro', hiragana: 'ろ' },

    { phoneme: 'wa', hiragana: 'わ' },
    { phoneme: 'wi', hiragana: 'ゐ' },
    { phoneme: 'we', hiragana: 'ゑ' },
    { phoneme: 'wo', hiragana: 'を' },

    { phoneme: 'n', hiragana: 'ん' },
];

function updateLecciones(leccion) {
    lecciones.length = 0;
    switch (leccion) {
        case 'L1':
            lecciones.push(...leccion1);
            break;
        case 'L2':
            lecciones.push(...leccion2);
            break;
        case 'L3':
            lecciones.push(...leccion3);
            break;
        case 'ALL':
            lecciones.push(...leccion1, ...leccion2, ...leccion3);
            break;
        default:
            lecciones.push(...leccion1); // Cargar leccion1 por defecto
            break;
    }
    console.log(lecciones);
}

document.querySelector('.button-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('class-button')) {
        const buttonText = event.target.textContent;
        updateLecciones(buttonText);
    }
});

updateLecciones('L1');
