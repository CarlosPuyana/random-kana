
const containerElement = document.getElementById('container');
const phonemeElement = document.getElementById('phoneme');
const katakanaElement = document.getElementById('katakana');
const toggleButton = document.getElementById('toggleButton');

let showPhoneme = true;
let currentPair = getRandomKatakana();
katakanaElement.textContent = currentPair.katakana;
phonemeElement.style.display = 'none';

function getRandomKatakana() {
    const randomIndex = Math.floor(Math.random() * lecciones.length);
    return lecciones[randomIndex];
}

toggleButton.addEventListener('click', () => {
    showPhoneme = !showPhoneme;
    currentPair = getRandomKatakana();
    katakanaElement.textContent = showPhoneme ? currentPair.katakana : currentPair.phoneme;
    phonemeElement.style.display = 'none';
});

container.addEventListener('click', () => {
    if (phonemeElement.style.display === 'none') {
        phonemeElement.textContent = showPhoneme ? currentPair.phoneme : currentPair.katakana;
        phonemeElement.style.display = 'block';
    } else {
        currentPair = getRandomKatakana();
        katakanaElement.textContent = showPhoneme ? currentPair.katakana : currentPair.phoneme;
        phonemeElement.style.display = 'none';
    }
});
