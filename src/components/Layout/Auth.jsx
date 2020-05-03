import React from "react";
import Header from "../Header/index";

import Footer from "../Footer";

const AuthLayout = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
