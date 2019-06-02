import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, failedValidation } from '../../actions/auth';
import { validateLogin } from '../../helpers';
import Header from '../presentational/Header';
import SignInForm from '../presentational/SignInForm';

const SignInPage = ({ error, reportError, onLogin }) => {
  const state = {
    email: '',
    password: '',
  };
  const [formInput, setFormInput] = useState(state);

  const inputChangedHandler = (event) => {
    const updatedFormInput = {
      ...formInput,
    };
    updatedFormInput[event.target.name] = event.target.value;
    setFormInput({
      ...updatedFormInput,
    });
  };

  const submitHandlerLogin = (event) => {
    event.preventDefault();
    const {
      email, password,
    } = formInput;
    const errors = validateLogin(email, password);
    if (errors.foundError) {
      const errorBody = Object.keys(errors.body).map(err => (
        <p>
          {errors.body[err]}
        </p>
      ));
      reportError(errorBody);
    } else {
      onLogin(email, password);
    }
  };

  return (
    <div>
      <Header />
      <section className="main">
        <h1>Sign in</h1>
        <div className="box">
          <SignInForm submit={submitHandlerLogin} changed={inputChangedHandler} error={error} />
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.auth.error,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  reportError: error => dispatch(failedValidation(error)),
  onLogin: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
