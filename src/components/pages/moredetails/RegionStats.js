import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/Header';
import Country from '../../countries/Country';

const RegionStats = (props) => {
  const { region, country } = props;
  const {
    name: regionName, today_new_open_cases: todayNewCases, today_new_recovered: todayRecoveries,
    today_new_deaths: todayDeaths, today_confirmed: totalCasesRecorded,
    today_recovered: totalRecoveriesRecorded, today_deaths: totalDeathsRecorded,
  } = region;

  return (
    <>
      <Header />
      <div>
        <Country country={country} />
        <h3>
          Region:&nbsp;&nbsp;&nbsp;
          {regionName}
        </h3>
        <ul>
          <li>
            Today&apos;s new cases:&nbsp;&nbsp;&nbsp;
            {todayNewCases}
          </li>
          <li>
            Today&apos;s new recoveries:&nbsp;&nbsp;&nbsp;
            {todayRecoveries}
          </li>
          <li>
            Today&apos;s new deaths:&nbsp;&nbsp;&nbsp;
            {todayDeaths}
          </li>
          <li>
            Total cases recorded:&nbsp;&nbsp;&nbsp;
            {totalCasesRecorded}
          </li>
          <li>
            Total recoveries recorded:&nbsp;&nbsp;&nbsp;
            {totalRecoveriesRecorded}
          </li>
          <li>
            Total deaths recorded:&nbsp;&nbsp;&nbsp;
            {totalDeathsRecorded}
          </li>
        </ul>
      </div>
    </>
  );
};

RegionStats.propTypes = {
  country: PropTypes.shape({}).isRequired,
  region: PropTypes.shape({
    name: PropTypes.string.isRequired,
    today_new_open_cases: PropTypes.number,
    today_new_recovered: PropTypes.number,
    today_new_deaths: PropTypes.number,
    today_confirmed: PropTypes.number,
    today_recovered: PropTypes.number,
    today_deaths: PropTypes.number,
  }).isRequired,
};

export default RegionStats;
