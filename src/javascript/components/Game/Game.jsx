import React from 'react';
import './Game.css';
import Board from '../Board/Board'

const Game = ({currentPlayer}) => {
    const player = currentPlayer === 0? 'Blue' : 'Red'
    const status = 'Player turn : ' +  player;
    return (
        <div>
        <div className="status">{status}</div>
        <Board classname={player} />
    </div>
    );
  };

export default Game;