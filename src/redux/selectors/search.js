import { createSelector } from 'reselect';

export const isBusy = createSelector(
  state => state.search.busy,
  result => result
);

export const isSucceeded = createSelector(
  state => state.search.success,
  result => result
);

export const isFailed = createSelector(
  state => state.search.error,
  result => Boolean(result)
);
