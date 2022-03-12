import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Views from './Views/Views';
import { actionCreators } from './store/statistics/statistics';
import Filter from './components/filters/Filter';
import FetchLoader from './components/loaders/FetchLoader';

const App = () => {
  const { loading, fetchError, filtering } = useSelector((state) => state.statistics);
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state);
  useEffect(() => {
    if (statistics.countries.length === 0) {
      dispatch(actionCreators.setAppStore());
    }
  }, []);
  return (
    <>
      { loading ? <FetchLoader /> : <Views /> }
      { filtering || fetchError ? <Filter fetchError={fetchError} /> : '' }
    </>
  );
};

export default App;
