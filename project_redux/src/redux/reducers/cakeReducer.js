import {
  ADD_CAKE,
  ADD_CAKE_SUCCESS,
  ORDER_CAKE,
  ORDER_CAKE_SUCCESS,
} from "../actions/cakeActions";

const initialCakeState = {
  totalNoOfCakes: 10,
  priceForCake: 250,
  totalAmount: 0,
};
export const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ADD_CAKE_SUCCESS:
      return {
        ...state,
        totalNoOfCakes: state.totalNoOfCakes + 1,
      };
    case ADD_CAKE:
      return {
        ...state,
      };
    case ORDER_CAKE_SUCCESS:
      return {
        ...state,
        totalNoOfCakes: state.totalNoOfCakes - 1,
        totalAmount: state.totalAmount + state.priceForCake,
      };
    case ORDER_CAKE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
