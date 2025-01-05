
const containerElement = document.getElementById('container');
const phonemeElement = document.getElementById('phoneme');
const hiraganaElement = document.getElementById('hiragana');
const toggleButton = document.getElementById('toggleButton');

let showPhoneme = true;
let currentPair = getRandomHiragana();
phonemeElement.textContent = currentPair.phoneme;
hiraganaElement.style.display = 'none';

function getRandomHiragana() {
    const randomIndex = Math.floor(Math.random() * lecciones.length);
    return lecciones[randomIndex];
}

toggleButton.addEventListener('click', () => {
    showPhoneme = !showPhoneme;
    currentPair = getRandomHiragana();
    phonemeElement.textContent = showPhoneme ? currentPair.phoneme : currentPair.hiragana;
    hiraganaElement.style.display = 'none';
});

container.addEventListener('click', () => {
    if (hiraganaElement.style.display === 'none') {
        hiraganaElement.textContent = showPhoneme ? currentPair.hiragana : currentPair.phoneme;
        hiraganaElement.style.display = 'block';
    } else {
        currentPair = getRandomHiragana();
        phonemeElement.textContent = showPhoneme ? currentPair.phoneme : currentPair.hiragana;
        hiraganaElement.style.display = 'none';
    }
});
