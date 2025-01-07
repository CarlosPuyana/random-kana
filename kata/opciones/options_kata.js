const katakanaDisplay = document.getElementById('katakanaDisplay');
const optionButtons = document.querySelectorAll('.option-button');
const levelButtons = document.querySelectorAll('.class-button');
v3 = true;

// Base de datos de vidas
const fonemaVidas = {};
lecciones.forEach((entry) => {
    fonemaVidas[entry.phoneme] = 0; // Inicializar todas las vidas en 0
});

// Generar nuevo desafío
function nuevoDesafio() {
    // Reiniciar estilos de los botones
    optionButtons.forEach((button) => {
        button.classList.remove('correct', 'incorrect');
    });

    // Filtrar fonemas con menos de 5 vidas
    const opcionesDisponibles = lecciones.filter((entry) => fonemaVidas[entry.phoneme] < 5);

    if (opcionesDisponibles.length === 0) {
        katakanaDisplay.textContent = '¡Completado!';
        optionButtons.forEach((button) => {
            button.style.display = 'none'; // Ocultar los botones
        });
        return;
    }

    // Seleccionar katakana y opciones aleatorias
    const respuestaCorrecta = opcionesDisponibles[Math.floor(Math.random() * opcionesDisponibles.length)];
    const opciones = [...opcionesDisponibles].sort(() => 0.5 - Math.random()).slice(0, 4);

    if (!opciones.some((option) => option.phoneme === respuestaCorrecta.phoneme)) {
        opciones[Math.floor(Math.random() * 4)] = respuestaCorrecta; // Asegurar que la respuesta correcta esté incluida
    }

    // Mostrar katakana
    katakanaDisplay.textContent = respuestaCorrecta.katakana;

    // Asignar opciones a botones
    optionButtons.forEach((button, index) => {
        const option = opciones[index];
        if (option) {
            button.textContent = option.phoneme;
            button.dataset.correct = option.phoneme === respuestaCorrecta.phoneme;
            button.disabled = false;
        } else {
            button.textContent = '';
            button.dataset.correct = false;
            button.disabled = true;
        }
    });
}

// Manejar clic en una opción
optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const isCorrect = button.dataset.correct === 'true';

        if (isCorrect) {
            button.classList.add('correct');
            const phoneme = button.textContent;
            fonemaVidas[phoneme]++;
        } else {
            button.classList.add('incorrect');
            const phoneme = button.textContent;
            fonemaVidas[phoneme] = Math.max(0, fonemaVidas[phoneme] - 1);
        }

        // Deshabilitar todos los botones para evitar múltiples clics
        optionButtons.forEach((btn) => (btn.disabled = true));

        // Mostrar el siguiente desafío después de un pequeño retraso
        setTimeout(nuevoDesafio, 1000);
    });
});

// Manejar clic en los botones de nivel
levelButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const level = button.textContent;
        updateLecciones(level);

        // Resetear las vidas de los fonemas
        lecciones.forEach((entry) => {
            fonemaVidas[entry.phoneme] = 0;
        });

        nuevoDesafio(); // Reiniciar el desafío con las nuevas lecciones
    });
});

// Iniciar el primer desafío
nuevoDesafio();