import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import searchMovie from './movies';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  })

  it('creates GET_MOVIE_SUCCESS when fetching movie has been done', () => {
    fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies?searchBy=mock&search=genre', {
      body: { movie: ['do something'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: 'GET_MOVIE_REQUEST' },
      { type: 'GET_MOVIE_SUCCESS', body: { movie: ['do something'] } },
    ];
    const store = mockStore({ movie: [] });
    const searchBy = 'mock';
    const searchValue = 'genre';
    return store.dispatch(searchMovie({ searchBy, searchValue })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
