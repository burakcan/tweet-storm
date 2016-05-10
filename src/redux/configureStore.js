import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function configureStore({ rootReducer, initialState = {}, sagas = [] }) {
  const sagaMiddleware = createSagaMiddleware();
  const store = {
    ...createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run,
  };

  setImmediate(
    () => sagas.forEach(saga => store.runSaga(saga.generator, saga.param))
  );

  return store;
}
