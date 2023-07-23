import React, { useState, useEffect } from 'react';

// import css from './Home.module.css';
// import { Loader, MovieList } from '../../components';
// import { MovieList } from 'components/MovieList';
// import { Loader } from '../../components/Loader/Loader';
// import { MovieList } from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../services/moviesAPI';

import { Loader, MovieList } from '../../components';

// export const Home = () => {
//   return <button className={css.button}>Home</button>;
// };

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const showMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    showMovies();
  }, []);

  if (isLoading) {
    return (
      <p>
        <Loader />
      </p>
    );
  } else if (error) {
    return <p>Something went wrong: {error.message}</p>;
  } else {
    return (
      <div>
        <h2>Trending today</h2>
        <MovieList movies={movies} />
      </div>
    );
  }
};
