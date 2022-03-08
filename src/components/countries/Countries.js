import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import classes from './Countries.module.css';

function Countries() {
  const { statistics } = useSelector((state) => state);
  return (
    <div className={classes.countries_container}>
      {
        statistics.countries.map((country) => (
          <Country key={country.id} country={country} />
        ))
      }
    </div>
  );
}

export default Countries;
