import {
  FETCH_GOOGLE_USER_DETAILS
} from '../constants/types/actionTypes';

// const loginError = (error) => {
//   return {
//     type: 'FETCH_LOGIN_ERROR',
//     payload: error,
//   };
// };

// send user details from google login
const googleUserDetails = (user_details) => {
  return {
    type: FETCH_GOOGLE_USER_DETAILS,
    payload: (user_details && user_details.profileObj)
  };
};

export function fetchGoogleUserDetails(user_details) {
  return dispatch => {
    dispatch(googleUserDetails(user_details));
  }
};



