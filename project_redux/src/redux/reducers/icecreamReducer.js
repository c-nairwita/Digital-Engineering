import {
  ADD_ICECREAM,
  ADD_ICECREAM_SUCCESS,
  ORDER_ICECREAM,
  ORDER_ICECREAM_SUCCESS,
} from "../actions/icecreamAction";

const initialIcecreamState = {
  totalNoOfIcecreams: 20,
  priceForEachIcecream: 100,
  totalAmount: 0,
};

export const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ORDER_ICECREAM:
      return {
        ...state,
      };
    case ORDER_ICECREAM_SUCCESS:
      return {
        ...state,
        totalNoOfIcecreams: state.totalNoOfIcecreams - 1,
        totalAmount: state.totalAmount + state.priceForEachIcecream,
      };
    case ADD_ICECREAM:
      return {
        ...state,
      };
    case ADD_ICECREAM_SUCCESS:
      return {
        ...state,
        totalNoOfIcecreams: state.totalNoOfIcecreams + 1,
      };
    default:
      return state;
  }
};
