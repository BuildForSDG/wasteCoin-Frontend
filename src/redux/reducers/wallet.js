/* eslint-disable camelcase */
import axios from "axios";
import { toast } from "react-toastify";

import { ALLOCATE_COINS, REDEEM_COIN_DETAILS, WALLET_DETAILS, PAGE_LOADING, PAGE_LOADED } from "./constant";
import { isLoading, isLoaded } from "../util";
import Auth from "../../components/Auth";

const walletAsync = (response) => ({
  type: WALLET_DETAILS,
  payload: response
});

const redeemCoinAsync = (response) => ({
  type: REDEEM_COIN_DETAILS,
  payload: response
});

const allocateCoinAsync = (response) => ({
  type: ALLOCATE_COINS,
  payload: response
});

const errorOperation = (history) => {
  Auth.logout(() => {
    history.push("/login");
  });
};


export const fetchWallet = (history) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const res = await axios
      .get(`${process.env.REACT_APP_BACKEND_API_URL}/wallet?token=${localStorage.getItem("token")}`);

    dispatch(isLoaded());

    if (res.data.error !== "0") {
      return toast.error(res.data.message);
    }

    dispatch(walletAsync(res.data.data));

  } catch (error) {
    errorOperation(history);
    return error;
  }
};

export const redeemCoin = (coinDetails, history) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const res = await axios
      .post(`${process.env.REACT_APP_BACKEND_API_URL}/redeem?token=${localStorage.getItem("token")}`, coinDetails);

    dispatch(isLoaded());

    if (res.data.error !== "0") {
      return toast.error(res.data.message);
    }

    dispatch(redeemCoinAsync(res.data.amount));
    return toast.success(res.data.message);

  } catch (error) {
    errorOperation(history);
    return error;
  }
};

export const allocateCoin = (coinDetails, history) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const res = await axios
      .post(`${process.env.REACT_APP_BACKEND_API_URL}/allocate?token=${localStorage.getItem("token")}`, coinDetails);

    dispatch(isLoaded());

    if (res.data.error !== "0") {
      return toast.error(res.data.message);
    }

    dispatch(allocateCoinAsync(res.data.current_balance));
    return toast.success(res.data.message);

  } catch (error) {
    errorOperation(history);
    return error;
  }
};


function WalletReducer(state = { isLoading: false, }, action) {
  switch (action.type) {
    case WALLET_DETAILS:
      return {
        ...state,
        ...action.payload
      };
    case PAGE_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case REDEEM_COIN_DETAILS:
      return {
        ...state,
        ...action.payload
      };
    case ALLOCATE_COINS:
      return {
        ...state,
        current_balance: action.payload
      };
    case PAGE_LOADED:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}

export default WalletReducer;
