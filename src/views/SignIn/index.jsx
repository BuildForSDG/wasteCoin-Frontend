import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import wasteLogo from "../../images/waste_coin_logo1.png";
import backButton from "../../images/Chevron.svg";
import "./signin.css";
import { loginUser } from "../../redux/reducers/signin";
import Spinner from "../../components/Loader";

function SignIn(props) {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const [isLoadingSpinner, setLoader] = useState(false);
  const isLoadingState = useSelector((state) => state.loginUser.isLoading);


  useEffect(() => {
    setLoader(isLoadingState);
  },[isLoadingState]);

  const onSubmit = (data) => {
    dispatch(loginUser(data, props.history));
  };

  const renderErrorText = (message) => {
    return (
      message && <span className="error"> {message.message}</span>
    );
  };

  return (
    <div className="login-card">
      <div className="reg-header text-center"> <Link to="/"><img src={backButton} className="back-button float-left" alt="logo" /></Link>Sign into your account</div>
      <div className="mobile-logo-div mb-5"><img src={wasteLogo} className="logo" alt="logo" /></div>

      <form className="form-control reg-form btn_width" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input type="text"
            placeholder="Phone Number/email"
            className="form-control-login"
            name="email_phone"
            ref={register({
              required: true,
            })}
          />
          {renderErrorText(errors.email_phone)}
        </div>
        <div className="form-group">
          <input
          type="password"
          placeholder="Password"
          className="form-control-login mt-3"
          name="password"
          ref={register({
            required: true,
          })}
        />
        {renderErrorText(errors.password)}
        </div>
        <button className="mt-5 login_btn">
          <Spinner visible={isLoadingSpinner} /> Login
          </button>
        <div className="d-flex justify-content-between mt-3 sign_in__info">
          <Link to="/registration">Create Account</Link>
          <Link to="/send-reset-password-code">Forget passowrd?</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignIn;

