import { applyMiddleware, legacy_createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './reducers/userReducer'
import { rootSaga } from './saga/userSaga'
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
export const store = legacy_createStore(userReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
