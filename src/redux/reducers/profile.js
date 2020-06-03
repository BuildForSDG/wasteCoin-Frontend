import axios from "axios";
import { toast } from "react-toastify";

import { USER_PROFILE_DETAILS, PAGE_LOADING, PAGE_LOADED } from "./constant";
import { isLoading, isLoaded } from "../util";
import Auth from "../../components/Auth";

const profileAsync = (response) => ({
  type: USER_PROFILE_DETAILS,
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
    case USER_PROFILE_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      };
    default:
      return state;
  }
}

export default ProfileState;
