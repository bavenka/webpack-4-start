import React from 'react';
import PropTypes from 'prop-types';

import { incrementCounter, decrementCounter } from '../../flux/actions/counter';

export default function Counter({ store }) {
  return (
    <div>
      <button onClick={() => store.dispatch(incrementCounter())} type="button">increment</button>
      <span>{store.getState().counter}</span>
      <button onClick={() => store.dispatch(decrementCounter())} type="button">decrement</button>
    </div>
  );
}

Counter.propTypes = {
  store: PropTypes.shape({}).isRequired,
};
