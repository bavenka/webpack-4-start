import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CounterContext from './CounterContext';

export default class CounterStore extends PureComponent {
    static propTypes = {
      children: PropTypes.element.isRequired,
    }

    state = {
      counter: 0,
    }

    onIncrement = () => this.setState(prevState => ({ counter: prevState.counter + 1 }));

    onDecrement = () => this.setState(prevState => ({ counter: prevState.counter - 1 }));

    render() {
      const { counter } = this.state;
      const { children } = this.props;
      return (
        <CounterContext.Provider value={{
          counter,
          onDecrement: this.onDecrement,
          onIncrement: this.onIncrement,
        }}
        >
          {children}
        </CounterContext.Provider>
      );
    }
}
