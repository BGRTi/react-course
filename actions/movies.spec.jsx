import { getMoviesRequest, getMoviesSuccess, getMoviesFailure } from './movies';

describe('Movies actions Test Suite', () => {
  it('should return request type', () => {
    expect(getMoviesRequest()).toEqual('GET_MOVIES_REQUEST');
  });
  it('should return success type', () => {
    expect(getMoviesSuccess()).toEqual('GET_SUCCESS_REQUEST');
  });
  it('should return failure type', () => {
    expect(getMoviesFailure()).toEqual('GET_FAILURE_REQUEST');
  });
});
