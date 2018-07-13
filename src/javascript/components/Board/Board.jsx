import React from 'react';
import './Board.css';
import CornerSquare from '../Squares/CornerSquare/'


class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  renderCornerSquare = (i) => {
    return (
      <CornerSquare id={i} />
    );
  };

  render() {
    return (
      <div className="centered">
        <div className="board-row">
          {this.renderCornerSquare(0)}
          {this.renderCornerSquare(1)}
          {this.renderCornerSquare(2)}
          {this.renderCornerSquare(3)}
          {this.renderCornerSquare(4)}
          {this.renderCornerSquare(5)}
        </div>
        <div className="board-row">
          {this.renderCornerSquare(6)}
          {this.renderCornerSquare(7)}
          {this.renderCornerSquare(8)}
          {this.renderCornerSquare(9)}
          {this.renderCornerSquare(10)}
          {this.renderCornerSquare(11)}
        </div>
        <div className="board-row">
          {this.renderCornerSquare(12)}
          {this.renderCornerSquare(13)}
          {this.renderCornerSquare(14)}
          {this.renderCornerSquare(15)}
          {this.renderCornerSquare(16)}
          {this.renderCornerSquare(17)}
        </div>
        <div className="board-row">
          {this.renderCornerSquare(18)}
          {this.renderCornerSquare(19)}
          {this.renderCornerSquare(20)}
          {this.renderCornerSquare(21)}
          {this.renderCornerSquare(22)}
          {this.renderCornerSquare(23)}
        </div>
        <div className="board-row">
          {this.renderCornerSquare(24)}
          {this.renderCornerSquare(25)}
          {this.renderCornerSquare(26)}
          {this.renderCornerSquare(27)}
          {this.renderCornerSquare(28)}
          {this.renderCornerSquare(29)}
        </div>
      </div>);
  }
};

export default Board;