import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../store/configureStore';
import Filter from '../Filter.js';

it('should create filter component snapshot', () => {
  const fetchError = false;
  const tree = renderer.create(
  <Provider store={store}>
    <Router>
      <Filter fetchError={fetchError} />
    </Router>
  </Provider>);
  expect(tree).toMatchSnapshot();
})