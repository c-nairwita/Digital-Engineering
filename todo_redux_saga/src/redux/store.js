import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./reducers/todoReducer";
import { rootSaga } from "./saga/todoSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = legacy_createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
