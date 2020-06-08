import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import wasteLogo from "../../images/waste_coin_logo.svg";
import backButton from "../../images/Chevron.svg";
import { sendResetCode } from "../../redux/reducers/verify";
import "./reset.css";

function ResetPasswordPage(props) {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(sendResetCode(data, props.history));
  };

  const renderErrorText = (message) => {
    return (
      message && <span className="error"> {message.message}</span>
    );
  };

  return (
    <div className="login-card">
      <div className="reg-header text-center"> <Link to="/"><img src={backButton} className="back-button mobile-logo float-left" alt="logo" /></Link>Send Reset Password Code</div>
      <div className="mobile-logo-div mb-5"><img src={wasteLogo} className="logo mobile-logo" alt="logo" /></div>

      <form className="form-control reg-form btn_width" onSubmit={handleSubmit(onSubmit)}>
        <div className="verify-header">Enter registered Phone Number here</div>
        <div className="form-group">
          <input
            type="phone"
            placeholder="Enter your phone number here"
            className="form-control-login"
            name="phone_number"
            ref={register({
              required: true,
              pattern: {
                value: /((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/i,
                message: "invalid phone number"
              },
            })}
          />
          {renderErrorText(errors.phone_number)}
        </div>
        <button className="btn btn-block btn-primary mt-5 login_btn">Send Reset Code</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;

