import React from 'react';
import './Game.css';
import Board from '../Board/Board'

const Game = ({ currentPlayer, stillSamePlayer, winner }) => {
    const player = currentPlayer === 0 ? 'Blue' : 'Red'
    const status = player + '\'s turn!';
    const statusColour = 'status-' + player.toLowerCase();
    const samePlayerMessage = 'Broooooo, this is not your square! Play somewhere else! ';
    const winnerMessage = 'Game over! The Winner is ' + winner;
    const classname = winner === null ? 'nothing' : 'blur-board'
    return (
        <div>
            {winner !== null ? <div className='same-player-message' > {winnerMessage} </div> : <div className={statusColour}> {status} </div>}
            {stillSamePlayer ? <div className='same-player-message' > {samePlayerMessage} </div> : null}
            <div className={classname} >
                {winner === null ? <Board classname={player} /> : null }
            </div>

        </div>
    );
};

export default Game;