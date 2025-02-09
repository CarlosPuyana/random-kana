const hiraganaWord = document.getElementById('hiraganaWord');
const userInput = document.getElementById('userInput');
const checkButton = document.getElementById('checkButton');
const feedback = document.getElementById('feedback');
const significadoDisplay = document.createElement('div');
significadoDisplay.classList.add('significado-display');
hiraganaWord.parentNode.insertBefore(significadoDisplay, hiraganaWord);

let currentWordIndex = -1;

// Crear tooltip dinámico
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

// Función para mostrar una palabra aleatoria
function mostrarPalabra() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * palabrasHiraganas.length);
    } while (newIndex === currentWordIndex);

    currentWordIndex = newIndex;
    const { hiragana, significado } = palabrasHiraganas[currentWordIndex];

    hiraganaWord.textContent = ''; // Limpiar palabra anterior
    significadoDisplay.textContent = significado;

    // Dividir el Hiragana en caracteres individuales
    [...hiragana].forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.cursor = 'pointer';

        // Buscar el fonema correspondiente
        const hiraganaData = hiraganas.find((h) => h.hiragana === char);
        if (hiraganaData) {
            const phoneme = hiraganaData.phoneme;

            // Añadir eventos para mostrar el tooltip
            span.addEventListener('mouseenter', (event) => showTooltip(event, phoneme));
            span.addEventListener('mouseleave', hideTooltip);
        }

        hiraganaWord.appendChild(span);
    });
}


// Mostrar el tooltip
function showTooltip(event, text) {
    tooltip.textContent = text;
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
    tooltip.style.display = 'block';
}

function hideTooltip() {
    tooltip.style.display = 'none';
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