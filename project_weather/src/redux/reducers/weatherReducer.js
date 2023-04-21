import {
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_REQ,
  FETCH_WEATHER_SUCCESS,
} from "../actions/weatherActions";

const initialState = {
  loading: false,
  weather: {},
  error: "",
};
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQ: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_WEATHER_SUCCESS: {
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };
    }
    case FETCH_WEATHER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
