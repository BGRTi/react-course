import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';

const MoviesContainer = ({ movies }) => (
  <CardsList movies={movies} />
);

MoviesContainer.defaultProps = {
  movies: {},
};

MoviesContainer.propTypes = {
  movies: PropTypes.shape({ movies: PropTypes.array }),
};

export default MoviesContainer;
