import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import wasteLogo from "../../images/waste_coin_logo.svg";
import backButton from "../../images/Chevron.svg";
import "./verify.css";
import { verifyUser } from "../../redux/reducers/verify";
import Spinner from "../../components/Loader";

function VerifyCode(props) {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const [isLoadingSpinner, setLoader] = useState(false);
  const isLoadingState = useSelector((state) => state.verify.isLoading);


  useEffect(() => {
    setLoader(isLoadingState);
  }, [isLoadingState]);

  const onSubmit = (data) => {
    dispatch(verifyUser(data, props.history));
  };

  const renderErrorText = (message) => {
    return (
      message && <span className="error"> {message.message}</span>
    );
  };

  return (
    <div className="login-card">
      <div className="reg-header text-center"> <Link to="/"><img src={backButton} className="back-button mobile-logo float-left" alt="logo" /></Link>Verify Account</div>
      <div className="mobile-logo-div mb-5"><img src={wasteLogo} className="logo mobile-logo" alt="logo" /></div>

      <form className="form-control reg-form btn_width" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <p className="text-center">Enter Verification Code Here</p>
          <input type="text"
            className="form-control-login"
            name="otp"
            ref={register({
              required: true,
            })}
          />
          {renderErrorText(errors.otp)}
        </div>
        <button className="mt-3 verify_btn">
          <Spinner visible={isLoadingSpinner} /> Verify Code
        </button>
        <Link to="/resend-otp" ><p className="text-center resend-text">Resend Code</p></Link>
      </form>
      <ToastContainer />
    </div>
  );
}

export default VerifyCode;

