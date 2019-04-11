const movie = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MOVIE_FAILURE':
      return {
        ...state,
        status: 'STATUS_ERROR',
      };

    case 'GET_MOVIE_REQUEST':
      return {
        ...state,
        status: 'STATUS_LOADING',
      };

    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        status: 'STATUS_DONE',
        movies: payload,
      };

    default:
      return state;
  }
};

export default movie;
