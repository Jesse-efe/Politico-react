import React from 'react';

export const validateLogin = (email, password) => {
  const errors = {
    body: [],
  };
  if (email.trim() === '') {
    errors.foundError = true;
    errors.body.push('email address is required');
  }
  if (password.trim() === '') {
    errors.foundError = true;
    errors.body.push('password is required');
  } else if(password.trim().length < 5){
    errors.foundError = true;
    errors.body.push('password should be 5 chracters or more');
  }
  return errors;
};

export const validateSignup = (firstname, lastname, othername, email, phoneNumber, passportUrl, password) => {
  const errors = {
    body: [],
  };
  if (firstname.trim() === '') {
    errors.foundError = true;
    errors.body.push('Your first name is required');
  }
  if (lastname.trim() === '') {
    errors.foundError = true;
    errors.body.push('Your last name is required');
  }
  if (othername.trim() === '') {
    errors.foundError = true;
    errors.body.push('Your other name is required');
  }
  if (email.trim() === '') {
    errors.foundError = true;
    errors.body.push('email address is required');
  }
  if (phoneNumber.trim() === '') {
    errors.foundError = true;
    errors.body.push('Your phone number is required');
  }
  if (passportUrl.trim() === '') {
    errors.foundError = true;
    errors.body.push('Your passport URL is required');
  }
  if (password.trim() === '') {
    errors.foundError = true;
    errors.body.push('password is required');
  } else if(password.trim().length < 5){
    errors.foundError = true;
    errors.body.push('password should be 5 chracters or more');
  }
  return errors;
};