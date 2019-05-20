import { call, put, takeLatest } from 'redux-saga/effects';

const getMoviesSuccess = movies => ({
  type: 'GET_MOVIES_SUCCESS',
  payload: movies,
});

const getMoviesFailure = () => ({
  type: 'GET_MOVIES_FAILURE',
});

function* searchMovie(searchValue, searchBy) {
  const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchBy}&search=${searchValue}`);
  if (!response.ok) {
    const movies = yield response.json();
    yield put(getMoviesSuccess(movies));
  } else {
    yield put(getMoviesFailure(response));
  }
}

function* watchSearchMovie() {
  yield takeLatest('GET_MOVIES_REQUEST', searchMovie);
}

export default watchSearchMovie;
