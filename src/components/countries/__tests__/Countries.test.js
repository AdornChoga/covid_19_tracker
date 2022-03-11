import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../store/configureStore';
import Countries from '../Countries';

it('should create countries component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Countries />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
