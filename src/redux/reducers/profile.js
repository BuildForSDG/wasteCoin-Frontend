/* eslint-disable camelcase */
import axios from "axios";
import { toast } from "react-toastify";

import { UPDATE_USER_ACCOUNT_DETAILS, UPDATE_USER_DETAILS, CHANGE_USER_PASSWORD, USER_PROFILE_DETAILS, PAGE_LOADING, PAGE_LOADED } from "./constant";
import { isLoading, isLoaded } from "../util";
import Auth from "../../components/Auth";

const profileAsync = (response) => ({
  type: USER_PROFILE_DETAILS,
  payload: response
});

const changePasswordAsync = (response) => ({
  type: CHANGE_USER_PASSWORD,
  payload: response
});

const changeBiodataAsync = (response) => ({
  type: UPDATE_USER_DETAILS,
  payload: response
});

const changeAccountDetailsAsync = (response) => ({
  type: UPDATE_USER_ACCOUNT_DETAILS,
  payload: response
});

const errorOperation = (history) => {
  Auth.logout(() => {
    history.push("/login");
  });
};

export const fetchProfile = (history) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const res = await axios
      .get(`${process.env.REACT_APP_BACKEND_API_URL}/profile?token=${localStorage.getItem("token")}`);

    dispatch(isLoaded());

    if (res.data.error !== "0") {
      return toast.error(res.data.message);
    }

    dispatch(profileAsync(res.data.data));

  } catch (error) {
    errorOperation(history);
  }
};

export const changePassword = (passwordDetails, history) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const res = await axios
      .post(`${process.env.REACT_APP_BACKEND_API_URL}/change_password?token=${localStorage.getItem("token")}`, passwordDetails);

    dispatch(isLoaded());

    if (res.data.error !== "0") {
      return toast.error(res.data.message);
    }

    dispatch(changePasswordAsync(res.data));
    return toast.success(res.data.message);

  } catch (error) {
    errorOperation(history);
  }
};


export const changeBiodata = (userDetails, history) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const res = await axios
      .put(`${process.env.REACT_APP_BACKEND_API_URL}/update_info?token=${localStorage.getItem("token")}`, userDetails);

    dispatch(isLoaded());

    if (res.data.error !== "0") {
      return toast.error(res.data.message);
    }

    dispatch(changeBiodataAsync(res.data));
    return toast.success(res.data.message);
  } catch (error) {
    errorOperation(history);
  }
};


export const changeAccountDetails = (accountDetails, history) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const res = await axios
      .post(`${process.env.REACT_APP_BACKEND_API_URL}/account_details?token=${localStorage.getItem("token")}`, accountDetails);

    dispatch(isLoaded());

    if (res.data.error !== "0") {
      return toast.error(res.data.message);
    }

    dispatch(changeAccountDetailsAsync(res.data.data));
    return toast.success(res.data.message);
  } catch (error) {
    errorOperation(history);
  }
};


function ProfileState(state = { isLoading: false }, action) {
  switch (action.type) {
    case PAGE_LOADED:
      return {
        ...state,
        isLoading: action.payload
      };
    case PAGE_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          user_details: {
            ...state.userDetails.user_details,
            ...action.payload
          }
        }
      };
    case UPDATE_USER_ACCOUNT_DETAILS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          account_information: {
            ...state.userDetails.account_information,
            ...action.payload
          }
        }
      };
    case USER_PROFILE_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      };
    case CHANGE_USER_PASSWORD:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default ProfileState;
