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

const initialState = {
  loaading: false,
  todos: [],
  error: "",
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQ:
    case ADD_TODO_REQ:
    case EDIT_TODO_REQ:
    case DELETE_TODO_REQ:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: true,
        todos: action.payload,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
      };
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todo.id ? action.payload.todo : todo
        ),
        loading: false,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        loading: false,
      };

    case FETCH_TODOS_FAILURE:
    case ADD_TODO_FAILURE:
    case EDIT_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};