import React from 'react';
import PropTypes from 'prop-types';
import classes from './Countries.module.css';

const Country = (props) => {
  const { country } = props;
  const { name, todayOpenCases } = country;
  return (
    <div className={classes.country}>
      <h3>{name}</h3>
      <p>{todayOpenCases}</p>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    todayOpenCases: PropTypes.number.isRequired,
  }).isRequired,
};

export default Country;
