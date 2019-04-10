import { combineReducers } from 'redux';
import movies from './movies';
import filteredMovies from './filters';

const reducers = combineReducers({
  movies,
  filteredMovies,
});

export default reducers;
