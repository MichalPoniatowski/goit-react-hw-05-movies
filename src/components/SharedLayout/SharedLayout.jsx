import React from 'react';
// import { Home } from '../pages';
// import { Movies } from '../pages';
import { Link, Header, Container } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="goit-react-hw-05-movies/">Home</Link>
          <Link to="goit-react-hw-05-movies/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
