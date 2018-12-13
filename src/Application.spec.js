import React from 'react';
import renderer from 'react-test-renderer';
import Application from './Application';


it('renders correctly', () => {
  const tree = renderer
    .create(<Application />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
