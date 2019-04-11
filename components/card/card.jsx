import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ film }) => (
  <div className="movie-card">
    <Link to={`/movie/${film.id}`}>
      <img src={film.poster_path} alt="img" height="300px" />
    </Link>
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
