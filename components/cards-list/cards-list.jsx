import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CardsList = ({ movies }) => (
  <div className="movies-container">
    { movies.status === 'STATUS_DONE' ? movies.movies.map(movie => (
      <Card film={movie} key={movie.id} />
    )) : 'Films not found'}
  </div>
);

CardsList.defaultProps = {
  movies: {},
};

CardsList.propTypes = {
  movies: PropTypes.shape({ movies: PropTypes.array }),
};

export default CardsList;
