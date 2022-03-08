import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header/Header';
import { actionCreators } from '../../store/statistics/statistics';
import Countries from '../countries/Countries';

const HomePage = () => {
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state);
  useEffect(() => {
    if (statistics.countries.length === 0) {
      dispatch(actionCreators.initializeState());
    }
  }, []);
  return (
    <>
      <Header />
      <Countries />
    </>
  );
};

export default HomePage;
