import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers';

let middleware = [
  thunkMiddleware,
  // ...
];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
