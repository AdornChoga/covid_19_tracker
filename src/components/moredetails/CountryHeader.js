import React from 'react';
import PropTypes from 'prop-types';
import classes from './MoreDetails.module.css';

const CountryHeader = (props) => {
  const { country } = props;
  const {
    name, image, todayOpenCases,
  } = country;
  return (
    <div className={classes.country}>
      <img src={image} alt="map" />
      <div>
        <span className={classes.country_name}>{name}</span>
        <span className={classes.country_open_cases}>
          Open Cases:&nbsp;&nbsp;&nbsp;
          {todayOpenCases}
        </span>
      </div>
    </div>
  );
};

CountryHeader.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    todayOpenCases: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountryHeader;
