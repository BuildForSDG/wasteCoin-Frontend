import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./dashboard.css";
import wasteCoinSys from "../../images/waste_coin_sys.svg";
import wasteCoinIcon from "../../images/waste_coin_money.svg";
import exchangeRateIcon from "../../images/exchange_rate_sym.svg";
import upArrowIcon from "../../images/ic_up_arrow.svg";
import minedCoinIcon from "../../images/mined_coin.svg";
import pieIcon from "../../images/pie.svg";
import refreshIcon from "../../images/refresh_icon.svg";

import { fetchDashboard } from "../../redux/reducers/dashboard";
import { fetchProfile } from "../../redux/reducers/profile";
import Spinner from "../../components/Loader";


function Dashboard(props) {
  const dispatch = useDispatch();
  const summaryVariable = {
    mined: 0,
    unMined: 0
  };

  const dashboardDetails = useSelector((state) => state.dashboard);
  const userDetails = useSelector((state) => state.profile.userDetails);

  const roleTitle = userDetails && userDetails.user_details && userDetails.user_details.role === "user";
  
  if (dashboardDetails.summary) {
    summaryVariable.mined = dashboardDetails.summary.totalWasteCoinMinedPercentage;
    summaryVariable.unMined = dashboardDetails.summary.totalWasteCoinUnMinedPercentage;
  }

  useEffect(() => {
    dispatch(fetchDashboard(props.history));
    dispatch(fetchProfile(props.history));
  }, [dispatch, props.history]);

  const renderBoard = (result, index) => {
    return (
      <div className="row" key={`${result.miner_id + index}`}>
        <div className="col pl-5">
          <p>{result.miner_id}</p>
        </div>
        <div className="col leader_pt">
          <img src={wasteCoinSys} alt="coin_sysm" width="20" />
          <p className="mb-0 ml-2">{result.CoinMined}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard container">
      <div className="row row-cols-1 row-cols-md-2 pt-3">
        <div className="col">
          <div className="card shadow-sm mb-4 adjust_padding set_min_height">
            {!dashboardDetails ? <Spinner className="text-center pt-5" width={100} height={100} spinnerType="Circles" color="#2ad2be" visible={true} />
              :
              (<div className="row pt-3">
                <div className="col-sm-12 pl-xs-3 allocated_section">
                  <div className="allocated_section_header pl-3 d-flex justify-content-between pr-4 align-items-center">
                    <h6>ALLOCATED WASTECOINS</h6>
                    <div className="col-md-4 d-none d-md-block text-center">
                      <img src={wasteCoinIcon} alt="coin_Icon" width="50" />
                    </div>
                </div>
                <hr />
                  <div className="waste_coin_details pl-3">
                    <img src={wasteCoinSys} alt="coin_logo" width="25" />
                    <p className="mb-0 ml-2">{dashboardDetails.allocatedWasteCoin}</p>
                  </div>
                  <p className="allocated_month mt-2 pl-3">{dashboardDetails.month}</p>
                </div>
                
              </div>)
            }
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm mb-4 adjust_padding set_min_height">
            {!dashboardDetails ? <Spinner className="text-center pt-5" width={100} height={100} spinnerType="Circles" color="#2ad2be" visible={true} />
              :
              (<div className="row pt-3">
                <div className="col-sm-12 pl-xs-3 exchange_section">
                  <div className="allocated_section_header pl-3 d-flex justify-content-between pr-4 align-items-center">
                    <h6>EXCHANGE RATE</h6>
                    <div className="col-md-4 d-none d-md-block text-center">
                      <img src={exchangeRateIcon} alt="coin_Icon" width="50" />
                    </div>
                  </div>
                  <hr />
                  <div className="exchange_details pl-3">
                    <span>&#8358;</span>
                    <p className="mb-0 ml-2">{dashboardDetails.exchangeRate}</p>
                  </div>
                  <p className="allocated_month mt-2 pl-3"><span><img src={upArrowIcon} alt="exchange_img" /> {dashboardDetails.changedRate}% </span>{dashboardDetails.month}</p>
                </div>
                
              </div>)
            }
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 pt-3">
        <div className="col">
          <div className="card shadow-sm mb-4 pb-4 set_min_height">
            {!summaryVariable ? <Spinner className="text-center pt-5" width={100} height={100} spinnerType="Circles" color="#2ad2be" visible={true} />
              :
              (<div className="row pt-3">
                <div className="col pl-xs-3 summary_section">
                  <div className="summary_section__header pl-3 pr-3">
                    <h6 className="mb-0">SUMMARY</h6>
                    <img className="d-none d-md-block" src={refreshIcon} alt="coin_Icon" width="50" />
                  </div>
                  <hr />
                  <div className="row pl-3 pr-3">
                    <div className="col-md-4 d-none d-md-block">
                      <img src={pieIcon} alt="coin_Icon" className="summary_icon" />
                    </div>
                    <div className="col-sm-12 col-md-8">
                      <div className="row">
                        <div className="col-6 pt-3">
                          <p className="mined_label mb-0">Mined</p>
                          <p className="mined_value">{summaryVariable.mined}%</p>
                        </div>
                        <div className="col-6 pt-3">
                          <p className="unmined_label mb-0">Unmined</p>
                          <p className="unmined_value">{summaryVariable.unMined}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm mb-4 adjust_padding set_min_height">
            {!dashboardDetails ? <Spinner className="text-center pt-5" width={100} height={100} spinnerType="Circles" color="#2ad2be" visible={true} />
              :
              (<div className="row pt-3">
                <div className="col-sm-12 pl-xs-3 w-100 allocated_section">
                  <div className="allocated_section_header pl-3 d-flex justify-content-between pr-4 align-items-center">
                  <h6>TOTAL WASTE COINS MINED</h6>
                    <div className="d-none d-md-block  text-center">
                      <img src={minedCoinIcon} alt="coin_Icon" />
                    </div>
                  </div>
                  <hr />
                  <div className="waste_coin_details pl-3">
                    <img src={wasteCoinSys} alt="coin_logo" width="25" />
                    <p className="mb-0 ml-2">{dashboardDetails.totalWasteCoinMined}</p>
                  </div>
                  <p className="allocated_month mt-2 pl-3">{dashboardDetails.month}</p>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>

      {roleTitle && (<div className="card shadow-sm">
        <div className="p-3 text-center leader_header">
          <p>Leader's Board</p>
        </div>
        <div className="leader_label mb-3 pl-sm-3 pl-lg-5">
          <div className="row">
            <div className="col pl-5">
              <p>Miner ID</p>
            </div>
            <div className="col">
              <p>WasteCoins mined</p>
            </div>
          </div>
          {dashboardDetails.leaderBoard && dashboardDetails.leaderBoard.map((result, index) => renderBoard(result, index))}
        </div>
      </div>)}
    </div>
  );
}

export default Dashboard;
