import axios from "axios";
import { toast } from "react-toastify";

import { ADD_NEW_USER, PAGE_LOADED, PAGE_LOADING } from "./constant";
import { isLoading, isLoaded } from "../util";

const addNewAsync = (response) => ({
  type: ADD_NEW_USER,
  payload: response
});


export const addNewUser = (userDetails, history) => async (dispatch) => {
  dispatch(isLoading());

  const res = await axios
    .post(`${process.env.REACT_APP_BACKEND_API_URL}/signup`, userDetails);

  dispatch(isLoaded());

  if (res.data.error !== "0") {
    return toast.error(res.data.message);
  }
  localStorage.setItem("token", res.data.token);
  dispatch(addNewAsync(res.data));
  toast.success(res.data.message);
  history.push("/verification");

};



function SignUp(state = {isLoading: false}, action) {
  switch (action.type) {
    case PAGE_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case PAGE_LOADED:
      return {
        ...state,
        isLoading: action.payload
      };
    case ADD_NEW_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default SignUp;
