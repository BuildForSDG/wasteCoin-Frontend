import axios from "axios";
import { toast } from "react-toastify";

import { LOGIN_USER, PAGE_LOADING, PAGE_LOADED } from "./constant";
import { isLoading, isLoaded } from "../util";
import Auth from "../../components/Auth";

const loginUserAsync = (response) => ({
  type: LOGIN_USER,
  payload: response
});


export const loginUser = (userDetails, history) => async (dispatch) => {
  dispatch(isLoading());

  const res = await axios
    .post(`${process.env.REACT_APP_BACKEND_API_URL}/signin`, userDetails);

  dispatch(isLoaded());

  if (res.data.error !== "0") {
    return toast.error(res.data.message);
  }

  dispatch(loginUserAsync(res.data));
  localStorage.setItem("token", res.data.token);

  Auth.login(() => {
    history.push("/dashboard");
  });

};



function SignIn(state = {isLoading: false}, action) {
  switch (action.type) {
    case PAGE_LOADED:
      return {
        ...state,
        isLoading: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload
      };
    case PAGE_LOADING:
        return {
          ...state,
          isLoading: action.payload
        };
    default:
      return state;
  }
}

export default SignIn;
