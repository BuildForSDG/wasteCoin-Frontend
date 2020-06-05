import axios from "axios";
import { toast } from "react-toastify";

import { RESEND_USER_OTP, VERIFY_REGISTERED_USER, PAGE_LOADING, PAGE_LOADED } from "./constant";
import { isLoading, isLoaded } from "../util";

const verifyUserAsync = (response) => ({
  type: VERIFY_REGISTERED_USER,
  payload: response
});

const resendOtpAsync = (response) => ({
  type: RESEND_USER_OTP,
  payload: response
});


export const verifyUser = (userDetails, history) => async (dispatch) => {
  dispatch(isLoading());

  const res = await axios
    .post(`${process.env.REACT_APP_BACKEND_API_URL}/verify?token=${localStorage.getItem("token")}`, userDetails);

  dispatch(isLoaded());

  if (res.data.error !== "0") {
    return toast.error(res.data.message);
  }

  dispatch(verifyUserAsync(res.data));
  history.push("/dashboard");

};

export const resendOtp = (userDetails, history) => async (dispatch) => {
  dispatch(isLoading());

  const res = await axios
    .post(`${process.env.REACT_APP_BACKEND_API_URL}/resend_otp`, userDetails);

  dispatch(isLoaded());

  if (res.data.error !== "0") {
    return toast.error(res.data.message);
  }

  dispatch(resendOtpAsync(res.data));
  history.push("/verify");
  return toast.success(res.data.message);
  
};



function VerifyState(state = {isLoading: false}, action) {
  switch (action.type) {
    case PAGE_LOADED:
      return {
        ...state,
        isLoading: action.payload
      };
    case VERIFY_REGISTERED_USER:
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

export default VerifyState;
