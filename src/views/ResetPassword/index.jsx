import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import wasteLogo from "../../images/waste_coin_logo1.png";
import backButton from "../../images/Chevron.svg";
import { resetPassword } from "../../redux/reducers/verify";
import "./reset.css";

function ResetPasswordPage(props) {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(resetPassword(data, props.history));
  };

  const renderErrorText = (message) => {
    return (
      message && <span className="error"> {message.message}</span>
    );
  };

  return (
    <div className="login-card">
      <div className="reg-header text-center"> <Link to="/"><img src={backButton} className="back-button  float-left" alt="logo" /></Link>Reset Password</div>
      <div className="mobile-logo-div mb-5"><img src={wasteLogo} className="logo " alt="logo" /></div>

      <form className="form-control reg-form btn_width" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your reset code here...."
            className="form-control-login"
            name="reset_code"
            ref={register({
              required: true,
            })}
          />
          {renderErrorText(errors.phone_number)}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter new password ****"
            className="form-control-login"
            name="new_password"
            ref={register({
              required: true,
            })}
          />
          {renderErrorText(errors.phone_number)}
        </div>
        <button className="btn btn-block btn-primary mt-5 login_btn">Reset</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;

