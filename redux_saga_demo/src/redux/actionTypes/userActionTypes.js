import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQ,
  FETCH_USERS_SUCCESS,
} from "../actions/userActions";

export const fetchUsersReq = () => {
  return {
    type: FETCH_USERS_REQ,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};
