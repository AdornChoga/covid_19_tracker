import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import statistics from './statistics/statistics';

const reducer = combineReducers({
  statistics,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
