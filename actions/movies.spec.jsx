import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import searchMovie from './movies';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates GET_MOVIES_SUCCESS when fetching movies has been done', () => {
    fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies?searchBy=mock&search=genre', {
      body: { movies: ['do something'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: 'GET_MOVIES_REQUEST' },
      { type: 'GET_MOVIES_SUCCESS', body: { movies: ['do something'] } },
    ];
    const store = mockStore({ movies: [] });
    const searchBy = 'mock';
    const searchValue = 'genre';
    return store.dispatch(searchMovie({ searchBy, searchValue })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
