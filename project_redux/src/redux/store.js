import {combineReducers, legacy_createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { cakeReducer } from "./reducers/cakeReducer";
import { icecreamReducer } from './reducers/icecreamReducer';
import rootSaga from './saga/cakeSaga';

const sagaMiddleware = createSagaMiddleware()

// const combinedReducers = combineReducers({
//     cake: cakeReducer,
//     icecream: icecreamReducer,
//   });

// export const store = legacy_createStore(cakeReducer)

export const store = legacy_createStore(cakeReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)