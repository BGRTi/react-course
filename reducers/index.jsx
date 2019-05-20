import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import movie from './movie';
import movies from './movies';
import watchSearchMovie from '../actions/movies';
import watchSearchMovieById from '../actions/movie';

export function* moviesSaga() {
  yield all([
    watchSearchMovie(),
    watchSearchMovieById(),
  ]);
}

function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}

const reducers = combineReducers({
  movie,
  movies,
});

export default {
  reducers,
  rootSaga,
};
