const url = 'https://reactjs-cdp.herokuapp.com/movies?search=';

const getMoviesRequest = () => ({
  type: 'GET_MOVIES_REQUEST',
});

const getMoviesSuccess = movies => ({
  type: 'GET_MOVIES_SUCCESS',
  payload: movies,
});

const getMoviesFailure = () => ({
  type: 'GET_MOVIES_FAILURE',
});

const searchMovie = searchValue => (dispatch) => {
  dispatch(getMoviesRequest());

  fetch(url + searchValue)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => dispatch(getMoviesSuccess(response.data)))
    .catch(response => dispatch(getMoviesFailure(response)));
};

export default searchMovie;
