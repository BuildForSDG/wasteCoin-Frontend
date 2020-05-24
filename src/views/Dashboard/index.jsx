import React from "react";

import "./dashboard.css";
import wasteCoinSys from "../../images/waste_coin_sys.svg";
import wasteCoinIcon from "../../images/waste_coin_money.svg";
import exchangeRateIcon from "../../images/exchange_rate_sym.svg";
import upArrowIcon from "../../images/ic_up_arrow.svg";
import minedCoinIcon from "../../images/mined_coin.svg";
import pieIcon from "../../images/pie.svg";
import refreshIcon from "../../images/refresh_icon.svg";

function Dashboard() {
  return (
    <div className="dashboard container">
      <div className="row row-cols-1 row-cols-md-2 pt-3">
        <div className="col">
          <div className="card shadow mb-4 adjust_padding">
            <div className="row pt-3">
              <div className="col-8 pl-5 pl-xs-3 allocated_section">
                <h6>ALLOCATED WASTECOINS</h6>
                <div className="waste_coin_details">
                  <img src={wasteCoinSys} alt="coin_logo" width="25" />
                  <p className="mb-0 ml-2">78,000</p>
                </div>
                <p className="allocated_month mt-2">January</p>
              </div>
              <div className="col-4 text-center">
                <img src={wasteCoinIcon} alt="coin_Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow mb-4 adjust_padding">
            <div className="row pt-3">
              <div className="col-8 pl-5 pl-xs-3 exchange_section">
                <h6>EXCHANGE RATE</h6>
                <div className="exchange_details">
                  <span>&#8358;</span>
                  <p className="mb-0 ml-2"> 78,000</p>
                </div>
                <p className="allocated_month mt-2"><span><img src={upArrowIcon} alt="exchange_img" /> 16% </span>January</p>
              </div>
              <div className="col-4 text-center">
                <img src={exchangeRateIcon} alt="coin_Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 pt-3">
        <div className="col">
          <div className="card shadow mb-4 pb-4">
            <div className="row pt-3">
              <div className="col pl-xs-3 summary_section">
                <div className="summary_section__header pl-3 pr-3">
                  <h6 className="mb-0">SUMMARY</h6>
                  <img src={refreshIcon} alt="coin_Icon" width="30" />
                </div>
                <hr />
                <div className="row pl-3 pr-3">
                  <div className="col-4">
                    <img src={pieIcon} alt="coin_Icon" />
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <div className="col-6 pt-3">
                        <p className="mined_label mb-0">Mined</p>
                        <p className="mined_value">63%</p>
                      </div>
                      <div className="col-6 pt-3">
                        <p className="unmined_label mb-0">Unmined</p>
                        <p className="unmined_value">37%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow mb-4 adjust_padding">
            <div className="row pt-3">
              <div className="col-8 pl-5 pl-xs-3 allocated_section">
                <h6>TOTAL WASTE COINS MINED</h6>
                <div className="waste_coin_details">
                  <img src={wasteCoinSys} alt="coin_logo" width="25" />
                  <p className="mb-0 ml-2">78,000</p>
                </div>
                <p className="allocated_month mt-2">January</p>
              </div>
              <div className="col-4 text-center">
                <img src={minedCoinIcon} alt="coin_Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow">
        <div className="p-3 text-center leader_header">
          <p>Leader"s Board</p>
        </div>
        <div className="leader_label mb-3 pl-sm-4 pl-5">
          <div className="row">
            <div className="col pl-5">
              <p>Miner ID</p>
            </div>
            <div className="col">
              <p>WasteCoins mined</p>
            </div>
          </div>
          <div className="row">
            <div className="col pl-5">
              <p>23412355-2</p>
            </div>
            <div className="col leader_pt">
              <img src={wasteCoinSys} alt="coin_sysm" width="20" />
              <p className="mb-0 ml-2">123.6</p>
            </div>
          </div>
          <div className="row">
            <div className="col pl-5">
              <p>23412355-2</p>
            </div>
            <div className="col leader_pt">
              <img src={wasteCoinSys} alt="coin_sysm" width="20" />
              <p className="mb-0 ml-2">123.6</p>
            </div>
          </div>
          <div className="row">
            <div className="col pl-5">
              <p>23412355-2</p>
            </div>
            <div className="col leader_pt">
              <img src={wasteCoinSys} alt="coin_sysm" width="20" />
              <p className="mb-0 ml-2">123.6</p>
            </div>
          </div>
          <div className="row">
            <div className="col pl-5">
              <p>23412355-2</p>
            </div>
            <div className="col leader_pt">
              <img src={wasteCoinSys} alt="coin_sysm" width="20" />
              <p className="mb-0 ml-2">123.6</p>
            </div>
          </div>
          <div className="row">
            <div className="col pl-5">
              <p>23412355-2</p>
            </div>
            <div className="col leader_pt">
              <img src={wasteCoinSys} alt="coin_sysm" width="20" />
              <p className="mb-0 ml-2">123.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
