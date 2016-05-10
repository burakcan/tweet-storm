import { fork } from 'redux-saga/effects';
import searchSaga from './search';

export default function *rootSaga() {
  yield fork(searchSaga);
}
