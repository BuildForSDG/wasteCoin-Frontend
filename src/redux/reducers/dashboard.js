import axios from "axios";
import { toast } from "react-toastify";

import { DASHBOARD_DETAILS, PAGE_LOADING, PAGE_LOADED } from "./constant";
import { isLoading, isLoaded } from "../util";
import Auth from "../../components/Auth";

const dashboardAsync = (response) => ({
  type: DASHBOARD_DETAILS,
  payload: response
});

const errorOperation = (history) => {
  Auth.logout(() => {
    history.push("/login");
  });
};


export const fetchDashboard = (history) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const res = await axios
      .get(`${process.env.REACT_APP_BACKEND_API_URL}/dashboard?token=${localStorage.getItem("token")}`);

    dispatch(isLoaded());

    if (res.data.error !== "0") {
      return toast.error(res.data.message);
    }

    dispatch(dashboardAsync(res.data.data[0]));

  } catch (error) {
    errorOperation(history);
  }
};


function DashboardState(state = { isLoading: false, leaderBoardsDetails: [] }, action) {
  switch (action.type) {
    case DASHBOARD_DETAILS:
      return {
        ...state,
        ...action.payload
      };
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
    default:
      return state;
  }
}

export default DashboardState;
