import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import wasteCoinSys from "../../images/waste_coin_sys.svg";
import redeemCoins from "../../images/redeem_coins.svg";
import "./wallet.css";
import RedeemCoinModal from "../../components/RedeemCoinModal";
import AllocateCoinModal from "../../components/AllocateCoinModal";
import { fetchWallet } from "../../redux/reducers/wallet";
import { fetchDashboard } from "../../redux/reducers/dashboard";
import { fetchProfile } from "../../redux/reducers/profile";

function Wallet(props) {
  const dispatch = useDispatch();
  const walletDetails = useSelector((state) => state.wallet);
  const dashboardDetails = useSelector((state) => state.dashboard);
  const userDetails = useSelector((state) => state.profile.userDetails);
  const roleTitle = userDetails && userDetails.user_details && (userDetails.user_details.role === "agent");

  useEffect(() => {
    dispatch(fetchWallet(props.history));
    dispatch(fetchDashboard(props.history));
    dispatch(fetchProfile(props.history));
  }, [dispatch, props.history]);

  const renderTransactionHistory = (walletTransaction, index) => {
    return (
      <tr key={`transactoion_list_${index}`}>
        <td>{walletTransaction.date}</td>
        <td><div className="wallet_table_coin">
          <img src={wasteCoinSys} alt="coin_logo" width="25" />
          <p className="mb-0 ml-2">{walletTransaction.amount}</p>
        </div></td>
        <td>{walletTransaction.transaction}</td>
        {roleTitle && (<td>{walletTransaction.miner_id}</td>)}
      </tr>
    );
  };

  return (
    <div className="wallet container pt-4">
      <div className="card account-container p-md-5 shadow-sm">
        <div className="row">
          <div className="col">
            <div className=" wallet_overview">
              <p>ACCOUNT OVERVIEW</p>
              <div className="wallet_overview_coin">
                <img src={wasteCoinSys} alt="coin_logo" width="25" />
                <p className="mb-0 ml-2">{walletDetails.current_balance}</p>
              </div>
              <h6>Current Balance</h6>
              <h6>MinerId: {userDetails && userDetails.user_coins && userDetails.user_coins.miner_id}</h6>
            </div>
          </div>
          <div className="col">
            <div className="text-right">
              {!roleTitle && (<p className="mb-0 redeem_coin_icon">Redeem Coins</p>)}
              {roleTitle && (<p className="mb-0 redeem_coin_icon">Allocate Coins</p>)}
              {!roleTitle && (<button type="button" className="btn btn-light redeem_icon" data-toggle="modal" data-target="#redeem_coin">
                <img src={redeemCoins} alt="coin_logo" width="60" />
              </button>)}
              {roleTitle && (<button type="button" className="btn btn-light redeem_icon" data-toggle="modal" data-target="#allocate_coin">
                <img src={redeemCoins} alt="coin_logo" width="60" />
              </button>)}
            </div>

          </div>
        </div>
      </div>

      <div className="text-left mt-5">
        <div className="btn-group">
          <button type="button" className="btn filter-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter
          </button>
          <div className="dropdown-menu dropdown-menu-left">
            <div className="search-date">
              <form className="px-4 py-3">
                <div className="form-group mb-2">
                  <label htmlFor="staticEmail2" className="mr-4">From</label>
                  <input type="date" className="form-control" id="inputPassword2" placeholder="From" />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="todate" className="mr-4">To</label>
                  <input type="date" className="form-control" id="todate" placeholder="To " />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-1 shadow-sm">
        <div className="transaction-body">
          <table className="table">
            <thead className="table__head">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Transaction</th>
                {roleTitle && (<th scope="col">MinerId</th>)}
              </tr>
            </thead>
            <tbody>
              {(walletDetails.transaction_history && walletDetails.transaction_history.length > 0) && walletDetails.transaction_history.map((walletHistory, index) => renderTransactionHistory(walletHistory, index))}
              {(walletDetails.transaction_history && walletDetails.transaction_history.length < 1) && (
                <tr>
                  <td><p className="pl-3">No Records available</p></td></tr>
              )}
            </tbody>
          </table>
        </div>
        {/* {(walletDetails.transaction_history && walletDetails.transaction_history.length > 5) && (<Pagination />)} */}
      </div>
      <RedeemCoinModal
        id="redeem_coin"
        history={props.history}
        exchangeRate={dashboardDetails.exchangeRate}
      />
      <AllocateCoinModal
        id="allocate_coin"
        history={props.history}
        exchangeRate={dashboardDetails.exchangeRate}
      />
    </div>
  );
}

export default Wallet;
