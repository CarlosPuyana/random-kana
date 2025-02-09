
const containerElement = document.getElementById('container-vocab');
const phonemeElement = document.getElementById('phoneme');
const hiraganaElement = document.getElementById('hiragana');
const espanolElement = document.getElementById('espanol');


let showPhoneme = true;
let currentPair = getRandomHiragana();
hiraganaElement.textContent = currentPair.japo;

function getRandomHiragana() {
    const randomIndex = Math.floor(Math.random() * vocab.length);
    return vocab[randomIndex];
}

function getRandomProperty() {
    const properties = ['espanol', 'phoneme', 'japo'];
    return properties[Math.floor(Math.random() * properties.length)];
}

container.addEventListener('click', () => {

    const first = getRandomProperty();

    if (showPhoneme) {
        if (first === 'japo'){
            hiraganaElement.textContent = currentPair.japo;
            phonemeElement.textContent = currentPair.phoneme;
            espanolElement.textContent = currentPair.espanol;
        } else if (first === 'phoneme'){
            hiraganaElement.textContent = currentPair.phoneme;
            phonemeElement.textContent = currentPair.japo;
            espanolElement.textContent = currentPair.espanol;
        } else if (first === 'espanol'){
            hiraganaElement.textContent = currentPair.espanol;
            phonemeElement.textContent = currentPair.japo;
            espanolElement.textContent = currentPair.phoneme;
        }

        showPhoneme = false;
    } else {
        currentPair = getRandomHiragana();
        hiraganaElement.textContent = currentPair[getRandomProperty()];
        phonemeElement.textContent = '';
        espanolElement.textContent = '';
        showPhoneme = true;
    }

});
