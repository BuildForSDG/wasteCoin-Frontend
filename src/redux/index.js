import { combineReducers } from "redux";

import newUser from "./reducers/signUp";
import loginUser from "./reducers/signin";
import dashboard from "./reducers/dashboard";
import wallet from "./reducers/wallet";
import profile from "./reducers/profile";


export default combineReducers({
  newUser,
  loginUser,
  dashboard,
  wallet,
  profile
});
