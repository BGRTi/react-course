import React from 'react';
import { Link } from 'react-router-dom';

//@flow

type Film = {
  id: number,
  poster_path: string,
  release_date: string,
  title: string
};

const Card = (film: Film) => (
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

export default Card;
