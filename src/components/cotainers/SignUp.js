import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { signUp, authFail } from '../../actions/auth';
import { validateSignup } from '../../helpers';
import Header from '../presentational/Header';
import SignUpForm from '../presentational/SignUpForm';

const SignUpPage = ({ result, resultType, reportError, onSignUp, loading, shouldRedirect }) => {
  const state = {
    firstname: '',
    lastname: '',
    othername: '',
    email: '',
    phoneNumber: '',
    passportUrl: '',
    password: '',
  };
  const [formInput, setFormInput] = useState(state);

  if(shouldRedirect) {
    return <Redirect to='/home' />
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
      firstname, lastname, othername, email, phoneNumber, passportUrl, password
    } = formInput;
    const errors = validateSignup(firstname, lastname, othername, email, phoneNumber, passportUrl, password);
    if (errors.foundError) {
      reportError(errors.body);
    } else {
      onSignUp(firstname, lastname, othername, email, phoneNumber, passportUrl, password);
    }
  };

  return (
    <div>
      <Header />
      <section className="main">
        <h1>Create account</h1>
        <div className="box">
          <SignUpForm submit={submitHandlerLogin} changed={inputChangedHandler} result={result} resultType={resultType} isLoading={loading} />
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
  onSignUp: (email, password) => dispatch(signUp(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
