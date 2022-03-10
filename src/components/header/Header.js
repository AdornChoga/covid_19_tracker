import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionCreators } from '../../store/statistics/statistics';
import classes from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(actionCreators.startFiltering());
  };

  return (
    <header>
      <h2>Covid 19 Tracker</h2>
      <button type="button" onClick={() => { navigate(-1); }}>Back</button>
      <div>
        <h3>Today&apos;s Stats</h3>
        <button type="button" className={classes.filter} onClick={handleFilter}>
          Filter
        </button>
      </div>
    </header>
  );
};

export default Header;
