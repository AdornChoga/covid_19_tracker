import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../store/configureStore';
import RegionStats from '../RegionStats';

it('should create region stats component snapshot', () => {
  const country = {
    name: 'Canada',
    image: 'image.png',
    todayOpenCases: 4949,
    regions: [],
  };

  const region = {
    name: '',
    id: '',
    regions: [],
    today_new_open_cases: 8599,
    today_new_recovered: 858,
    today_new_deaths: 858,
    today_open_cases: 303,
    today_confirmed: 304,
    today_recovered: 134,
    today_deaths: 455,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <RegionStats region={region} country={country} />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
