import {
  ADD_MORE_TO_CART_FAILURE,
  ADD_MORE_TO_CART_REQ,
  ADD_MORE_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQ,
  ADD_TO_CART_SUCCESS,
  FETCH_CART_ERROR,
  FETCH_CART_REQ,
  FETCH_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  REMOVE_FROM_CART_REQ,
  REMOVE_FROM_CART_SUCCESS,
} from "../actions/cartActions";

export const fetchCartReq = ()=>{
    return{
        type: FETCH_CART_REQ
    }
}
export const fetchCartSuccess = (cartItems)=>{
    return{
        type: FETCH_CART_SUCCESS,
        payload: cartItems
    }
}
export const fetchCartError = (error)=>{
    return{
        type: FETCH_CART_ERROR,
        payload: error
    }
}

export const addToCartReq = (product) => {
  return {
    type: ADD_TO_CART_REQ,
    payload: product,
  };
};
export const addToCartSuccess = (product) => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: product
  };
};
export const addToCartFailure = (error) => {
  return {
    type: ADD_TO_CART_FAILURE,
    payload: error,
  };
};

export const addMoreToCartReq = (product) => {
  return {
    type: ADD_MORE_TO_CART_REQ,
    payload: product,
  };
};
export const addMoreToCartSuccess = (product) => {
  return {
    type: ADD_MORE_TO_CART_SUCCESS,
    payload: product
  };
};
export const addMoreToCartFailure = (error) => {
  return {
    type: ADD_MORE_TO_CART_FAILURE,
    payload: error,
  };
};

export const removeFromCartReq = (id) => {
  return {
    type: REMOVE_FROM_CART_REQ,
    payload: id,
  };
};
export const removeFromCartSuccess = (id) => {
  return {
    type: REMOVE_FROM_CART_SUCCESS,
    payload: id,
  };
};
export const removeFromCartFailure = (error) => {
  return {
    type: REMOVE_FROM_CART_FAILURE,
    payload: error,
  };
};
