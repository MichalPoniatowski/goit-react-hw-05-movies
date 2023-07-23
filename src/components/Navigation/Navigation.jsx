import React from 'react';
import css from './Navigation.module.css';

export const Navigation = ({ children }) => {
  return (
    <nav>
      <ul className={css.Navigation}>{children}</ul>
    </nav>
  );
};
