import axios from 'axios';
import { DateTime } from 'luxon';
import imagesObj from '../../data/imagesObj';

const currentDate = DateTime.now().toISODate();

const initialState = {
  loading: false,
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

    if (img === undefined) {
      return {
        name: country.name,
        id: country.id,
        todayOpenCases: country.today_open_cases,
        map: '',
      };
    }
    return {
      name: country.name,
      id: country.id,
      todayOpenCases: country.today_open_cases,
      map: img,
    };
  });

  countries = countries.filter((country) => country !== null);
  dispatch({ type: ACTIONS.INITIALIZE_STATE, payload: { countries } });
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
