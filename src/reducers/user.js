import initialState from '../constants/initialState';

import {
  SET_INITIAL_STATE,
    FETCH_GOOGLE_USER_DETAILS
} from '../constants/types/actionTypes';

export default function (state = initialState.user, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_INITIAL_STATE: {
      return { ...state, "loggedIn": false };
    }
    case FETCH_GOOGLE_USER_DETAILS: {
      return { ...state, "user_name": payload || 'GUEST' };
    }
    default:
      return state;
  }
}
