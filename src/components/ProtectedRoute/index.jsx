import React, { createContext } from "react";
import jwt from "jwt-decode";
import { Route, Redirect } from "react-router-dom";
import Auth from "../Auth";
import AppLayout from "../Layout/AppLayout";

export const AuthContext = createContext();
let userRole = "";
try {
  userRole = jwt(localStorage.getItem("token"));
  
} catch (error) {
  userRole = "";
}

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <AuthContext.Provider value={{role: userRole.role}}>
    <Route {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
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
    </AuthContext.Provider>
  );
}

export default ProtectedRoute;
