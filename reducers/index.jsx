import { combineReducers } from 'redux';
import movie from './movie';
import movies from './movies';

const reducers = combineReducers({
  movie,
  movies,
});

export default reducers;
