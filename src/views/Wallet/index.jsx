import React from "react";

import wasteCoinSys from "../../images/waste_coin_sys.svg";
import redeemCoins from "../../images/redeem_coins.svg";

import "./wallet.css";
import Pagination from "../../components/Pagination";
import RedeemCoinModal from "../../components/RedeemCoinModal";

function Wallet() {

  return (
    <div className="wallet container pt-4">
      <div className="card p-5 shadow-sm wallet_overview">
        <p>ACCOUNT OVERVIEW</p>
        <div className="wallet_overview_coin">
          <img src={wasteCoinSys} alt="coin_logo" width="25" />
          <p className="mb-0 ml-2">78,000</p>
        </div>
        <h6>Current Balance</h6>
      </div>
      <div className="redeem_coin_icon text-center">
        <p className="mb-0">Redeem Coins</p>
        <button type="button" className="btn btn-light redeem_icon" data-toggle="modal" data-target="#redeem_coin">
          <img src={redeemCoins} alt="coin_logo" width="60" />
        </button>
      </div>
      <div className="card mt-5 shadow-sm pr-2">
        <div className="transaction-header">
          <p className="text-center">Transaction History</p>
          <div className="search-date">
            <form className="form-inline wallet-header-input">
              <div className="form-group mb-2">
                <label for="staticEmail2" className="mr-4">From</label>
                <input type="date" className="form-control" id="inputPassword2" placeholder="From" />
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <label for="todate" className="mr-4">To</label>
                <input type="date" className="form-control" id="todate" placeholder="To " />
              </div>
              <button type="submit" className="btn btn-primary mb-2">Search</button>
            </form>
          </div>
        </div>
        <div className="transaction-body">
          <table className="table">
            <thead className="table__head">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Transaction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23-8-2020</td>
                <td><div className="wallet_table_coin">
                  <img src={wasteCoinSys} alt="coin_logo" width="25" />
                  <p className="mb-0 ml-2">78,000</p>
                </div></td>
                <td>Credit</td>
              </tr>
              <tr>
                <td>23-8-2020</td>
                <td><div className="wallet_table_coin">
                  <img src={wasteCoinSys} alt="coin_logo" width="25" />
                  <p className="mb-0 ml-2">78,000</p>
                </div></td>
                <td>Credit</td>
              </tr>
              <tr>
                <td>23-8-2020</td>
                <td><div className="wallet_table_coin">
                  <img src={wasteCoinSys} alt="coin_logo" width="25" />
                  <p className="mb-0 ml-2">78,000</p>
                </div></td>
                <td>Credit</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
      <RedeemCoinModal id="redeem_coin" />
    </div>
  );
}

export default Wallet;
