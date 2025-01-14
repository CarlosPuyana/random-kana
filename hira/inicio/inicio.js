
const containerElement = document.getElementById('container');
const phonemeElement = document.getElementById('phoneme');
const hiraganaElement = document.getElementById('hiragana');
const toggleButton = document.getElementById('toggleButton');

let showPhoneme = true;
let currentPair = getRandomHiragana();
hiraganaElement.textContent = currentPair.hiragana;
phonemeElement.style.display = 'none';

function getRandomHiragana() {
    const randomIndex = Math.floor(Math.random() * lecciones.length);
    return lecciones[randomIndex];
}

toggleButton.addEventListener('click', () => {
    showPhoneme = !showPhoneme;
    currentPair = getRandomHiragana();
    hiraganaElement.textContent = showPhoneme ? currentPair.hiragana : currentPair.phoneme;
    phonemeElement.style.display = 'none';
});

container.addEventListener('click', () => {
    if (phonemeElement.style.display === 'none') {
        phonemeElement.textContent = showPhoneme ? currentPair.phoneme : currentPair.hiragana;
        phonemeElement.style.display = 'block';
    } else {
        currentPair = getRandomHiragana();
        hiraganaElement.textContent = showPhoneme ? currentPair.hiragana : currentPair.phoneme;
        phonemeElement.style.display = 'none';
    }
});
