const filteredMovies = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_FILTER_FAILURE':
      return {
        ...state,
        status: 'STATUS_ERROR',
      };

    case 'GET_FILTER_REQUEST':
      return {
        ...state,
        status: 'STATUS_LOADING',
      };

    case 'GET_FILTER_SUCCESS':
      return {
        ...state,
        status: 'STATUS_DONE',
        filteredMovies: payload,
      };

    default:
      return state;
  }
};

export default filteredMovies;
