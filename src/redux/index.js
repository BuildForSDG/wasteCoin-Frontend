import { combineReducers } from "redux";

import newUser from "./reducers/signUp";
import loginUser from "./reducers/signin";
import dashboard from "./reducers/dashboard";



export default combineReducers({
  newUser,
  loginUser,
  dashboard
});
