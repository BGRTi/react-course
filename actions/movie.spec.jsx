import { getMovieRequest, getMovieSuccess, getMovieFailure } from './movies';

describe('Movies actions Test Suite', () => {
  it('should return request type', () => {
    expect(getMovieRequest()).toEqual({type: 'GET_MOVIE_REQUEST'});
  });
  it('should return success type', () => {
    expect(getMovieSuccess('sometext')).toEqual({type: 'GET_MOVIE_SUCCESS', payload: 'sometext'});
  });
  it('should return failure type', () => {
    expect(getMovieFailure()).toEqual({type: 'GET_MOVIE_FAILURE'});
  });
});
