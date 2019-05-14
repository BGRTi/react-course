import { call, put, takeLatest } from 'redux-saga/effects';

const url = 'https://reactjs-cdp.herokuapp.com/movies/';

export const getMovieSuccess = movie => ({
  type: 'GET_MOVIE_SUCCESS',
  payload: movie,
});

export const getMovieFailure = () => ({
  type: 'GET_MOVIE_FAILURE',
});

function* searchMovieById(searchId) {
  const response = yield call(fetch, url + searchId);

  if (!response.ok) {
    const movies = yield response.json();
    yield put(getMovieSuccess(movies));
  } else {
    yield put(getMovieFailure(response));
  }
}

function* watchSearchMovieById() {
  yield takeLatest('GET_MOVIE_REQUEST', searchMovieById);
}

export default watchSearchMovieById;
