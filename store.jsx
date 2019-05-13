import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const preloadedState = window.PRELOADED_STATE;

const store = createStore(
  reducers,
  preloadedState,
  applyMiddleware(thunk),
);

export default store;
