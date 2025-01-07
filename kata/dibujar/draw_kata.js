const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
const phonemeReference = document.getElementById('phonemeReference');
const katakanaResult = document.getElementById('katakanaResult');
const clearButton = document.getElementById('clearCanvas');
const checkButton = document.getElementById('checkCanvas');

ctx.lineWidth = 2; // Establece el grosor de la línea (2px recomendado)
ctx.lineCap = 'round'; // Hace que las líneas sean redondeadas en los extremos
ctx.strokeStyle = 'black'; // Color de la línea


let isDrawing = false;

function getRandomKatakana() {
    const randomIndex = Math.floor(Math.random() * lecciones.length);
    return lecciones[randomIndex];
}

// Inicializar un fonema aleatorio
let currentPair = getRandomKatakana();
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
    const rect = canvas.getBoundingClientRect(); // Obtén el área del lienzo
    if (event.touches && event.touches.length > 0) {
        const touch = event.touches[0];
        return {
            offsetX: touch.clientX - rect.left,
            offsetY: touch.clientY - rect.top,
        };
    } else if (event.offsetX !== undefined && event.offsetY !== undefined) {
        return {
            offsetX: event.clientX - rect.left, // Usa clientX y ajusta con rect.left
            offsetY: event.clientY - rect.top, // Usa clientY y ajusta con rect.top
        };
    }
    return { offsetX: 0, offsetY: 0 }; // Fallback
}



// Limpiar lienzo y obtener nuevo fonema
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    currentPair = getRandomKatakana();
    phonemeReference.textContent = currentPair.phoneme;
    katakanaResult.style.display = 'none';
});

// Comprobar katakana
checkButton.addEventListener('click', () => {
    katakanaResult.textContent = currentPair.katakana;
    katakanaResult.style.display = 'block';
});
