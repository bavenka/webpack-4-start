import React from 'react';
import PropTypes from 'prop-types';

import Counter from './blocks/counter/Counter';

import './application.scss';


const Application = ({ store }) => (
  <div>
    <Counter
      store={store}
    />
  </div>
);

export default Application;

Application.propTypes = {
  store: PropTypes.shape({}).isRequired,
};
