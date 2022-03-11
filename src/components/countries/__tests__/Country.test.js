import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../store/configureStore';
import Country from '../Country';

it('should create country component snapshot', () => {
  const country = {
    name: 'Zimbabwe',
    image: 'image.png',
    todayOpenCases: 4949,
    id: 'ghtk',
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Country country={country} />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
