import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from '../reducers/counterReducer';

export default function storeFactory() {
  return createStore(counterReducer, applyMiddleware(thunk));
}
