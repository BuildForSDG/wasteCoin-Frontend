/* eslint-disable camelcase */
import React from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { changePassword } from "../../redux/reducers/profile";

function SecurityUpdateModal(props) {
  const dispatch = useDispatch();

  const { handleSubmit, register, getValues, errors } = useForm();

  const onSubmit = (data) => {
    const passwordDetails = {
      old_password: data.oldpassword,
      new_password: data.newpassword
    };

    dispatch(changePassword(passwordDetails, props.history));
  };

  const renderErrorText = (message) => {
    return (
      message && <span className="error"> {message.message}</span>
    );
  };

  return (
    <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input type="text"
                  placeholder="Old Password"
                  className="form-control-login"
                  name="oldpassword"
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.oldpassword)}
              </div>
              <div className="form-group">
                <input type="text"
                  placeholder="New Password"
                  className="form-control-login"
                  name="newpassword"
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.newpassword)}
              </div>
              <div className="form-group">
                <input type="text"
                  placeholder="Re-Enter New Password"
                  className="form-control-login"
                  name="enternewpasword"
                  ref={register({
                    required: true,
                    pattern: (value) => getValues("newpassword") === value || "Please re-enter your password"
                  })}
                />
                {renderErrorText(errors.enternewpasword)}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SecurityUpdateModal;
