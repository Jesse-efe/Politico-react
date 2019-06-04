import axios from 'axios';
import * as actions from './actionTypes';

export const getPartiesSuccess = (parties) => ({
  type: actions.FETCH_PARTIES_SUCCESS,
  parties,
});

export const getAllParties = () => (dispatch) => {
  const url = 'https://politico-jes.herokuapp.com/api/v1/parties';
  axios.get(url)
    .then((response) => {
      dispatch(getPartiesSuccess(response.data.data));
    })
};
