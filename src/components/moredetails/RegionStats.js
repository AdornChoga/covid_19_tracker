import React from 'react';
import PropTypes from 'prop-types';
import classes from './MoreDetails.module.css';
import Header from '../header/Header';
import CountryHeader from './CountryHeader';
import Details from './Details';

const RegionStats = (props) => {
  const { region, country } = props;
  const { name: regionName } = region;

  return (
    <div className={classes.main_container}>
      <Header />
      <CountryHeader country={country} />
      <h4>
        Region:&nbsp;&nbsp;&nbsp;
        {regionName}
      </h4>
      <Details details={region} />
    </div>
  );
};

RegionStats.propTypes = {
  country: PropTypes.shape({}).isRequired,
  region: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default RegionStats;
