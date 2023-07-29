import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <>
      <Link className={css.BackLink} to={to}>
        <AiOutlineArrowLeft size="16" />
        {children}
      </Link>
    </>
  );
};

BackLink.propTypes = {
  to: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};
