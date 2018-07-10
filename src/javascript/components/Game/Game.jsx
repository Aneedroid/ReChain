import React from 'react';
import './Game.css';
import Board from '../Board/Board'

class Game extends React.Component{

    // constructor(props){
    //     super(props);
    //   }

    // componentDidMount(){

    // }

    render(){
        return(
            <div>
                <Board/>
            </div>
        );
    }
}

export default Game;