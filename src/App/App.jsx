import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages';
import { Movies } from '../pages';
import { SharedLayout } from '../components';
// import { Movies } from './pages/Movies';
// import { Navigation } from './Navigation';

// import { getTrendingMovies } from '../../src/services/moviesAPI';
// import { MovieList } from './MovieList';
// import {fetchSearchedMovies} from './services/moviesAPI';

export const App = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  // // const [currentPage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  // const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);

  // const showMoviesList = (movies) => {
  //   movies.map(movie => (
  // }

  return (
    <div>
      <SharedLayout />

      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
