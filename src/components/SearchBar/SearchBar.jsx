import React from 'react';
// import css from './SearchBar.module.css';

export const SearchBar = ({ onChange, value }) => {
  return (
    <div>
      <input
        // className={css['SearchForm-input']}
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
