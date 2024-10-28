const gridElement = document.getElementById('grid');
const scoreElement = document.getElementById('score');
const resetButton = document.getElementById('reset');

let cards = [];
let firstCard = null;
let secondCard = null;
let score = 0;
let lockBoard = false;

const cardImages = [
    '🍎', '🍌', '🍇', '🍉', 
    '🍒', '🍓', '🍊', '🍋'
];

// Duplicar e embaralhar as cartas
function createCards() {
    cards = [...cardImages, ...cardImages];
    cards.sort(() => Math.random() - 0.5); // Embaralha as cartas
}

// Cria os elementos das cartas
function createCardElements() {
    cards.forEach((image, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-image', image);
        card.setAttribute('data-index', index);
        card.addEventListener('click', flipCard);
        gridElement.appendChild(card);
    });
}

// Vira a carta
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    this.innerText = this.getAttribute('data-image');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

// Checa se as cartas são iguais
function checkForMatch() {
    const isMatch = firstCard.getAttribute('data-image') === secondCard.getAttribute('data-image');

    isMatch ? disableCards() : unflipCards();
}

// Desativa as cartas que combinam
function disableCards() {
    score++;
    scoreElement.textContent = `Pontos: ${score}`;
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');

    resetBoard();
}

// Desvira as cartas que não combinam
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.innerText = '';
        secondCard.innerText = '';
        resetBoard();
    }, 1000);
}

// Reinicia o estado do jogo
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;

    if (score === cardImages.length) {
        alert('Você ganhou!');
        resetButton.classList.remove('hidden');
    }
}

// Reinicia o jogo
function resetGame() {
    score = 0;
    scoreElement.textContent = `Pontos: ${score}`;
    resetButton.classList.add('hidden');
    gridElement.innerHTML = '';
    createCards();
    createCardElements();
}

// Inicializa o jogo
resetGame();

// Adiciona o evento de reinício
resetButton.addEventListener('click', resetGame);
