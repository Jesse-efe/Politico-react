import * as actions from '../actions/actionTypes';

const initialState = {
  fetchedParties: false,
  parties: null,
};

const fetchPartiesSuccess = (state, action) => ({
  ...state,
  fetchedParties: true,
  parties: action.parties,
});

const PartyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PARTIES_SUCCESS: return fetchPartiesSuccess(state, action);
    default:
      return state;
  }
};

export default PartyReducer;
