// import axios from 'axios';
import { DateTime } from 'luxon';

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

const actionCreators = {
  startLoading: () => ({
    type: ACTIONS.START_LOADING,
  }),
  stopLoading: () => ({
    type: ACTIONS.STOP_LOADING,
  }),
  initializeState: () => ({
    type: ACTIONS.INITIALIZE_STATE,
    payload: { statistics: [] },
  }),
};

const statistics = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.START_LOADING:
      return { ...state, loading: true };
    case ACTIONS.STOP_LOADING:
      return { ...state, loading: false };
    case ACTIONS.INITIALIZE_STATE:
      return { ...state, countries: action.payload.statistics };
    default:
      return state;
  }
};

export default statistics;
export { actionCreators };
