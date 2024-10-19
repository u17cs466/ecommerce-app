import { combineReducers, createStore } from "redux"
import { UserReducer } from "./reduces/userReducer"


const combinedReducers = combineReducers({
    userInfo: UserReducer

})


export const store = createStore(combinedReducers)