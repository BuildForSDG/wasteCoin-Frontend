import React from "react";
import Loader from "react-loader-spinner";

function Spinner(props) {
  return (
    <Loader
      type={props.spinnerType || "Bars"}
      color={props.color || "#fff"}
      height={props.height || 30}
      width={props.width || 30}
      {...props}
    />
  );
}

export default Spinner;
