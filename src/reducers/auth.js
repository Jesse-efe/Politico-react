import * as actions from '../actions/actionTypes';

const initialState = {
  token: null,
  isLoggedIn: false,
  userId: null,
  userEmail: null,
  firstname: null,
  lastname: null,
  othername: null,
  passportUrl: null,
  error: null,
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
  error: null,
  loading: false,
  isLoggedIn: true,
});

const authFail = (state, action) => ({
  ...state,
  error: action.error,
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
