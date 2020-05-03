import React from "react";
import { Link } from "react-router-dom";

import wasteLogo from "../../images/waste_coin_logo.svg";
import backButton from "../../images/Chevron.svg";
import "./reset.css";

function ResetPasswordPage() {
  return (
    <div className="login-card">
      {/* <p className="d-none d-sm-block signin__title_bar text-center">Sign into your account</p> */}
      <div className="reg-header text-center"> <Link to="/"><img src={backButton} className="back-button mobile-logo float-left" alt="logo" /></Link>Reset Password</div>
      <div className="mobile-logo-div mb-5"><img src={wasteLogo} className="logo mobile-logo" alt="logo" /></div>

      <form className="form-control reg-form btn_width">
        <div className="verify-header">Enter registered Email here</div>
        <div className="form-group">
          <input type="email" placeholder=" Email" className="form-control-login" />
        </div>
        <button className="btn btn-block btn-primary mt-5 login_btn">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;

