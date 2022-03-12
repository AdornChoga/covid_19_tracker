import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';
import classes from './Countries.module.css';

const Country = (props) => {
  const { country } = props;
  const {
    name, image, todayOpenCases, id,
  } = country;
  return (
    <div className={classes.country}>
      <Link to={`/${id}`} className={classes.arrow_icon}>
        <FaArrowCircleRight />
      </Link>
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

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    todayOpenCases: PropTypes.number.isRequired,
  }).isRequired,
};

export default Country;
