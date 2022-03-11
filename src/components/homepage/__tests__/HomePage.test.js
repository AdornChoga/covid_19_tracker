import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../store/configureStore';
import HomePage from '../HomePage';

it('should create HomePage snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
