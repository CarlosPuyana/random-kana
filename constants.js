const lecciones = [];
let v3 = false;

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
    { phoneme: 'chi', hiragana: 'ち' },
    { phoneme: 'tsu', hiragana: 'つ' },
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
    { phoneme: 'wo', hiragana: 'を' },

    { phoneme: 'n', hiragana: 'ん' },
];

const hiraganas = [
    { hiragana: 'あ', phoneme: 'a', level: 1 },
    { hiragana: 'い', phoneme: 'i', level: 1 },
    { hiragana: 'う', phoneme: 'u', level: 1 },
    { hiragana: 'え', phoneme: 'e', level: 1 },
    { hiragana: 'お', phoneme: 'o', level: 1 },
    { hiragana: 'か', phoneme: 'ka', level: 1 },
    { hiragana: 'き', phoneme: 'ki', level: 1 },
    { hiragana: 'く', phoneme: 'ku', level: 1 },
    { hiragana: 'け', phoneme: 'ke', level: 1 },
    { hiragana: 'こ', phoneme: 'ko', level: 1 },
    { hiragana: 'が', phoneme: 'ga', level: 1 },
    { hiragana: 'ぎ', phoneme: 'gi', level: 1 },
    { hiragana: 'ぐ', phoneme: 'gu', level: 1 },
    { hiragana: 'げ', phoneme: 'ge', level: 1 },
    { hiragana: 'ご', phoneme: 'go', level: 1 },
    { hiragana: 'さ', phoneme: 'sa', level: 1 },
    { hiragana: 'し', phoneme: 'shi', level: 1 },
    { hiragana: 'す', phoneme: 'su', level: 1 },
    { hiragana: 'せ', phoneme: 'se', level: 1 },
    { hiragana: 'そ', phoneme: 'so', level: 1 },
    { hiragana: 'ざ', phoneme: 'za', level: 1 },
    { hiragana: 'じ', phoneme: 'ji', level: 1 },
    { hiragana: 'ず', phoneme: 'zu', level: 1 },
    { hiragana: 'ぜ', phoneme: 'ze', level: 1 },
    { hiragana: 'ぞ', phoneme: 'zo', level: 1 },
    { hiragana: 'た', phoneme: 'ta', level: 1 },
    { hiragana: 'ち', phoneme: 'chi', level: 1 },
    { hiragana: 'つ', phoneme: 'tsu', level: 1 },
    { hiragana: 'て', phoneme: 'te', level: 1 },
    { hiragana: 'と', phoneme: 'to', level: 1 },
    { hiragana: 'だ', phoneme: 'da', level: 1 },
    { hiragana: 'ぢ', phoneme: 'ji', level: 1 },
    { hiragana: 'づ', phoneme: 'zu', level: 1 },
    { hiragana: 'で', phoneme: 'de', level: 1 },
    { hiragana: 'ど', phoneme: 'do', level: 1 },
    { hiragana: 'な', phoneme: 'na', level: 1 },
    { hiragana: 'に', phoneme: 'ni', level: 1 },
    { hiragana: 'ぬ', phoneme: 'nu', level: 1 },
    { hiragana: 'ね', phoneme: 'ne', level: 1 },
    { hiragana: 'の', phoneme: 'no', level: 1 },
    { hiragana: 'は', phoneme: 'ha', level: 1 },
    { hiragana: 'ひ', phoneme: 'hi', level: 1 },
    { hiragana: 'ふ', phoneme: 'fu', level: 1 },
    { hiragana: 'へ', phoneme: 'he', level: 1 },
    { hiragana: 'ほ', phoneme: 'ho', level: 1 },
    { hiragana: 'ば', phoneme: 'ba', level: 1 },
    { hiragana: 'び', phoneme: 'bi', level: 1 },
    { hiragana: 'ぶ', phoneme: 'bu', level: 1 },
    { hiragana: 'べ', phoneme: 'be', level: 1 },
    { hiragana: 'ぼ', phoneme: 'bo', level: 1 },
    { hiragana: 'ぱ', phoneme: 'pa', level: 1 },
    { hiragana: 'ぴ', phoneme: 'pi', level: 1 },
    { hiragana: 'ぷ', phoneme: 'pu', level: 1 },
    { hiragana: 'ぺ', phoneme: 'pe', level: 1 },
    { hiragana: 'ぽ', phoneme: 'po', level: 1 },
    { hiragana: 'ま', phoneme: 'ma', level: 1 },
    { hiragana: 'み', phoneme: 'mi', level: 1 },
    { hiragana: 'む', phoneme: 'mu', level: 1 },
    { hiragana: 'め', phoneme: 'me', level: 1 },
    { hiragana: 'も', phoneme: 'mo', level: 1 },
    { hiragana: 'や', phoneme: 'ya', level: 1 },
    { hiragana: 'ゆ', phoneme: 'yu', level: 1 },
    { hiragana: 'よ', phoneme: 'yo', level: 1 },
    { hiragana: 'ら', phoneme: 'ra', level: 1 },
    { hiragana: 'り', phoneme: 'ri', level: 1 },
    { hiragana: 'る', phoneme: 'ru', level: 1 },
    { hiragana: 'れ', phoneme: 're', level: 1 },
    { hiragana: 'ろ', phoneme: 'ro', level: 1 },
    { hiragana: 'わ', phoneme: 'wa', level: 1 },
    { hiragana: 'を', phoneme: 'wo', level: 1 },
    { hiragana: 'ん', phoneme: 'n', level: 1 },
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

        if (v3) nuevoDesafio();
    }
});

updateLecciones('L1');

const buttonKata = document.getElementById('toggleButtonKata');
buttonKata.addEventListener('click', () => {
    const basePath = window.location.pathname.includes('/random-kana') ? '/random-kana' : '';
    window.location.href = `${basePath}/kata/inicio/inicio_kata.html`;
});