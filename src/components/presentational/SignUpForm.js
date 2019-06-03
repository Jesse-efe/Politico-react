/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import LoadingGif from './LoadingGif';
import SubmitButton from './SubmitButton';
import Info from './Info';

const SignUpForm = ({ submit, changed, result, resultType, isLoading }) => (
  <div className="form">
    <h2></h2>
    <Info result={result} resultType={resultType} />
    <form onSubmit={submit} id="sign-in-form">
      <TextInput onChange={changed} label="First name" type="text" id="sign-in-first-name" name="firstname" />
      <TextInput onChange={changed} label="Last name" type="text" id="ssign-in-last-name" name="lastname" />
      <TextInput onChange={changed} label="Other name" type="text" id="sign-in-other-name" name="othername" />
      <TextInput onChange={changed} label="Email" type="email" id="sign-in-email" name="email" />
      <TextInput onChange={changed} label="Phone Number" type="text" id="sign-in-phone" name="phoneNumber" />
      <TextInput onChange={changed} label="Passport URL" type="text" id="passport" name="passportUrl" />
      <TextInput onChange={changed} label="Password" type="password" id="sign-in-pass" name="password" />
      <LoadingGif clas={isLoading ? "loading" : "loading no-loading"}/>
      <SubmitButton className="submit-button input" value="Sign in" />
    </form>
    <h6 id="alt-sign-up">Already have an account? <Link to="/login">Sign in</Link></h6>
  </div>
);

SignUpForm.propTypes = {
  submit: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default SignUpForm;
