import React from "react";
import { useForm } from "react-hook-form";


function SecurityUpdateModal(props) {
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
            <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
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
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityUpdateModal;
