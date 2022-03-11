import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../store/configureStore';
import CountryStats from '../CountryStats';

it('should create country stats component snapshot', () => {
  const country = {
    name: 'Canada',
    image: 'image.png',
    todayOpenCases: 4949,
    regions: [],
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <CountryStats country={country} />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
