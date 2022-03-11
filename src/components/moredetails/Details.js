import React from 'react';
import PropTypes from 'prop-types';
import classes from './MoreDetails.module.css';

const Details = (props) => {
  const { details } = props;
  const {
    today_new_open_cases: todayNewCases, today_new_recovered: todayRecoveries,
    today_new_deaths: todayDeaths, today_confirmed: totalCasesRecorded,
    today_recovered: totalRecoveriesRecorded, today_deaths: totalDeathsRecorded,
  } = details;
  return (
    <ul className={classes.statistics}>
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
  );
};

Details.propTypes = {
  details: PropTypes.shape({
    today_new_open_cases: PropTypes.number,
    today_new_recovered: PropTypes.number,
    today_new_deaths: PropTypes.number,
    today_confirmed: PropTypes.number,
    today_recovered: PropTypes.number,
    today_deaths: PropTypes.number,
  }).isRequired,
};

export default Details;
