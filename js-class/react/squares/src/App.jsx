/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const Button = ({ children, onClick, isEnabled }) => {
  return (
    <button disabled={isEnabled} onClick={onClick}>
      {children}
    </button>
  );
};

const Square = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        alignItems: "center",
        border: "1px solid black",
        display: "flex",
        height: 80,
        justifyContent: "center",
        width: 80,
      }}
    >
      {children}
    </div>
  );
};

const initialSquares = ["locked", "locked", "locked"];

function App() {
  const [isClosed, setIsClosed] = useState(true);
  const [squares, setSquares] = useState(initialSquares);

  function handleClickSquare(squareIndex) {
    const newSquares = squares.map((square, index) => {
      if (squareIndex === index) {
        return square === "locked" ? "unlocked" : "locked";
      }
      return square;
    });
    setSquares(newSquares);

    const isAllUnlocked =
      newSquares.find((square) => square === "locked") === undefined;
    setIsClosed(!isAllUnlocked);
  }

  const lockSquares = () => {
    setSquares(squares.map(() => "locked"));
    setIsClosed(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      <div style={{ display: "flex", gap: 15 }}>
        {squares.map((square, index) => (
          <Square
            key={index}
            onClick={() => {
              handleClickSquare(index);
            }}
          >
            {square}
          </Square>
        ))}
      </div>
      <Button isEnabled={isClosed} onClick={() => lockSquares()}>
        {isClosed ? "Closed!" : "Open! Click to close."}
      </Button>
    </div>
  );
}

export default App;
