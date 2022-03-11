import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FaAngleDoubleLeft, FaFilter } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { actionCreators, currentDate } from '../../store/statistics/statistics';
import classes from './Header.module.css';

const Header = () => {
  const { countries, dates } = useSelector((state) => state.statistics);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [searchBar, setSearchBar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(actionCreators.filtering());
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
    setSearchBar(!searchBar);
  };

  const emptyResults = () => {
    setResults([]);
    setSearch('');
  };

  useEffect(() => {
    if (search !== '') {
      let searchedCountry = search.replace(/[^a-zA-Z]/g, '').toLowerCase();
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
      <FaAngleDoubleLeft onClick={() => { navigate(-1); }} className={classes.prev_page} />
      {
          !searchBar ? (
            <h1>
              {
                dates.currentDate === currentDate ? 'Today\'s' : currentDate
              }
              &nbsp;&nbsp;&nbsp;Statistics
            </h1>
          ) : ''
        }
      <div>
        <form>
          {
              searchBar ? (
                <input type="search" value={search} placeholder="search country" onChange={handleSearch} />
              ) : ''
            }
          <button type="submit" onClick={handleSearchSubmission}>
            <AiOutlineSearch className={classes.search_icon} />
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
        <FaFilter className={classes.filter} onClick={handleFilter} />
      </div>
    </header>
  );
};

export default Header;
