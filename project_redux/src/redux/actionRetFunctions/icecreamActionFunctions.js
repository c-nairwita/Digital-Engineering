import { ADD_ICECREAM, ADD_ICECREAM_SUCCESS, ORDER_ICECREAM, ORDER_ICECREAM_SUCCESS } from "../actions/icecreamAction";

export const orderIcecream = () => {
  return {
    type: ORDER_ICECREAM,
  };
};
export const orderIcecreamSuccess = () => {
  return {
    type: ORDER_ICECREAM_SUCCESS,
  };
};
export const addIcecream = () => {
  return {
    type: ADD_ICECREAM,
  };
};
export const addIcecreamSuccess = () => {
  return {
    type: ADD_ICECREAM_SUCCESS,
  };
};
