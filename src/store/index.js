import {
    createStore,
    combineReducers//合并,将多个reducer合并为一个
} from "redux";
import rootReducer from "./reducers";
export default createStore(rootReducer);
