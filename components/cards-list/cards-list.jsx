import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

// @flow

type Movies = {
  movies: Array<{
    status: string,
    movies: Array<string>
  }>,
};

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  background-color: black;
  height: 300px;
`;

const CardsList = (movies: Movies) => (
  <MovieContainer>
    { movies.status === 'STATUS_DONE' ? movies.movies.map(movie => (
      <Card film={movie} key={movie.id} />
    )) : 'Films not found'}
  </MovieContainer>
);

export default CardsList;
