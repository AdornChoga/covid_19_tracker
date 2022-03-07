import React from 'react';
import classes from './Header.module.css';

const Header = () => (
  <header>
    <h2>Covid 19 Tracker</h2>
    <div>
      <h3>Today&apos;s Stats</h3>
      <button type="button" className={classes.filter}>Filter</button>
    </div>
  </header>
);

export default Header;
