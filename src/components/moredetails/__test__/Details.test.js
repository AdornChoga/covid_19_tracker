import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../store/configureStore';
import Details from '../Details';

it('should create details component snapshot', () => {
  const details = {
    todayNewCases: 1, todayRecoveries: 2, todayDeaths: 3, totalCasesRecorded: 4,
    totalRecoveriesRecorded: 5, totalDeathsRecorded: 6,
  };
  const tree = renderer.create(
  <Provider store={store}>
    <Router>
      <Details details={details} />
    </Router>
  </Provider>);
  expect(tree).toMatchSnapshot();
});