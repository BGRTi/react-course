import React from 'react';

const CardsList = ({ props }) => (
  <div className="movies-container">
    { props.films.length !== 0 ? props.films.map(film => (
      <div className="movie-card" key={film.id}>
        <img src="https://via.placeholder.com/150" alt="img" />
        <div>{film.name}</div>
      </div>
    )) : 'Films not found'}
  </div>
);

export default CardsList;
