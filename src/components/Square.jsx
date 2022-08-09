import React from 'react';

const Square = ({ value, onClick, isWinningCombo }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningCombo ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
