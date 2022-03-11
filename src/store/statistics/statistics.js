import axios from 'axios';
import { DateTime } from 'luxon';
import imagesObj from '../../data/imagesObj';

const currentDate = DateTime.now().toISODate();

const initialState = {
  loading: true,
  fetchError: false,
  filtering: false,
  dates: { currentDate, from: '', to: '' },
  countries: [],
};

const ACTIONS = {
  START_LOADING: 'loading/start',
  STOP_LOADING: 'loading/stop',
  FILTER: 'filtering/start',
  INITIALIZE_STATE: 'statistics/initialize',
  FILTER_BY_ONE_DATE: 'statistics/date/one',
  CATCH_ERROR: 'statistics/fetch/error',
  REMOVE_ERR0R: 'statistics/fetch/successful',
};

const stopLoading = () => ({
  type: ACTIONS.STOP_LOADING,
});

const startLoading = () => ({
  type: ACTIONS.START_LOADING,
});

const filtering = () => ({
  type: ACTIONS.FILTER,
});

const filterByOneDate = (date) => ({
  type: ACTIONS.FILTER_BY_ONE_DATE,
  payload: date,
});

const setAppStore = (date = currentDate, numDates = 1) => async (dispatch) => {
  dispatch({ type: ACTIONS.START_LOADING });
  const path = 'https://api.covid19tracking.narrativa.com/api/';
  let response;
  if (numDates === 1) {
    try {
      response = await axios.get(`${path}${date}`);
      dispatch({ type: ACTIONS.REMOVE_ERR0R });
    } catch (err) {
      dispatch({ type: ACTIONS.CATCH_ERROR });
      return;
    }
  }
  let { countries } = response.data.dates[date];
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
      storedCountry.image = 'https://raw.githubusercontent.com/djaiss/mapsicon/master/oceania/gu/96.png';
    } else {
      storedCountry
        .image = `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${img.toLowerCase()}/96.png`;
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
  filtering,
  setAppStore,
  filterByOneDate,
};

const statistics = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.START_LOADING:
      return { ...state, loading: true };
    case ACTIONS.STOP_LOADING:
      return { ...state, loading: false };
    case ACTIONS.CATCH_ERROR:
      return { ...state, fetchError: true };
    case ACTIONS.REMOVE_ERR0R:
      return { ...state, fetchError: false };
    case ACTIONS.FILTER:
      return { ...state, filtering: !state.filtering };
    case ACTIONS.INITIALIZE_STATE:
      return { ...state, countries: action.payload.countries };
    case ACTIONS.FILTER_BY_ONE_DATE:
      return { ...state, dates: { ...state.dates, currentDate: action.payload } };
    default:
      return state;
  }
};

export default statistics;
export { actionCreators };
