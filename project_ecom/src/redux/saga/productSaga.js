import axios from "axios";
import {
  decreaseQuantityReq,
  decreaseQuantitySuccess,
  deleteSuccess,
  fetchProductsError,
  fetchProductsReq,
  fetchProductsSuccess,
} from "../actionTypes/productActionTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  addMoreToCartFailure,
  addMoreToCartReq,
  addMoreToCartSuccess,
  addToCartFailure,
  addToCartReq,
  addToCartSuccess,
  fetchCartError,
  fetchCartReq,
  fetchCartSuccess,
  removeFromCartFailure,
  removeFromCartReq,
  removeFromCartSuccess,
} from "../actionTypes/cartActionTypes";
import { deleteReq } from "../actionTypes/productActionTypes";

function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:5000/products");
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductsError(error));
  }
}

function* fetchCartSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:5000/cartItems");
    yield put(fetchCartSuccess(response.data));
  } catch (error) {
    yield put(fetchCartError(error));
  }
}

function* addToCartSaga(action) {
  try {
    const response = yield call(() =>
      axios.post("http://localhost:5000/cartItems", action.payload)
    );
    yield put(addToCartSuccess(response.data));
  } catch (error) {
    yield put(addToCartFailure(error));
  }
}

function* addMoreToCartSaga(action) {
  try {
    const initialData = yield call(
      axios.get,
      `http://localhost:5000/cartItems/${action.payload.id}`
    );
    const response = yield call(() =>
      axios.put(`http://localhost:5000/cartItems/${action.payload.id}`, {
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        image: action.payload.image,
        quantity: initialData.data.quantity + 1,
      })
    );
    yield put(addMoreToCartSuccess(response.data));
  } catch (error) {
    yield put(addMoreToCartFailure(error));
  }
}

function* decreaseQuantitySaga(action) {
  try {
    const response = yield call(() =>
      axios.put(`http://localhost:5000/products/${action.payload.id}`,action.payload)
    );
    yield put(decreaseQuantitySuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* removeFromCartSaga(action) {
  try {
    yield call(() =>
      axios.delete(
        `http://localhost:5000/cartItems/${action.payload}`,
        action.payload
      )
    );
    yield put(removeFromCartSuccess(action.payload));
  } catch (error) {
    yield put(removeFromCartFailure(error));
  }
}
function* deleteSaga(action) {
  try {
    const respone = yield call(() =>
      axios.put(
        `http://localhost:5000/products/${action.payload.id}`,
        action.payload
      )
    );
    yield put(deleteSuccess(respone.data));
  } catch (error) {
    console.log(error);
  }
}

export function* rootSaga() {
  yield takeEvery(fetchProductsReq().type, fetchProductsSaga);
  yield takeEvery(addToCartReq().type, addToCartSaga);
  yield takeEvery(addMoreToCartReq().type, addMoreToCartSaga);
  yield takeEvery(decreaseQuantityReq().type, decreaseQuantitySaga);
  yield takeEvery(removeFromCartReq().type, removeFromCartSaga);
  yield takeEvery(deleteReq().type, deleteSaga);
  yield takeEvery(fetchCartReq().type, fetchCartSaga);
}
