import {configureStore} from '@reduxjs/toolkit'
import { postData } from './postRedux'
import { userData } from './userRedux'

export const store = configureStore({
    reducer: {
        postsArr: postData.reducer,
        userArr: userData.reducer
    }
})