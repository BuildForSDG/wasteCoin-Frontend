import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

import { changeAccountDetails } from "../../redux/reducers/profile";

function AccountUpdateModal(props) {
  const {accountDetails} = props;
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(changeAccountDetails(data, props.history));
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
            <h5 className="modal-title" id="exampleModalLabel">Update Account Details</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input type="text"
                  placeholder="Account Name"
                  className="form-control-login"
                  defaultValue={(accountDetails && accountDetails.account_name) || ""}
                  name="account_name"
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.account_name)}
              </div>
              <div className="form-group">
                <input type="text"
                  placeholder="Account Number"
                  className="form-control-login"
                  name="account_number"
                  defaultValue={(accountDetails && accountDetails.account_number) || ""}
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.account_number)}
              </div>
              <div className="form-group">
                <input type="text"
                  placeholder="Bank Name"
                  className="form-control-login"
                  name="bank_name"
                  defaultValue={(accountDetails && accountDetails.bank_name) || ""}
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.bank_name)}
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

export default AccountUpdateModal;
