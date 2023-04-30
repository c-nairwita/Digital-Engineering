import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { productReducer } from "./reducers/productReducer";
import { rootSaga } from "./saga/productSaga";
import { cartReducer } from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const combinedReducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
});
export const store = legacy_createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
