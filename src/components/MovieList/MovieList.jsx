import React from 'react';
import { Link } from 'react-router-dom';
// import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
