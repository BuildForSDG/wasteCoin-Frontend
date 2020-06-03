import React from "react";
import { useForm } from "react-hook-form";


function BiodataModal(props) {
  const { handleSubmit, register, errors } = useForm();
  const {userDetails} = props;

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
            <h5 className="modal-title" id="exampleModalLabel">Update Bio Data</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <input type="text"
                  placeholder="First Name"
                  className="form-control-login"
                  defaultValue={(userDetails && userDetails.first_name) || ""}
                  readOnly
                  name="firstname"
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.first_name)}
              </div>
              <div className="form-group">
                <input type="text"
                  placeholder="Last Name"
                  className="form-control-login"
                  defaultValue={(userDetails && userDetails.last_name) || ""}
                  name="lastname"
                  readOnly
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.last_name)}
              </div>
              <div className="form-group">
                <input type="text"
                  placeholder="Email Address"
                  className="form-control-login"
                  defaultValue={(userDetails && userDetails.email) || ""}
                  name="email"
                  readOnly
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
                  defaultValue={(userDetails && userDetails.address) || ""}
                  name="address"
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.address)}
              </div>
              <div className="form-group">
                <input type="text"
                  placeholder="Phone Number"
                  className="form-control-login"
                  defaultValue={(userDetails && userDetails.phone_number) || ""}
                  name="phonenumber"
                  readOnly
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.phone_number)}
              </div>
              <div className="form-group">
                <input type="text"
                  placeholder="State"
                  className="form-control-login"
                  defaultValue={(userDetails && userDetails.state) || ""}
                  name="state"
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.state)}
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

export default BiodataModal;
