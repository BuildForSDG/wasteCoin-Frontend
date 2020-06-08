import React from "react";
import wasteLogo from "../../images/waste_coin_logo.svg";
import "./userHeader.css";
import { Link } from "react-router-dom";


function UserHeader(props) {
    return(
        <div>
            <nav className="navbar navbar-expand-lg appheader">
            <Link to ="/dashboard" className="navbar-brand"><img src={wasteLogo} className="logo" alt="logo" /></Link> 
            <h6>{props.headerTitle}</h6> 
            </nav>
            <div className="dashboard-header text-center">{props.headerTitle}</div>
        </div>
    );
}

export default UserHeader;
