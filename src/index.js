import React from "react";
import ReactDOM from "react-dom";
import "typeface-montserrat";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import configureStore from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./route";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

