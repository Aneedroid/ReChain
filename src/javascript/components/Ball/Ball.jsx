import React from 'react';
import PropTypes from 'prop-types';
import './Ball.css';

const Ball = (props) => {
  const className = props.player === 0 ? "sphere" : "sphere-second";
  return (
    <figure className={className}></figure>
  );
};

Ball.propTypes = {
  player: PropTypes.number
};

export default Ball;