const vocabulary = {
    "Saludos": [
        { word: "こんにちは", romaji: "Konnichiwa", meaning: "Hola" },
        { word: "おはよう", romaji: "Ohayou", meaning: "Buenos días" },
        { word: "こんばんは", romaji: "Konbanwa", meaning: "Buenas noches" },
        { word: "さようなら", romaji: "Sayounara", meaning: "Adiós" },
        { word: "ありがとう", romaji: "Arigatou", meaning: "Gracias" },
        { word: "すみません", romaji: "Sumimasen", meaning: "Disculpe" },
        { word: "おやすみ", romaji: "Oyasumi", meaning: "Buenas noches (al ir a dormir)" },
        { word: "いってきます", romaji: "Ittekimasu", meaning: "Me voy" },
        { word: "いってらっしゃい", romaji: "Itterasshai", meaning: "Que te vaya bien" },
        { word: "ただいま", romaji: "Tadaima", meaning: "He vuelto" },
        { word: "おかえり", romaji: "Okaeri", meaning: "Bienvenido de vuelta" },
        { word: "はじめまして", romaji: "Hajimemashite", meaning: "Mucho gusto" },
        { word: "どうぞよろしく", romaji: "Douzo yoroshiku", meaning: "Encantado de conocerte" },
        { word: "お元気ですか", romaji: "Ogenki desu ka", meaning: "¿Cómo estás?" },
        { word: "元気です", romaji: "Genki desu", meaning: "Estoy bien" },
        { word: "いいえ", romaji: "Iie", meaning: "No" },
        { word: "はい", romaji: "Hai", meaning: "Sí" },
        { word: "お疲れ様です", romaji: "Otsukaresama desu", meaning: "Buen trabajo" },
        { word: "行ってきます", romaji: "Ittekimasu", meaning: "Me voy" },
        { word: "行ってらっしゃい", romaji: "Itterasshai", meaning: "Que te vaya bien" },
        { word: "お久しぶりです", romaji: "Ohisashiburi desu", meaning: "¡Cuánto tiempo sin verte!" }
    ],
    "Familia": [
        { word: "ちち", romaji: "Chichi", meaning: "Padre" },
        { word: "はは", romaji: "Haha", meaning: "Madre" },
        { word: "あに", romaji: "Ani", meaning: "Hermano mayor" },
        { word: "あね", romaji: "Ane", meaning: "Hermana mayor" },
        { word: "おとうさん", romaji: "Otousan", meaning: "Papá" },
        { word: "おかあさん", romaji: "Okaasan", meaning: "Mamá" },
        { word: "おとうと", romaji: "Otouto", meaning: "Hermano menor" },
        { word: "いもうと", romaji: "Imouto", meaning: "Hermana menor" },
        { word: "そふ", romaji: "Sofu", meaning: "Abuelo" },
        { word: "そぼ", romaji: "Sobo", meaning: "Abuela" },
        { word: "いとこ", romaji: "Itoko", meaning: "Primo/a" },
        { word: "おじ", romaji: "Oji", meaning: "Tío" },
        { word: "おば", romaji: "Oba", meaning: "Tía" },
        { word: "かぞく", romaji: "Kazoku", meaning: "Familia" },
        { word: "しんせき", romaji: "Shinseki", meaning: "Pariente" },
        { word: "つま", romaji: "Tsuma", meaning: "Esposa" },
        { word: "おっと", romaji: "Otto", meaning: "Esposo" },
        { word: "こども", romaji: "Kodomo", meaning: "Hijo/a" },
        { word: "まご", romaji: "Mago", meaning: "Nieto/a" },
        { word: "かぞく", romaji: "Kazoku", meaning: "Familia" }
    ],
    "Números": [
        { word: "いち", romaji: "Ichi", meaning: "Uno" },
        { word: "に", romaji: "Ni", meaning: "Dos" },
        { word: "さん", romaji: "San", meaning: "Tres" },
        { word: "し", romaji: "Shi", meaning: "Cuatro" },
        { word: "ご", romaji: "Go", meaning: "Cinco" },
        { word: "ろく", romaji: "Roku", meaning: "Seis" },
        { word: "しち", romaji: "Shichi", meaning: "Siete" },
        { word: "はち", romaji: "Hachi", meaning: "Ocho" },
        { word: "きゅう", romaji: "Kyuu", meaning: "Nueve" },
        { word: "じゅう", romaji: "Juu", meaning: "Diez" }
    ],
    "Profesiones": [
        { word: "せんせい", romaji: "Sensei", meaning: "Profesor/a" },
        { word: "いしゃ", romaji: "Isha", meaning: "Médico" },
        { word: "エンジニア", romaji: "Enjinia", meaning: "Ingeniero" },
        { word: "かいしゃいん", romaji: "Kaishain", meaning: "Empleado de oficina" },
        { word: "こうむいん", romaji: "Koumuin", meaning: "Funcionario público" },
        { word: "うんてんしゅ", romaji: "Untenshu", meaning: "Conductor" },
        { word: "けんちくか", romaji: "Kenchikuka", meaning: "Arquitecto" },
        { word: "はいたついん", romaji: "Haitatsuin", meaning: "Repartidor" },
        { word: "しょくいん", romaji: "Shokuin", meaning: "Personal de un establecimiento" },
        { word: "りょうりにん", romaji: "Ryouri-nin", meaning: "Cocinero" },
        { word: "かんごふ", romaji: "Kangofu", meaning: "Enfermera" },
        { word: "せいと", romaji: "Seito", meaning: "Estudiante" },
        { word: "かいごし", romaji: "Kaigoshi", meaning: "Cuidador" },
        { word: "じゅうぎょういん", romaji: "Juugyouin", meaning: "Docente" },
        { word: "あんない人", romaji: "Annai-nin", meaning: "Guía" },
        { word: "こうこうせい", romaji: "Koukousei", meaning: "Estudiante de secundaria" },
        { word: "しゅふ", romaji: "Shufu", meaning: "Ama de casa" },
        { word: "せいびし", romaji: "Seibishi", meaning: "Mecánico" },
        { word: "じえいぎょう", romaji: "Jieigyou", meaning: "Empresario" },
        { word: "かんりにん", romaji: "Kanrinin", meaning: "Administrador" },
        { word: "アーティスト", romaji: "Aatisuto", meaning: "Artista" }
    ]
};

let selectedSection = localStorage.getItem("selectedSection") || "Saludos";
let words = vocabulary[selectedSection] || [];
let currentIndex = 0;

const flashcard = document.getElementById("flashcard");
const front = flashcard.querySelector(".front");
const back = flashcard.querySelector(".back");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

// Función para actualizar la flashcard
function updateFlashcard() {
    if (words.length === 0) {
        front.textContent = "No hay vocabulario";
        back.innerHTML = "";
        return;
    }
    front.textContent = words[currentIndex].word;
    back.innerHTML = `
        <p class="romaji">${words[currentIndex].romaji}</p>
        <p class="meaning">${words[currentIndex].meaning}</p>
        <p class="word">${words[currentIndex].word}</p>
    `;
}

// Girar la tarjeta al hacer clic
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

// Botón siguiente
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % words.length;
    flashcard.classList.remove("flipped");
    updateFlashcard();
});

// Botón anterior
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    flashcard.classList.remove("flipped");
    updateFlashcard();
});

// Volver al roadmap
backButton.addEventListener("click", () => {
    window.location.href = "../roadmap.html";
});

// Cargar la primera palabra
updateFlashcard();
