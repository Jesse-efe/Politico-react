import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { login, authFail } from '../../actions/auth';
import { validateLogin } from '../../helpers';
import Header from '../presentational/Header';
import SignInForm from '../presentational/SignInForm';

const SignInPage = ({ result, resultType, reportError, onLogin, loading, shouldRedirect }) => {
  const state = {
    email: '',
    password: '',
  };
  const [formInput, setFormInput] = useState(state);

  if(shouldRedirect) {
    return <Redirect to='/parties' />
  }
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
      reportError(errors.body);
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
          <SignInForm submit={submitHandlerLogin} changed={inputChangedHandler} result={result} resultType={resultType} isLoading={loading} />
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  result: state.auth.info,
  resultType: state.auth.infoType,
  isLoggedIn: state.auth.isLoggedIn,
  loading: state.auth.loading,
  shouldRedirect: state.auth.shouldRedirect,
});

const mapDispatchToProps = dispatch => ({
  reportError: error => dispatch(authFail(error)),
  onLogin: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
