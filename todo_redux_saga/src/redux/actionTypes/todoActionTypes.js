import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQ,
  ADD_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQ,
  DELETE_TODO_SUCCESS,
  EDIT_TODO_FAILURE,
  EDIT_TODO_REQ,
  EDIT_TODO_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQ,
  FETCH_TODOS_SUCCESS,
} from "../actions/todoActions";

export const fetchTodoReq = () => {
  return {
    type: FETCH_TODOS_REQ,
  };
};
export const fetchTodoSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};
export const fetchTodoFailure = (error) => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error,
  };
};

export const addTodoReq = (todo) => {
  return {
    type: ADD_TODO_REQ,
    payload: todo,
  };
};
export const addTodoSuccess = (todo) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo,
  };
};
export const addTodoFailure = (error) => {
  return {
    type: ADD_TODO_FAILURE,
    payload: error,
  };
};

export const editTodoReq = (id, todo) => {
  return {
    type: EDIT_TODO_REQ,
    payload: { id, todo },
  };
};
export const editTodoSuccess = (todo) => {
  return {
    type: EDIT_TODO_SUCCESS,
    payload: todo,
  };
};
export const editTodoFailure = (error) => {
  return {
    type: EDIT_TODO_FAILURE,
    payload: error,
  };
};

export const deleteTodoReq = (id) => {
  return {
    type: DELETE_TODO_REQ,
    payload: id
  };
};
export const deleteTodoSuccess = (id) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: id,
  };
};
export const deleteTodoFailure = (error) => {
  return {
    type: DELETE_TODO_FAILURE,
    payload: error,
  };
};
