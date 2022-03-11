import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';
import classes from './Countries.module.css';

const Countries = () => {
  const { statistics } = useSelector((state) => state);
  return (
    <div className={classes.countries_container}>
      {
        statistics.countries.map((country) => (
          <Country country={country} key={uuidv4()} />
        ))
      }
    </div>
  );
};

export default Countries;
