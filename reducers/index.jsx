import { combineReducers } from 'redux';
import movie from './movie';
import movies from './movies';
import filteredMovies from './filters';

const reducers = combineReducers({
  movie,
  movies,
  filteredMovies,
});

export default reducers;
