import React, { useState } from 'react';
import Square from './Square.jsx';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const squareClick = loc => {
    if (board[loc]) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, location) => {
        if (location == loc) {
          return isNext ? 'X' : 'O';
        }
        return square;
      });
    });

    setIsNext(prev => !prev);
  };

  const returnSquare = loc => {
    return (
      <Square
        value={board[loc]}
        onClick={() => {
          squareClick(loc);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {returnSquare(0)}
        {returnSquare(1)}
        {returnSquare(2)}
      </div>

      <div className="board-row">
        {returnSquare(3)}
        {returnSquare(4)}
        {returnSquare(5)}
      </div>

      <div className="board-row">
        {returnSquare(6)}
        {returnSquare(7)}
        {returnSquare(8)}
      </div>
    </div>
  );
};

export default Board;
