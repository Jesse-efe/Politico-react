import * as actions from '../actions/actionTypes';

const initialState = {
  token: null,
  isLoggedIn: false,
  shouldRedirect: false,
  userId: null,
  userEmail: null,
  firstname: null,
  lastname: null,
  othername: null,
  phoneNumber: null,
  passportUrl: null,
  info: null,
  infoType: null,
  loading: false,
};

const authLoading = (state, action) => ({
  ...state,
  error: null,
  loading: true,
});

const authSuccess = (state, action) => ({
  ...state,
  token: action.token,
  userId: action.userId,
  userEmail: action.userEmail,
  firstname: action.firstname,
  lastname: action.lastname,
  othername: action.othername,
  passportUrl: action.passportUrl,
  info: ['Successful'],
  infoType: 'success-div',
  loading: false,
  isLoggedIn: true,
  shouldRedirect: true,
});

const authFail = (state, action) => ({
  ...state,
  info: action.error,
  infoType: 'error-div',
  loading: false,
});


const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START: return authLoading(state, action);
    case actions.AUTH_SUCCESS: return authSuccess(state, action);
    case actions.AUTH_FAILURE: return authFail(state, action);
    default:
      return state;
  }
};

export default AuthReducer;
