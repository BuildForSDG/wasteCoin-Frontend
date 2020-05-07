import React from "react";
import UserHeader from "../UserHeader/index";
import UserSidebar from "../UserSidebar/index";
import UserFooter from "../UserFooter/index";
import "./layout.css";


const AppLayout = () => {
    return (
        <div className="container-fluid container-mobile">
            <UserHeader />
            <UserSidebar/>
            <div className="main">
            </div>
            <UserFooter />
        </div>
    );
};

export default AppLayout;
