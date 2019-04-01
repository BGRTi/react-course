import React from 'react';
import Card from '../card/card'
const CardsList = ({ films }) => (
  <div className="movies-container">
    { films.length !== 0 ? films.map(film => (
      <Card film={film} key={film.id} />
    )) : 'Films not found'}
  </div>
);

export default CardsList;
