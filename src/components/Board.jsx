import React from 'react';
import Square from './Square.jsx';

const Board = ({ board, squareClick, winningSquares }) => {
  const returnSquare = loc => {
    const isWinningCombo = winningSquares.includes(loc);
    return (
      <Square
        value={board[loc]}
        onClick={() => {
          squareClick(loc);
        }}
        isWinningCombo={isWinningCombo}
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
