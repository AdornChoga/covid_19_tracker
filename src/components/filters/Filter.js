import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaExclamationCircle } from 'react-icons/fa';
import { actionCreators } from '../../store/statistics/statistics';
import classes from './Filter.module.css';

const Filter = (props) => {
  const { fetchError } = props;
  const [error] = useState(fetchError);
  const [input, setInput] = useState('');
  const [dates, setDates] = useState({ currentDate: input, to: '', from: '' });
  const dispatch = useDispatch();

  useEffect(() => {
  }, [error]);

  const handleDateChange = (e) => {
    setInput(e.target.value);
    setDates({ ...dates, currentDate: e.target.value });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (dates.currentDate !== '') {
      dispatch(actionCreators.filterByOneDate(dates.currentDate));
      dispatch(actionCreators.setAppStore(dates.currentDate, 1));
      if (!error) {
        dispatch(actionCreators.filtering());
      }
    }
  };

  const exitFilter = (e) => {
    if (e.target.id === 'exit_filter') {
      dispatch(actionCreators.filtering());
    }
  };

  return (
    <div className={classes.filter_container} id="exit_filter" onClick={exitFilter} aria-hidden="true">
      { error ? (
        <h5 className={classes.fetch_error_msg}>
          <FaExclamationCircle className={classes.info_icon} />
          Sorry, could not get data for that date
        </h5>
      )
        : ''}
      <form>
        <input type="date" value={input} className={classes.current_date} onChange={handleDateChange} />
        <br />
        <button type="submit" onClick={handleSubmission} className={classes.submit}>
          Get Statistics
        </button>
      </form>
    </div>
  );
};

Filter.propTypes = {
  fetchError: PropTypes.bool.isRequired,
};

export default Filter;
