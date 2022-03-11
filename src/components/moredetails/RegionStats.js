import React from 'react';
import PropTypes from 'prop-types';
import classes from './MoreDetails.module.css';
import Header from '../header/Header';
import CountryHeader from './CountryHeader';
import Details from './Details';
import createJSProperties from '../../logic/CreateJSProperties';

const RegionStats = (props) => {
  const { region, country } = props;
  const regionStatistics = createJSProperties(region);
  const { name: regionName } = regionStatistics;

  return (
    <div className={classes.main_container}>
      <Header />
      <CountryHeader country={country} />
      <h4>
        Region:&nbsp;&nbsp;&nbsp;
        {regionName}
      </h4>
      <Details details={regionStatistics} />
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
