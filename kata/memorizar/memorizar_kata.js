const containerElementV2 = document.getElementById('containerV2');
const containerElement2 = document.getElementById('container2');
const phonemeElementV2 = document.getElementById('phoneme');
const katakanaElementV2 = document.getElementById('katakana');
const toggleButtonV2 = document.getElementById('toggleButton');
const repetirButtonV2 = document.getElementById('repetirButton');
const errorElement = document.getElementById('error');
const aciertoElement = document.getElementById('acierto');

v3 = false;

let showPhonemeV2 = true;
let currentPairV2 = getRandomKatakana();
let errores = 0;
let aciertos = 0;
let initialMousePosition;
const errorArray = [];

function calcOffset(offset) {
    return offset * 2 * 0.5;
}

phonemeElementV2.textContent = currentPairV2.phoneme;
katakanaElementV2.style.display = 'none';

function getRandomKatakana() {
    const randomIndex = Math.floor(Math.random() * lecciones.length);
    return lecciones[randomIndex];
}

toggleButtonV2.addEventListener('click', () => {
    showPhonemeV2 = !showPhonemeV2;
    currentPairV2 = getRandomKatakana();
    phonemeElementV2.textContent = showPhonemeV2 ? currentPairV2.phoneme : currentPairV2.katakana;
    katakanaElementV2.style.display = 'none';
});

repetirButtonV2.addEventListener('click', () => {
    if (errorArray.length > 0) {
        errores = 0;
        errorElement.textContent = `Errores: ${errores}`;
        aciertos = 0;
        aciertoElement.textContent = `Aciertos: ${aciertos}`; 
        lecciones.length = 0;
        lecciones.push(...errorArray);
        currentPairV2 = getRandomKatakana();
        siguiente(true);
    }
    
});

containerElementV2.addEventListener('click', () => {
    siguiente();
});

function siguiente(si = false) {
    if (katakanaElementV2.style.display === 'none' && !si) {
        katakanaElementV2.textContent = showPhonemeV2 ? currentPairV2.katakana : currentPairV2.phoneme;
        katakanaElementV2.style.display = 'block';
        enableDraggable(true);
    } else {
        currentPairV2 = getRandomKatakana();
        phonemeElementV2.textContent = showPhonemeV2 ? currentPairV2.phoneme : currentPairV2.katakana;
        katakanaElementV2.style.display = 'none';
        enableDraggable(false);
    }
}

// DraggableJS y lógica de resultados
let draggableInstance = null;

function enableDraggable(enable) {
    if (draggableInstance) {
        draggableInstance.destroy();
        draggableInstance = null;
    }

    if (enable) {
        draggableInstance = new Draggable.Draggable(containerElementV2, {
            draggable: '.container2',
            dropzone: '.BlockWrapper--isDropzone',
            delay: 0,
            mirror: { constrainDimensions: true },
        });

        draggableInstance.on('drag:start', (evt) => {
            console.log('Arrastre iniciado');
            initialMousePosition = {
                x: evt.sensorEvent.clientX,
                y: evt.sensorEvent.clientY,
            };
        });

        draggableInstance.on('drag:stop', (evt) => {
            const draggableRect = containerElementV2.getBoundingClientRect();

            const targetX = event.detail.data.clientX;
            const targetY = event.detail.data.clientY;

            // Verificar si el dispositivo es móvil
            const isMobile = window.matchMedia("(max-width: 768px)").matches;

            if (isMobile) {
                if (targetY < draggableRect.top) {
                    errores++; // Aumenta el contador
                    errorElement.textContent = `Errores: ${errores}`; // Actualiza el contador en la pantalla
                    errorArray.push(currentPairV2);
                    siguiente();
                } else if (targetY > draggableRect.bottom) {
                    aciertos++; // Aumenta el contador
                    aciertoElement.textContent = `Aciertos: ${aciertos}`; // Actualiza el contador en la pantalla
                    siguiente();
                }
            } else {
                if (targetX < draggableRect.x) {
                    errores++; // Aumenta el contador
                    errorElement.textContent = `Errores: ${errores}`; // Actualiza el contador en la pantalla
                    errorArray.push(currentPairV2);
                    siguiente();
                } else if (targetX > draggableRect.x + 250) {
                    aciertos++; // Aumenta el contador
                    aciertoElement.textContent = `Aciertos: ${aciertos}`; // Actualiza el contador en la pantalla
                    siguiente();
                }
            }

            containerElement2.style.transform = 'translateX(0)';
            
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    enableDraggable(false);
});
