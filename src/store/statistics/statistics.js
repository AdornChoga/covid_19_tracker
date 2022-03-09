import axios from 'axios';
import { DateTime } from 'luxon';
import imagesObj from '../../data/imagesObj';

const currentDate = DateTime.now().toISODate();

const initialState = {
  loading: true,
  dates: { currentDate, from: '', to: '' },
  countries: [],
};

const ACTIONS = {
  START_LOADING: 'loading/start',
  INITIALIZE_STATE: 'statistics/initialize',
  STOP_LOADING: 'loading/stop',
};

const stopLoading = () => ({
  type: ACTIONS.STOP_LOADING,
});

const startLoading = () => ({
  type: ACTIONS.START_LOADING,
});

const initializeState = () => async (dispatch) => {
  const path = 'https://api.covid19tracking.narrativa.com/api/';
  const response = await axios.get(`${path}${currentDate}`);
  let { countries } = response.data.dates[currentDate];
  const countriesToRemove = [
    'Diamond Princess', 'MS Zaandam',
    'East Timor', 'West Bank and Gaza',
  ];
  countries = Object.values(countries).map((country) => {
    if (countriesToRemove.includes(country.name)) {
      return null;
    }

    const [img] = Object.keys(imagesObj)
      .filter((key) => imagesObj[`${key}`] === country.name);

    const storedCountry = {
      name: country.name.replace(/[^a-zA-Z0-9 ]/g, ''),
      id: country.id.replace('*', ''),
      regions: country.regions,
      todayNewCases: country.today_new_open_cases,
      todayRecoveries: country.today_new_recovered,
      todayDeaths: country.today_new_deaths,
      todayOpenCases: country.today_open_cases,
      totalCasesRecorded: country.today_confirmed,
      totalRecoveriesRecorded: country.today_recovered,
      totalDeathsRecorded: country.today_deaths,
    };

    if (img === undefined) {
      storedCountry.image = '';
    } else {
      storedCountry.image = img;
    }
    return storedCountry;
  });

  countries = countries.filter((country) => country !== null);
  dispatch({ type: ACTIONS.INITIALIZE_STATE, payload: { countries } });
  dispatch(stopLoading());
};

const actionCreators = {
  startLoading,
  stopLoading,
  initializeState,
};

const statistics = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.START_LOADING:
      return { ...state, loading: true };
    case ACTIONS.STOP_LOADING:
      return { ...state, loading: false };
    case ACTIONS.INITIALIZE_STATE:
      return { ...state, countries: action.payload.countries };
    default:
      return state;
  }
};

export default statistics;
export { actionCreators };
