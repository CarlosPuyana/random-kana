const lecciones = [];

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

    { hiragana: 'た', phoneme: 'ta', level: 2 },
    { hiragana: 'ち', phoneme: 'chi', level: 2 },
    { hiragana: 'つ', phoneme: 'tsu', level: 2 },
    { hiragana: 'て', phoneme: 'te', level: 2 },
    { hiragana: 'と', phoneme: 'to', level: 2 },
    { hiragana: 'だ', phoneme: 'da', level: 2 },
    { hiragana: 'ぢ', phoneme: 'ji', level: 2 },
    { hiragana: 'づ', phoneme: 'zu', level: 2 },
    { hiragana: 'で', phoneme: 'de', level: 2 },
    { hiragana: 'ど', phoneme: 'do', level: 2 },
    { hiragana: 'な', phoneme: 'na', level: 2 },
    { hiragana: 'に', phoneme: 'ni', level: 2 },
    { hiragana: 'ぬ', phoneme: 'nu', level: 2 },
    { hiragana: 'ね', phoneme: 'ne', level: 2 },
    { hiragana: 'の', phoneme: 'no', level: 2 },
    { hiragana: 'は', phoneme: 'ha', level: 2 },
    { hiragana: 'ひ', phoneme: 'hi', level: 2 },
    { hiragana: 'ふ', phoneme: 'fu', level: 2 },
    { hiragana: 'へ', phoneme: 'he', level: 2 },
    { hiragana: 'ほ', phoneme: 'ho', level: 2 },
    { hiragana: 'ば', phoneme: 'ba', level: 2 },
    { hiragana: 'び', phoneme: 'bi', level: 2 },
    { hiragana: 'ぶ', phoneme: 'bu', level: 2 },
    { hiragana: 'べ', phoneme: 'be', level: 2 },
    { hiragana: 'ぼ', phoneme: 'bo', level: 2 },
    { hiragana: 'ぱ', phoneme: 'pa', level: 2 },
    { hiragana: 'ぴ', phoneme: 'pi', level: 2 },
    { hiragana: 'ぷ', phoneme: 'pu', level: 2 },
    { hiragana: 'ぺ', phoneme: 'pe', level: 2 },
    { hiragana: 'ぽ', phoneme: 'po', level: 2 },

    { hiragana: 'ま', phoneme: 'ma', level: 3 },
    { hiragana: 'み', phoneme: 'mi', level: 3 },
    { hiragana: 'む', phoneme: 'mu', level: 3 },
    { hiragana: 'め', phoneme: 'me', level: 3 },
    { hiragana: 'も', phoneme: 'mo', level: 3 },
    { hiragana: 'や', phoneme: 'ya', level: 3 },
    { hiragana: 'ゆ', phoneme: 'yu', level: 3 },
    { hiragana: 'よ', phoneme: 'yo', level: 3 },
    { hiragana: 'ら', phoneme: 'ra', level: 3 },
    { hiragana: 'り', phoneme: 'ri', level: 3 },
    { hiragana: 'る', phoneme: 'ru', level: 3 },
    { hiragana: 'れ', phoneme: 're', level: 3 },
    { hiragana: 'ろ', phoneme: 'ro', level: 3 },
    { hiragana: 'わ', phoneme: 'wa', level: 3 },
    { hiragana: 'を', phoneme: 'wo', level: 3 },
    { hiragana: 'ん', phoneme: 'n', level: 3 },
];


function updateLecciones(leccionClicked) {
    const button = document.querySelector(`.class-button[data-level='${leccionClicked}']`);
    if (leccionClicked === 'ALL') {
        // Si ya están todas las lecciones activas, vaciarlas
        if (lecciones.length === hiraganas.length) {
            lecciones.length = 0;
            resetButtonStyles();
            document.querySelector(".class-button[data-level='L1']").classList.add("active");
            updateLecciones('L1');
        } else {
            lecciones.length = 0;
            lecciones.push(...hiraganas);
            resetButtonStyles();
            button.classList.add("active");
        }
    } else {
        let leccion = hiraganas.filter(hiragana => hiragana.level === parseInt(leccionClicked.replace('L', '')));
        
        // Verificar si las lecciones ya están en la lista
        if (lecciones.some(k => leccion.includes(k))) {
            lecciones.splice(0, lecciones.length, ...lecciones.filter(k => !leccion.includes(k)));
            button.classList.remove("active");
        } else {
            lecciones.push(...leccion);
            button.classList.add("active");
        }
    }

    // Si no hay lecciones, activar L1 por defecto
    if (lecciones.length === 0) {
        updateLecciones('L1');
    }
    
    // Si están activados L1, L2 y L3, activar ALL y desactivar los demás
    const l1Active = document.querySelector(".class-button[data-level='L1']").classList.contains("active");
    const l2Active = document.querySelector(".class-button[data-level='L2']").classList.contains("active");
    const l3Active = document.querySelector(".class-button[data-level='L3']").classList.contains("active");
    if (l1Active && l2Active && l3Active) {
        resetButtonStyles();
        document.querySelector(".class-button[data-level='ALL']").classList.add("active");
        lecciones.length = 0;
        lecciones.push(...hiraganas);
    }
    
    console.log(lecciones);
}

function resetButtonStyles() {
    document.querySelectorAll('.class-button').forEach(button => {
        button.classList.remove("active");
    });
}

document.querySelector('.button-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('class-button')) {
        const buttonText = event.target.textContent;
        updateLecciones(buttonText);
    }
});;

document.querySelector(".class-button[data-level='L1']").classList.add("active");
updateLecciones('L1');

const buttonKata = document.getElementById('toggleButtonKata');
buttonKata.addEventListener('click', () => {
    const basePath = window.location.pathname.includes('/random-kana') ? '/random-kana' : '';
    window.location.href = `${basePath}/kata/inicio/inicio_kata.html`;
});

const buttonVocab = document.getElementById('toggleButtonVocab');
buttonVocab.addEventListener('click', () => {
    const basePath = window.location.pathname.includes('/random-kana') ? '/random-kana' : '';
    window.location.href = `${basePath}/vocab/inicio/vocab.html`;
});