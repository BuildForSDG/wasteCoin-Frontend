import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./App.css";
import wasteCoinWallet from "../../images/waste_coin_wallet.svg";
import wastePoint from "../../images/waste_point.svg";
import wasteLogo from "../../images/waste_coin_logo1.png";
import goingGreen from "../../images/goinggreen.svg";
import facebook from "../../images/facebook.svg";
import andela from "../../images/andela.svg";
import signup from "../../images/signup.svg";
import collect from "../../images/collect.svg";
import deliver from "../../images/deliver.svg";
import paid from "../../images/paid.svg";
import signin from "../../images/signin.svg";
import getRewarded from "../../images/get_rewarded.svg";
import imageTop from "../../images/top_image_landing.svg";
import whyReward from "../../images/why01.svg";
import whyFuture from "../../images/why02.svg";
import forwardArrow from "../../images/arrow_forward.svg";
import googleLogo from "../../images/googlestore.svg";
import { contactUs } from "../../redux/reducers/verify";
import Spinner from "../../components/Loader";

function Landing() {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, setValue } = useForm();

  const onSubmit = (data) => {
    dispatch(contactUs(data)).then(() => {
      setValue("full_name", "");
      setValue("email", "");
      setValue("phone_number", "");
      setValue("message", "");
    });
  };

  const renderErrorText = (message) => {
    return (
      message && <span className="error"> {message.message}</span>
    );
  };

  const [isLoadingSpinner, setLoader] = useState(false);
  const isLoadingState = useSelector((state) => state.verify.isLoading);


  useEffect(() => {
    setLoader(isLoadingState);
  }, [isLoadingState]);

  return (
    <div className="landing_page">
      <section className="row section_styling">
        <div className="col-xs-12 col-xl-5 landing_page__create_account">
          <div className="mobile-logo-div mb-5"><img src={wasteLogo} className="mobile-logo" alt="logo" /></div>
          <div className="desktop">
            <h1>Join the Waste Revolution</h1>
            <h3>At Wastecoin, we believe proper waste <br />
            collection, disposal is possible and <br />
              <span>EVERYONE'S RESPONSIBILITY</span>
            </h3>
          </div>
          <div className="mobile">
            <h1>Hey there!</h1>
            <h3>Get rewards for disposing waste <br />Properly</h3>
            <br /><br /><p>Join WasteCoin, its Free</p>
          </div>
          <Link to="/registration" className="btn btn-block d-none d-sm-block landing_page__create_account__btn">Create Account</Link>
        </div>
        <div className="d-none col-xlg-7 d-xl-block landing_page__waste">
          <img src={imageTop} alt="image_top_img" />
        </div>
        <div className="d-block d-sm-none landing_page__create_account__mobile">
          <Link to="/login"><button className="btn btn-primary">Sign in <span><img src={forwardArrow} alt="arrow_forward" /></span></button></Link>
          <p><Link to="/registration">Create an account</Link></p>
          <br></br>
          <a className="nav-link text-center" href="https://play.google.com/store/apps/details?id=com.buildforsdg.wastecoin&hl=en"><img src={googleLogo} alt="logo" /> <span className="sr-only">(current)</span></a>
        </div>

      </section>

      <section className="row d-none d-sm-flex landing_page__get_rewarded">
        <div className="row get_rewarded">
          <div className="d-none col-xlg-7 d-xl-block images-left left_side">
            <img src={getRewarded} alt="get_rewarded_img" />
          </div>
          <div className="d-none col-xlg-5 d-xl-block words right_side_up">
            <h1>Get Rewarded for it</h1>
            <h3> We also believe Everyone should be <span>REWARDED</span><br />
              for such good waste disposal habit.</h3>
          </div>
        </div>
      </section>
      <section className="row d-none d-sm-flex landing_page__get_rewarded">
        <div className="row get_rewarded">
          <div className="d-none col-xlg-5 d-xl-block words right_side">
            <h1>Why?</h1>
            <h3> It is <span>NOT</span> about the <span>REWARD</span><br />
              It is about the <span>APPRECIATION</span></h3>
          </div>
          <div className="d-none col-xlg-7 d-xl-block images_right left_side">
            <img src={whyReward} alt="why01_img" />
          </div>
        </div>
      </section>
      <section className="row d-none d-sm-flex landing_page__get_rewarded">
        <div className="row get_rewarded">
          <div className="d-none col-xlg-5 d-xl-block words left_side">
            <img src={whyFuture} alt="why02_img" />
          </div>
          <div className="d-none col-xlg-7 d-xl-block words right_side_special">
            <h3> It is <span>NOT</span> about <span>NOW</span><br />
                It is  about the <span>FUTURE</span><br />
                  It is about preserving the <span>ECOSYSTEM</span></h3>
          </div>
        </div>
      </section>
      <section className="row section_styling_how d-none d-sm-flex" id="how_it_works">
        <div className="how"><h1 className="h1">How it works?</h1></div>
        <div className="cont_how">
          <div className="row signup">
            <div className="d-none col-xlg-5 d-xl-block word_left">
              <h1 className="h1">Sign up</h1>
              <h3 className="h3"> <span className="span">CREATE</span> a Wastecoin account with ease<br />
                <span className="span">ENSURE</span> you provide accurate and correct data <br />to avoid future payment issues</h3>
            </div>
            <div className="d-none col-xlg-7 d-xl-block image_right">
              <img src={signup} alt="signup_img" />
            </div>
          </div>
          <div className="row signin">
            <div className="d-none col-xlg-7 d-xl-block image_right">
              <img src={signin} alt="signin_img" />
            </div>
            <div className="d-none col-xlg-5 d-xl-block word_right">
              <h1 className="h1">Sign in</h1>
              <h3 className="h3"> Sign in with your <span className="span">PHONE NUMBER</span> and<br />
                password details</h3>
            </div>
          </div>
          <div className="row collect_waste">
            <div className="d-none col-xlg-5 d-xl-block word_left">
              <h1 className="h1">Collect Waste</h1>
              <h3 className="h3">Consciously mine waste (collect and gather)<br />your
                <span className="span"> PET bottles and cartons</span> used in your home,
                <br />at work or where ever you are,
                in your spare time</h3>
            </div>
            <div className="d-none col-xlg-7 d-xl-block image_right">
              <img src={collect} alt="collect_img" />
            </div>
          </div>
          <div className="row deliver">
            <div className="d-none col-xlg-7 d-xl-block image_right">
              <img src={deliver} alt="deliver_img" />
            </div>
            <div className="d-none col-xlg-5 d-xl-block word_left">
              <h1 className="h1">Deliever to a Wastecoin Agent</h1>
              <h3 className="h3"> Our Agents are around you. Deliever to them<br />
                You can go to them or they can come to you</h3>
            </div>
          </div>
          <div className="row paid">
            <div className="d-none col-xlg-5 d-xl-block word_left">
              <h1 className="h1">Get paid in Wastecoin</h1>
              <h3 className="h3">Our agents weights the Waste you deliever and<br />
                pay you the equivalent amount in Wastecoin.
                <br />This is paid into your Wastecoin wallet</h3>
            </div>
            <div className="d-none col-xlg-7 d-xl-block image_right">
              <img src={paid} alt="paid_img" />
            </div>
          </div>
          <div className="row redeem">
            <div className="d-none col-xlg-7 d-xl-block image_right">
              <img src={wasteCoinWallet} alt="redeem_img" />
            </div>
            <div className="d-none col-xlg-5 d-xl-block word_left">
              <h1 className="h1">Accumulate/Redeem Wastecoins</h1>
              <h3 className="h3"> On getting paid, you can choose to <br />
                accumulate it and let your wastecoin grow significantly
                <br /> as you would keep your money in a bank.<br />
                OR
                <br /> Redeem the Wastecoins in exchange for rewards such as
                <br /> Cash, Data subscription, Recharge cards amongst other incentives</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="row d-none d-sm-flex contact d-none">
        <div className="how" id="contact_us">
          <h1 className="h1">Contact us</h1>
          <h3 className="h3">Tell us how we can be of assistance and we'll get in touch shortly </h3>
        </div>
        <form className="form-control reg-form contact_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="contact_form_container">
              <h3 className="h3">Full Name</h3>
              <div className="form-group text-left">
                <input type="text"
                  className="form-control-contact"
                  id="fullName"
                  name="full_name"
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.full_name)}

              </div>
            </div>
          </div>
          <div className="row left-padding">
            <div className="contact_form_container_half pull-left">
              <div >
                <h3 className="h3">Email</h3>
                <div className="form-group text-left">
                  <input type="email"
                    className="form-control-contact"
                    id="email"
                    name="email"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                      }
                    })}
                  />
                  {renderErrorText(errors.email)}

                </div>
              </div>

            </div>
            <div className="contact_form_container_half pull-right">
              <div >
                <h3 className="h3">Phone Number (Optional)</h3>
                <div className="form-group text-left">
                  <input type="number"
                    className="form-control-contact"
                    id="phoneNumber"
                    name="phone_number"
                    ref={register({
                      pattern: {
                        value: /((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/i,
                        message: "invalid phone number"
                      },
                    })}
                  />
                  {renderErrorText(errors.phone_number)}
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="contact_form_container">
              <h3 className="h3">Message</h3>
              <div className="form-group text-left">
                <textarea type="text"
                  className="form-control-contact-text"
                  id="message"
                  name="message"
                  ref={register({
                    required: true,
                  })}
                />
                {renderErrorText(errors.message)}
              </div>
            </div>
          </div>
          <div className="col-md-6 submit-contact-div">
            <button type="submit" className="contact-submit" >
            <span><Spinner visible={isLoadingSpinner} className="mr-2" /> Send Message </span>
            </button>
          </div>
        </form>
        <ToastContainer />
      </section>
      <section className="row d-none d-sm-flex partners d-none">
        <div className="how"><h1 className="h1">Our Partners</h1></div>
        <div className="row partner_column">
          <div className="col-md-3">
            <img src={facebook} alt="facebook_img" />
          </div>
          <div className="col-md-3">
            <img src={goingGreen} alt="goinggreen_img" />
          </div>
          <div className="col-md-3">
            <img src={andela} alt="andela_img" />
          </div>
          <div className="col-md-3">
            <img src={wastePoint} alt="wastepoint_img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
