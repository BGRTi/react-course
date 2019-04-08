const movies = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MOVIES_FAILURE':
      return {
        ...state,
        status: 'STATUS_ERROR',
      };

    case 'GET_MOVIES_REQUEST':
      return {
        ...state,
        status: 'STATUS_LOADING',
      };

    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        status: 'STATUS_DONE',
        items: payload,
      };

    default:
      return state;
  }
};

export default movies;
