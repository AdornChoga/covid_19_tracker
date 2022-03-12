import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import HomePage from '../components/homepage/HomePage';
import CountryStats from '../components/moredetails/CountryStats';
import RegionStats from '../components/moredetails/RegionStats';

const Views = () => {
  const { countries } = useSelector((state) => state.statistics);
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {
        countries.map((country) => {
          if (country.regions.length > 0) {
            return (
              <Route key={uuidv4()}>
                <Route path={`/${country.id}`} key={uuidv4()} element={<CountryStats country={country} />} />
                <Route path={`/${country.id}`} key={uuidv4()}>
                  {
                    country.regions.map((region) => (
                      <Route path={`${region.id}`} key={uuidv4()} element={<RegionStats region={region} country={country} />} />
                    ))
                  }
                </Route>
              </Route>
            );
          }
          return <Route path={`/${country.id}`} key={uuidv4()} element={<CountryStats country={country} />} />;
        })
      }
    </Routes>
  );
};

export default Views;
