export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export function requestSearch(value) {
  return {
    type: REQUEST_SEARCH,
    payload: { value },
  };
}

export const SEARCH = 'SEARCH';
export function search(value) {
  return {
    type: SEARCH,
    payload: { value },
  };
}

export const SEARCH_ERROR = 'SEARCH_ERROR';
export function searchError(cause) {
  return {
    type: SEARCH_ERROR,
    payload: { cause },
  };
}

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export function searchSuccess(tree) {
  return {
    type: SEARCH_SUCCESS,
    payload: { tree },
  };
}
