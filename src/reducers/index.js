import { combineReducers } from 'redux';
import login from './login';
import global from './global';
import user from './user';

export default combineReducers({
  global,
  login,
  user
});
