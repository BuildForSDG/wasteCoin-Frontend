import React from "react";
import wasteLogo from "../../images/waste_coin_logo.svg";
import backButton from "../../images/Chevron.svg";
import { Link } from "react-router-dom";

function RegistrationPage(props) {
  return (
    <div className="login-card">
      <div className="reg-header text-center"> <Link to="/"><img src={backButton} className="back-button mobile-logo float-left" alt="logo" /></Link>Register</div>
      <div className="mobile-logo-div"><img src={wasteLogo} className="logo mobile-logo" alt="logo" /></div>
      <form className="form-control reg-form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="firstName"
                placeholder="First Name"
              />
            </div>

            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="lastName"
                placeholder="Last Name"
              />
            </div>

            <div className="form-group text-left">
              <input type="phone"
                className="form-control-login"
                id="phone"
                placeholder="Phone Number"
              />
            </div>

            <div className="form-group text-left">
              <input type="email"
                className="form-control-login"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group text-left">
              <input type="password"
                className="form-control-login"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="col-md-6 next-mobile">
            <div className="form-group text-left">
              <input type="password"
                className="form-control-login"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>

            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="address"
                placeholder="Street Address"
              />
            </div>

            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="lga"
                placeholder="L.G.A"
              />
            </div>

            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="sstate"
                placeholder="State"
              />
            </div>

            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="country"
                placeholder="Country"
              />
            </div>
          </div>

        </div>
        <div className="col-md-12 submit-reg-div">
          <Link to="/verification"> <button type="submit" className="reg-submit" >Create Account</button></Link>
          <Link to="/login"><p>Have an account already? Sign in </p></Link>
        </div>
      </form>
    </div>
  );
}
export default RegistrationPage;
