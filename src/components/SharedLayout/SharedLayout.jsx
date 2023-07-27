import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Link, Header, Container } from './SharedLayout.styled';
import { Loader } from 'components';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
