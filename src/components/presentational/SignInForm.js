/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import LoadingGif from './LoadingGif';
import SubmitButton from './SubmitButton';
import FormDivider from './FormDivider';
import LinkButtons from './LinkButtons';

const SignInForm = ({ submit, changed, error }) => (
  <div className="form">
    <h2></h2>
    <div className="result-div">{error}</div>
    <form onSubmit={submit} id="sign-in-form">
      <TextInput onChange={changed} label="Email" type="email" id="sign-in-email" name="email" />
      <TextInput onChange={changed} label="Password" type="password" id="sign-in-pass" name="password" />
      <LoadingGif />
      <SubmitButton className="submit-button input" value="Sign in" />
    </form>
    <FormDivider text="New to Politico?" />
    <LinkButtons value="Create Your Politico account" location="sign-up" className="alt-button input" />
  </div>
);

SignInForm.propTypes = {
  submit: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default SignInForm;
