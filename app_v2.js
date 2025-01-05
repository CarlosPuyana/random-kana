const containerElementV2 = document.getElementById('containerV2');
const containerElement2 = document.getElementById('container2');
const phonemeElementV2 = document.getElementById('phoneme');
const hiraganaElementV2 = document.getElementById('hiragana');
const toggleButtonV2 = document.getElementById('toggleButton');
const errorElement = document.getElementById('error');
const aciertoElement = document.getElementById('acierto');

let showPhonemeV2 = true;
let currentPairV2 = getRandomHiragana();
let errores = 0;
let aciertos = 0;
let initialMousePosition;

function calcOffset(offset) {
    return offset * 2 * 0.5;
}

phonemeElementV2.textContent = currentPairV2.phoneme;
hiraganaElementV2.style.display = 'none';

function getRandomHiragana() {
    const randomIndex = Math.floor(Math.random() * leccion1.length);
    return leccion1[randomIndex];
}

toggleButtonV2.addEventListener('click', () => {
    showPhonemeV2 = !showPhonemeV2;
    currentPairV2 = getRandomHiragana();
    phonemeElementV2.textContent = showPhonemeV2 ? currentPairV2.phoneme : currentPairV2.hiragana;
    hiraganaElementV2.style.display = 'none';
});

containerElementV2.addEventListener('click', () => {
    if (hiraganaElementV2.style.display === 'none') {
        hiraganaElementV2.textContent = showPhonemeV2 ? currentPairV2.hiragana : currentPairV2.phoneme;
        hiraganaElementV2.style.display = 'block';
        enableDraggable(true);
    } else {
        currentPairV2 = getRandomHiragana();
        phonemeElementV2.textContent = showPhonemeV2 ? currentPairV2.phoneme : currentPairV2.hiragana;
        hiraganaElementV2.style.display = 'none';
        enableDraggable(false);
    }
});

// DraggableJS y lógica de resultados
let draggableInstance = null;

function enableDraggable(enable) {
    if (draggableInstance) {
        draggableInstance.destroy();
        draggableInstance = null;
    }

    if (enable) {
        draggableInstance = new Draggable.Draggable(containerElementV2, {
            draggable: '.container2', // Asegúrate de que este sea el elemento que deseas arrastrar
            dropzone: '.BlockWrapper--isDropzone',
            delay: 0,
            mirror: { constrainDimensions: true },
        });

        draggableInstance.on('drag:start', (evt) => {
            // Aquí puedes realizar cualquier acción que necesites al iniciar el arrastre
            console.log('Arrastre iniciado');
            initialMousePosition = {
                x: evt.sensorEvent.clientX,
                y: evt.sensorEvent.clientY,
            };
        });

        draggableInstance.on('drag:stop', (evt) => {
            const draggableRect = containerElementV2.getBoundingClientRect();
            const errorRect = errorElement.getBoundingClientRect();
            const aciertoRect = aciertoElement.getBoundingClientRect();
            console.log('Initial', initialMousePosition)
            console.log('drag', draggableRect)
            console.log('err', errorRect)
            console.log('success', aciertoRect)

            const targetX = event.detail.data.clientX;
            const targetY = event.detail.data.clientY;

            if (targetX < draggableRect.x) {
                errores++; // Aumenta el contador
                errorElement.textContent = `Errores: ${errores}`; // Actualiza el contador en la pantalla
            } else if (targetX > draggableRect.x + 250) {
                aciertos++; // Aumenta el contador
                aciertoElement.textContent = `Aciertos: ${aciertos}`; // Actualiza el contador en la pantalla
            }
            
            containerElement2.style.transform = 'translateX(0)'; // Asegúrate de que esto no afecte el arrastre
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    enableDraggable(false);
});
