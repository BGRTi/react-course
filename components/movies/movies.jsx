import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';

type Movies = {
  movies: Array<string>
};

const MoviesContainer = (movies: Movies) => (
  <CardsList movies={movies} />
);

export default MoviesContainer;
