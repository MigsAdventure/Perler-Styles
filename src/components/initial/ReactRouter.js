// browserHistory doesnt work with gh-pages, so using hashHistory instead
import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../store';

import App from './App';
import Home from '../containers/Home';
import MyPerlers from '../containers/MyPerlers';


export default function ReactRouter() {
  return(
      <Provider store={store}>
          <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/my-perlers" component={MyPerlers} />
          </Route>
        </Router>
      </Provider>
  );
};
