import React from 'react';
import FetchLoader from '../FetchLoader';
import renderer from 'react-test-renderer';

it('is loading spinner page snapshot created', () => {
  const tree = renderer.create(<FetchLoader />).toJSON();
  expect(tree).toMatchSnapshot();
});