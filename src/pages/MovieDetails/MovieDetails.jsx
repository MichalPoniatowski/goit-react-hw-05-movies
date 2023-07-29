import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { getMoviesById } from '../../services/moviesAPI';
import { Loader, BackLink } from '../../components';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  console.log('location', location);
  const backLinkHref = location?.state?.from?.location ?? '/movies';

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
        <BackLink to={backLinkHref}>Go back</BackLink>
        <div className={css['MovieDEtails']}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : 'https://dummyimage.com/300x450/000/fff&text=No+image'
            }
            width={300}
            alt={title}
          />
          <div>
            <h2 className={css['MovieDEtails-title']}>
              {title} {parseInt(release_date)}{' '}
            </h2>
            <h3 className={css['MovieDEtails-header']}>
              User Score: {vote_average}{' '}
            </h3>
            <div>
              <h3>
                Overview: <br />
              </h3>
              <p className={css['MovieDEtails-text']}>{overview}</p>
            </div>
            <div>
              <h3>
                Genres: <br />
              </h3>
              <p className={css['MovieDEtails-text']}>
                {genreNames ? genreNames.join(', ') : 'No genres available'}
              </p>
            </div>
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
