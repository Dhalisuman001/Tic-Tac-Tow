import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner
    ? `winner is ${winner}`
    : `Next player is ${isNext ? 'X' : 'O'}`;

  const squareClick = loc => {
    if (board[loc] || winner) {
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
  return (
    <div className="app">
      <h1>Tic Tac Tow</h1>
      <h2>{message}</h2>
      <Board board={board} squareClick={squareClick} />
    </div>
  );
};
export default App;
