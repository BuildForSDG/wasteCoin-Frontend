import React from "react";

import UserHeader from "../../components/UserHeader/index";
import UserSidebar from "../../components/UserSidebar/index";
import UserFooter from "../../components/UserFooter/index";
import "./dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-body">
            <UserHeader />
            <UserSidebar/>
            <div className="dashboard-inner">
                <h1>hi people of God</h1>
            </div>
            <UserFooter />
        </div>
    );
}

export default Dashboard;
