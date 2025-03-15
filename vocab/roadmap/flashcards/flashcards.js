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
        { word: "じゅう", romaji: "Juu", meaning: "Diez" },

        { word: "ななじゅう", romaji: "nanajuu", meaning: "Diecisiete" },
        { word: "にじゅう", romaji: "nijuu", meaning: "Veinte" },
        { word: "にじゅう よん", romaji: "nijuu yon", meaning: "Veinticuatro" },
        { word: "ななじゅう はち", romaji: "nanajuu hachi", meaning: "Setenta y 8" },

        { word: "ひゃく", romaji: "hyaku", meaning: "100" },
        { word: "にひゃく", romaji: "nihyaku", meaning: "200" },
        { word: "さんびゃく", romaji: "sanbyaku", meaning: "300" },
        { word: "ろっぴゃく", romaji: "roppyaku", meaning: "600" },
        { word: "はっぴゃく", romaji: "happyaku", meaning: "800" },
        { word: "きゅうひゃく", romaji: "kyuuhyaku", meaning: "900" },
        { word: "ななひゃく", romaji: "nanahyaku ichi", meaning: "701" },
        { word: "きゅうひゃく きゅうじゅう きょう", romaji: "kyuuhyaku kyuujuu kyou", meaning: "999" },

        { word: "せん", romaji: "sen", meaning: "1000" },
        { word: "さんぜん", romaji: "sanzen", meaning: "3000" },
        { word: "ななせん", romaji: "nanasen", meaning: "7000" },
        { word: "はっせん", romaji: "hassen", meaning: "8000" },
        { word: "きゅうせん よんひゃく はちじゅう ろく", romaji: "Kyuusen yonhyaku hachijuu roku", meaning: "9,486" },
        { word: "はっせん ひゃく さんじゅう よん", romaji: "hassen hyaku sanjuu yon", meaning: "8,134" },

        { word: "いちまん", romaji: "ichiman", meaning: "10,000" },
        { word: "さんまん", romaji: "sanman", meaning: "30,000" },
        { word: "ごまん", romaji: "goman", meaning: "50,000" },
        { word: "きゅうまん", romaji: "Kyuuman", meaning: "90,000" },

        { word: "じゅうまん", romaji: "juuman", meaning: "100,000" },
        { word: "さんじゅう ごまん", romaji: "sanjuu goman", meaning: "350,000" },
        { word: "よんじゅう さんまん にせん ひゃく にじゅう", romaji: "yonjuu sanman nisen hyaku nijuu", meaning: "432,120" },
        { word: "はっぴゃく じゅう よんまん ろくせん ななひゃく ななじゅう はち", romaji: "happyaku juu yonman rokusen nanahyaku nanajuu hachi", meaning: "8,146,778" },
        { word: "きゅう", romaji: "yonjuu niman hassen gohyaku kyuujuu nana", meaning: "428,597" },
        { word: "きゅう", romaji: "nanahyaku gojuu niman kyuusen hyaku nanajuu", meaning: "7,529,170" },

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
    const number = Math.floor(Math.random() * 2) + 1;

    if (number % 2 === 0) {
        front.textContent = words[currentIndex].meaning;
        back.innerHTML = `
        <p class="romaji">${words[currentIndex].romaji}</p>
        <p class="meaning">${words[currentIndex].meaning}</p>
        <p class="word">${words[currentIndex].word}</p>
    `;
    } else {
        front.textContent = words[currentIndex].word;
        back.innerHTML = `
        <p class="romaji">${words[currentIndex].romaji}</p>
        <p class="meaning">${words[currentIndex].meaning}</p>
        <p class="word">${words[currentIndex].word}</p>
    `;
    }

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
