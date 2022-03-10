import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Views from './Views/Views';
import { actionCreators } from './store/statistics/statistics';
import Filter from './components/filters/Filter';

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
      { loading ? <p>Getting data...</p> : <Views /> }
      { filtering || fetchError ? <Filter fetchError={fetchError} /> : '' }
    </>
  );
};

export default App;
