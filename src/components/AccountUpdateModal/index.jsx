import React from "react";
import { useForm } from "react-hook-form";


function AccountUpdateModal(props) {
  const { handleSubmit, register, errors } = useForm();

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
            <form>
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
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountUpdateModal;
