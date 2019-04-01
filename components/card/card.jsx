import React from 'react';

const Card = ({ film }) => (
  <div className="movie-card">
    <img src="https://via.placeholder.com/200x300" alt="img" />
    <div>{film.name}</div>
  </div>
);

export default Card;
