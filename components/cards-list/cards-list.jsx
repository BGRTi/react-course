import React from 'react';

const CardsList = (films) => {
  return (
    <div className="movies-container">
      { films.length !== 0 ? films.map(film => (
        <div className="movie-card" key={film.id}>
          <img src="https://via.placeholder.com/150" alt="img" />
          <div>{film.name}</div>
        </div>
      )) : 'Films not found'}
    </div>
 );
}

export default CardsList;
