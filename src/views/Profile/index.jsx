import React from "react";
import { useForm } from "react-hook-form";


import edit from "../../images/edit.svg";

import "./profile.css";
import BiodataModal from "../../components/BiodataModal";
import AccountUpdateModal from "../../components/AccountUpdateModal";
import SecurityUpdateModal from "../../components/SecurityUpdateModal";

function Profile() {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => data;

  const renderErrorText = (message) => {
    return (
      message && <span className="error"> {message.message}</span>
    );
  };

  return (
    <div className="profile container pt-4">
      <div className="card mb-5">
        <div className="profile-bio shadow-sm">
          <div className="bio-header">
            <h6>Bio Data</h6>
            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#biodataModal">
              <img src={edit} alt="edit" />
            </button>
          </div>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row p-3">
              <div className="col-sm-12 col-md-6">
                <div className="form-group">
                  <input type="text"
                    placeholder="First Name"
                    className="form-control-login"
                    name="firstname"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Email Address"
                    className="form-control-login"
                    name="email"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                      }
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Address"
                    className="form-control-login"
                    name="address"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="form-group">
                  <input type="text"
                    placeholder="Last Name"
                    className="form-control-login"
                    name="lastname"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Phone Number"
                    className="form-control-login"
                    name="phonenumber"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="State"
                    className="form-control-login"
                    name="state"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>

      <div className="user-setting">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="card shadow-sm mb-5">
              <div className="account-header">
                <h6>Account Details</h6>
                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#accountModal">
                  <img src={edit} alt="edit" />
                </button>
              </div>
              <hr />
              <form onSubmit={handleSubmit(onSubmit)} className="account_form">
                <div className="form-group">
                  <input type="text"
                    placeholder="Account Name"
                    className="form-control-login"
                    name="accountname"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Account Number"
                    className="form-control-login"
                    name="accountnumber"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Bank Name"
                    className="form-control-login"
                    name="bankname"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
              </form>
            </div>

          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card shadow-sm mb-5">
              <div className="security-header">
                <h6>Security</h6>
                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#securityModal">
                  <img src={edit} alt="edit" />
                </button>
              </div>
              <hr />
              <form onSubmit={handleSubmit(onSubmit)} className="account_form">
                <div className="form-group">
                  <input type="text"
                    placeholder="Old Password"
                    className="form-control-login"
                    name="oldpassword"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="New Password"
                    className="form-control-login"
                    name="firstname"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Re-Enter New Password"
                    className="form-control-login"
                    name="enternewpasword"
                    ref={register({
                      required: true,
                    })}
                  />
                  {renderErrorText(errors.email_phone)}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BiodataModal id="biodataModal" />
      <AccountUpdateModal id="accountModal" />
      <SecurityUpdateModal id="securityModal" />
    </div>
  );
}

export default Profile;

