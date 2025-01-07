
const containerElement = document.getElementById('container');
const phonemeElement = document.getElementById('phoneme');
const katakanaElement = document.getElementById('katakana');
const toggleButton = document.getElementById('toggleButton');
v3 = false;

let showPhoneme = true;
let currentPair = getRandomKatakana();
phonemeElement.textContent = currentPair.phoneme;
katakanaElement.style.display = 'none';

function getRandomKatakana() {
    const randomIndex = Math.floor(Math.random() * lecciones.length);
    return lecciones[randomIndex];
}

toggleButton.addEventListener('click', () => {
    showPhoneme = !showPhoneme;
    currentPair = getRandomKatakana();
    phonemeElement.textContent = showPhoneme ? currentPair.phoneme : currentPair.katakana;
    katakanaElement.style.display = 'none';
});

container.addEventListener('click', () => {
    if (katakanaElement.style.display === 'none') {
        katakanaElement.textContent = showPhoneme ? currentPair.katakana : currentPair.phoneme;
        katakanaElement.style.display = 'block';
    } else {
        currentPair = getRandomKatakana();
        phonemeElement.textContent = showPhoneme ? currentPair.phoneme : currentPair.katakana;
        katakanaElement.style.display = 'none';
    }
});
