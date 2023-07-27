import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMoviesCast } from '../../services/moviesAPI';
import { Loader } from '../../components';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesCast(movieId);
        setMovieCast(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  if (error) {
    return alert('Something went wrong');
  } else if (isLoading) {
    return <Loader />;
  } else if (!movieCast) {
    return <p>Sorry, no information about movie cast</p>;
  } else {
    return (
      <section>
        <h3>Cast:</h3>
        <ul>
          {movieCast.map(({ id, name, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://dummyimage.com/300x450/000/fff&text=No+image'
                }
                width={200}
                alt={name}
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
};

export default Cast;
