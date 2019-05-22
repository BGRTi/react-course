import React from 'react';
import { Link } from 'react-router-dom';

//@flow

type Film = {
  id: number,
  poster_path: string,
  release_date: string,
  title: string
};

const MovieCard = styled.div`
  display: block;
  width: 30%;
  align-self: center;
`;

const Card = (film: Film) => (
  <MovieCard>
    <Link to={`/movie/${film.id}`}>
      <img src={film.poster_path} alt="img" height="300px" />
    </Link>
    <div>{film.title}</div>
    <div>
      Release date:
      {film.release_date}
    </div>
  </MovieCard>
);

export default Card;
