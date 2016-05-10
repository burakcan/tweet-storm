import { REQUEST_SEARCH, SEARCH_ERROR, SEARCH_SUCCESS } from 'actions';

const initialState = {
  busy: false,
  error: false,
  success: false,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SEARCH: {
      return Object.assign({}, state, {
        busy: true,
        error: false,
        errorCause: null,
        success: false,
      });
    }

    case SEARCH_ERROR: {
      return Object.assign({}, state, {
        busy: false,
        error: action.cause,
        success: false,
      });
    }

    case SEARCH_SUCCESS: {
      return Object.assign({}, state, {
        busy: false,
        error: false,
        errorCause: null,
        success: true,
      });
    }

    default: {
      return state;
    }
  }
}
