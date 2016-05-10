import { createSelector } from 'reselect';

export const getTree = createSelector(
  state => state.tree.data,
  result => result
);
