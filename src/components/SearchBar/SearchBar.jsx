import React from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';

import css from './SearchBar.module.css';

export const SearchBar = ({ onChange, value }) => {
  return (
    <div className={css['Searchbar']}>
      <BiSearchAlt2 size="16" className={css['Searchbar-icon']} />
      <input
        className={css['Searchbar-input']}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
