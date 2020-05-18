import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./views/Landing/index";
import AuthLayout from "./components/Layout/Auth";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import ResetpasswordPage from "./views/ResetPassword";
import AppLayout from "./components/Layout/AppLayout";
import Dashboard from "./views/Dashboard";
import "./index.css";

const routing = () => (
  <Router>
      <Switch>
        <Route exact path="/" render={(props) =>
          <AuthLayout>
            <App {...props} />
          </AuthLayout>
        } />
        
        <Route path="/login" render={(props) =>
          <AuthLayout>
            <SignIn {...props} />
          </AuthLayout>
        } />

        <Route path="/registration" render={(props) =>
          <AuthLayout>
            <SignUp {...props} />
          </AuthLayout>
        } />

        <Route path="/resetpassword" render={(props) =>
          <AuthLayout>
            <ResetpasswordPage {...props} />
          </AuthLayout>
        } />

        <Route path="/dashboard" render={(props) =>
          <AppLayout>
            <Dashboard {...props} />
          </AppLayout>
        } />
      </Switch>
  </Router>
);

export default routing;
