const statusDisplay = document.querySelector('.game--status');

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let clicked = 0;
let gameActive = true;

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const playerWon = (player) => `Player ${player} has won`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleCellClick(clickedCellEvent) {
    if (!gameActive) return
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !== '') {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    clicked++;


    // check for winning
    if (checkWinner(currentPlayer)) {
        statusDisplay.innerHTML = playerWon(currentPlayer)
        gameActive = false
        return
    }

    if (clicked === 9) {
        statusDisplay.innerHTML = `Game ended in a draw`
        gameActive = false
        return
    }

    handlePlayerChange();
}

function handleRestartGame() {
    gameActive = true
    clicked = 0
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''));
}


function checkWinner(player) {
    // row
    return player === gameState[0] && gameState[0] === gameState[1] && gameState[1] === gameState[2] ||
        player === gameState[3] && gameState[3] === gameState[4] && gameState[4] === gameState[5] ||
        player === gameState[6] && gameState[6] === gameState[7] && gameState[7] === gameState[8] ||
        //col
        player === gameState[0] && gameState[0] === gameState[3] && gameState[3] === gameState[6] ||
        player === gameState[1] && gameState[1] === gameState[4] && gameState[4] === gameState[7] ||
        player === gameState[2] && gameState[2] === gameState[5] && gameState[5] === gameState[8] ||
        //    diagonal
        player === gameState[0] && gameState[0] === gameState[4] && gameState[4] === gameState[8] ||
        player === gameState[2] && gameState[2] === gameState[4] && gameState[4] === gameState[6];
}

document
    .querySelectorAll('.cell')
    .forEach(cell => cell.addEventListener('click', handleCellClick));
document
    .querySelector('.game--restart')
    .addEventListener('click', handleRestartGame);
