import {
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_REQ,
  FETCH_WEATHER_SUCCESS,
} from "../actions/weatherActions";

export const fetchWeatherReq = (city) => {
  return {
    type: FETCH_WEATHER_REQ,
    payload: city
  };
};
export const fetchWeatherSuccess = (weather) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weather
  };
};
export const fetchWeatherError = () => {
  return {
    type: FETCH_WEATHER_ERROR,
  };
};
