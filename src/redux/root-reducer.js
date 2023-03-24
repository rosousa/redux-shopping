import { combineReducers } from "redux";
import userReducer from "./user/reducer";

// object with reducers
const rootReducer = combineReducers({ userReducer });

export default rootReducer;
