import {
  DECREASE_QUANTITY_REQUEST,
  DECREASE_QUANTITY_SUCCESS,
  DELETE_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_REQ,
  FETCH_PRODUCTS_SUCCESS,
} from "../actions/productActions";

const initialStates = {
  loading: false,
  products: [],
  error: "",
};

export const productReducer = (state = initialStates, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQ:
    case DECREASE_QUANTITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: true,
        products: action.payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DECREASE_QUANTITY_SUCCESS:
      return {
        ...state,
      };

    case DELETE_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
};