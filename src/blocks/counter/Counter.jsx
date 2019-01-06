import React from 'react';
import PropTypes from 'prop-types';

export default function Counter({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <button onClick={() => onIncrement()} type="button">increment</button>
      <span>{counter}</span>
      <button onClick={() => onDecrement()} type="button">decrement</button>
    </div>
  );
}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};
