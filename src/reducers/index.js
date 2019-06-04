import { combineReducers } from 'redux';
import AuthReducer from './auth';
import PartyReducer from './parties';


const rootReducer = combineReducers({
  auth: AuthReducer,
  party: PartyReducer,
});

export default rootReducer;
