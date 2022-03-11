import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../store/configureStore';
import Header from '../Header';

it('should create header component snapshot', () => {
  const tree = renderer.create(
  <Provider store={store}>
    <Router>
      <Header />
    </Router>
  </Provider>);
  expect(tree).toMatchSnapshot();
})