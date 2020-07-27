import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";


const Footer = () => (
  <div className="row d-none d-md-flex footer">
    <div className="col-sm-6 col-md-4 mb-3 footer__about">
      <h2>About</h2>
      <ul>
      {/* <Link to="/ourteam"><li>Our Team</li></Link> */}
      <Link to="/privatepolicy"><li>Privacy Policy</li></Link>
      </ul>
    </div>

    <div className="col-sm-6 mb-3 col-md-4 footer__contact">
      <h2>Contact</h2>
      <p>info@wastecoin.co</p>
      <Link to="/faq"><p>FAQ</p></Link>
      
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
        <p>Copyright @ WasteCoin Nigeria</p>
      </div>
    </div>
  </div>
);

export default Footer;
