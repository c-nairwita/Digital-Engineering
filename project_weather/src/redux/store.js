import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { weatherReducer } from "./reducers/weatherReducer";
import { rootSaga } from "./sagas/weatherSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = legacy_createStore(
  weatherReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
