import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helpers';

const NEW_GAME = [{ board: Array(9).fill(null), isNext: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

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
  const newGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>Tic Tac Tow</h1>
      <h2>{message}</h2>
      <Board
        board={current.board}
        squareClick={squareClick}
        winningSquares={winningSquares}
      />

      <button type="button" onClick={newGame}>
        Start New Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
