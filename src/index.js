import 'styles/global.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import rootReducer from 'reducers';
import rootSaga from 'sagas';
import Router from 'root/router';

const AppRoot = document.getElementById('AppRoot');
const sagas = [
  { generator: rootSaga },
];
const initialState = {};

const store = configureStore({
  rootReducer,
  initialState,
  sagas,
});

render((
  <Provider store={ store }>
    <Router />
  </Provider>
), AppRoot);
