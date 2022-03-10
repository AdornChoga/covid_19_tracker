import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowCircleRight, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import classes from './MoreDetails.module.css';
import Header from '../header/Header';
import Country from '../countries/Country';

const CountryStats = (props) => {
  const [regionsMenu, toggleRegions] = useState(false);
  const { country } = props;
  const {
    regions, todayNewCases, todayRecoveries, todayDeaths,
    totalCasesRecorded, totalRecoveriesRecorded, totalDeathsRecorded,
  } = country;

  const toggleMenu = () => {
    toggleRegions(!regionsMenu);
  };

  return (
    <>
      <Header />
      <div>
        <div className={classes.country}>
          <Country country={country} />
          {
            regions.length > 0 ? (
              <button type="button" onClick={toggleMenu}>
                Regions&nbsp;
                {
                  regionsMenu ? (
                    <FaAngleUp />
                  ) : <FaAngleDown />
                }
              </button>
            ) : ''
          }
        </div>
        <div className={classes.stats_and_regions}>
          {
            regionsMenu ? (
              <ul className={classes.regions}>
                {
                  regions.map((region) => (
                    <li key={uuidv4()}>
                      <span>{region.name}</span>
                      <Link to={`${region.id}`} className={classes.link}>
                        <FaArrowCircleRight />
                      </Link>
                    </li>
                  ))
                }
              </ul>
            ) : (
              <ul className={classes.country_stats}>
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
            )
          }
        </div>
      </div>
    </>
  );
};

CountryStats.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    regions: PropTypes.instanceOf(Array).isRequired,
    todayNewCases: PropTypes.number.isRequired,
    todayRecoveries: PropTypes.number.isRequired,
    todayDeaths: PropTypes.number.isRequired,
    totalCasesRecorded: PropTypes.number.isRequired,
    totalRecoveriesRecorded: PropTypes.number.isRequired,
    totalDeathsRecorded: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountryStats;
