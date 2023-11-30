const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const checkBoard = (board) => {
  for (let i = 0; i < board.length; i++) {
    const rowSymbol = board[i][0];
    const colSymbol = board[0][i];

    if (rowSymbol && board[i].every((cell) => cell === rowSymbol)) {
      return rowSymbol;
    }

    if (colSymbol && board.every((row) => row[i] === colSymbol)) {
      return colSymbol;
    }
  }

  const diagonal1Symbol = board[0][0];
  const diagonal2Symbol = board[0][2];

  if (diagonal1Symbol && board.every((row, i) => row[i] === diagonal1Symbol)) {
    return diagonal1Symbol;
  }

  if (
    diagonal2Symbol &&
    board.every((row, i) => row[2 - i] === diagonal2Symbol)
  ) {
    return diagonal2Symbol;
  }

  return null;
};

const congratulations = (winner) => {
  const msg = `Congratulations winner: ${winner}`;
  document.querySelector(".winner").textContent = msg;
};

let player = "p1";
const switchPlayer = (player) => (player === "p1" ? "p2" : "p1");
const makePlay = (player) => (player === "p1" ? "X" : "O");

let container = document.createElement("div");
container.className = "container";

for (let i = 0; i < board.length; i++) {
  const row = document.createElement("div");

  row.id = `row-${i}`;
  row.className = "row";

  for (let j = 0; j < board[i].length; j++) {
    const cell = document.createElement("div");

    cell.id = `cell-${i}${j}`;
    cell.className = "cell";

    cell.addEventListener("click", () => {
      let winner = checkBoard(board);
      if (winner) return congratulations(winner);

      if (cell.textContent !== "") return alert("Try other spot");
      let play = makePlay(player);

      cell.textContent = play;
      board[i][j] = play;

      winner = checkBoard(board);
      if (winner) return congratulations(winner);

      player = switchPlayer(player);
    });

    row.appendChild(cell);
  }

  container.appendChild(row);
}

const pageContainer = document.querySelector(".page-container");
pageContainer.appendChild(container);

const reloadButtonWrapper = document.createElement("div");
reloadButtonWrapper.className = "reloadButtonWrapper";

const reloadGameButton = document.createElement("button");
reloadGameButton.textContent = "Reload Game";

reloadGameButton.addEventListener("click", () => {
  location.reload();
});

reloadButtonWrapper.appendChild(reloadGameButton);
document.body.appendChild(reloadButtonWrapper);
