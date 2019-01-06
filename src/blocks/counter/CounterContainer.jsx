import { connect } from 'react-redux';

import Counter from './Counter';

import { incrementCounter, decrementCounter } from '../../flux/actions/counter';


const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncrement() {
    dispatch(incrementCounter());
  },
  onDecrement() {
    dispatch(decrementCounter());
  },
});

const CounerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounerContainer;
