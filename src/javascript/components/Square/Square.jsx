import React from 'react'
import PropTypes from 'prop-types';
import './Square.css';
import Ball from '../Ball';

class Square extends React.Component {
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
    const { ballCount, limit, chainReact, playerSquare } = this.props
    const cssClassName = ballCount > 1 ? 'notify-bubble' : 'no-bubble'
    if (ballCount > limit)
      chainReact(this.state.id)
    return (
      <div className='align-ball-with-bubble'>
        <span className={cssClassName}>
          {ballCount > 1 ? ballCount : null}
        </span>
        <div align='center'>
          <Ball player={playerSquare} />
        </div>
      </div>
    );
  }

  render() {
    const { ballCount, classname } = this.props
    return (
      <button className={classname} onClick={() => this.handleClick()}>
        {ballCount > 0 ? this.renderBalls() : null}
      </button>
    );
  }

}

Square.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func,
  initPlayground: PropTypes.func
};

export default Square;
