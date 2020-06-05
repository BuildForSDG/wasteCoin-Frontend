import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";

import "./profile.css";
import edit from "../../images/edit.svg";
import BiodataModal from "../../components/BiodataModal";
import AccountUpdateModal from "../../components/AccountUpdateModal";
import SecurityUpdateModal from "../../components/SecurityUpdateModal";
import { fetchProfile } from "../../redux/reducers/profile";


function Profile(props) {
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profile.userDetails);

  const userDetails = profileDetails && profileDetails.user_details;
  const accountDetails = profileDetails && profileDetails.account_information;

  useEffect(() => {
    dispatch(fetchProfile(props.history));
  }, [dispatch, props.history]);

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
          <form >
            <div className="row p-3">
              <div className="col-sm-12 col-md-6">
                <div className="form-group">
                  <input type="text"
                    placeholder="First Name"
                    className="form-control-login"
                    readOnly
                    defaultValue={(userDetails && userDetails.first_name )|| ""}
                    name="firstname"
                  />
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Email Address"
                    readOnly
                    className="form-control-login"
                    defaultValue={(userDetails && userDetails.email )|| ""}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Address"
                    readOnly
                    className="form-control-login"
                    defaultValue={(userDetails && userDetails.address )|| ""}
                    name="address"
                  />
                </div>

                <div className="form-group">
                  <input type="text"
                    placeholder="Address"
                    readOnly
                    className="form-control-login"
                    defaultValue={(userDetails && userDetails.LGA )|| ""}
                    name="address"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="form-group">
                  <input type="text"
                    placeholder="Last Name"
                    readOnly
                    className="form-control-login"
                    defaultValue={(userDetails && userDetails.last_name )|| ""}
                    name="lastname"
                  />
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Phone Number"
                    readOnly
                    className="form-control-login"
                    defaultValue={(userDetails && userDetails.phone_number )|| ""}
                    name="phonenumber"
                  />
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="State"
                    readOnly
                    className="form-control-login"
                    defaultValue={(userDetails && userDetails.state )|| ""}
                    name="state"
                  />
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="gender"
                    readOnly
                    className="form-control-login"
                    defaultValue={(userDetails && userDetails.gender )|| ""}
                    name="gender"
                  />
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
              <form className="account_form">
                <div className="form-group">
                  <input type="text"
                    placeholder="Account Name"
                    className="form-control-login"
                    readOnly
                    defaultValue={(accountDetails && accountDetails.account_name )|| ""}
                    name="accountname"
                  />
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Account Number"
                    className="form-control-login"
                    readOnly
                    defaultValue={(accountDetails && accountDetails.account_number )|| ""}
                    name="accountnumber"
                  />
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Bank Name"
                    className="form-control-login"
                    readOnly
                    defaultValue={(accountDetails && accountDetails.bank_name )|| ""}
                    name="bankname"
                  />
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
              <form className="account_form">
                <div className="form-group">
                  <input type="text"
                    placeholder="Old Password"
                    className="form-control-login"
                    readOnly
                    name="oldpassword"
                  />
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="New Password"
                    className="form-control-login"
                    readOnly
                    name="newpassword"
                  />
                </div>
                <div className="form-group">
                  <input type="text"
                    placeholder="Re-Enter New Password"
                    className="form-control-login"
                    readOnly
                    name="enternewpasword"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BiodataModal userDetails={userDetails} id="biodataModal" {...props} />
      <AccountUpdateModal accountDetails={accountDetails} id="accountModal" {...props} />
      <SecurityUpdateModal id="securityModal" {...props} />
    </div>
  );
}

export default Profile;

