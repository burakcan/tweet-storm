import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { REQUEST_SEARCH, searchError, search, searchSuccess } from 'actions';
import { validateInput, parseURL, fetchTweet, buildTree } from 'services/search';
import { browserHistory } from 'react-router';

export function *onSearch({ payload: { value } }) {
  const valid = yield call(validateInput, value);
  if (!valid) {
    return yield put(searchError('URLINVALID'));
  }
  yield put(search(value));

  try {
    const [id] = yield call(parseURL, value);
    const tweet = yield call(fetchTweet, id);
    const tree = yield call(buildTree, tweet);
    yield call([browserHistory, browserHistory.push], 'tree');

    return yield put(searchSuccess(tree));
  } catch (e) {
    return yield put(searchError('APIERROR'));
  }
}

export function *watchSearch() {
  yield takeEvery(REQUEST_SEARCH, onSearch);
}

export default function *searchSaga() {
  yield fork(watchSearch);
}
