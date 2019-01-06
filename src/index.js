import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import Application from './Application';
// import storeFactory from './flux/store/storeFactory';
import CounterStore from './blocks/counter/CounterStore';


// const store = storeFactory();

// ReactDOM.render(
//  <Provider store={store}>
//    <Application />
//  </Provider>,
// document.getElementById('container'),
// );

ReactDOM.render(
  <CounterStore>
    <Application />
  </CounterStore>,
  document.getElementById('container'),
);
