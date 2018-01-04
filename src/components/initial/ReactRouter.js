// browserHistory doesnt work with gh-pages, so using hashHistory instead
import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import App from './App';
import Home from '../containers/Home';
import MyPerlers from '../containers/MyPerlers';
import Authenticate from '../containers/Authenticate';


export default function ReactRouter() {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/my-perlers" component={MyPerlers} />
        <Route path="/authenticate" component={Authenticate} />
      </Route>
    </Router>
  );
};
