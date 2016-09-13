import * as types from '../constants/actionTypes';

export default function fetchStatusReducer(state = 0, action) {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return state + 1;
    case types.FETCH_REQUEST_SUCCESS:
      return state - 1;
    case types.FETCH_REQUEST_FAILURE:
      return state - 1;
    default:
      return state;
  }
}
