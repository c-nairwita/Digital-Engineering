import axios from "axios";
import {
  fetchUsersError,
  fetchUsersReq,
  fetchUsersSuccess,
} from "../actionTypes/userActionTypes";
import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";

function* fetchUsersData() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersError(error));
  }
}

// export function* rootSaga() {
//   yield takeLatest(fetchUsersReq().type, fetchUsersData);
// }

function* watchFetchData() {
  yield takeEvery(fetchUsersReq().type, fetchUsersData);
}

export function* rootSaga() {
  yield all([watchFetchData()]); // if we have multiple sagas we can use them using commas
}