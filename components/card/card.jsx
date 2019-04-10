import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ film }) => (
  <div className="movie-card">
    <img src={film.poster_path} alt="img" height="300px" />
    <div>{film.title}</div>
    <div>
      Release date:
      {film.release_date}
    </div>
  </div>
);

Card.defaultProps = {
  film: {},
};

Card.propTypes = {
  film: PropTypes.shape({ film: PropTypes.object }),
};

export default Card;
