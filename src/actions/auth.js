import axios from 'axios';
import * as actions from './actionTypes';


export const authStart = () => ({
  type: actions.AUTH_START,
});

export const authSuccess = (token, id, email, firstname, lastname, othername, passportUrl) => ({
  type: actions.AUTH_SUCCESS,
  userId: id,
  token,
  userEmail: email,
  firstname,
  lastname,
  othername,
  passportUrl,
});

export const authFail = error => ({
  type: actions.AUTH_FAILURE,
  error,
});

export const failedValidation = error => ({
  type: actions.AUTH_FAILURE,
  error,
});

// export const signUp = (firstname, lastname, email, password) => (dispatch) => {
//   dispatch(authStart());
//   const authData = {
//     firstname,
//     lastname,
//     email,
//     password,
//   };
//   const url = 'https://ivy-ah-backend-staging.herokuapp.com/api/v1/users/signup';
//   axios.post(url, authData)
//     .then((response) => {
//       const { userid, token } = response.data.user;
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       dispatch(signUpSuccess(token, userid, response.data.user.email));
//     })
//     .catch((err) => {
//       const { error } = err.response.data;
//       dispatch(signUpFail(error));
//     });
// };

export const login = (email, password) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    email,
    password,
  };
  const url = 'https://politico-jes.herokuapp.com/api/v1/auth/login';
  axios.post(url, authData)
    .then((response) => {
      console.log(response.data, ' data');
      localStorage.setItem('user', JSON.stringify(response.data.data[0]));
      const { token } = response.data.data[0];
      const {
        id, firstname, lastname, othername, passportUrl,
      } = response.data.data[0].user;
      dispatch(authSuccess(token, id, email, firstname, lastname, othername, passportUrl));
    })
    .catch((err) => {
      console.log(err.response.data, ' error');
    //   const { error } = err.response.data;
    //   dispatch(signUpFail(error));
    });
};
