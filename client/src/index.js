import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import UserProvider from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-z4wjuod7ik0d1mz1.us.auth0.com"
    clientId="5HYuBidMl26xTwEbrYEIAVxEnJsRGJfA"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>  
    </BrowserRouter>
  </Auth0Provider>
);
