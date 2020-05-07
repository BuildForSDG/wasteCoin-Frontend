import React from "react";
import Header from "../Header/index";

import "./layout.css";
import Footer from "../Footer";

const AuthLayout = (props) => {
  return (
    <div className="container authlayout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
