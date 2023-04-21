import { takeLatest, put } from "redux-saga/effects";
import {
  addCake,
  addCakeSuccess,
  orderCake,
  orderCakeSuccess,
} from "../actionRetFunctions/cakeActionFunctions";

function* addCakesSaga() {
  try {
    console.log("check add");
    yield put(addCakeSuccess());
  } catch (error) {
    console.log(error);
  }
}

function* orderCakesSaga() {
  try {
    console.log("check order");
    yield put(orderCakeSuccess());
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeLatest(addCake().type, addCakesSaga);
  yield takeLatest(orderCake().type, orderCakesSaga);
}
