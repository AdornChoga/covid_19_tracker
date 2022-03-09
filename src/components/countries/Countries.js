import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';
import classes from './Countries.module.css';

function Countries() {
  const { statistics } = useSelector((state) => state);
  return (
    <div className={classes.countries_container}>
      {
        statistics.countries.map((country) => (
          <Link key={uuidv4()} to={`/${country.id}`} className={classes.link}>
            <Country country={country} />
          </Link>
        ))
      }
    </div>
  );
}

export default Countries;
