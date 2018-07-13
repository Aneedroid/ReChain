import React from 'react'
import PropTypes from 'prop-types';
import './CornerSquare.css';
import Ball from '../../Ball';

class CornerSquare extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1
    };
  }

  componentDidMount() {
    const { initPlayground } = this.props;
    this.setState({ id: this.props.id })
    initPlayground(this.props.id);
  }

  handleClick() {
    const { populate } = this.props;
    populate(this.state.id);
  }

  renderBalls() {
    const { ballCount, limit, chainReact } = this.props
    const cssClassName = ballCount > 1 ? 'notify-bubble' : 'no-bubble'
    if (ballCount > limit)
      chainReact(this.state.id)
    return (
      <div className='align-ball-with-bubble'>
        <span className={cssClassName}>
          {/* {ballCount > limit ? chainReact(this.state.id) : null} */}
          {ballCount > 1 ? ballCount : null}
        </span>
        <div align='center'>
          <Ball />
        </div>
      </div>
    );
  }

  render() {
    const { id, ballCount } = this.props
    return (
      <button className="corner-square" onClick={() => this.handleClick()}>
        {ballCount > 0 ? this.renderBalls() : null}
      </button>
    );
  }

}

CornerSquare.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func,
  initPlayground: PropTypes.func
};

export default CornerSquare;
