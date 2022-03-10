import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FaSearchengin } from 'react-icons/fa';
import { actionCreators } from '../../store/statistics/statistics';
import classes from './Header.module.css';

const Header = () => {
  const { countries } = useSelector((state) => state.statistics);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(actionCreators.startFiltering());
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmission = (e) => {
    e.preventDefault();
    if (search !== '') {
      const topSearch = results[0].id;
      navigate(`/${topSearch}`);
      setResults([]);
      setSearch('');
    }
  };

  const emptyResults = () => {
    setResults([]);
    setSearch('');
  };

  useEffect(() => {
    if (search !== '') {
      let searchedCountry = search.replace(/[^a-zA-Z]/g, '').toLocaleLowerCase();
      searchedCountry = searchedCountry.charAt(0).toUpperCase() + searchedCountry.slice(1);
      const possibleCountries = [];
      countries.forEach((country) => {
        if (country.name.slice(0, searchedCountry.length) === searchedCountry) {
          possibleCountries.push(country);
        }
      });
      setResults(possibleCountries);
    } else {
      setResults([]);
    }
  }, [search]);

  return (
    <header>
      <h2>Covid 19 Tracker</h2>
      <button type="button" onClick={() => { navigate(-1); }}>Back</button>
      <form>
        <input type="search" value={search} placeholder="search country" onChange={handleSearch} />
        <button type="submit" onClick={handleSearchSubmission}>
          <FaSearchengin />
        </button>
        <br />
        <ul className={classes.search_results}>
          {
            results.map((result) => (
              <li key={result.id}>
                <Link to={`/${result.id}`} onClick={emptyResults}>
                  {result.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </form>
      <div>
        <h3>Today&apos;s Stats</h3>
        <button type="button" className={classes.filter} onClick={handleFilter}>
          Filter
        </button>
      </div>
    </header>
  );
};

export default Header;
