import React from 'react';
import PropTypes from 'prop-types';
import classes from './MoreDetails.module.css';

const Details = (props) => {
  const { details } = props;
  const {
    todayNewCases, todayRecoveries, todayDeaths, totalCasesRecorded,
    totalRecoveriesRecorded, totalDeathsRecorded,
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
    todayNewCases: PropTypes.number,
    todayRecoveries: PropTypes.number,
    todayDeaths: PropTypes.number,
    totalCasesRecorded: PropTypes.number,
    totalRecoveriesRecorded: PropTypes.number,
    totalDeathsRecorded: PropTypes.number,
  }).isRequired,
};

export default Details;
