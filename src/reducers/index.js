import { combineReducers } from 'redux';
import global from './global';
import user from './user';
import card from './card';

export default combineReducers({
  global,
  user,
  card,
});
