import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <Router>
    <Route path="/:productId" component={App} />
    <Route exact path="/">
      <Redirect to="/5" />
    </Route>
  </Router>,
  document.getElementById('root'),
);
