import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  movies: [],
};

const store = createStore(reducers, initialState);

export default store;
