import React from 'react';
import './Game.css';
import Board from '../Board/Board'

const Game = ({ currentPlayer, stillSamePlayer }) => {
    const player = currentPlayer === 0 ? 'Blue' : 'Red'
    const status = player + '\'s turn!' ;
    const statusColour = 'status-' + player.toLowerCase();
    const samePlayerMessage = 'Broooooo, this is not your square! Play somewhere else! ';
    return (
        <div>
            <div className={statusColour}> {status} </div>
            {stillSamePlayer ? <div className='same-player-message' > {samePlayerMessage} </div> : null}
            <Board classname={player} />
        </div>
    );
};

export default Game;