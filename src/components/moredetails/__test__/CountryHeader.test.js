import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../store/configureStore';
import CountryHeader from '../CountryHeader';

it('should create country header component snapshot', () => {
  const country = {
    name: 'Canada',
    image: 'image.png',
    todayOpenCases: 4949,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <CountryHeader country={country} />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
