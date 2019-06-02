export const validateLogin = (email, password) => {
  const errors = {
    body: {
    },
  };
  if (email.trim() === '') {
    errors.foundError = true;
    errors.body.email = 'email address is required';
  }
  if (password.trim() === '') {
    errors.foundError = true;
    errors.body.password = 'password is required';
  }
  return errors;
};

export const validateSignup = (email, password) => {
  const errors = {};
  if (email.trim() === '') {
    errors.foundError = true;
    errors.email = 'email address is required';
  }
  if (password.trim() === '') {
    errors.foundError = true;
    errors.password = 'password is required';
  }
  return errors;
};