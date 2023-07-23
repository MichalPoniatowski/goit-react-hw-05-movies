import React from 'react';
// import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <p>{movie.title}</p>
        </li>
      ))}
    </ul>
  );
};
