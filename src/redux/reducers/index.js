import { combineReducers } from 'redux';
import search from './search';
import tree from './tree';

export default combineReducers({
  search,
  tree,
});
