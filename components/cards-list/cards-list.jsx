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

const CardsList = (movies: Movies) => (
  <div className="movies-container">
    { movies.status === 'STATUS_DONE' ? movies.movies.map(movie => (
      <Card film={movie} key={movie.id} />
    )) : 'Films not found'}
  </div>
);

export default CardsList;
