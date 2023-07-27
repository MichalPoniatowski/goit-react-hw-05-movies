import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { getMoviesById } from '../../services/moviesAPI';
import { Loader } from '../../components';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesById(movieId);
        setMovieDetails(data);
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
  } else if (!movieDetails) {
    return <p>Sorry, no information about this movie</p>;
  } else {
    const { poster_path, title, release_date, vote_average, genres, overview } =
      movieDetails;

    console.log('movieDetails', movieDetails);

    const genreNames = genres?.map(genre => genre.name);

    return (
      <main>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : 'https://dummyimage.com/300x450/000/fff&text=No+image'
            }
            width={200}
            alt={title}
          />
          <div>
            <h2>
              {title} {parseInt(release_date)}{' '}
            </h2>
            <p>User Score: {vote_average}</p>
            <p>
              Overview: <br />
              {overview}
            </p>
            <p>
              Genres: <br />
              {genreNames ? genreNames.join(', ') : 'No genres available'}
            </p>
          </div>
        </div>
        <div>
          <h3>adidtional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </main>
    );
  }
};

export default MovieDetails;
