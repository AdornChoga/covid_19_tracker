import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header/Header';
import { actionCreators } from '../../store/statistics/statistics';

const HomePage = () => {
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state);
  useEffect(() => {
    if (statistics.countries.length === 0) {
      dispatch(actionCreators.initializeState());
    }
  }, []);
  return (
    <Header />
  );
};

export default HomePage;
