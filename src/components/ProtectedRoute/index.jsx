import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../Auth";
import AppLayout from "../Layout/AppLayout";


function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => {
        if (Auth.isAuthenticated() || localStorage.getItem("token")) {
          return (
            <AppLayout headerTitle={rest.page} {...props}>
              <Component {...props} />
            </AppLayout>
          );
        } else {
          return (<Redirect to={
            {
              pathname: "/login",
              state: {
                from: props.location
              }
            }
          } />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
