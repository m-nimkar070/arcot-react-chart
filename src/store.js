import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './features/aiDataSlice'

console.log("in store");
export const store = configureStore({
    reducer:todoReducer,
})