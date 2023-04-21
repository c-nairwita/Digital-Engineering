import { call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {
    addTodoFailure,
    addTodoReq,
    addTodoSuccess,
  deleteTodoFailure,
  deleteTodoReq,
  deleteTodoSuccess,
  editTodoFailure,
  editTodoReq,
  editTodoSuccess,
  fetchTodoFailure,
  fetchTodoReq,
  fetchTodoSuccess,
} from "../actionTypes/todoActionTypes";
import { addTodo, deleteTodo, editTodo } from "./api";

function* fetchTodosData() {
  try {
    const response = yield call(
      axios.get,
      "http://localhost:5000/todos"
    );
    yield put(fetchTodoSuccess(response.data));
  } catch (error) {
    yield put(fetchTodoFailure(error));
  }
}

function* addTodoSaga(action){
    try {
        const newTodo = yield call (addTodo, action.payload)
        yield put(addTodoSuccess(newTodo))
    } catch (error) {
        yield put(addTodoFailure(error))
    }
}
function* editTodoSaga(action){
    try {
        const todo = yield call (editTodo, action.payload.id, action.payload.todo)
        yield put(editTodoSuccess(todo))
    } catch (error) {
        yield put(editTodoFailure(error))
    }
}
function* deleteTodoSaga(action){
    try {
        yield call (deleteTodo, action.payload)
        yield put(deleteTodoSuccess(action.payload))
    } catch (error) {
        yield put(deleteTodoFailure(error))
    }
}

export function* rootSaga() {
  yield takeLatest(fetchTodoReq().type, fetchTodosData);
  yield takeLatest(addTodoReq().type, addTodoSaga);
  yield takeLatest(editTodoReq().type, editTodoSaga);
  yield takeLatest(deleteTodoReq().type, deleteTodoSaga);
}
