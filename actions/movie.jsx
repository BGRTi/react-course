const url = 'https://reactjs-cdp.herokuapp.com/movies/';

export const getMovieRequest = () => ({
  type: 'GET_MOVIE_REQUEST',
});

export const getMovieSuccess = movie => ({
  type: 'GET_MOVIE_SUCCESS',
  payload: movie,
});

export const getMovieFailure = () => ({
  type: 'GET_MOVIE_FAILURE',
});

const searchMovieById = searchId => (dispatch) => {
  dispatch(getMovieRequest());
  fetch(url + searchId)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => dispatch(getMovieSuccess(response)))
    .catch(response => dispatch(getMovieFailure(response)));
};

export default searchMovieById;