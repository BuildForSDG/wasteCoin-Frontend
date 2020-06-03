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
import Profile from "./views/Profile";
import OurTeam from "./views/OurTeam";
import Faq from "./views/FAQ";
import PrivatePolicy from "./views/PrivatePolicy";
import Wallet from "./views/Wallet";
import ProtectedRoute from "./components/ProtectedRoute";

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

        <Route path="/ourteam" render={(props) =>
          <AuthLayout>
            <OurTeam {...props} />
          </AuthLayout>
        } />

        <Route path="/faq" render={(props) =>
          <AuthLayout>
            <Faq {...props} />
          </AuthLayout>
        } />

        <Route path="/privatepolicy" render={(props) =>
          <AuthLayout>
            <PrivatePolicy {...props} />
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
        
        <ProtectedRoute path="/dashboard" page="Dashboard" component={Dashboard} />
        <ProtectedRoute path="/profile" page="Profile" component={Profile} />
        <ProtectedRoute path="/wallet" page="Wallet" component={Wallet} />
        {/* <ProtectedRoute path="/notification" page="Notification" component={Dashboard} /> */}
        <Route path="/notification" render={(props) =>
          <AppLayout headerTitle="Notification">
            <div>Notification</div>
          </AppLayout>
        } />
      </Switch>
  </Router>
);

export default routing;
