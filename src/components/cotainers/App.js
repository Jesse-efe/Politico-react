import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import SignInPage from './SignIn';
import SignUpPage from './SignUp';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={SignInPage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
