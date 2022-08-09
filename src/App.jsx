import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helpers';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  const message = winner
    ? `winner is ${winner}`
    : `Next player is ${current.isNext ? 'X' : 'O'}`;

  const squareClick = loc => {
    if (current.board[loc] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, location) => {
        if (location == loc) {
          return last.isNext ? 'X' : 'O';
        }
        return square;
      });

      return prev.concat({ board: newBoard, isNext: !last.isNext });
    });
    setCurrentMove(prev => prev + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>Tic Tac Tow</h1>
      <h2>{message}</h2>
      <Board board={current.board} squareClick={squareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
