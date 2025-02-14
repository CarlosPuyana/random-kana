const vocabulary = {
    "Saludos": [
        { word: "こんにちは", romaji: "Konnichiwa", meaning: "Hola" },
        { word: "おはよう", romaji: "Ohayou", meaning: "Buenos días" },
        { word: "こんばんは", romaji: "Konbanwa", meaning: "Buenas noches" },
        { word: "さようなら", romaji: "Sayounara", meaning: "Adiós" },
        { word: "ありがとう", romaji: "Arigatou", meaning: "Gracias" }
    ],
    "Familia": [
        { word: "ちち", romaji: "Chichi", meaning: "Padre" },
        { word: "はは", romaji: "Haha", meaning: "Madre" },
        { word: "あに", romaji: "Ani", meaning: "Hermano mayor" },
        { word: "あね", romaji: "Ane", meaning: "Hermana mayor" },
        { word: "おかあさん", romaji: "Okaasan", meaning: "Mamá" }
    ],
    "Números": [
        { word: "いち", romaji: "Ichi", meaning: "Uno" },
        { word: "に", romaji: "Ni", meaning: "Dos" },
        { word: "さん", romaji: "San", meaning: "Tres" },
        { word: "し", romaji: "Shi", meaning: "Cuatro" },
        { word: "ご", romaji: "Go", meaning: "Cinco" }
    ],
    "Profesiones": [
        { word: "せんせい", romaji: "Sensei", meaning: "Profesor/a" },
        { word: "いしゃ", romaji: "Isha", meaning: "Médico" },
        { word: "エンジニア", romaji: "Enjinia", meaning: "Ingeniero" },
        { word: "かいしゃいん", romaji: "Kaishain", meaning: "Empleado de oficina" },
        { word: "りょうりにん", romaji: "Ryouri-nin", meaning: "Cocinero" }
    ]
};

// Obtener la categoría seleccionada desde localStorage
let selectedSection = localStorage.getItem("selectedSection") || "Saludos";
let words = vocabulary[selectedSection] || [];

// Variables de juego
let usedWords = [];
let currentWord = {};
let xpTotal = 0;

// Elementos del DOM
const xpTotalElement = document.querySelector(".xp-total");
const questionText = document.querySelector(".question-text");
const optionsContainer = document.querySelector(".quiz-options");
const backButton = document.getElementById("back-button");

// Función para seleccionar la siguiente pregunta
function nextQuestion() {
    if (usedWords.length === words.length) {
        usedWords = []; // Reiniciar preguntas usadas sin alert
    }

    // Elegir una palabra que no se haya usado
    let availableWords = words.filter(word => !usedWords.includes(word.word));
    currentWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    usedWords.push(currentWord.word);

    // Actualizar la pregunta
    questionText.textContent = `¿Qué significa "${currentWord.word}"?`;

    // Obtener opciones de respuesta
    let correctAnswer = currentWord.meaning;
    let incorrectAnswers = words
        .map(word => word.meaning)
        .filter(meaning => meaning !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    let options = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);

    renderOptions(options, correctAnswer);
}

// Función para renderizar opciones
function renderOptions(options, correctAnswer) {
    optionsContainer.innerHTML = "";
    options.forEach(option => {
        let button = document.createElement("button");
        button.classList.add("quiz-option");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(button, option, correctAnswer));
        optionsContainer.appendChild(button);
    });
}

// Función para verificar la respuesta
function checkAnswer(button, selected, correct) {
    document.querySelectorAll(".quiz-option").forEach(btn => {
        btn.disabled = true;
    });

    if (selected === correct) {
        button.classList.add("correct");
        xpTotal += 10; // Sumar XP
        xpTotalElement.textContent = `XP Total: ${xpTotal}`;
    } else {
        button.classList.add("incorrect");
    }

    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

// Volver al roadmap
backButton.addEventListener("click", () => {
    window.location.href = "../roadmap.html";
});

// Iniciar el quiz
nextQuestion();
