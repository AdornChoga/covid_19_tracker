import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h2>Covid 19 Tracker</h2>
      <button type="button" onClick={() => { navigate(-1); }}>Back</button>
      <div>
        <h3>Today&apos;s Stats</h3>
        <button type="button" className={classes.filter}>Filter</button>
      </div>
    </header>
  );
};

export default Header;
