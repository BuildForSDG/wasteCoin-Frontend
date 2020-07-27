import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import wasteLogo from "../../images/waste_coin_logo1.png";
import backButton from "../../images/Chevron.svg";
import { Link } from "react-router-dom";
import "./signUp.css";
import { addNewUser } from "../../redux/reducers/signUp";
import Spinner from "../../components/Loader";

function RegistrationPage(props) {
  const dispatch = useDispatch();
  const [isLoadingSpinner, setLoader] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();

  const isLoadingState = useSelector((state) => state.newUser.isLoading);

  useEffect(() => {
    setLoader(isLoadingState);
  }, [isLoadingState]);

  const onSubmit = (data) => {
    const newUserDetails = {
      firstname: data.firstname,
      lastname: data.lastname,
      phonenumber: data.phonenumber,
      email: data.email,
      password: data.password,
      address: data.address,
      lga: data.lga,
      state: data.state,
      country: data.country,
      gender: data.gender,
    };

    dispatch(addNewUser(newUserDetails, props.history));
  };

  const renderErrorText = (message) => {
    return (
      message && <span className="error"> {message.message}</span>
    );
  };

  return (
    <div className="login-card">
      <div className="reg-header text-center"> <Link to="/"><img src={backButton} className="back-button  float-left" alt="logo" /></Link>Register</div>
      <div className="mobile-logo-div"><img src={wasteLogo} className="logo " alt="logo" /></div>
      <form className="form-control reg-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="firstName"
                name="firstname"
                placeholder="First Name"
                ref={register({
                  required: true,
                  validate: (value) => value.length > 2 || "Please you must enter a name greater than  2 letters!"
                })}
              />
              {renderErrorText(errors.firstname)}

            </div>

            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="lastName"
                placeholder="Last Name"
                name="lastname"
                ref={register({
                  required: true,
                  validate: (value) => value.length > 2 || "Please you must enter a name more than  2 letters!"
                })}
              />
              {renderErrorText(errors.lastname)}
            </div>

            <div className="form-group text-left">
              <input type="phone"
                className="form-control-login"
                id="phone"
                placeholder="Phone Number (e.g. 070332211234)"
                name="phonenumber"
                ref={register({
                  required: true,
                  pattern: {
                    value: /((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/i,
                    message: "invalid phone number"
                  },
                })}
              />
              {renderErrorText(errors.phonenumber)}
            </div>

            <div className="form-group text-left">
              <select type="phone"
                className="form-control-login"
                id="gender"
                placeholder="Gender"
                name="gender"
                ref={register({
                  required: true,
                  validate: (value) => value !== "Gender" || "Please you must choose either male or female!"

                })}
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              {renderErrorText(errors.gender)}
            </div>

            <div className="form-group text-left">
              <input type="email"
                className="form-control-login"
                id="email"
                name="email"
                placeholder="Email"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                  }
                })}
              />
              {renderErrorText(errors.email)}
            </div>

            <div className="form-group text-left">
              <input type="password"
                className="form-control-login"
                id="password"
                placeholder="Password"
                name="password"
                ref={register({
                  required: true,
                  validate: (value) => value.length > 5 || "Please you must enter more than 6 letter password!"
                })}
              />
              {renderErrorText(errors.password)}
            </div>
          </div>

          <div className="col-md-6 next-mobile">
            <div className="form-group text-left">
              <input type="password"
                className="form-control-login"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                ref={register({
                  required: true,
                  validate: (value) => value === getValues("password") || "Please your password and confirm password must be equal!"
                })}
              />
              {renderErrorText(errors.confirmPassword)}
            </div>

            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="address"
                placeholder="Street Address"
                name="address"
                ref={register({
                  required: true,
                  validate: (value) => value.length > 3 || "Please provide  a valid street address!"
                })}
              />
              {renderErrorText(errors.address)}
            </div>

            <div className="form-group text-left">
              <input type="text"
                className="form-control-login"
                id="lga"
                placeholder="L.G.A"
                name="lga"
                ref={register({
                  required: true,
                  validate: (value) => value.length > 2 || "Please provide  a valid LGA!"
                })}
              />
              {renderErrorText(errors.lga)}
            </div>

            <div className="form-group text-left">
              <select
                className="form-control-login"
                id="state"
                placeholder="State"
                name="state"
                defaultValue="Lagos"
                ref={register({
                  required: true,
                  validate: (value) => value.length > 2 || "Please provide  a valid State!"
                })}
              >
                <option>Lagos</option>
              </select>
              {renderErrorText(errors.state)}
            </div>

            <div className="form-group text-left">
            <select
                className="form-control-login"
                id="country"
                placeholder="Country"
                name="country"
                defaultValue="Nigeria"
                ref={register({
                  required: true,
                  validate: (value) => value.length > 2 || "Please provide  a valid Country!"
                })}
              >
                <option>Nigeria</option>
              </select>
              {renderErrorText(errors.country)}
            </div>
          </div>

        </div>
        <div className="col-md-12 submit-reg-div">
          <button type="submit" className="reg-submit" >
            <Spinner visible={isLoadingSpinner} />
            Create Account
            </button>
          <Link to="/login"><p>Have an account already? Sign in </p></Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
export default RegistrationPage;
