import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { rootSaga, reducers } from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
};
