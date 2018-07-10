import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';
import Ball from '../Ball';

class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0
    };
  }

  handleClick() {
    this.setState({ balls: this.state.balls + 1 });
  }

  renderBalls() {
    const cssClassName = this.state.balls>1 ? 'notify-bubble' : 'no-bubble'
    return (
      <div className='align-ball-with-bubble'>
          <span className= {cssClassName}>{this.state.balls>1?this.state.balls : null}</span>
        <div align='center'>
          <Ball />
        </div>
      </div>
    );
  }

  render() {
    return (
      <button className="square" onClick={() => this.handleClick()}>
        {this.state.balls > 0 ? this.renderBalls() : null}
      </button>
    );
  }

}

Square.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Square;
