import axios from "axios";
import { toast } from "react-toastify";

import { CONTACT_US, RESET_PASSWORD, RECEIVE_PASSWORD_RESET_CODE, RESEND_USER_OTP, VERIFY_REGISTERED_USER, PAGE_LOADING, PAGE_LOADED } from "./constant";
import { isLoading, isLoaded } from "../util";

const verifyUserAsync = (response) => ({
  type: VERIFY_REGISTERED_USER,
  payload: response
});

const resendOtpAsync = (response) => ({
  type: RESEND_USER_OTP,
  payload: response
});

const sendResetCodeAsync = (response) => ({
  type: RECEIVE_PASSWORD_RESET_CODE,
  payload: response
});

const resetPasswordAsync = (response) => ({
  type: RESET_PASSWORD,
  payload: response
});

const contactUsAsync = (response) => ({
  type: CONTACT_US,
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

export const sendResetCode = (userPhoneNumber, history) => async (dispatch) => {
  dispatch(isLoading());

  const res = await axios
    .post(`${process.env.REACT_APP_BACKEND_API_URL}/password_reset`, userPhoneNumber);

  dispatch(isLoaded());

  if (res.data.error !== "0") {
    return toast.error(res.data.message);
  }

  dispatch(sendResetCodeAsync(res.data));
  localStorage.setItem("token", res.data.token);
  history.push("/reset-password");
  return toast.success(res.data.message);
  
};

export const resetPassword = (userDetails, history) => async (dispatch) => {
  dispatch(isLoading());

  const res = await axios
    .post(`${process.env.REACT_APP_BACKEND_API_URL}/password_change?token=${localStorage.getItem("token")}`, userDetails);

  dispatch(isLoaded());

  if (res.data.error !== "0") {
    return toast.error(res.data.message);
  }

  dispatch(resetPasswordAsync(res.data));
  history.push("/login");
  return toast.success(res.data.message);
  
};

export const contactUs = (userDetails) => async (dispatch) => {
  dispatch(isLoading());

  const res = await axios
    .post(`${process.env.REACT_APP_BACKEND_API_URL}/contact_us`, userDetails);

  dispatch(isLoaded());

  if (res.data.error !== "0") {
    return toast.error(res.data.message);
  }

  dispatch(contactUsAsync(res.data));
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
    case CONTACT_US:
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
