import React from "react";

import "./footer.css";
import twitter from "../../images/twitter.svg";
import ph from "../../images/ph.svg";
import github from "../../images/github.svg";
import reddit from "../../images/reddit.svg";
import bitcointalk from "../../images/bitcointalk.svg";
import blockStack from "../../images/blockstack.svg";


const Footer = () => (
  <div className="row d-none d-md-flex footer">
    <div className="col-sm-6 col-md-4 mb-3 footer__about">
      <h2>About</h2>
      <ul>
        <li>Our Team</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div className="col-sm-6 mb-3 col-md-4 footer__contact">
      <h2>Contact</h2>
      <p>hello@wastecoinwallet.com</p>
      <p>FAQ</p>
      
    </div>

    <div className="col footer__news_letter">
      <h2>Newsetter</h2>
      <p>Please enter your e-mail if want to receive updates.</p>
      <div className="input-group mb-3">
        <input type="text" className="form-control" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">Subscribe</button>
        </div>
      </div>

      <div className="landing_page__copyright">
        <p>Copyright @ SDG Innovation Team-105</p>
      </div>
    </div>
  </div>
);

export default Footer;
