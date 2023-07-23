import React from 'react';
import css from './Movies.module.css';

export const Movies = ({ showSearchedMovies }) => {
  return (
    <button className={css.button} onClick={showSearchedMovies}>
      Movies
    </button>
  );
};
