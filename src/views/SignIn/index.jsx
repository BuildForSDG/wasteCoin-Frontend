import React from "react";
import { Link } from "react-router-dom";

import wasteLogo from "../../images/waste_coin_logo.svg";
import backButton from "../../images/Chevron.svg";
import "./signin.css";

function SignIn() {
    return (
        <div className="login-card">
            {/* <p className="d-none d-sm-block signin__title_bar text-center">Sign into your account</p> */}
            <div className="reg-header text-center"> <Link to="/"><img src={backButton} className="back-button mobile-logo float-left" alt="logo" /></Link>Sign into your account</div>
            <div className="mobile-logo-div mb-5"><img src={wasteLogo} className="logo mobile-logo" alt="logo" /></div>

            <form className="form-control reg-form btn_width">
                <div className="form-group">
                    <input type="text" placeholder="Phone Number" className="form-control-login" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" className="form-control-login mt-3" />
                </div>
                <Link to="/dashboard"><button className="btn btn-block btn-primary mt-5 login_btn">Login</button></Link>
                <div className="d-flex justify-content-between mt-3 sign_in__info">
                    <Link to="/registration">Create Account</Link>
                    <Link to="/resetpassword">Forget passowrd?</Link>
                </div>
            </form>
        </div>
    );
}

export default SignIn;

