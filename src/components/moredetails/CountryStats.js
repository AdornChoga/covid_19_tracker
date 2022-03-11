import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowCircleRight, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import classes from './MoreDetails.module.css';
import Header from '../header/Header';
import CountryHeader from './CountryHeader';
import Details from './Details';

const CountryStats = (props) => {
  const [regionsMenu, toggleRegions] = useState(false);
  const { country } = props;
  const { regions } = country;

  const toggleMenu = () => {
    toggleRegions(!regionsMenu);
  };

  return (
    <>
      <Header />
      <div className={classes.main_container}>
        <div>
          <CountryHeader country={country} className={classes.country} />
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
            ) : <Details details={country} />
          }
        </div>
      </div>
    </>
  );
};

CountryStats.propTypes = {
  country: PropTypes.shape({
    regions: PropTypes.instanceOf(Array).isRequired,
  }).isRequired,
};

export default CountryStats;
