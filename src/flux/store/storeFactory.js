import { createStore } from 'redux';
import counter from '../reducers/counter';

export default function storeFactory() {
  return createStore(counter);
}
