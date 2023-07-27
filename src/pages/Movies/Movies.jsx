import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesByQuery } from '../../services/moviesAPI';
import { Loader, MovieList, SearchBar } from '../../components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });

  let query = searchParams.get('query');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesByQuery(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  const handleSearchInput = e => {
    const inputValue = e.target.value;
    setSearchParams({ query: inputValue });
  };

  return (
    <>
      <SearchBar value={query} onChange={handleSearchInput} />
      {isLoading && <Loader />}
      {error && <p>Something went wrong: {error.message}</p>}
      {!error && !isLoading && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
