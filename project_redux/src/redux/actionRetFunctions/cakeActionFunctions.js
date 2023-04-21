import {
  ADD_CAKE,
  ADD_CAKE_SUCCESS,
  ORDER_CAKE,
  ORDER_CAKE_SUCCESS,
} from "../actions/cakeActions";

export const addCake = () => {
  return {
    type: ADD_CAKE,
  };
};
export const addCakeSuccess = () => {
  return {
    type: ADD_CAKE_SUCCESS,
  };
};
export const orderCake = () => {
  return {
    type: ORDER_CAKE,
  };
};
export const orderCakeSuccess = () => {
  return {
    type: ORDER_CAKE_SUCCESS,
  };
};
