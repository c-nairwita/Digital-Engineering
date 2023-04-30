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

const initialCartState = {
  loading: false,
  cartItems: [],
  error: "",
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case FETCH_CART_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: true,
        cartItems: action.payload,
      };
    case FETCH_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_TO_CART_REQ:
    case ADD_MORE_TO_CART_REQ:
    case REMOVE_FROM_CART_REQ:
      return {
        ...state,
        loading: true,
      };

    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
      };

    case ADD_MORE_TO_CART_SUCCESS:
      return {
        ...state,
      };

    case REMOVE_FROM_CART_SUCCESS:
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case ADD_TO_CART_FAILURE:
    case ADD_MORE_TO_CART_FAILURE:
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
