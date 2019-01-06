import React from 'react';

import CounterContext from './CounterContext';

export default function Counter() {
  return (
    <CounterContext.Consumer>
      {({ onIncrement, onDecrement, counter }) => (
        <div>
          <button onClick={() => onIncrement()} type="button">increment</button>
          <span>{counter}</span>
          <button onClick={() => onDecrement()} type="button">decrement</button>
        </div>
      )}

    </CounterContext.Consumer>
  );
}
