import {
  fetchWeatherError,
  fetchWeatherReq,
  fetchWeatherSuccess,
} from "../actionTypes/weatherActionTypes";
import { call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";

function* fetchWeatherSaga(action) {
  try {
    const apiKey = "6557810176c36fac5f0db536711a6c52";
    const { city } = action.payload;
    const response = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`
    );
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherError(error));
  }
}

export function* rootSaga() {
  yield takeLatest(fetchWeatherReq().type, fetchWeatherSaga);
}
