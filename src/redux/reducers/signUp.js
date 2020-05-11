import axios from "axios";
import {toast} from "react-toastify";

import { ADD_NEW_USER } from "./constant";

const addNewAsync = (response) => ({
  type: ADD_NEW_USER,
  payload: response
});

export const addNewUser = (userDetails, history) => async (dispatch) => {
    const res = await axios
      .post(`${process.env.REACT_APP_BACKEND_API_URL}/signup`, userDetails);

      if (res.data.error !== "0") {
      return toast.error(res.data.message);
    }
    dispatch(addNewAsync(res.data));
    toast.success(res.data.message);
    history.push("/verification");

};



function SignUp(state = {}, action) {
  switch (action.type) {
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
