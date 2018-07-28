import initialState from '../constants/initialState';

import {
  SET_INITIAL_STATE,
    FETCH_USER
} from '../constants/types/actionTypes';

export default function (state = initialState.user, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_INITIAL_STATE: {
      return { ...state, "loggedIn": false };
    }
    case FETCH_USER: {
      return { ...state, "user_name": payload };
    }
    default:
      return state;
  }
}
