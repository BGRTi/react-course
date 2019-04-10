const url = 'https://reactjs-cdp.herokuapp.com/movies?searchBy=';

const searchByRequest = () => ({
  type: 'GET_FILTER_REQUEST',
});

const searchBySuccess = movies => ({
  type: 'GET_FILTER_SUCCESS',
  payload: movies,
});

const searchByFailure = () => ({
  type: 'GET_FILTER_FAILURE',
});

const getSearchBy = searchBy => (dispatch) => {
  dispatch(searchByRequest());

  fetch(url + searchBy)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => dispatch(searchBySuccess(response.data)))
    .catch(response => dispatch(searchByFailure(response)));
};

export default getSearchBy;
