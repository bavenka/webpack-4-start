import React from 'react';
import ReactDOM from 'react-dom';

import storeFactory from './flux/store/storeFactory';

import Application from './Application';


const store = storeFactory();

// eslint-disable-next-line
const render = () => ReactDOM.render(<Application store={store} />, document.getElementById('container'));

store.subscribe(render);

render();
