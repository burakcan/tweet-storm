import { REQUEST_SEARCH, SEARCH_SUCCESS } from 'actions';

const initialState = {
  data: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SEARCH: {
      return Object.assign({}, state, {
        data: [],
      });
    }

    case SEARCH_SUCCESS: {
      return Object.assign({}, state, {
        data: action.payload.tree,
      });
    }

    default: {
      return state;
    }
  }
}
