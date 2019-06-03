import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import SignInPage from './SignIn';
import SignUpPage from './SignUp';
import Parties from './Parties';
import Tabs from '../presentational/tabs';

const App = () => (
  <Router>
    <Switch>
      <Route path="/parties" component={Parties} />
      <Route path="/login" component={SignInPage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
