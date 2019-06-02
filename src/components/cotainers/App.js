import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import SignInPage from './SignIn';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={SignInPage} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
