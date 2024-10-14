import {combineReducers} from "redux";
import taskManagerReducer from "./reducers";

const rootReducer = combineReducers({
    todo: taskManagerReducer,
})

export default rootReducer;
