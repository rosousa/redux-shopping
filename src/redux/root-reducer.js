import { combineReducers } from "redux";
import userReducer from "./user/reducer";
// import cartReducer from "./cart/reducer";
import cartReducer from "./cart/slice";

// object with reducers
const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
