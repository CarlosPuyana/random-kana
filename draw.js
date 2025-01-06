const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
const phonemeReference = document.getElementById('phonemeReference');
const hiraganaResult = document.getElementById('hiraganaResult');
const clearButton = document.getElementById('clearCanvas');
const checkButton = document.getElementById('checkCanvas');

let isDrawing = false;

function getRandomHiragana() {
    const randomIndex = Math.floor(Math.random() * lecciones.length);
    return lecciones[randomIndex];
}

// Inicializar un fonema aleatorio
let currentPair = getRandomHiragana();
phonemeReference.textContent = currentPair.phoneme;

// Dibujar en el lienzo
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDrawing(e);
});
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    draw(e);
});
canvas.addEventListener('touchend', stopDrawing);

// Funciones de dibujo
function startDrawing(event) {
    isDrawing = true;
    const { offsetX, offsetY } = getEventCoordinates(event);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
}

function draw(event) {
    if (!isDrawing) return;

    const { offsetX, offsetY } = getEventCoordinates(event);
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function getEventCoordinates(event) {
    if (event.touches && event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = canvas.getBoundingClientRect(); // Posición del lienzo
        return {
            offsetX: touch.clientX - rect.left,
            offsetY: touch.clientY - rect.top,
        };
    } else if (event.offsetX !== undefined && event.offsetY !== undefined) {
        // Eventos de mouse
        return {
            offsetX: event.offsetX,
            offsetY: event.offsetY,
        };
    }
    return { offsetX: 0, offsetY: 0 }; // Fallback por si el evento no tiene coordenadas
}


// Limpiar lienzo y obtener nuevo fonema
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    currentPair = getRandomHiragana();
    phonemeReference.textContent = currentPair.phoneme;
    hiraganaResult.style.display = 'none';
});

// Comprobar Hiragana
checkButton.addEventListener('click', () => {
    hiraganaResult.textContent = currentPair.hiragana;
    hiraganaResult.style.display = 'block';
});
