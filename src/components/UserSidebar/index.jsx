import React from "react";
import { useSelector } from "react-redux";

import home from "../../images/home.svg";
import profile from "../../images/profile.svg";
import wallet from "../../images/wallet.svg";
import notification from "../../images/notification.svg";
import logout from "../../images/logout.svg";
import profileMobile from "../../images/profile-white.svg";
import walletMobile from "../../images/wallet-white.svg";
import notificationMobile from "../../images/notification-white.svg";
import logoutMobile from "../../images/logout-white.svg";
import homeMobile from "../../images/home-white.svg";
import "./userSidebar.css";
import { Link } from "react-router-dom";
import Auth from "../Auth";


function UserSidebar(props) {
  const userDetails = useSelector((state) => state.profile.userDetails);

  return (
    <nav className="sidenav">
      <p className="welcome-text d-none d-lg-block">Welcome ! { (userDetails && userDetails.user_details && userDetails.user_details.first_name) ||  ""}</p>
      <ul className="navbar-nav mr-auto sidenav-ul">
        <li className={`nav-item sidenav-li ${props.headerTitle === "Dashboard" ? "side_memu_active" : ""}`}>
          <Link to="/dashboard" className="nav-link" href="#how_it_works"><img src={home} className="logo" alt="Home-logo" /><span className="sidenav-span">&nbsp;Home</span></Link>
        </li>
        <li className={`nav-item sidenav-li ${props.headerTitle === "Wallet" ? "side_memu_active" : ""}`}>
          <Link to="/wallet" className="nav-link"><img src={wallet} className="logo" alt="Wallet-logo" /><span className="sidenav-span">&nbsp;Wallet</span></Link>
        </li>
        <li className={`nav-item sidenav-li ${props.headerTitle === "Profile" ? "side_memu_active" : ""}`}>
          <Link to="/profile" className="nav-link"><img src={profile} className="logo" alt="Profile-logo" /> <span className="sidenav-span">Profile</span></Link>
        </li>
        <li className={`nav-item sidenav-li ${props.headerTitle === "Notification" ? "side_memu_active" : ""}`}>
          <Link to="/notification" className="nav-link"><img src={notification} className="logo" alt="Notification-logo" /> <span className="sidenav-span">Notification</span></Link>
        </li>
        <li className="nav-item sidenav-li">
          <Link to="/login" className="nav-link" onClick={() => {
            Auth.logout(() => {
              props.history.push("/login");
            });
          }}><img src={logout} className="logo" alt="Logout-logo" /><span className="sidenav-span">&nbsp;Logout</span></Link>
        </li>
      </ul>
      <div className="sidenav-ul-mobile">
        <div className="menu-box">
          <Link to="/dashboard">
            <img src={notificationMobile} className="logo" alt="Notification-logo" />
            <div className="sidenav-inner-div">Notification</div>
          </Link>
        </div>
        <div className="menu-box">
          <Link to="/dashboard">
            <img src={walletMobile} className="logo" alt="Wallet-logo" />
            <div className="sidenav-inner-div">Wallet</div>
          </Link>
        </div>
        <div className="menu-box">
          <Link to="/dashboard">
            <img src={homeMobile} className="logo" alt="Profile-logo" />
            <div className="sidenav-inner-div">Home</div>
          </Link>
        </div>
        <div className="menu-box">
          <Link to="/dashboard">
            <img src={profileMobile} className="logo" alt="Profile-logo" />
            <div className="sidenav-inner-div">Profile</div>
          </Link>
        </div>
        <div className="menu-box">
          <Link to="/dashboard">
            <img src={logoutMobile} className="logo" alt="Logout-logo" />
            <div className="sidenav-inner-div">Logout</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default UserSidebar;
