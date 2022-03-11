import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';
import classes from './FetchLoader.module.css';

const FetchLoader = () => {
  const override = css`
    border-color: white;
  `;

  return (
    <div className={classes.loader_container} data-testid="loading_spinner_page">
      <ClipLoader loading css={override} size={100} />
      <h3>Fetching Covid-19 Statistics...</h3>
    </div>
  );
};

export default FetchLoader;
