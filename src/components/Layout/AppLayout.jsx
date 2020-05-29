import React from "react";
import UserHeader from "../UserHeader/index";
import UserSidebar from "../UserSidebar/index";
import UserFooter from "../UserFooter/index";
import "./layout.css";


const AppLayout = (props) => {
    return (
        <div className="container-fluid container-mobile app_layout">
            <UserHeader headerTitle={props.headerTitle} />
            <div className="row">
                <div className="col-xs-0 col-lg-2 col-md-2">
                    <UserSidebar headerTitle={props.headerTitle} {...props} />
                </div>
                <div className="col-xs-12 col-lg-10">
                    <div className="main">
                        {props.children}
                    </div>

                </div>
            </div>
            <UserFooter />
        </div>
    );
};

export default AppLayout;
