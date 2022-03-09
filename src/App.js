import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Views from './Views/Views';
import { actionCreators } from './store/statistics/statistics';

const App = () => {
  const { loading } = useSelector((state) => state.statistics);
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state);
  useEffect(() => {
    if (statistics.countries.length === 0) {
      dispatch(actionCreators.initializeState());
    }
  }, []);
  return (
    <>
      { loading ? <p>Getting data...</p> : <Views /> }
    </>
  );
};

export default App;
