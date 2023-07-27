import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMoviesReviews } from '../../services/moviesAPI';
import { Loader } from '../../components';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesReviews(movieId);
        setMovieReviews(data);
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
  } else if (!movieReviews) {
    return <p>Sorry, no reviews about this movie</p>;
  } else {
    console.log('movieReviews', movieReviews);
    return (
      <section>
        <h3>Reviews:</h3>
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
};

export default Reviews;
