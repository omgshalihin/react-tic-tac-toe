import React, { useState } from 'react';
import './Game.css';
import Board from './components/Board';
import { calculateWinner } from './engine';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = index => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    if (winner || squares[index]) {
      return;
    }
    squares[index] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const renderMoves = () => (
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : 'Go to start';
      return (
        <li key={move}>
          <button type="submit" onClick={() => jumpTo(move)}>
            {destination}
          </button>
        </li>

      );
    })

  );
  return (
    <>
      <Board className="game" squares={history[stepNumber]} onClick={handleClick} />
      <div className="game-info">
        <p>
          {winner ? `Winner ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
        </p>
        {renderMoves()}

      </div>
    </>

  );
};

export default Game;
