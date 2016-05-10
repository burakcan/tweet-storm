import React, { PropTypes } from 'react';
import AppContainer from 'containers/App';
import SearchContainer from 'containers/Search';
import TreeContainer from 'containers/Tree';
import {
  Router as ReactRouter,
  IndexRoute,
  Route,
  browserHistory,
} from 'react-router';

export default function Router({ history = browserHistory }) {
  return (
    <ReactRouter history={ history }>
      <Route path="/" component={ AppContainer }>
        <IndexRoute component={ SearchContainer } />
        <Route path="/tree" component={ TreeContainer } />
      </Route>
    </ReactRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object,
};
