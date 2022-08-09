import React from 'react';

const Square = ({ value, onClick, isWinningCombo }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningCombo ? 'wiining' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      style={{ fontWeight: isWinningCombo ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
