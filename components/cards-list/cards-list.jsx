import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CardsList = ({ films }) => (
  <div className="movies-container">
    { films.length !== 0 ? films.map(film => (
      <Card film={film} key={film.id} />
    )) : 'Films not found'}
  </div>
);

CardsList.defaultProps = {
  films: {},
};

CardsList.propTypes = {
  films: PropTypes.shape({ films: PropTypes.array }),
};

export default CardsList;
