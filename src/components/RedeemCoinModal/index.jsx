import React from "react";
import { useForm } from "react-hook-form";

import wasteCoinSys from "../../images/waste_coin_sys.svg";
import "./redeemCoinModal.css";



function RedeemCoinModal(props) {
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
            <h5 className="modal-title" id="exampleModalLabel">Redeem Coins</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
              <div className="flex-adj">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                  <img src={wasteCoinSys} alt="coin_logo" width="25" />
                  </div>
                </div>
                <input type="text"
                  placeholder="Amount"
                  className="form-control-btn"
                  name="amount"
                  ref={register({
                    required: true,
                  })}
                />
                </div>
                {renderErrorText(errors.amount)}
              </div>
              <div className="form-group">
              <div className="flex-adj">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                  <span className="naira_sign">&#8358;</span>
                  </div>
                </div>
                <input type="text"
                  placeholder="Cash Equivalent"
                  className="form-control-login"
                  name="cashequivalent"
                  readOnly
                  ref={register({
                    required: true,
                  })}
                />
                </div>
                {renderErrorText(errors.cashequivalent)}
              </div>
              <div className="form-group">
                <input type="text"
                  placeholder="Incentive"
                  className="form-control-login"
                  name="incentive"
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.incentive)}
              </div>
            </form>
          </div>
          <div className="modal-footer redeem_modal_footer">
            <button type="button" className="btn btn-primary">Redeem Coin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedeemCoinModal;
