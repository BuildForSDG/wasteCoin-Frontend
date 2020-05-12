import React from "react";
import Loader from "react-loader-spinner";


function Spinner(props) {
  return (
    <Loader
      type="Bars"
      color="#fff"
      height={30}
      width={30}
      {...props}
    />
  );
}

export default Spinner;
