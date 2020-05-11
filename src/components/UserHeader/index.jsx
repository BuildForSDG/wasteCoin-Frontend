import React from "react";
import wasteLogo from "../../images/waste_coin_logo.svg";
import "./userHeader.css";
import { Link } from "react-router-dom";


function UserHeader() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg appheader">
            <Link to ="/" className="navbar-brand"><img src={wasteLogo} className="logo" alt="logo" /></Link>  
            </nav>
            <div className="dashboard-header text-center">Dashboard</div>
        </div>
    );
}

export default UserHeader;
