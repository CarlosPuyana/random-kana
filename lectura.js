const hiraganaWord = document.getElementById('hiraganaWord');
const userInput = document.getElementById('userInput');
const checkButton = document.getElementById('checkButton');
const feedback = document.getElementById('feedback');
const significadoDisplay = document.createElement('div');
significadoDisplay.classList.add('significado-display');
hiraganaWord.parentNode.insertBefore(significadoDisplay, hiraganaWord);

const palabrasHiraganas = [
    { hiragana: 'あいさつ', lectura: 'aisatsu', significado: 'saludo' },
    { hiragana: 'あさ', lectura: 'asa', significado: 'mañana (temprano)' },
    { hiragana: 'あさごはん', lectura: 'asagohan', significado: 'desayuno' },
    { hiragana: 'あした', lectura: 'ashita', significado: 'mañana (día siguiente)' },
    { hiragana: 'ありがとう', lectura: 'arigatou', significado: 'gracias' },
    { hiragana: 'いいえ', lectura: 'iie', significado: 'no' },
    { hiragana: 'いえ', lectura: 'ie', significado: 'casa' },
    { hiragana: 'いく', lectura: 'iku', significado: 'ir' },
    { hiragana: 'いま', lectura: 'ima', significado: 'ahora' },
    { hiragana: 'おおきい', lectura: 'ookii', significado: 'grande' },
    { hiragana: 'おはよう', lectura: 'ohayou', significado: 'buenos días' },
    { hiragana: 'おかあさん', lectura: 'okaasan', significado: 'madre' },
    { hiragana: 'おとうさん', lectura: 'otousan', significado: 'padre' },
    { hiragana: 'おちゃ', lectura: 'ocha', significado: 'té' },
    { hiragana: 'おなじ', lectura: 'onaji', significado: 'igual' },
    { hiragana: 'かいしゃ', lectura: 'kaisha', significado: 'empresa' },
    { hiragana: 'がっこう', lectura: 'gakkou', significado: 'escuela' },
    { hiragana: 'かさ', lectura: 'kasa', significado: 'paraguas' },
    { hiragana: 'かぞく', lectura: 'kazoku', significado: 'familia' },
    { hiragana: 'かわ', lectura: 'kawa', significado: 'río' },
    { hiragana: 'きいろ', lectura: 'kiiro', significado: 'amarillo' },
    { hiragana: 'きょう', lectura: 'kyou', significado: 'hoy' },
    { hiragana: 'きょうしつ', lectura: 'kyoushitsu', significado: 'aula' },
    { hiragana: 'ぎんこう', lectura: 'ginkou', significado: 'banco (institución)' },
    { hiragana: 'くつ', lectura: 'kutsu', significado: 'zapatos' },
    { hiragana: 'くる', lectura: 'kuru', significado: 'venir' },
    { hiragana: 'けっこん', lectura: 'kekkon', significado: 'matrimonio' },
    { hiragana: 'けんこう', lectura: 'kenkou', significado: 'salud' },
    { hiragana: 'こうえん', lectura: 'kouen', significado: 'parque' },
    { hiragana: 'ここ', lectura: 'koko', significado: 'aquí' },
    { hiragana: 'ことば', lectura: 'kotoba', significado: 'palabra' },
    { hiragana: 'こんしゅう', lectura: 'konshuu', significado: 'esta semana' },
    { hiragana: 'こんばんは', lectura: 'konbanwa', significado: 'buenas noches' },
    { hiragana: 'さかな', lectura: 'sakana', significado: 'pescado' },
    { hiragana: 'さようなら', lectura: 'sayounara', significado: 'adiós' },
    { hiragana: 'さんぽ', lectura: 'sanpo', significado: 'paseo' },
    { hiragana: 'しお', lectura: 'shio', significado: 'sal' },
    { hiragana: 'しごと', lectura: 'shigoto', significado: 'trabajo' },
    { hiragana: 'じしょ', lectura: 'jisho', significado: 'diccionario' },
    { hiragana: 'しゃしん', lectura: 'shashin', significado: 'fotografía' },
    { hiragana: 'じてんしゃ', lectura: 'jitensha', significado: 'bicicleta' },
    { hiragana: 'しんかんせん', lectura: 'shinkansen', significado: 'tren bala' },
    { hiragana: 'すき', lectura: 'suki', significado: 'gustar' },
    { hiragana: 'すこし', lectura: 'sukoshi', significado: 'un poco' },
    { hiragana: 'すずしい', lectura: 'suzushii', significado: 'fresco' },
    { hiragana: 'せんせい', lectura: 'sensei', significado: 'profesor' },
    { hiragana: 'ぜんぶ', lectura: 'zenbu', significado: 'todo' },
    { hiragana: 'そうじ', lectura: 'souji', significado: 'limpieza' },
    { hiragana: 'そと', lectura: 'soto', significado: 'afuera' },
    { hiragana: 'たべる', lectura: 'taberu', significado: 'comer' },
    { hiragana: 'たんじょうび', lectura: 'tanjoubi', significado: 'cumpleaños' },
    { hiragana: 'だいがく', lectura: 'daigaku', significado: 'universidad' },
    { hiragana: 'だいじょうぶ', lectura: 'daijoubu', significado: 'estar bien' },
    { hiragana: 'たまご', lectura: 'tamago', significado: 'huevo' },
    { hiragana: 'ちかてつ', lectura: 'chikatetsu', significado: 'metro (subterráneo)' },
    { hiragana: 'ちず', lectura: 'chizu', significado: 'mapa' },
    { hiragana: 'つくえ', lectura: 'tsukue', significado: 'escritorio' },
    { hiragana: 'つめたい', lectura: 'tsumetai', significado: 'frío (al tacto)' },
    { hiragana: 'てがみ', lectura: 'tegami', significado: 'carta' },
    { hiragana: 'でんき', lectura: 'denki', significado: 'electricidad' },
    { hiragana: 'でんしゃ', lectura: 'densha', significado: 'tren' },
    { hiragana: 'とけい', lectura: 'tokei', significado: 'reloj' },
    { hiragana: 'どこ', lectura: 'doko', significado: 'dónde' },
    { hiragana: 'ともだち', lectura: 'tomodachi', significado: 'amigo' },
    { hiragana: 'とり', lectura: 'tori', significado: 'pájaro' },
    { hiragana: 'なまえ', lectura: 'namae', significado: 'nombre' },
    { hiragana: 'にほん', lectura: 'nihon', significado: 'Japón' },
    { hiragana: 'にもつ', lectura: 'nimotsu', significado: 'equipaje' },
    { hiragana: 'ねこ', lectura: 'neko', significado: 'gato' },
    { hiragana: 'のむ', lectura: 'nomu', significado: 'beber' },
    { hiragana: 'はい', lectura: 'hai', significado: 'sí' },
    { hiragana: 'はし', lectura: 'hashi', significado: 'palillos' },
    { hiragana: 'はな', lectura: 'hana', significado: 'flor' },
    { hiragana: 'ひと', lectura: 'hito', significado: 'persona' },
    { hiragana: 'ふく', lectura: 'fuku', significado: 'ropa' },
    { hiragana: 'へや', lectura: 'heya', significado: 'habitación' },
    { hiragana: 'ほん', lectura: 'hon', significado: 'libro' },
    { hiragana: 'まいにち', lectura: 'mainichi', significado: 'todos los días' },
    { hiragana: 'みず', lectura: 'mizu', significado: 'agua' },
    { hiragana: 'みせ', lectura: 'mise', significado: 'tienda' },
    { hiragana: 'むずかしい', lectura: 'muzukashii', significado: 'difícil' },
    { hiragana: 'もんだい', lectura: 'mondai', significado: 'problema' },
    { hiragana: 'やすい', lectura: 'yasui', significado: 'barato' },
    { hiragana: 'やさい', lectura: 'yasai', significado: 'verdura' },
    { hiragana: 'ゆき', lectura: 'yuki', significado: 'nieve' },
    { hiragana: 'よる', lectura: 'yoru', significado: 'noche' },
    { hiragana: 'らいねん', lectura: 'rainen', significado: 'el próximo año' },
    { hiragana: 'りんご', lectura: 'ringo', significado: 'manzana' },
    { hiragana: 'れいぞうこ', lectura: 'reizouko', significado: 'refrigerador' },
    { hiragana: 'わたし', lectura: 'watashi', significado: 'yo' },
];
let currentWordIndex = -1;

// Función para mostrar una palabra aleatoria
function mostrarPalabra() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * palabrasHiraganas.length);
    } while (newIndex === currentWordIndex);

    currentWordIndex = newIndex;
    hiraganaWord.textContent = palabrasHiraganas[currentWordIndex].hiragana;
    significadoDisplay.textContent = palabrasHiraganas[currentWordIndex].significado;

    // Añadir Tooltip al Hiragana
    hiraganaWord.setAttribute('title', palabrasHiraganas[currentWordIndex].lectura);
}

// Evento para comprobar la lectura ingresada
function comprobarRespuesta() {
    const userAnswer = userInput.value.trim().toLowerCase();
    const correctAnswer = palabrasHiraganas[currentWordIndex].lectura;

    if (userAnswer === correctAnswer) {
        feedback.textContent = '¡Correcto!';
        feedback.style.color = 'green';
        userInput.value = ''; // Limpiar el input
        mostrarPalabra(); // Mostrar una nueva palabra
    } else {
        feedback.textContent = 'Incorrecto. Inténtalo de nuevo.';
        feedback.style.color = 'red';
    }
}

checkButton.addEventListener('click', comprobarRespuesta);

// Evento para el teclado (Enter como Comprobar)
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        comprobarRespuesta();
    }
});

// Iniciar con una palabra al cargar la página
mostrarPalabra();
