import React, { useState, useEffect } from 'react';

import { getTrendingMovies } from '../../services/moviesAPI';
import { Loader, MovieList } from '../../components';

const Home = () => {
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
      <div>
        <Loader />
      </div>
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

export default Home;
