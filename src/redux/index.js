import { combineReducers } from "redux";

import newUser from "./reducers/signUp";
import loginUser from "./reducers/signin";



export default combineReducers({
  newUser,
  loginUser
});