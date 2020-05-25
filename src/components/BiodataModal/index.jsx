import React from "react";
import { useForm } from "react-hook-form";


function BiodataModal(props) {
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
