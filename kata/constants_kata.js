const lecciones = [];

const katakanas = [
    { katakana: 'ア', phoneme: 'a', level: 1 },
    { katakana: 'イ', phoneme: 'i', level: 1 },
    { katakana: 'ウ', phoneme: 'u', level: 1 },
    { katakana: 'エ', phoneme: 'e', level: 1 },
    { katakana: 'オ', phoneme: 'o', level: 1 },
    { katakana: 'カ', phoneme: 'ka', level: 1 },
    { katakana: 'キ', phoneme: 'ki', level: 1 },
    { katakana: 'ク', phoneme: 'ku', level: 1 },
    { katakana: 'ケ', phoneme: 'ke', level: 1 },
    { katakana: 'コ', phoneme: 'ko', level: 1 },
    { katakana: 'ガ', phoneme: 'ga', level: 1 },
    { katakana: 'ギ', phoneme: 'gi', level: 1 },
    { katakana: 'グ', phoneme: 'gu', level: 1 },
    { katakana: 'ゲ', phoneme: 'ge', level: 1 },
    { katakana: 'ゴ', phoneme: 'go', level: 1 },
    { katakana: 'サ', phoneme: 'sa', level: 1 },
    { katakana: 'シ', phoneme: 'shi', level: 1 },
    { katakana: 'ス', phoneme: 'su', level: 1 },
    { katakana: 'セ', phoneme: 'se', level: 1 },
    { katakana: 'ソ', phoneme: 'so', level: 1 },
    { katakana: 'ザ', phoneme: 'za', level: 1 },
    { katakana: 'ジ', phoneme: 'ji', level: 1 },
    { katakana: 'ズ', phoneme: 'zu', level: 1 },
    { katakana: 'ゼ', phoneme: 'ze', level: 1 },
    { katakana: 'ゾ', phoneme: 'zo', level: 1 },

    { katakana: 'タ', phoneme: 'ta', level: 2 },
    { katakana: 'チ', phoneme: 'chi', level: 2 },
    { katakana: 'ツ', phoneme: 'tsu', level: 2 },
    { katakana: 'テ', phoneme: 'te', level: 2 },
    { katakana: 'ト', phoneme: 'to', level: 2 },
    { katakana: 'ダ', phoneme: 'da', level: 2 },
    { katakana: 'ヂ', phoneme: 'ji', level: 2 },
    { katakana: 'ヅ', phoneme: 'zu', level: 2 },
    { katakana: 'デ', phoneme: 'de', level: 2 },
    { katakana: 'ド', phoneme: 'do', level: 2 },
    { katakana: 'ナ', phoneme: 'na', level: 2 },
    { katakana: 'ニ', phoneme: 'ni', level: 2 },
    { katakana: 'ヌ', phoneme: 'nu', level: 2 },
    { katakana: 'ネ', phoneme: 'ne', level: 2 },
    { katakana: 'ノ', phoneme: 'no', level: 2 },
    { katakana: 'ハ', phoneme: 'ha', level: 2 },
    { katakana: 'ヒ', phoneme: 'hi', level: 2 },
    { katakana: 'フ', phoneme: 'fu', level: 2 },
    { katakana: 'ヘ', phoneme: 'he', level: 2 },
    { katakana: 'ホ', phoneme: 'ho', level: 2 },
    { katakana: 'バ', phoneme: 'ba', level: 2 },
    { katakana: 'ビ', phoneme: 'bi', level: 2 },
    { katakana: 'ブ', phoneme: 'bu', level: 2 },
    { katakana: 'ベ', phoneme: 'be', level: 2 },
    { katakana: 'ボ', phoneme: 'bo', level: 2 },
    { katakana: 'パ', phoneme: 'pa', level: 2 },
    { katakana: 'ピ', phoneme: 'pi', level: 2 },
    { katakana: 'プ', phoneme: 'pu', level: 2 },
    { katakana: 'ペ', phoneme: 'pe', level: 2 },
    { katakana: 'ポ', phoneme: 'po', level: 2 },

    { katakana: 'マ', phoneme: 'ma', level: 3 },
    { katakana: 'ミ', phoneme: 'mi', level: 3 },
    { katakana: 'ム', phoneme: 'mu', level: 3 },
    { katakana: 'メ', phoneme: 'me', level: 3 },
    { katakana: 'モ', phoneme: 'mo', level: 3 },
    { katakana: 'ヤ', phoneme: 'ya', level: 3 },
    { katakana: 'ユ', phoneme: 'yu', level: 3 },
    { katakana: 'ヨ', phoneme: 'yo', level: 3 },
    { katakana: 'ラ', phoneme: 'ra', level: 3 },
    { katakana: 'リ', phoneme: 'ri', level: 3 },
    { katakana: 'ル', phoneme: 'ru', level: 3 },
    { katakana: 'レ', phoneme: 're', level: 3 },
    { katakana: 'ロ', phoneme: 'ro', level: 3 },
    { katakana: 'ワ', phoneme: 'wa', level: 3 },
    { katakana: 'ヲ', phoneme: 'wo', level: 3 },
    { katakana: 'ン', phoneme: 'n', level: 3 },
];


function updateLecciones(leccionClicked) {
    lecciones.length = 0;
    let leccion = [];
    switch (leccionClicked) {
        case 'L1':
            leccion = katakanas.filter(katakanas => katakanas.level === 1);
            lecciones.push(...leccion);
            break;
        case 'L2':
            leccion = katakanas.filter(katakana => katakana.level === 2);
            lecciones.push(...leccion);
            break;
        case 'L3':
            leccion = katakanas.filter(katakana => katakana.level === 3);
            lecciones.push(...leccion);
            break;
        case 'ALL':
            lecciones.push(...katakanas);
            break;
        default:
            leccion = katakanas.filter(katakana => katakana.level === 1);
            lecciones.push(leccion); // Cargar level 1 por defecto
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

const buttonKata = document.getElementById('toggleButtonKata');
buttonKata.addEventListener('click', () => {
    const basePath = window.location.pathname.includes('/random-kana') ? '/random-kana' : '';
    window.location.href = `${basePath}/index.html`;
});