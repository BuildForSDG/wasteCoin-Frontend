import React from "react";
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


function UserSidebar() {
  return (
    <nav className="sidenav">
      <ul className="navbar-nav mr-auto sidenav-ul">
        <li className="nav-item sidenav-li">
          <Link to="/dashboard" className="nav-link" href="#how_it_works"><img src={home} className="logo" alt="Home-logo" /><span className="sidenav-span">&nbsp;Home</span></Link>
        </li>
        <li className="nav-item sidenav-li">
          <Link to="/registration" className="nav-link"><img src={profile} className="logo" alt="Profile-logo" /> <span className="sidenav-span">Profile</span></Link>
        </li>
        <li className="nav-item sidenav-li">
          <Link to="/login" className="nav-link"><img src={wallet} className="logo" alt="Wallet-logo" /><span className="sidenav-span">&nbsp;Wallet</span></Link>
        </li>
        <li className="nav-item sidenav-li">
          <Link to="/registration" className="nav-link"><img src={notification} className="logo" alt="Notification-logo" /> <span className="sidenav-span">Notification</span></Link>
        </li>
        <li className="nav-item sidenav-li">
          <Link to="/" className="nav-link"><img src={logout} className="logo" alt="Logout-logo" /><span className="sidenav-span">&nbsp;Logout</span></Link>
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
