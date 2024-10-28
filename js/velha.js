let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let scoreX = 0;
let scoreO = 0;
let history = [];

const boardElement = document.getElementById("board");
const scoreXElement = document.getElementById("scoreX");
const scoreOElement = document.getElementById("scoreO");
const historyElement = document.getElementById("history");

function makeMove(index) {
    if (board[index] === "" && !checkWin()) {
        board[index] = currentPlayer;
        document.querySelectorAll(".cell")[index].innerText = currentPlayer;

        if (checkWin()) {
            updateScore();
            addHistory(`${currentPlayer} venceu!`);
            alert(`${currentPlayer} venceu!`);
        } else if (board.every(cell => cell !== "")) {
            addHistory("Empate!");
            alert("Empate!");
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function updateScore() {
    if (currentPlayer === "X") {
        scoreX++;
        scoreXElement.innerText = scoreX;
    } else {
        scoreO++;
        scoreOElement.innerText = scoreO;
    }
}

function addHistory(result) {
    history.push(result);
    const historyItem = document.createElement("li");
    historyItem.textContent = `Rodada ${history.length}: ${result}`;
    historyElement.appendChild(historyItem);
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".cell").forEach(cell => (cell.innerText = ""));
    currentPlayer = "X";
}
