import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";

import wasteCoinSys from "../../images/waste_coin_sys.svg";
import "./redeemCoinModal.css";
import { redeemCoin } from "../../redux/reducers/wallet";

function RedeemCoinModal(props) {
  const dispatch = useDispatch();
  const { handleSubmit, register, setValue, errors } = useForm();

  const onSubmit = (data) => {
    const coinDetail = {
      amount: data.amount
    };
    dispatch(redeemCoin(coinDetail, props.history));
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
            <h5 className="modal-title" id="exampleModalLabel">Redeem Coins</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    onChange={(value) => setValue("cashequivalent", `${props.exchangeRate * value.target.value}`)}
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
                    readOnly
                    name="cashequivalent"
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
                  ref={register}
                />
                {renderErrorText(errors.incentive)}
              </div>
              <div className="modal-footer redeem_modal_footer">
                <button type="submit" className="btn btn-primary">Redeem Coin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RedeemCoinModal;
