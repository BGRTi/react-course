import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ film }) => (
  <div className="movie-card">
    <img src="https://via.placeholder.com/200x300" alt="img" />
    <div>{film.name}</div>
  </div>
);

Card.defaultProps = {
  film: {},
};

Card.propTypes = {
  film: PropTypes.shape({ film: PropTypes.object.isRequired }),
};

export default Card;
