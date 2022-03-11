import React from 'react';
import renderer from 'react-test-renderer';
import FetchLoader from '../FetchLoader';

it('is loading spinner page snapshot created', () => {
  const tree = renderer.create(<FetchLoader />).toJSON();
  expect(tree).toMatchSnapshot();
});
