import {
  DECREASE_QUANTITY_REQUEST,
  DECREASE_QUANTITY_SUCCESS,
  DELETE_REQ,
  DELETE_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_REQ,
  FETCH_PRODUCTS_SUCCESS,
} from "../actions/productActions";

export const fetchProductsReq = () => {
  return {
    type: FETCH_PRODUCTS_REQ,
  };
};
export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};
export const fetchProductsError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: error,
  };
};

export const decreaseQuantityReq = (product) => {
  return {
    type: DECREASE_QUANTITY_REQUEST,
    payload: product,
  };
};
export const decreaseQuantitySuccess = (product) => {
  return {
    type: DECREASE_QUANTITY_SUCCESS,
    payload: product,
  };
};

export const deleteReq = (product) => {
  return {
    type: DELETE_REQ,
    payload: product,
  };
};
export const deleteSuccess = (product) => {
  return {
    type: DELETE_SUCCESS,
    payload: product,
  };
};
