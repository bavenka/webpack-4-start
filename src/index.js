import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Application from './Application';
import storeFactory from './flux/store/storeFactory';


const store = storeFactory();

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('container'),
);
