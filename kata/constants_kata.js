const lecciones = [];
let v3 = false;

const leccion1 = [
    { phoneme: 'a', katakana: 'ア' },
    { phoneme: 'i', katakana: 'イ' },
    { phoneme: 'u', katakana: 'ウ' },
    { phoneme: 'e', katakana: 'エ' },
    { phoneme: 'o', katakana: 'オ' },

    { phoneme: 'ka', katakana: 'カ' },
    { phoneme: 'ki', katakana: 'キ' },
    { phoneme: 'ku', katakana: 'ク' },
    { phoneme: 'ke', katakana: 'ケ' },
    { phoneme: 'ko', katakana: 'コ' },

    { phoneme: 'ga', katakana: 'ガ' },
    { phoneme: 'gi', katakana: 'ギ' },
    { phoneme: 'gu', katakana: 'グ' },
    { phoneme: 'ge', katakana: 'ゲ' },
    { phoneme: 'go', katakana: 'ゴ' },

    { phoneme: 'sa', katakana: 'サ' },
    { phoneme: 'shi', katakana: 'シ' },
    { phoneme: 'su', katakana: 'ス' },
    { phoneme: 'se', katakana: 'セ' },
    { phoneme: 'so', katakana: 'ソ' },

    { phoneme: 'za', katakana: 'ザ' },
    { phoneme: 'ji', katakana: 'ジ' },
    { phoneme: 'zu', katakana: 'ズ' },
    { phoneme: 'ze', katakana: 'ゼ' },
    { phoneme: 'zo', katakana: 'ゾ' },
];

const leccion2 = [
    { phoneme: 'ta', katakana: 'タ' },
    { phoneme: 'chi', katakana: 'チ' },
    { phoneme: 'tsu', katakana: 'ツ' },
    { phoneme: 'te', katakana: 'テ' },
    { phoneme: 'to', katakana: 'ト' },

    { phoneme: 'na', katakana: 'ナ' },
    { phoneme: 'ni', katakana: 'ニ' },
    { phoneme: 'nu', katakana: 'ヌ' },
    { phoneme: 'ne', katakana: 'ネ' },
    { phoneme: 'no', katakana: 'ノ' },

    { phoneme: 'ha', katakana: 'ハ' },
    { phoneme: 'hi', katakana: 'ヒ' },
    { phoneme: 'fu', katakana: 'フ' },
    { phoneme: 'he', katakana: 'ヘ' },
    { phoneme: 'ho', katakana: 'ホ' },
];

const leccion3 = [
    { phoneme: 'ma', katakana: 'マ' },
    { phoneme: 'mi', katakana: 'ミ' },
    { phoneme: 'mu', katakana: 'ム' },
    { phoneme: 'me', katakana: 'メ' },
    { phoneme: 'mo', katakana: 'モ' },

    { phoneme: 'ya', katakana: 'ヤ' },
    { phoneme: 'yu', katakana: 'ユ' },
    { phoneme: 'yo', katakana: 'ヨ' },

    { phoneme: 'ra', katakana: 'ラ' },
    { phoneme: 'ri', katakana: 'リ' },
    { phoneme: 'ru', katakana: 'ル' },
    { phoneme: 're', katakana: 'レ' },
    { phoneme: 'ro', katakana: 'ロ' },

    { phoneme: 'wa', katakana: 'ワ' },
    { phoneme: 'wi', katakana: 'ヰ' },
    { phoneme: 'we', katakana: 'ヱ' },
    { phoneme: 'wo', katakana: 'ヲ' },

    { phoneme: 'n', katakana: 'ン' },
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
    window.location.href = '/../../index.html';
});