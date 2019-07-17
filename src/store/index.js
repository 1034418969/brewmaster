import rootReducer from "./reducers"
import thunk from "redux-thunk"
import {
    createStore,
    applyMiddleware//应用中间层，用于异步
}from "redux"
export default createStore( rootReducer,applyMiddleware(thunk) )