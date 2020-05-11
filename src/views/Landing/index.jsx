import React from "react";
import "./App.css";
import wasteCoinWallet from "../../images/waste_coin_wallet.svg";
import openSrc from "../../images/open_source.svg";
import workflow from "../../images/workflow.svg";
import bullet from "../../images/bullet.svg";
import wastePoint from "../../images/waste_point.svg";
import wasteLogo from "../../images/waste_coin_logo.svg";
import goingGreen from "../../images/goinggreen.svg";
import facebook from "../../images/facebook.svg";
import andela from "../../images/andela.svg";
import forwardArrow from "../../images/arrow_forward.svg";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing_page">
    <section className="row">
      <div className="col-xs-12 col-xl-5 landing_page__create_account">
        <div className="mobile-logo-div mb-5"><img src={wasteLogo} className="logo mobile-logo" alt="logo" /></div>
        <h1>Hey there!</h1>
        <h3>Get rewards for disposing waste <br /> Properly</h3>
        <Link to="/registration" className="btn btn-block d-none d-sm-block landing_page__create_account__btn">Create Account</Link>
      </div>
      <div className="d-none col-xlg-7 d-xl-block landing_page__waste">
        <img src={wasteCoinWallet} alt="waste_coin_wallet_img" />
      </div>
      
      <div className="d-block d-sm-none landing_page__create_account__mobile">
        <p>Join us, its Free</p>
        <Link to="/login"><button className="btn btn-primary">Sign in <span><img src={forwardArrow} alt="arrow_forward" /></span></button></Link>
        <p><Link to="/registration">Create an account</Link></p>
      </div>
      
    </section>

    <section className="row d-none d-sm-flex landing_page__info">
      <div className="col-lg-12 col-xl-6 landing_page__info__first_subsection">
        <div className="row landing_page__info__about">
          <h1>About</h1>
          <p> WasteCoin is light e-wallet powered by SDG Innovation
          Team-105. It is developed to reward proper and efficient
          disposal of non-biodegradable waste from the source to the recycler.
              A decentralized waste solution where you get an incentive for every waste mined.</p>
        </div>

        <div className="row landing_page__info__waste_coin_info" id="how_it_works">
          <div className="col-sm-12 col-md-8">
            <h1>How is WasteCoin generated</h1>
            <p>Generation and allocation of WasteCoin is monthly and
            mined on the forcasted amount of waste to be generated
            in a particular geograhical area of interest.
            Thus, WasteCoins available to be mined are limited
            and the earlier to start to mine (collect and dispose
            through the WasteCoin Process) the more coin you get and
            leverage on incentives ranging from cash, recharge cards,
              data subscription and others.</p>
          </div>
          <div className="d-none d-md-block col landing_page__img">

          <img src={openSrc} alt="open_src_img" />
          </div>
        </div>

        <div className="row landing_page__info__get_waste_coin_info">
          <h1>Why you should join this Waste Revolution</h1>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>More than fifty percent of non-biodegrabale
            waste such as PET bottles, cartons, nylons ends
                up in the ocean and other water bodies.</p>
          </div>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>Twenty percent ends up in our streets,
                gutters and hidden areas of our environment</p>
          </div>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>The rest are either successfully recovered
                and recylced or end up at the waste site </p>
          </div>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>Unfortunately, the accumulations of these
            items over the years in the water bodies are
            beginning to have negative ecological effect
                on the ecosystem. </p>
          </div>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>Our environments are dirty, poorly managed, unsafe and unsustainable on the long run</p>
          </div>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>Our world is on a collision course with disaster
            if we do not take active steps individually, collectively
                to change our habits of poor waste disposal and management.</p>
          </div>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>Your effort can go a very long way to save our cities,
                sustain them and the ecosystem at large.</p>
          </div>
          <div className="landing_page__reason__btn text-center">
            <a href="##" className="btn btn-block" >Get a WasteCoin Wallet Now!</a>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-xl-6 landing_page__info__second_subsection">
        <div className="row landing_page__info__how_it_works">
          <h1>How it works</h1>
          <img src={workflow} alt="workflow_img" />
        </div>

        <div className="row landing_page__info__keys_to_know">
          <h1>Key Facts you need to know</h1>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>About 4.2 billion plastic items are used every month in Nigeria </p>
          </div>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>Every minute 3000 plastic items are dumped improperly.</p>
          </div>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>At least 260 species of acquatic life is endangered by the influx of plastic into oceans and other water bodies</p>
          </div>
          <div className="landing_page__reason">
            <img src={bullet} alt="bullet_img" />
            <p>One plastic item produced has a desctructive span of about 1000 years.</p>
          </div>
        </div>

        <div className="row landing_page__info__partners">
          <h1>Our Partners</h1>
          <p>We are in partnership with reputable Recyling companies all over the 36 states of the Federation and the FCT. Some of our Partners include:</p>
          <div className="d-none d-sm-block partners_logo">
            <img src={wastePoint} alt="waste_point_img" />
            <img src={goingGreen} alt="going_green_img" />
          </div>

          <div className="d-none d-sm-block partners_logo">
            <img src={facebook} alt="face_book_img" />
            <img src={andela} alt="andela_img" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Landing;
